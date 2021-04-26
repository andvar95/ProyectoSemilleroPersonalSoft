export interface User{
    name:string;
    email:string;
    password:string
}


export interface Logueduser{
    CreatedAt: string,
    DeletedAt:string,
    ID:Number,
    UpdatedAt: string,
    avatar: string,
    email: string,
    name: string,
    followed?:boolean,

}