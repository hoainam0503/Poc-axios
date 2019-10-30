import axiosService from '../Services/axiosServices';
 const url = "";
export const getList = () => {
  return axiosService.get(url)
}