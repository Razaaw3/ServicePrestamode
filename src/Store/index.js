import { combineReducers } from "redux";
import authReducer from "../Reducer/UserLogin";
const rootReducer = combineReducers({
    authReducer,
});
export default rootReducer;
