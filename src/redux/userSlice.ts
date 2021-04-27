import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';

export interface UserState {
  uid: string;
  name: string;
  photoURL: string | null;
  idToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  error: string | null;
}

export const initialUserState: UserState = {
  uid: '',
  name: '',
  photoURL: '',
  idToken: null,
  refreshToken: null,
  isLoading: false,
  error: null,
};

// ==== Action creators ======
export const setIsLoading = (
  state: UserState,
  { payload }: PayloadAction<{ isLoading: boolean; status: string }>
) => {
  state.isLoading = payload.isLoading;
};

export const setError = (
  state: UserState,
  { payload }: PayloadAction<string>
) => {
  state.error = payload;
};

export const setUserState = (
  state: UserState,
  {
    payload,
  }: PayloadAction<{
    uid: string;
    name: string;
    photoURL: string;
    idToken: string;
    refreshToken: string;
  }>
) => {
  state.uid = payload.uid;
  state.name = payload.name;
  state.photoURL = payload.photoURL;
  state.idToken = payload.idToken;
  state.refreshToken = payload.refreshToken;
  state.isLoading = false;
  state.error = null;
};

export const revokeUserState = (state: UserState) => {
  state.uid = '';
  state.name = '';
  state.photoURL = '';
  state.idToken = null;
  state.refreshToken = null;
  state.isLoading = false;
  state.error = null;
};

// ======= Slice =================
export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setLoading: setIsLoading,
    loginSuccess: setUserState,
    loginFailure: setError,
    logoutSuccess: revokeUserState,
  },
});
export default userSlice.reducer;

// ======= Actions ================
export const {
  setLoading,
  loginSuccess,
  loginFailure,
  logoutSuccess,
} = userSlice.actions;

export const login = (
  uid: string,
  name: string,
  photoURL: string,
  idToken: string,
  refreshToken: string
): AppThunk => async (dispatch) => {
  dispatch(
    loginSuccess({
      uid,
      name,
      photoURL,
      idToken,
      refreshToken,
    })
  );
};

export const logout = (): AppThunk => async (dispatch) => {
  console.log('logged out');
  dispatch(logoutSuccess());
};
