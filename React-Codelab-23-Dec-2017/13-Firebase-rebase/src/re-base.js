const Rebase = require('re-base');
const firebase = require('firebase/app');
const database = require('firebase/database');

const app = firebase.initializeApp({
  apiKey: 'AIzaSyA3qzYSGdBHYJc2O7tDAIhal3f1L14qd-s',
  authDomain: 'into-the-react.firebaseio.com',
  databaseURL: 'https://into-the-react.firebaseio.com/'
});
const db = firebase.database(app);
const base = Rebase.createClass(db);

export default base;
