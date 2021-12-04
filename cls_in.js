class A{
    A(x){
        a = x
    }
}
class B extends A{
    B(y){
        b = y
    }
}
class C extends B{
    C(z){
        c = z
    }
}

obj = new C(11)
console.log(obj.a + " "+ obj.b + " "+obj.c)