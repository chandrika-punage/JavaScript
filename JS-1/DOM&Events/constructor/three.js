class Test {
    first_name;
    last_name;
    constructor(fn, ln) {
        this.first_name = fn;
        this.last_name = ln;

    }

    m1(fn,ln) {
        console.log(first_name, last_name)

    }

}
let a = new Test("John", "Doe")
let b = new Test();
a.m1();