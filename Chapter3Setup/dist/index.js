"use strict";
///classes 
///public
///private
///protected
// class User {
//    public email:string
//   private  name:string
//    readonly city:string = 'jaipur'
//     constructor(email:string,name:string){
//         this.email = email
//         this.name = name
//     }
// }
// const newUser = new User('as@gmail.com','aswanth')
// newUser.email = 'b@gmail.com'
// newUser.name = 'aswanthh'  /// this cannot be done to a private class
//this can also writtern as :-
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.city = 'Delhi';
        this._courceCount = 1;
    }
    get getEmail() {
        return `email is ${this.email}`;
    }
    get courseCount() {
        return this._courceCount;
    }
    set courseCount(courceNum) {
        if (courceNum <= 1) {
            throw new Error('Error');
        }
        this._courceCount = courceNum;
    }
}
const newUser = new User('h@gmail.com', 'aswanth');
