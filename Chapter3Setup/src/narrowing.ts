///narrow means process of refining types to more specific types than declared 

///in operator in narrowing

interface User {
    name:string,
    email:string,
}

interface Admin {
    name:string,
    email:string,
    isAdmin:boolean
}

const adminAccount = (account:User | Admin) => {
    if('isAdmin' in account){                         ///in opertor is used to check a specific field exists in value 
        return account.isAdmin
    }
    else return console.log('user')
}



////instasnce of

const logValue = (x:Date|string) => {
    if(x instanceof Date){               ///to check the object is the instance of which type
        console.log(x.toDateString())
    }
    else console.log(x.toLowerCase())
}

///predicates  * need more knnowledge about this

export {}