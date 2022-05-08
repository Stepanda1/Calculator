let op;
function func() {
    let result;
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2) {
                result = num1 / num2;
            } else {
                result = 'опшибка';
            }
            break;
        case '**':
            result = num1 ** num2;
            break;
        case 'sqrt':
            if (num1 > 0) {
                result = Math.pow(num1, 1 / num2);
            } else {
                result = 'опшибка';
            }
            break;
        default:
            result = 'выберите операцию';
    }

    document.getElementById('result').innerHTML = result;
}

