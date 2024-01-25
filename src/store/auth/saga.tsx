import axios, { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import {
  loginFailure,
  loginSuccess,
  signupSuccess,
  signupFailure,
} from "./actions";
import { LOGIN_REQUEST, SIGNUP_REQUEST } from "../actionTypes";
import { LoginCredentials, LoginRequest, SignupCredentials, SignupRequest } from "./types";

const login = async (payload: LoginCredentials) => {
  const data = await axios.post("https://localhost:44319/api/Auth/login", {...payload},
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  return data;
};

const signup = async ( payload: SignupCredentials) => {
  const data = await axios.post("https://localhost:44319/api/Auth/signup",{...payload},
  {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return data;
};


function* loginSaga(action: LoginRequest) {
  try {
    const {data}: AxiosResponse<any, any> = yield call(login, {
      EmailId: action.payload.values.EmailId,
      Password: action.payload.values.Password,
    });
    console.log(data)
    yield put(
      loginSuccess({
        token: data.data.token,
      })
    );
    action.payload.callback(data);
  } catch (e: any) {
    console.log(e.response.data)
    yield put(
      loginFailure({
        error: e.message,
      })
    );
  }
}

function* signupSaga(action: SignupRequest) {
  try {
    const response: { token: string } = yield call(signup, {      
      EmailId: action.payload.values.EmailId,
      Password: action.payload.values.Password,
      FirstName: action.payload.values.FirstName,
      LastName: action.payload.values.LastName
    });
    console.log(response)
    yield put(
      signupSuccess({
        token: response.token,
      })
    );
    action.payload.callback(response.token);
  } catch (e: any) {
    console.log(e)
    yield put(
      signupFailure({
        error: e.message,
      })
    );
  }
}

function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
  yield takeLatest(SIGNUP_REQUEST, signupSaga);
}


export default authSaga;