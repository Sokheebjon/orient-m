import {
  BEGIN_ORGANIZATIONS,
  SUCCESS_ORGANIZATIONS,
  FAIL_ORGANIZATIONS,
} from "./OrganizationAction";

const initialState = {
  loadingOrg: false,
  successOrg: false,
  failOrg: false,
  orgData: [],
  totalCount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BEGIN_ORGANIZATIONS:
      return {
        ...state,
        loadingOrg: true,
        failOrg: false,
      };
    case SUCCESS_ORGANIZATIONS:
      return {
        ...state,
        succeessOrg: true,
        orgData: action.payload,
        totalCount: action.totalCount,
        loadingOrg: false,
        failOrg: false,
      };
    case FAIL_ORGANIZATIONS:
      return {
        ...state,
        succeessorg: false,
        loadingOrg: false,
        failOrg: true
      };
    default:
      return state;
  }
};
