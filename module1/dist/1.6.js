"use strict";
{
    ///normal function
    function add(num1, num2) {
        return num1 + num2;
    }
    //normal arrow function
    const arrowAdd = (num1, num2) => num1 + num2;
    //normal arrow function fixed number 
    let arrowAdd2 = (num1, num2 = 10) => num1 + num2;
    // Method (if we write a function in the property is called method)
    let richDeveloper = {
        name: 'Shabuj Global',
        balance: 100000,
        addBalance(balance) {
            return `the total balance is ${this.balance + balance}`;
        }
    };
    // ChatGPT completed version
    let richDeveloper1 = {
        name: 'Shabuj Global',
        balance: 10000,
        addBalance(balance) {
            return `the total balance is ${this.balance + balance}`;
        }
    };
    // doing a oparation using map array
    let arr = [20, 10, 5];
    const newArr = arr.map((eachElement) => eachElement * eachElement);
}
