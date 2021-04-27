import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ThunkAction } from 'redux-thunk';
import rootReducer, { RootState } from './rootReducer';

const persistConfig = {
  key: 'user',
  version: 1,
  storage: storage,
  whitelist: ['user'], // list of reducer's names that will be saved in persistence storage. Other reducers will be ignored.
  timeout: null!, // to prevent this error : "redux-persist: rehydarate for "user" called after timeout"
};

console.log('S', storage);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export { store, persistor };
