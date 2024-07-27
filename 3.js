function sum(a) {

    return function (b) {

        return a + b;

    }

}

const c = sum(10);

console.log(c(15));
