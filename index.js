var customerName = 'bob'; // Variable declaration in global scope.
console.log(customerName);

// A function that accesses the global `customerName` variable and changes it to uppercase.
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}
console.log(customerName);
upperCaseCustomerName();
console.log(customerName);


// A function that declares a variable.
function setBestCustomer() {
    bestCustomer = 'not bob';
 //   console.log(bestCustomer);
}
// setBestCustomer();


// A function that changes the value of bestCustomer in setBestCustomer function.
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
 //   console.log(bestCustomer);
}
// overwriteBestCustomer();
// setBestCustomer();


const leastFavoriteCustomer = 'bob';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Allan';
}
// console.log(leastFavoriteCustomer);
// changeLeastFavoriteCustomer();
// console.log(leastFavoriteCustomer);