import { Auth } from "aws-amplify";
import * as TYPES from "./types";
const { ActionTypes } = TYPES;

/**
 *
 * @param signInBody  - { username: string, password: sting}
 * @param dispatch - React Dispatch
 */
const signIn = async (
  signInBody: TYPES.Entry,
  dispatch: React.Dispatch<TYPES.Action>
) => {
  const { username, password } = signInBody;
  // First step before sign in
  dispatch({
    type: ActionTypes.SignInRequest,
  });

  try {
    // Send request to sign in
    await Auth.signIn(username, password).then(() => {
      dispatch({
        type: ActionTypes.SignInSuccess,
        payload: signInBody,
      });
    });
  } catch (error) {
    // Handle error
    dispatch({
      type: ActionTypes.SignInFailed,
      payload: { ...signInBody, error: error.message },
    });
  }
};

/**
 *
 * @param signUpBody - { username: string, password: sting}
 * @param dispatch - React Dispatch
 */
const signUp = async (
  signUpBody: TYPES.Entry,
  dispatch: React.Dispatch<TYPES.Action>
) => {
  const { username, password } = signUpBody;
  // First step of sign up
  dispatch({
    type: ActionTypes.SignUpRequest,
  });

  try {
    // Send data to sign up
    await Auth.signUp({
      username: username,
      password: password,
      attributes: {
        email: username,
      },
    }).then(() => {
      dispatch({
        type: ActionTypes.SignUpSuccess,
        payload: signUpBody,
      });
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.SignUpFailed,
      payload: { ...signUpBody, error: error.message },
    });
  }
};

/**
 *
 * @param forgotBody - { username: string }
 * @param dispatch - React Dispatch
 */
const forgotPassword = async (
  forgotBody: TYPES.ForgotPWEntry,
  dispatch: React.Dispatch<TYPES.Action>
) => {
  dispatch({
    type: ActionTypes.ForgotPWRequest,
  });
  try {
    await Auth.forgotPassword(forgotBody.username).then(() => {
      dispatch({
        type: ActionTypes.ForgotPWSuccess,
        payload: forgotBody,
      });
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.ForgotPWFailed,
      payload: {
        ...forgotBody,
        error: error.message,
      },
    });
  }
};

/**
 *
 * @param resetPWBody -  {
  username: string;
  code: string;
  newPassword: string;
}
 * @param dispatch - React Dispatch
 */
const resetPassword = async (
  resetPWBody: TYPES.ResetPWEntry,
  dispatch: React.Dispatch<TYPES.Action>
) => {
  dispatch({
    type: ActionTypes.ResetPWRequest,
  });

  try {
    await Auth.forgotPasswordSubmit(
      resetPWBody.username,
      resetPWBody.code,
      resetPWBody.newPassword
    ).then(() => {
      dispatch({
        type: ActionTypes.ResetPWSuccess,
        payload: resetPWBody,
      });
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.ResetPWFailed,
      payload: { ...resetPWBody, error: error.message },
    });
  }
};

/**
 *
 * @param dispatch - React Dispatch
 */
const detectSignedIn = async (dispatch: React.Dispatch<TYPES.Action>) => {
  dispatch({
    type: ActionTypes.DetectSignedInRequest,
  });
  try {
    await Auth.currentAuthenticatedUser().then((user) => {
      return dispatch({
        type: ActionTypes.DetectSignedInSuccess,
        payload: { isSignedIn: true, username: user.username },
      });
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.DetectSignedInFailed,
      payload: { isSignedIn: false, username: "", error: error.message },
    });
  }
};

/**
 *
 * @param dispatch - React Dispatch
 */
const signOut = async (dispatch: React.Dispatch<TYPES.Action>) => {
  dispatch({
    type: ActionTypes.SignOutRequest,
  });
  try {
    await Auth.signOut().then(() => {
      dispatch({
        type: ActionTypes.SignOutSuccess,
      });
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.SignOutFailed,
      payload: { error: error.message },
    });
  }
};

export const authActions = {
  signIn,
  signUp,
  forgotPassword,
  resetPassword,
  detectSignedIn,
  signOut,
};
