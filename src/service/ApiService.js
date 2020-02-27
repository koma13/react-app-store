import axios from 'axios';

const SHOP_API_BASE_URL = 'http://localhost:8000/app-store';

class ApiService {

    fetchApps() {
        return axios.get(SHOP_API_BASE_URL);
    }

    fetchTop5Apps() {
        return axios.get(SHOP_API_BASE_URL + '/top-5');
    }

    fetchByCategory() {
        return axios.get(SHOP_API_BASE_URL + '/categories');
    }

    fetchAppById(appId) {
        return axios.get(SHOP_API_BASE_URL + '/' + appId);
    }

    deleteApp(appId) {
        return axios.delete(SHOP_API_BASE_URL + '/' + appId);
    }

    addApp1(appId, file) {
        console.log(appId,file)
        return axios.post(SHOP_API_BASE_URL,
             {params: {appId, file},
             headers: {
                'Content-Type': 'application/json'
             }},
            {
                responseType: 'arraybuffer',
                
            });
    }

    addApp(app, file) {
        console.log(app,file)
       // let data = new FormData();
      //  data.append('file', event);
    
        return fetch(SHOP_API_BASE_URL, {
          method: 'POST',
          body: {app, file},
          mode: 'no-cors',
        });
    
      }

    editApp(appId) {
        return axios.put(SHOP_API_BASE_URL + '/' + appId.id, appId);
    }

}

export default new ApiService();