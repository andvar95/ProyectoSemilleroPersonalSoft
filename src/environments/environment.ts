// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  SOCKET_URL:'ws://18.189.21.84:5050/ws',
  REGISTER_USER_URL : 'http://18.189.21.84:5050/users',
  LOGIN_URL : 'http://18.189.21.84:5050/auth',
  GET_ALL_POSTS_URL:'http://18.189.21.84:5050/posts',
  GET_POST_BY_USER:'http://18.189.21.84:5050/posts/user',
  COMMENTS_API_URL:'http://18.189.21.84:5050/comments',
  REACTIONS_API_URL:'http://18.189.21.84:5050/reactions',
  GROUP_API_URL:'http://18.189.21.84:5050/groups',
  ADD_USER_GROUP:'http://18.189.21.84:5050/groups/append',
  FOLLOW_USER:'http://18.189.21.84:5050/users/follow',
  SEARCH_USER:'http://18.189.21.84:5050/search?text=',
  firebaseConfig:{
    apiKey: "AIzaSyDvpC1UTmrTy75_BR6cPwly0P1Mb_2hsFI",
    authDomain: "courses-project-aa1b2.firebaseapp.com",
    databaseURL: "https://courses-project-aa1b2-default-rtdb.firebaseio.com",
    projectId: "courses-project-aa1b2",
    storageBucket: "courses-project-aa1b2.appspot.com",
    messagingSenderId: "644025922677",
    appId: "1:644025922677:web:cee8cabade6c26862fb43c"
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *http://localhost:5050/comments
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
