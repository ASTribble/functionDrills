

function yearOfBirth(age){
    return 2017-age;
}

function whoAmI(name, age){ 
    const birthyear = yearOfBirth(age);
    console.log(`Hi my name is ${name} and I'm ${age} years old.`);
    console.log(`I was born in ${birthyear}.`);
}

whoAmI("Mr. Magoo", 65);