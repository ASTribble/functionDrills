'use strict';

function yearOfBirth(age){
  
  if (age < 0){
    throw new Error('Age can not be negative.');    
    }
  if (typeof age === 'undefined'){
    throw new Error('please enter an age.');
  }
  if (typeof age !== 'number') {
    throw new Error('Invalid type for age.');
  }
  
  return 2017-age;         
}

function whoAmI(name, age){ 
  // Make sure this isn't blank or "undefined"
  let hasErrors = false;
    
  if (typeof name === 'undefined'){
    console.error('Arguments not valid.');        
    return;
  }
    
  if (typeof name !== 'string'){
    console.error('Invalid type for name.');
    return;
  }

   
  try {
    const birthyear = yearOfBirth(age);
    console.log(`Hi my name is ${name} and I'm ${age} years old.`);
   console.log(`I was born in ${birthyear}.`);
  }
  catch(error) {
      console.error(error.message)
    }
    
     
  
}

// whoAmI("Mr. Magoo", -65);
whoAmI("007", "boy");