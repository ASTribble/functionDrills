

function yearOfBirth(age){
    try {
        if (age < 0){
        throw new Error("Age can not be negative.");    
        } else {
            return 2017-age;
        }
    } catch (error) {
        console.error(error.message);
    }            
}

function whoAmI(name, age){ 
    // Make sure this isn't blank or "undefined"
    let hasErrors = false;
    
    if (typeof name === 'undefined' || typeof age === 'undefined'){
        console.error('Arguments not valid.');        
        hasErrors = true;
    }
    
    if (typeof name !== 'string'){
        console.error('Invalid type for name.');
        hasErrors = true;}

   if (typeof age !== 'number'){
        console.error('Invalid type for age.');
        hasErrors = true;
    }

    if (!hasErrors) {
        const birthyear = yearOfBirth(age);
        console.log(`Hi my name is ${name} and I'm ${age} years old.`);
        if (birthyear !== undefined){
        console.log(`I was born in ${birthyear}.`);
        } else {
            console.log(`And I'm lying about my age ;) `);
        }
    }
}

// whoAmI("Mr. Magoo", -65);
whoAmI("Agent 007",29);