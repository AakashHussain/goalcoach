import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDlmi5ACzgxuRVi-44ueGMj7w4mO88CFJY",
    authDomain: "goalcoach-7c927.firebaseapp.com",
    databaseURL: "https://goalcoach-7c927.firebaseio.com",
    projectId: "goalcoach-7c927",
    storageBucket: "",
    messagingSenderId: "824472779507"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef= firebase.database().ref('completeGoals');
export const teamRef=firebase.database().ref('teams');

