import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyATctRzKop9saT8wJvgl7Z0IclwXq3wLqM",
    authDomain: "budget1-32892.firebaseapp.com",
    databaseURL: "https://budget1-32892.firebaseio.com",
    projectId: "budget1-32892",
    storageBucket: "budget1-32892.appspot.com",
    messagingSenderId: "37363417891"
  };

  firebase.initializeApp(config);
  const database=firebase.database();

  export {firebase,database as default};

  /*firebase.database().ref('Expense').on('value',(snapshot)=>{
     const expenses=[];
     snapshot.forEach((childSnapshot) => {
         expenses.push(
             {
                 id:childSnapshot.key,
                 ...childSnapshot.val()
             }
         )
         
     });
  console.log(expenses);
  })*/

  /*firebase.database().ref('Expense').push({
      description: 'Room Rent',
      note: 'Room rent or Feb 2019' ,
      amount: 13000 ,
      createdAt: '01-Mar'
  })

  firebase.database().ref('Expense').push({
    description: 'Water Bill',
    note: 'Water bill Feb 2019' ,
    amount: 100 ,
    createdAt: '01-Mar'
})*/

 /* firebase.database().ref('notes').push({
      name:'Ruhi',
      age: 26
  })

  firebase.database().ref('notes/-L_J-10KuoHrH1rqTai3').update({
    name: 'Ruhi Jha'
})*/

  /*firebase.database().ref().on('value',(snapshot)=>
  {
      const  value=snapshot.val();
      console.log(`${value.name} is ${value.age} years old`
    )})*/

    /*setTimeout(()=>{
      firebase.database().ref('name').set('Ruhi Jha')
    },3500)

    setTimeout(()=>{
        firebase.database().ref().off()
      },7500)

      setTimeout(()=>{
        firebase.database().ref('name').set('Ruhi Kumari Jha')
      },10500)

*/

/*firebase.database().ref().once('value')
.then((snapshot)=>{
const value=snapshot.val();
console.log(value);
}).catch((e)=>{
    console.log("Operation failed" + e);
})*/


  /*firebase.database().ref().set({ 
      name: 'ruhi',
      isSingle: true,
      age:26,
      location: {
          city: "bhagalpur",
          state: "Bihar"
      }
  }).then(()=>{
            console.log("Data is set");
  }).catch((e)=>{
     console.log("This failed" + e);
  })*/

  /*firebase.database().ref('isSingle').remove().then(()=>{
      console.log("Successfully removed data")
  }).catch(()=>{
      console.log("Deletion failed");
  });*/

  /*firebase.database().ref().update({
      isSingle:false,
      name: "Ruhi Kumari"
  })*/

