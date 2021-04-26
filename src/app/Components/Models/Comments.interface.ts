import { Logueduser } from "./user";



export class Comments {

    constructor(
      public CreatedAt:string,
      public DeletedAt:string,
      public ID:string,
      public UpdatedAt:string,
      public comment:string,
      public post_id:number,
      public user_id:number,
      public User:Logueduser
    ){

    }

    clearComments(){
        
    }

}

/*

CreatedAt: "2021-04-25T00:12:09.138Z"
DeletedAt: null
ID: 175
UpdatedAt: "2021-04-25T00:12:09.138Z"
User:
CreatedAt: "2021-04-19T02:36:01.452Z"
DeletedAt: null
ID: 3
UpdatedAt: "2021-04-24T23:11:28.762Z"
avatar: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/5.png"
email: "varleo.95@gmail.com"
name: "Andres Varelo"
password: "$2a$08$YBFKVnSqJg/7zPcA9mWOkuzh39PT7ElQ5PKn8vPIQ0ijtEUDPfsrW"
__proto__: Object
comment: "Eso es el diablo"
post_id: 166
user_id: 3
*/