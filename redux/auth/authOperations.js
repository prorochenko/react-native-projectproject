import { db, auth } from '../../firebase/config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';

const authSignUpUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    console.log(email, password, login);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log('user?', user);
      return user;
    } catch (error) {
      console.log('error:', error);
      console.log('error.message:', error.message);
    }
  };

const authSignInUser = () => async (dispatch, getState) => {};

const authSignOutUser = () => async (dispatch, getState) => {};

export { authSignInUser, authSignUpUser, authSignOutUser };
