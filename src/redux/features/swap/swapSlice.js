import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SWAP_STORAGE_KEY = 'swap_state';

const initialState = {
  swappedUsers: {}, // all swaped users
   acceptedUsers: {},   // accepted user
  declinedUsers: {}, // declined users
  isLoaded: false,
};

const swapSlice = createSlice({
  name: 'swap',
  initialState,
  reducers: {
    toggleSwap: (state, action) => {
      const userId = action.payload;
      // state.swappedUsers[userId] = !state.swappedUsers[userId];
      if (state.swappedUsers[userId]) {
        delete state.swappedUsers[userId];
      } else {
        state.swappedUsers[userId] = true;
      }
    },
    setSwappedUsers: (state, action) => {
      state.swappedUsers = action.payload;
      state.isLoaded = true;
    },
    acceptUser: (state, action) => {
      // const userId = action.payload;
      // state.acceptedUsers[userId] = true;
      // if (state.declinedUsers[userId]) {
      //   delete state.declinedUsers[userId];
      // }
      // state.isLoaded = true;
      const userId = action.payload;
      state.acceptedUsers[userId] = true;
      delete state.declinedUsers[userId];
      delete state.swappedUsers[userId];
      state.isLoaded = true;
    },
    declineUser: (state, action) => {
      // const userId = action.payload;
      // state.declinedUsers[userId] = true;
      // if (state.acceptedUsers[userId]) {
      //   delete state.acceptedUsers[userId];
      // }
      // state.isLoaded = true;
      const userId = action.payload;
      state.declinedUsers[userId] = true;
      delete state.acceptedUsers[userId];
      delete state.swappedUsers[userId];
      state.isLoaded = true;
    },
    setAcceptedUsers: (state, action) => {
      state.acceptedUsers = action.payload;
      state.isLoaded = true;
    },
    setDeclinedUsers: (state, action) => {
      state.declinedUsers = action.payload;
      state.isLoaded = true;
    },
    
  },
});

export const {
  toggleSwap,
  setSwappedUsers,
  acceptUser,
  declineUser,
  setAcceptedUsers,
  setDeclinedUsers,
  setIsLoaded,
} = swapSlice.actions;

export const loadSwapState = () => async dispatch => {
  try {
    const savedState = await AsyncStorage.getItem(SWAP_STORAGE_KEY);
    if (savedState) {
      const { swappedUsers, acceptedUsers, declinedUsers } = JSON.parse(savedState);
      dispatch(setSwappedUsers(swappedUsers || {}));
      dispatch(setAcceptedUsers(acceptedUsers || {}));
      dispatch(setDeclinedUsers(declinedUsers || {}));
    } else {
      dispatch(setSwappedUsers({}));
      dispatch(setAcceptedUsers({}));
      dispatch(setDeclinedUsers({}));
    }
  } catch (error) {
    console.error('Failed to load swap state:', error);
    dispatch(setSwappedUsers({}));
    dispatch(setAcceptedUsers({}));
    dispatch(setDeclinedUsers({}));
    dispatch(setIsLoaded(true));
  }
};

export const saveSwapState = (swappedUsers, acceptedUsers, declinedUsers) => async () => {
  try {
    const stateToSave = {
      swappedUsers,
      acceptedUsers,
      declinedUsers,
    };
    await AsyncStorage.setItem(SWAP_STORAGE_KEY, JSON.stringify(stateToSave));
  } catch (error) {
    console.error('Failed to save swap state:', error);
  }
};

export default swapSlice.reducer;
