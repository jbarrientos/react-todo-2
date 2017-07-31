import firebase from 'firebase';

try{
  var config = {
      apiKey: "AIzaSyAMgbJ9MpSZZLMJd26l80vjEpTvYUJ3bJM",
      authDomain: "jbarrientos-todo-app.firebaseapp.com",
      databaseURL: "https://jbarrientos-todo-app.firebaseio.com",
      projectId: "jbarrientos-todo-app",
      storageBucket: "jbarrientos-todo-app.appspot.com",
      messagingSenderId: "326876204241"
    };
  firebase.initializeApp(config);
}catch(e){

}

export var firebaseRef = firebase.database().ref();
export default firebase;
