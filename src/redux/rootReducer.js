import { combineReducers } from "redux";

//reducers
import AuthReducer from "./Auth/AuthReducer";
import OrganizationReducer from './Organizations/OrganizationReducer';

export const rootReducer = combineReducers({
  auth: AuthReducer,
  organization: OrganizationReducer
});
