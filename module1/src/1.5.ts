{//lets learn about object in typescript


let user : {
    company: "Shabuj Global"; // type literal |  maybe changable using user.company='comething'
    firstName: string;
    middleName ?: string;
    lastName: string;
    readonly established : number;
} = {
    company: "Shabuj Global",
    firstName: 'Zahid',
    middleName: "ul",
    lastName: 'alam',
    established: 2010
}


console.log(user)




}