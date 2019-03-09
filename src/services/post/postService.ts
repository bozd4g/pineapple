import { IPostOutput } from './dto/postOutput';
import serviceManager from '../serviceManager';

class PostService {
   public async getLastPosts(): Promise<IPostOutput> {
      const result = await serviceManager.get('Blog/GetLastPosts');
      return result.data;
   }
}

export default new PostService();
