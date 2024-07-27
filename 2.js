function prosverkaNaprost(a) {

    if (a > 1 && a < 1000) {

        for (let b = 2; b <= a; b++) {
            if (a !== 2 && a % b === 0) {
                return console.log('число составное')
            }

            else {
                return console.log('число простое')
            }

        }
    }

    else {
        console.log('число не верное')
    }



}

prosverkaNaprost(4);