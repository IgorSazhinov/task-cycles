/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    if (start % 2 === 0) {
        var sum = 0;
        for (let i = 0; end >= start + i; i = i + 2) {
            sum = sum + start + i;
        }
    } else {
        var sum = 0;
        for (let i = -1; end >= start + i; i = i + 2) {
            sum = sum + start + i;
        }
    }
    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let i = 0;
    while (a > 0.1) {
        i += 1;
        a /= 2;
    }
    return i;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    if (message.length) {
        console.log(message.length);
        let i = 0;
        var str = '';
        let point = 0;
        do {
            if (i === 0) {
                point = point + 2;
            }
            if (i === point) {
                str += '_';
                point = point + 3;
            } else {
                str += message[i];
            }
            i++;
        } while (i < message.length);
    }
    return str;
}
