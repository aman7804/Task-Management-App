import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
  } from "../actionTypes";
  
  
  export interface AuthState {  //main state
    pending: boolean;
    token: string | null;
    error: string | null;
  }
  
  export interface LoginCredentials{
    EmailId: string,
    Password: string
  }

  export interface SignupCredentials{
    FirstName: string,
    LastName: string,
    EmailId: string,
    Password: string
  }

  //request-data/payload
  export interface LoginPayload {    
    values: LoginCredentials;
    callback: any;
  }
  export interface SignupPayload {
    values: SignupCredentials;
    callback: any;
  }

  //response-data/payload
  //type to send to user after getting login/signup-api response
  export interface LoginSuccessPayload {    //successfull
    token: string;
  }
  export interface LoginFailurePayload {    //failed 
    error: string;
  }
  export interface SignupSuccessPayload {   //successfull 
    token: string;
  }
  export interface SignupFailurePayload {   //failed
    error: string;
  }
  
  //action-creator types
  export interface LoginRequest {   //login-request-action-creator method
    type: typeof LOGIN_REQUEST;
    payload: LoginPayload;
  }
  export type LoginSuccess = {  //login-success-action-creator method
    type: typeof LOGIN_SUCCESS,
    payload: LoginSuccessPayload,
  };
  export type LoginFailure = {  //login-fail-action-creator method
    type: typeof LOGIN_FAILURE,
    payload: LoginFailurePayload,
  };

  export interface SignupRequest {
    type: typeof SIGNUP_REQUEST;
    payload: SignupPayload;
  };
  export type SignupSuccess = {
    type: typeof SIGNUP_SUCCESS,
    payload: SignupSuccessPayload,
  };
  export type SignupFailure = {
    type: typeof SIGNUP_FAILURE,
    payload: SignupFailurePayload,
  };
  
  export type AuthActions = //combine/union of types/interfaces 
    | LoginRequest
    | LoginSuccess
    | LoginFailure
    | SignupFailure
    | SignupSuccess
    | SignupRequest;