import AxiosMain from "../../service/AxiosMain";

export const BEGIN_LOGIN = "BEGIN_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const FAILURE_LOGIN = "FAILURE_LOGIN";

export const makeLogin = (userName, password) => async (dispatch) => {
  dispatch({ type: BEGIN_LOGIN });

  const config = {
    userName: userName,
    password: password,
  };

  try {
    const response = await AxiosMain().post(`/auth/login`, config);

    console.log(response, 'response');
    localStorage.setItem('token', response.data.data.sessionToken);
    localStorage.token = response.data.data.sessionToken;
    dispatch({ type: SUCCESS_LOGIN, payload: response.data.data});
  } catch (err) {
    dispatch({ type: FAILURE_LOGIN, payload: err });
  }
};
