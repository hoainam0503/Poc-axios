export const GET_LIST_DATA_REQUEST = 'GET_LIST_DATA_REQUEST';
export const GET_LIST_DATA_SUCCESS = 'GET_LIST_DATA_SUCCESS';
export const GET_LIST_DATA_ERROR = 'GET_LIST_DATA_ERROR';

export const getListData = (data) => ({
  type: GET_LIST_DATA_REQUEST,
  payload:data
});
export default {};

