////aliases
type User = {
    name:string;
    email:string
    isActive:boolean;
}

function createUser(user:User):User{
    return {name:'',email:'',isActive:true}
}

createUser({name:'',email:'',isActive:true})

///we can combine two types aliases 

type cardNumber = {
    cardnumber:string
}
type cardDate = {
    carddate:string
}

type cardDetails = cardDate & cardNumber