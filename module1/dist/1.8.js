"use strict";
{
    // object destructureing 
    let user = {
        contactNo: '01700000000',
        name: {
            firstName: 'Shabuj',
            MiddleName: 'Global',
            lastName: 'Education'
        },
        address: '9A  White Chappel'
    };
    // now destuctureing
    let { contactNo, name: { firstName, lastName: outsourcingLTD } } = user;
    user.name.lastName = 'outsourcing LTD',
        console.log(outsourcingLTD);
    console.log(user.name.lastName);
    // array destructuring
    let newArr = [1, 2, 3, 4, 5, 6];
    let [, , a, ...rest] = newArr;
    console.log(a, rest);
}
