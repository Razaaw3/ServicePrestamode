// import { BaseURL } from "../baseURL";
import * as URL from '../../config/BasicUrl/index';
import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR
} from "../type";
import axios from "axios";
// import axios from "axios";
export const UserLoginAction = (Data) => dispatch => {
  const Em=Data.userName;
  const Pass=Data.password;
  console.log(Data.userName,Data.password,"Login Action")
  fetch(
    'http://bytib-test.shadinaif.com:8080/apis/v1/authorize/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: Em,
        password: Pass,
      }),
    },
  )
  .then(response => response.json())
.then(responseJson => {
  console.log('responseJson',responseJson)
})
  // axios
  //   .post("http://bytib-test.shadinaif.com:8080/apis/v1/authorize/",{
  //     method: 'POST',
  //     headers: {
  //       Email: 'umarhayat9855@gmail.com',
  //       Password: '123123',
  //     },
  //   })
  //   .then(response => {
  //     console.log('Response',response)
  //   })
  // dispatch({
  //   type:USER_LOGIN_SUCCESS,
  //   payload:Data
  // })
};