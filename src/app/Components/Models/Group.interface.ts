import { Logueduser } from "./user";

export interface Group{
    ID: number,
    CreatedAt:string,
    UpdatedAt:string,
    DeletedAt:string,
    name: string, 
    description: string,
    imageUrl:string,
    creator_id:number,
    users:Logueduser[]
}