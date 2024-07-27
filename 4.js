const interval = function (a, b) {

    const i = setInterval(() => {
        console.log(a++);
        if (a > b) {
            clearInterval(i);
        }
    }, 1000);

}

interval(5, 15)




