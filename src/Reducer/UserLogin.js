import {
    USER_LOGIN_ERROR,
    USER_LOGIN_SUCCESS,
  } from "../Action/type";
  
  const state = {
    signup: [],
    admin: {
      userName: "",
      password: ""
    },
    resMsg: "",
    loginResMsg: ""
  };
  function authReducer(mState = { ...state }, action) {
    switch (action.type) {
      case USER_LOGIN_SUCCESS:
        if (action.payload === null || action.payload === undefined) {
        } else {
          console.log(action.payload, "Reducer Sigup Data");
          mState.resMsg = "";
          mState.signup.push(action.payload);
        }
        return deepCopy(mState);
      case USER_LOGIN_ERROR:
        if (action.payload === null || action.payload === undefined) {
        } else {
          console.log(action.payload);
          mState.signup = [];
          mState.resMsg = action.payload;
        }
        return deepCopy(mState);
      default:
        return deepCopy(mState);
    }
  }
  
  const deepCopy = obj => {
    const newObj = JSON.parse(JSON.stringify(obj));
    return newObj;
  };
  export default authReducer;
  