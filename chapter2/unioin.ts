//union
// function union (id:string | number) {
//     return console.log(id)
// }

// union('sdf')
// union(45)

///////another problem

// function union(id:string | number){    ///it is an error here
//     id.toUpperCase()
// }

// solution

function union(id:string|number){
    if(typeof id==='string'){
        id.toUpperCase()
    }else{
        console.log(id)
    }
}


////arrays

const data:number[] = [1,2,3,4]
const data1:string[] = ["1","2","3"]
const data3:(string|number)[] = [1,2,3,"4"]