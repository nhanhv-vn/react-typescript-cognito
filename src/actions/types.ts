import { Book } from "./../models";

// All actions name will use in app
export enum ActionTypes {
  SignInRequest,
  SignInSuccess,
  SignInFailed,
  SignUpRequest,
  SignUpSuccess,
  SignUpFailed,
  ForgotPWRequest,
  ForgotPWSuccess,
  ForgotPWFailed,
  ResetPWRequest,
  ResetPWSuccess,
  ResetPWFailed,
  DetectSignedInRequest,
  DetectSignedInSuccess,
  DetectSignedInFailed,
  SignOutRequest,
  SignOutSuccess,
  SignOutFailed,
  FetchBooksRequest,
  FetchBooksSuccess,
  FetchBooksFailed,
}

export interface Entry {
  username: string;
  password: string;
}

export interface Error {
  error: string;
}

export interface ForgotPWEntry {
  username: string;
}

export interface ResetPWEntry {
  username: string;
  code: string;
  newPassword: string;
}

export interface DetectSignedInEntry {
  isSignedIn: boolean;
  username: string;
}

// Checking payload for all actions
export interface SignInRequestPayload {
  type: ActionTypes.SignInRequest;
}

export interface SignInSuccessPayload {
  type: ActionTypes.SignInSuccess;
  payload: Entry;
}

export interface SignInFailedPayload {
  type: ActionTypes.SignInFailed;
  payload: Entry & Error;
}

export interface SignUpRequestPayload {
  type: ActionTypes.SignUpRequest;
}

export interface SignUpSuccessPayload {
  type: ActionTypes.SignUpSuccess;
  payload: Entry;
}

export interface SignUpFailedPayload {
  type: ActionTypes.SignUpFailed;
  payload: Entry & Error;
}

export interface ForgotPWRequestPayload {
  type: ActionTypes.ForgotPWRequest;
}

export interface ForgotPWSuccessPayload {
  type: ActionTypes.ForgotPWSuccess;
  payload: ForgotPWEntry;
}

export interface ForgotPWFailedPayload {
  type: ActionTypes.ForgotPWFailed;
  payload: ForgotPWEntry & Error;
}

export interface ResetPWRequestPayload {
  type: ActionTypes.ResetPWRequest;
}

export interface ResetPWSuccessPayload {
  type: ActionTypes.ResetPWSuccess;
  payload: ResetPWEntry;
}

export interface ResetPWFailedPayload {
  type: ActionTypes.ResetPWFailed;
  payload: ResetPWEntry & Error;
}

export interface DetectSignedInRequestPayload {
  type: ActionTypes.DetectSignedInRequest;
}

export interface DetectSignedInSuccessPayload {
  type: ActionTypes.DetectSignedInSuccess;
  payload: DetectSignedInEntry;
}

export interface DetectSignedInFailedPayload {
  type: ActionTypes.DetectSignedInFailed;
  payload: DetectSignedInEntry & Error;
}

export interface SignOutRequestPayload {
  type: ActionTypes.SignOutRequest;
}

export interface SignOutSuccessPayload {
  type: ActionTypes.SignOutSuccess;
}
export interface SignOutFailedPayload {
  type: ActionTypes.SignOutFailed;
  payload: Error;
}

export interface FetchBooksRequestPayload {
  type: ActionTypes.FetchBooksRequest;
}

export interface FetchBooksSuccessPayload {
  type: ActionTypes.FetchBooksSuccess;
  payload: Book[];
}

export interface FetchBooksFailedPayload {
  type: ActionTypes.FetchBooksFailed;
  payload: Error;
}

export type Action =
  | SignInSuccessPayload
  | SignInFailedPayload
  | SignInRequestPayload
  | SignUpRequestPayload
  | SignUpSuccessPayload
  | SignUpFailedPayload
  | ForgotPWRequestPayload
  | ForgotPWSuccessPayload
  | ForgotPWFailedPayload
  | ResetPWRequestPayload
  | ResetPWSuccessPayload
  | ResetPWFailedPayload
  | DetectSignedInRequestPayload
  | DetectSignedInSuccessPayload
  | DetectSignedInFailedPayload
  | SignOutRequestPayload
  | SignOutSuccessPayload
  | SignOutFailedPayload
  | FetchBooksRequestPayload
  | FetchBooksSuccessPayload
  | FetchBooksFailedPayload;
