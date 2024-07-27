let arr = [1, 2, 2, 0, 2, true, 'sss', null, 1, 7, 5, 4, 8, true, 'sss', null];

let a = 0; //четные
let b = 0; //нечетные

function proverkaChet() {

    for (let i = 0; i < arr.length; i++) {

        let element = arr[i];
        let type = typeof (arr[i]);

        if (type === 'number') {

            if (arr[i] !== 0) {

                if (arr[i] % 2 === 0) {
                    console.log(arr[i], 'четный');
                    a++;
                }

                else {
                    console.log(arr[i], 'нечетный');
                    b++;
                }

            }

            else {
                console.log('это 0');
            }


        }

        else {
            console.log('Это не число');
        }

    }

    console.log('Количество четных', a);
    console.log('Количество нечетных', b);
}

proverkaChet();