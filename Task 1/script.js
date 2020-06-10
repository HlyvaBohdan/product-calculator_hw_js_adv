function outer() {
    let num = 0;
    function inner(x) {
        num += x;
        console.log(num)
    }
    return inner
}

let sum = outer();
sum(3);
sum(5);
sum(228);
