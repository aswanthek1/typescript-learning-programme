function sum(num:number){
    return num + 2
}

sum(2)

let fun = (name:string, age:number)=> {
    return console.log(name,age)
}

fun("aswanth",30)

///if dont want a value to get we need to add default value there

//ie,

let ronaldo = (name:string,age:number,isRetired:boolean = false) => {

}
ronaldo('naem', 34)
///if didint give default value it will show an error