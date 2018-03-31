import * as firebase from 'firebase';

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
  firebase.initializeApp(config);
const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default }

// database.ref('expenses').set({
//     description: 'Malik',
//     amount: 37,
//     note: 'Firebase DB Test with Redux store',
//     personality: {
//         height: '5.11',
//         weight: '75'
//     }
// }).then((data) => {
//     console.log('Data was saved')

// }).catch((e) => {
//     console.log('Error:', e)
// });

// .push gives us id: for the record in firebase .. 
// database.ref('expenses').push({
//     description: 'Ali',
//     amount: 40,
//     note: 'hi i am pushing the data'
// }).then(() => {
//     console.log('data pushed successfuly')
// }).catch((e) => {
//     console.log('error Pushing data', e)
// })

// database.ref('expenses').push({
//     description: 'Ali222',
//     amount: 4000000,
//     note: 'hi i am pushing the data again towards you '
// }).then(() => {
//     console.log('data pushed successfuly')
// }).catch((e) => {
//     console.log('error Pushing data', e)
// })

// // fetching data once ... not subscribing 
// // database.ref().once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val)
// //     }).catch((e) => {
// //         console.log('Error Fetching data', e)
// // });

// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //         console.log(expenses)
// // });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // database.ref('expenses').on('value', (snapshot) => {
// //     console.log(snapshot.val())
// // })
// // database.ref('expenses')
// // .on('value', (snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses)
// // })
// // // .on will give us subscription, as data changes the callback will send the updates to the client 
// // database.ref().on('value', (snapshot) => {
// //     // console.log(snapshot.val())
// // })
// // Practise on different data set firebase .. 

// // database.ref('personality').set({
// //     personality: {
// //         height: '6'
// //     }
// // });

// // database.ref('age')
// //     .remove()
// //     .then(() => {
// //         console.log('age Removed')
// //     }).catch((e) => {
// //         console.log('Error ', e)
// //     })

// // database.ref('personality').set({
// //     age: 38,
// //     height: 5.11,
// //     weight: 74
// // }).then(() => {
// //     console.log('new age is set!!!')
// // }).catch((e) => {
// //     console.log('Error:', e)
// // });

// // database.ref().update({
// //     name: 'Ali Gull'
// // }).then(() => {
// //     console.log('name is updated')
// // }).catch((e) => {
// //     console.log(e)
// // })

// // // updating nested objects ... 
// // database.ref().update({
// //     name: 'Gulalai',
// //     'personality/height': '12'
// // });



