"use strict";
{ // rest , spread, destructuring
    let sgeUser1 = ['riaz', 'riyad', 'salmon'];
    let sgeUser2 = ['Niki', 'rigan', 'trump'];
    let allUser = [];
    allUser.push(...sgeUser1);
    allUser.push(...sgeUser2);
    console.log(allUser);
    // in object
    let employee1 = {
        FirstName: 'Shabuj',
        SecondName: 'Global',
        Lastname: 'education'
    };
    let employee2 = {
        firstName: 'H',
        secondName: 'S',
        lastname: 'educat'
    };
    let allEmployee = Object.assign(Object.assign({}, employee1), employee2);
    console.log(allEmployee);
    //rest oparator used well in function parameter makes array
    function greetFriends(...friends) {
        return friends.forEach(friend => console.log(`hello ${friend}`));
    }
    greetFriends('shabuj', 'rahat vai', 'Jhankar vai', 'fahad vai', 'persian');
}
