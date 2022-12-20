const employee = {
name: "Marin Haluza",
streetAddress: "534 E 3rd Street Eagle, CO 81631"
};

function updateEmployeeWithKeyAndValue(employee, salary, dollarAmount) {
    const updatedEmployee = {...employee};
    updatedEmployee[salary]= dollarAmount;
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, salary, dollarAmount) {
    employee[salary] = dollarAmount;
    return employee;
}

function deleteFromEmployeeByKey (employee, name) {
    const updatedEmployee1 = {...employee};
   delete updatedEmployee1[name];
    return updatedEmployee1;
}

function destructivelyDeleteFromEmployeeByKey(employee, streetAddress) {
    delete employee[streetAddress];
    return employee;
}