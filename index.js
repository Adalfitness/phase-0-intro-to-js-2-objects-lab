// Write your solution in this file!
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = { ...employee };
    if (key in updatedEmployee) {   
        delete updatedEmployee[key];
    }
    return updatedEmployee;
}
 function  destructivelyDeleteFromEmployeeByKey(employee, key) 
{ if (key in employee) { delete employee[key];
} return employee;
}

console.log("Before:", employee);
destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log("After:", employee);
