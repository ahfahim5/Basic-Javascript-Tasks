const user = { 
    name : "John", 
    age : 30, 
    location : "New York" 
};
const { name: fullName, age: Age, location: city } = user;
console.log(fullName, Age, city);