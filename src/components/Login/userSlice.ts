import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  uid: string;
  email: string;
  photoURL: string | null;
  idToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  error: string | null;
  status: string;
}

export const initialUserState: UserState = {
  uid: '',
  email: '',
  photoURL: '',
  idToken: '',
  refreshToken: '',
  isLoading: false,
  error: null,
  status: 'onStart',
};

// ==== Action creators ======
export const setIsLoading = (
  state: UserState,
  { payload }: PayloadAction<{ isLoading: boolean; status: string }>
) => {
  state.isLoading = payload.isLoading;
  state.status = payload.status;
};

export const setError = (
  state: UserState,
  { payload }: PayloadAction<string>
) => {
  state.error = payload;
};

// ======= Slice =================
export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setLoading: setIsLoading,
    logoutFailure: setError,
  },
});
export default userSlice.reducer;

// ======= Actions ================
export const { setLoading, logoutFailure } = userSlice.actions;
