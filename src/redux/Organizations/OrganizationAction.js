import AxiosMain from "../../service/AxiosMain";

export const BEGIN_ORGANIZATIONS = "BEGIN_ORGANIZATIONS";
export const SUCCESS_ORGANIZATIONS = "SUCCESS_ORGANIZATIONS";
export const FAIL_ORGANIZATIONS = "FAIL_ORGANIZATIONS";

export const getAllOrganisationData = (history) => async (dispatch) => {
  dispatch({ type: BEGIN_ORGANIZATIONS });

  try {
    const response = await AxiosMain(history).get(`/organizations?sortBy=id`);

    dispatch({
      type: SUCCESS_ORGANIZATIONS,
      payload: response.data.data,
      totalCount: response.data.totalCount,
    });
  } catch (err) {
    dispatch({ type: FAIL_ORGANIZATIONS });
  }
};
