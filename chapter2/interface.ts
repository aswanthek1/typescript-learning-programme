///interface
interface user {
    readonly _id:string,
    name:string,
    age:number,
    googleId?:string,
    getMoney():string  ///declaring function in an interface or type
}

interface user{
    password:string     ////can be reopen to add new details
}

interface admin extends user{                  ///we can inherit features of one interface to another
    role:'checking' | 'descipline'
}

const major:admin = {
    _id:'afsfdsa',
    name:'asdfsdf',
    age:23,                            
    getMoney() {
        return "asdfdf"
    },
    password:'fkfjdfkds',
    role:'checking'
}





export {}