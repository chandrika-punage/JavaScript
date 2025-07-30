class Parent{
    constructor(){
        console.log("parent Class Constructor")
    }
}
class Child extends Parent{
    constructor(){
        super()
        console.log("Child Class Constructor")
    }
}
new Child();
