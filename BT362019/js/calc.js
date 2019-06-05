function validate(firstValue, secondValue) {

    var isError = true;
    var errorString = "";

    if (firstValue === '') {
        errorString += "Vui lòng nhập số thứ nhất<br>";
        isError = false;
    } else if (isNaN(firstValue)) {
        errorString += "Vui lòng nhập số thứ nhất là kiểu dữ liệu số<br>";
        isError = false;
    }

    if (secondValue === '') {
        errorString += "Vui lòng nhập số thứ hai<br>";
        isError = false;
    } else if (isNaN(secondValue)) {
        errorString += "Vui lòng nhập số thứ hai là kiểu dữ liệu số<br>";
        isError = false;
    }

    document.getElementById('errorMessage').innerHTML = errorString;

    return isError;
}

function calcPlus(firstValue, secondValue) {
    if (validate(firstValue, secondValue)) {
        var result = parseFloat(firstValue) + parseFloat(secondValue);
        document.getElementById('result').value = result;
    }
}

function calcMinus(firstValue, secondValue) {
    if (validate(firstValue, secondValue)) {
        var result = parseFloat(firstValue) - parseFloat(secondValue);
        document.getElementById('result').value = result;
    }
}

function calcMultiply(firstValue, secondValue) {
    if (validate(firstValue, secondValue)) {
        var result = parseFloat(firstValue) * parseFloat(secondValue);
        document.getElementById('result').value = result;
    }
}

function calcDivided(firstValue, secondValue) {
    if (validate(firstValue, secondValue)) {
        if (parseFloat(secondValue) == 0.00) {
            document.getElementById('errorMessage').innerHTML = 'Xin lỗi, không thể thực hiện được phép chia 0';
        } else {
            var result = parseFloat(firstValue) / parseFloat(secondValue);
            document.getElementById('result').value = result;
        }
    }
}