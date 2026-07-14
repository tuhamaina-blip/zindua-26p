import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { auth } from '../config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

const initialState = {
  user: null,
  loading: true,
  error: null,
};

export const initializeAuth = createAsyncThunk('auth/initializeAuth', async (_, { dispatch }) => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const userData = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          name: firebaseUser.displayName,
          role: firebaseUser.email?.endsWith('@zinduamarket.com') ? 'admin' : 'user',
        };
        dispatch(setUser(userData));
        resolve(userData);
      } else {
        dispatch(clearUser());
        resolve(null);
      }
      unsubscribe();
    });
  });
});

export const registerUser = createAsyncThunk('auth/registerUser', async ({ email, password, displayName }, { rejectWithValue }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName });
    return {
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      name: displayName,
      role: userCredential.user.email?.endsWith('@zinduamarket.com') ? 'admin' : 'user',
    };
  } catch (error) {
    return rejectWithValue(error.message || 'Registration failed');
  }
});

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return {
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      name: userCredential.user.displayName,
      role: userCredential.user.email?.endsWith('@zinduamarket.com') ? 'admin' : 'user',
    };
  } catch (error) {
    return rejectWithValue(error.message || 'Login failed');
  }
});

export const loginWithGoogleUser = createAsyncThunk('auth/loginWithGoogleUser', async (_, { rejectWithValue }) => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return {
      uid: result.user.uid,
      email: result.user.email,
      name: result.user.displayName,
      role: result.user.email?.endsWith('@zinduamarket.com') ? 'admin' : 'user',
    };
  } catch (error) {
    return rejectWithValue(error.message || 'Google login failed');
  }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { rejectWithValue }) => {
  try {
    await signOut(auth);
    return null;
  } catch (error) {
    return rejectWithValue(error.message || 'Logout failed');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.error = null;
      state.loading = false;
    },
    clearUser(state) {
      state.user = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(initializeAuth.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Registration failed';
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Login failed';
      })
      .addCase(loginWithGoogleUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithGoogleUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginWithGoogleUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Google login failed';
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Logout failed';
      });
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;