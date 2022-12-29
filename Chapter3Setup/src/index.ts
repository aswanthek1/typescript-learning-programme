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
  readonly city:string = 'Delhi'
  private _courceCount:number = 1
  constructor(public name:string, private email:string){
  }
  get getEmail():string{
    return `email is ${this.email}`
  }
  get courseCount():number {
    return this._courceCount
  }
  set courseCount(courceNum){
    if(courceNum <= 1 ){
        throw new Error('Error')
    }
    this._courceCount = courceNum
  }
}
const newUser = new User('h@gmail.com' , 'aswanth')
