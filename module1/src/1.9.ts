{

// type allias 

/*
 bar bar type na likhe amra ak jaygay likhe dite pari oitai typre allias.
 object, array , function a kora jay

*/



// object stucture making TYPE

type RoleFinance = { // akhane equalto sign hobe 
    firstName: string;
    lastName: string;
    contactNO?: number;
    isLoyal: boolean;
    age: number;
}





let roleFinance1 : RoleFinance = {
    firstName: 'rajVallav',
    lastName: 'vallav',
    isLoyal: true,
    age: 101,
    contactNO: +8802563225652
}

// this is not a good way
let roleFinance2 :{
    firstName: string;
    lastName: string;
    contactNO?: number;
    isLoyal: boolean;
    age: number;
} = {
    firstName: 'OlodamaLasengan',
    lastName: 'vallav',
    isLoyal: true,
    age: 101,
}

let roleFinance3 : RoleFinance  = {
    firstName: 'mange Kyo',
    lastName: 'vallav',
    isLoyal: true,
    age: 101,
}

//  type allias in  vaariable

let userName: string;
let age: number;
 
userName = 'hello';
age= 100

// type allias in function 


//hard way
let addNumber = (num1:number, num2:number) => num1 + num2

let valueAddNumber = addNumber(12,12)
console.log(valueAddNumber);

//easy and good way: to declare and make the prototype
type MultiplyType = (num1:number, num2:number) => string

let multyNumber: MultiplyType = (num1, num2) => {
    return `the Multiplication of two number is ${num1} and ${num2}, so the total: ${num1 * num2}`
}

let totalValue = multyNumber(12,12)
console.log(totalValue)

// the end














}