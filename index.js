// Write your solution in this file!
const employee = {
    name:"Sherlyne", 
    streetAddress: "kinoo",
}
console.log(employee);

// updateEmployeeWithKeyAndValue(): this function should take in three arguments: an employee Object, a key and a value. This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in. Hint: use the spread operator!

const updateEmployeeWithKeyAndValue =(employee, key,value) =>{
    const newobj = {...employee}; // spread operator creates a copy n
    newobj[key] = value; 
    return newobj;
};
console.log(updateEmployeeWithKeyAndValue(employee,"name", "Rahab"))

// destructivelyUpdateEmployeeWithKeyAndValue(): this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.
const destructivelyUpdateEmployeeWithKeyAndValue = (employee,key,value)=>{
    employee[key]=value;
    return employee; 
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee,"Books","Hunger games"));

// deleteFromEmployeeByKey(): this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair. Hint: use the spread operator!

const deleteFromEmployeeByKey = (employee,key)=>{
     const dl = {...employee};
     delete dl[key];
    return  dl;
}
console.log(deleteFromEmployeeByKey(employee,"name")); 

//destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.
const destructivelyDeleteFromEmployeeByKey = (employee,key)=>{
    delete employee[key];
    return employee; 
}

console.log(destructivelyDeleteFromEmployeeByKey(employee,"streetAddress"))