import axios from 'axios';

class ServiceManager {
   private readonly baseUrl = 'https://bozd4g.azurewebsites.net/api/';

   public async get(params: string): Promise<any> {
      return await axios
         .get(this.baseUrl + params)
         .then(function(response) {
            return response;
         })
         .catch(function(error) {
            console.log(error);
         });
   }
}

export default new ServiceManager();
