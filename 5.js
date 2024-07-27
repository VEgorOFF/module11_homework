const pow = (x, n) => {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    if (n !== 0) {
        console.log(result);
    }

    else {
        result = 1;
        console.log(result);
    }
}

pow(-4, 3)




