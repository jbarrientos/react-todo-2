import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyAMgbJ9MpSZZLMJd26l80vjEpTvYUJ3bJM",
    authDomain: "jbarrientos-todo-app.firebaseapp.com",
    databaseURL: "https://jbarrientos-todo-app.firebaseio.com",
    projectId: "jbarrientos-todo-app",
    storageBucket: "jbarrientos-todo-app.appspot.com",
    messagingSenderId: "326876204241"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app:{
      name: 'Todo App',
      version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'George',
    age:100
  }
}).then(() => {
  console.log('Set worked!')
}, (e) => {
  console.log('Set failed');
});

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
  console.log('Todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Clean the house'
});

todosRef.push({
  text: 'Feed the cat'
});




// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
//
// console.log('Todo id', newNoteRef.key);

// var logData = (snapshot) => {
//   console.log('User ref changed', snapshot.val());
// };
//
// firebaseRef.child('user').on('value', logData);
//
// firebaseRef.update({'user/name':'Mary'});
// firebaseRef.update({'app/name': 'Todo Application'});

// firebaseRef.on('value', logData);
//
// firebaseRef.off(logData);
//
// firebaseRef.update({isRunning: false});

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

//firebaseRef.remove();
//firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.child('user/age').remove();
// firebaseRef.update({
//   isRunning:null
// });

// firebaseRef.update({
//   'app/name': 'Todo Application Updated',
//   'user/name': 'Yorch'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });
//
// firebaseRef.child('user').update({
//   name: 'Yorch'
// });

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// }).then(() => {
//   console.log('Update worked!')
// }, (e) => {
//   console.log('Update fail');
// });

// firebaseRef.set({
//   appName: 'Todo Application'
// });

// firebaseRef.child('app').set({
//   name: 'Todo Application R1.0.0'
// });
