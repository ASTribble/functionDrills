

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
    const birthyear = yearOfBirth(age);
    console.log(`Hi my name is ${name} and I'm ${age} years old.`);
    if (birthyear !== undefined){
    console.log(`I was born in ${birthyear}.`);
    } else {
        console.log(`And I'm lying about my age ;) `);
    }
}

whoAmI("Mr. Magoo", -65);