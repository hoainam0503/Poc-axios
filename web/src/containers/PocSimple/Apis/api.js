import axiosService from '../Services/axiosServices';
//  const url = "../data.json";
export const getList = (url) => {
  return axiosService.get(url);
}
