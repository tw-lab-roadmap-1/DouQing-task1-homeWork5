function score() {
    let className = document.getElementById('className');
    let number = document.getElementById('number');
    let name = document.getElementById('name');
    if (className.value === "") {
        alert('请填写班级！');
        className.style.borderColor = 'red';
    }
    if (number.value === "") {
        alert('请填写学号！');
        number.style.borderColor = 'red';
    }
    if (name.value === "") {
        alert('请填写姓名！');
        name.style.borderColor = 'red';
    }
    calute();
}
function calute() {
    let sum = 0;
    let tip1 = document.getElementsByName('tip1')[0];
    let tip2 = document.getElementsByName('tip2')[0].value;
    let tip22 = document.getElementsByName('tip2')[1].value;
    let tip23 = document.getElementsByName('tip2')[2].value;
    let tip3 = document.getElementsByName('tip3');
    let tip4 = document.getElementsByName('tip4');
    let tip5 = document.getElementsByName('tip5');
    let tip6 = document.getElementsByName('tip6');
    let tip7 = document.getElementsByName('tip7');
    let tip8 = document.getElementsByName('tip8');
    let tip9 = document.getElementsByName('tip9')[0];


    if (tip1.value === '4') {
        sum += 10;
    }
    if ((tip2 === '5' || tip2 === '6' || tip2 == '7') && (tip22 === '5' || tip22 === '6' || tip22 == '7') && (tip23 === '5' || tip23 === '6' || tip23 == '7') && (tip2 !== tip22 !== tip23)) {
        sum += 10;
    }
    for (let i = 0; i < tip3.length; i++) { //遍历Radio
        if (tip3[i].checked && tip3[i].value === 'A') {
            sum += 10;
        }
    }
    for (let i = 0; i < tip4.length; i++) { //遍历Radio
        if (tip4[i].checked && tip4[i].value === 'A') {
            sum += 10;
        }
    }
    for (let i = 0; i < tip5.length; i++) { //遍历Radio
        if (tip5[i].checked && (tip5[i].value === 'A' || tip5[i].value === 'B')) {
            sum += 5;
        }
    }
    for (let i = 0; i < tip6.length; i++) { //遍历Radio
        if (tip6[i].checked && (tip6[i].value === 'A' || tip6[i].value === 'B')) {
            sum += 5;
        }
    }

    for (let i = 0; i < tip7.length; i++) { //遍历Radio
        if (tip7[i].checked && tip7[i].value === 'right') {
            sum += 10;
        }
    }
    for (let i = 0; i < tip8.length; i++) { //遍历Radio
        if (tip8[i].checked && tip8[i].value === 'right') {
            sum += 10;
        }
    }

    if (tip9.value === 'ABC') {
        sum += 20;
    }
    document.getElementById('score').value = sum.toString();
    console.log(sum);
}