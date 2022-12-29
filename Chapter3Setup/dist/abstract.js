"use strict";
///abstract are like interfaces where we can only declare variables and methods 
//we can define the declared methods in the class which the abstracted class is extended
class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class subUser extends user {
    constructor(name, age) {
        super(name, age);
        this.name = name;
        this.age = age;
    }
    getSepia() {
        return 3435;
    }
}
