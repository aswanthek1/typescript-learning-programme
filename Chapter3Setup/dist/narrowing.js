"use strict";
///narrow means process of refining types to more specific types than declared 
Object.defineProperty(exports, "__esModule", { value: true });
const adminAccount = (account) => {
    if ('isAdmin' in account) { ///in opertor is used to check a specific field exists in value 
        return account.isAdmin;
    }
    else
        return console.log('user');
};
////instasnce of
const logValue = (x) => {
    if (x instanceof Date) { ///to check the object is the instance of which type
        console.log(x.toDateString());
    }
    else
        console.log(x.toLowerCase());
};
