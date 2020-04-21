import { Action, ActionTypes } from "./../actions";

interface SimpleState {
  loading: boolean;
  error: string;
  success: boolean;
}

const initSimpleState: SimpleState = {
  loading: false,
  error: "",
  success: false,
};

interface AuthState {
  username: string;
  loading: boolean;
  isSignedIn: boolean;
  signIn: SimpleState;
  signUp: SimpleState;
  forgotPW: SimpleState;
  resetPW: SimpleState;
  signOut: SimpleState;
}

export const authInitState: AuthState = {
  username: "",
  loading: false,
  isSignedIn: false,
  signIn: {
    ...initSimpleState,
  },
  signUp: {
    ...initSimpleState,
  },
  forgotPW: {
    ...initSimpleState,
  },
  resetPW: {
    ...initSimpleState,
  },
  signOut: {
    ...initSimpleState,
  },
};

export const AuthReducer = (
  state: AuthState = authInitState,
  action: Action
): AuthState => {
  switch (action.type) {
    case ActionTypes.SignInRequest:
      return {
        ...state,
        isSignedIn: false,
        signIn: {
          ...state.signIn,
          loading: true,
          error: "",
          success: false,
        },
      };

    case ActionTypes.SignInSuccess:
      return {
        ...state,
        username: action.payload.username,
        signIn: {
          ...state.signIn,
          loading: false,
          success: true,
        },
      };

    case ActionTypes.SignInFailed:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          loading: false,
          error: action.payload.error,
        },
      };

    case ActionTypes.SignUpRequest:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          loading: true,
          error: "",
          success: false,
        },
      };

    case ActionTypes.SignUpSuccess:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          loading: false,
          error: "",
          success: true,
        },
      };
    case ActionTypes.SignUpFailed:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          loading: false,
          error: action.payload.error,
        },
      };

    case ActionTypes.DetectSignedInRequest:
      return {
        ...state,
        loading: true,
        isSignedIn: false,
      };

    case ActionTypes.DetectSignedInSuccess:
      return {
        ...state,
        isSignedIn: action.payload.isSignedIn,
        username: action.payload.username,
        loading: false,
      };

    case ActionTypes.DetectSignedInFailed:
      return {
        ...state,
        isSignedIn: false,
        username: "",
        loading: false,
      };

    case ActionTypes.SignOutRequest:
      return {
        ...state,
        signOut: {
          ...state.signOut,
          loading: true,
          error: "",
        },
      };

    case ActionTypes.SignOutSuccess:
      return {
        ...authInitState,
      };

    case ActionTypes.SignOutFailed:
      return {
        ...state,
        signOut: {
          ...state.signOut,
          loading: false,
          error: action.payload.error,
        },
      };

    case ActionTypes.ForgotPWRequest:
      return {
        ...state,
        forgotPW: {
          ...state.forgotPW,
          loading: true,
          error: "",
          success: false,
        },
      };

    case ActionTypes.ForgotPWSuccess:
      return {
        ...state,
        forgotPW: {
          ...state.forgotPW,
          loading: false,
          error: "",
          success: true,
        },
      };
    case ActionTypes.ForgotPWFailed:
      return {
        ...state,
        forgotPW: {
          ...state.forgotPW,
          loading: true,
          error: action.payload.error,
        },
      };

    case ActionTypes.ResetPWRequest:
      return {
        ...state,
        resetPW: {
          ...state.resetPW,
          loading: true,
          success: false,
          error: "",
        },
      };

    case ActionTypes.ResetPWSuccess:
      return {
        ...state,
        resetPW: {
          ...state.resetPW,
          loading: false,
          success: true,
        },
      };

    case ActionTypes.ResetPWFailed:
      return {
        ...state,
        resetPW: {
          ...state.resetPW,
          loading: false,
          success: false,
          error: action.payload.error,
        },
      };

    default:
      return state;
  }
};
