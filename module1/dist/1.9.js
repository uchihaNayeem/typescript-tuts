"use strict";
{
    let roleFinance1 = {
        firstName: 'rajVallav',
        lastName: 'vallav',
        isLoyal: true,
        age: 101,
        contactNO: +8802563225652
    };
    // this is not a good way
    let roleFinance2 = {
        firstName: 'OlodamaLasengan',
        lastName: 'vallav',
        isLoyal: true,
        age: 101,
    };
    let roleFinance3 = {
        firstName: 'mange Kyo',
        lastName: 'vallav',
        isLoyal: true,
        age: 101,
    };
    //  type allias in  vaariable
    let userName;
    let age;
    userName = 'hello';
    age = 100;
    // type allias in function 
    //hard way
    let addNumber = (num1, num2) => num1 + num2;
    let valueAddNumber = addNumber(12, 12);
    console.log(valueAddNumber);
    let multyNumber = (num1, num2) => {
        return `the Multiplication of two number is ${num1} and ${num2}, so the total: ${num1 * num2}`;
    };
    let totalValue = multyNumber(12, 12);
    console.log(totalValue);
}
