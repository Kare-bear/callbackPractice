/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   
and WHAT YOU SHOULD WRITE is the sayHi function that makes the code above work: 
    
   var sayHi = function(str, cb){
    cb(str);
   }
    
*/


// 1. Write a function called first that takes in two parameters, an array and a callback function, then invokes the callback function, passing in the first element in the array as it's argument.  (see the sayHi function on line 12 for reference)

  // Code Here 

  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];


function first(arr,cb){
  cb(arr[0]);
}


// 2. Write a function called last that takes in an array and a callback function, then invokes the callback, passing in the last element in the array as the argument.

  //Code Here



function last(arr, cb){
  cb(arr[last.length-1])
  }


// 3. Write a function called multiply that takes in three parameters: two numbers and a callback function.  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 

  //Code Here


function multiply(x,y,cb){
  cb(x*y);
}



// 4. .  First, check if the name exists in the array. 
// If it does, invoke the callback with true as the argument. 
// If the name does not exist, invoke the callback with false as the argument.

  //Code Here 


function contains(arr, str, cb){
 for(var i=0;i<arr.length;i++){
   if(str===arr[i]){
     return cb(true);
   }else{
     return cb(false);
   }
 }
}





// 5. Write a function called uniq that takes in an array and a callback function.
// Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.

  //Code Here

function uniq(arr, cb){
  
}




// 6. Write a function called each that takes in an array of names and a callback function. For each name in the array, invoke the callback and pass in the name and the name's index as arguments.

    //Code Here 

function each(arr, cb){
  for(var i=0; i< arr.length;i++){
    cb(arr[i])
  }
  
}




// 7. Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
// When the correct user object is found, invoke the callback with the user object as an argument.

// Code here
function getUserById(arr, id, cb){
  
}


var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});