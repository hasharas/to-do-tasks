import axios from 'axios';

class HttpService {
      constructor() {
            this.service = axios.create();
            this.service.interceptors.response.use(
                  this.handleSuccess,
                  this.handleError
            );
      }

      sendRequest = async (config) => {
            return this.service.request(config);
      };

      handleSuccess = (response) => {
            return response?.data;
      };

      handleError = (error) => {
            if (error.response) {
                  return {
                        success: false,
                        message: 'Network error. Please check your internet connection.',
                        data: null
                  };
            }
            // switch (error.response.status) {
            //       case 401: window.location.replace('/login'); break;
            //       case 403: window.location.replace('/403'); break;
            //       case 404: window.location.replace('/404'); break;
            //       case 408: window.location.replace('/408'); break;
            //       case 419: window.location.replace('/419'); break;
            //       case 429: window.location.replace('/429'); break;
            //       case 503: window.location.replace('/503'); break;
            //       case 500: window.location.replace('/500'); break;
            //       case 501: window.location.replace('/501'); break;
            //       case 502: window.location.replace('/502'); break;
            // }
      };
}

export default HttpService;