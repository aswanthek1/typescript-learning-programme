///abstract are like interfaces where we can only declare variables and methods 
//we can define the declared methods in the class which the abstracted class is extended
abstract class user{
    constructor(
        public name:string,
        public age:number
        ){
        
    }
    abstract getSepia(): any
    
}

class subUser extends user{
    constructor(public name:string, public age:number){
        super( name , age)
    }
    public getSepia():number {
        return 3435
    }
    
}