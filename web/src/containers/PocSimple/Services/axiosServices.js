import axios from 'axios';

class AxiosService {
  constructor(){
    const instance = axios.create();

    const errorHandler = (error) => {
      return Promise.reject({ ...error })
    }
    
    const successHandler = (response) => {
      return response
    }

    instance.interceptors.response.use(response=>successHandler(response), (err)=>errorHandler(err));
    this.instance = instance;
  }

  get(url){
    return this.instance.get(url)
  }
}

export default new AxiosService();