import { Comments } from './Comments.interface';
import {Logueduser} from './user';
export interface Post{
    posted_text:string,
    user_id: Number,
    image_url?:string,
    user:Logueduser

}

export class OldPost{
  
  

    constructor(
        public CreatedAt: string,
        public DeletedAt: string,
        public ID: number,
        public UpdatedAt: string,
        public image_url: string, 
        public posted_text: string,
        public user: Logueduser,
        public user_id: number,
        public reactions:any[] = [],
        public comments:Comments[]=[]
    ){

    }
}