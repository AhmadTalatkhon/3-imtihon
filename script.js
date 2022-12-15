let qozi = 0
function mavzu() {
    qozi = qozi + 1
    if (qozi % 2 == 0) {
        document.body.style.backgroundColor = 'grey';
        document.getElementById("salloha").style.color = 'white';

    }
    else {
        document.body.style.backgroundColor = 'white';
        document.getElementById("salloha").style.color = 'black';

    }
}

//1

btn.onclick = function (e) {
    let search = document.getElementById("search");
    let lavozim = search.value;
    let btn = document.getElementById("btn");
    e.preventDefault();
    switch (lavozim) {
        case "Direktor":
        case "direktor":
            document.getElementById("mavjud").style.display = "block";
            document.getElementById("mavjud-emas").style.display = "none";
            document.getElementById("mavjudroq").style.display = "none";
            document.getElementById("no-login").style.display = "none";


            break;
        case "Ishchi":
        case "ishchi":
            document.getElementById("mavjud").style.display = "none";
            document.getElementById("mavjud-emas").style.display = "none";
            document.getElementById("mavjudroq").style.display = "block";
            document.getElementById("no-login").style.display = "none";


            break;
        case "":
            document.getElementById("mavjud").style.display = "none";
            document.getElementById("mavjud-emas").style.display = "none";
            document.getElementById("mavjudroq").style.display = "none";
            document.getElementById("no-login").style.display = "block";


            break;
        default:
            document.getElementById("mavjud-emas").style.display = "block";
            document.getElementById("mavjud").style.display = "none";
            document.getElementById("mavjudroq").style.display = "none";
            break;

    }
}

//2

function farq(e) {
    e.preventDefault();
    let a = document.getElementById("input").value;

    let b = document.getElementById("input2").value;

    c = new Date(a);

    d = new Date(b);

    let ayirma = c.getTime() - d.getTime();

    let day = ayirma / 3600 / 24 / 1000;

    document.getElementById("result").innerHTML = day + " " + "kun"
}

//3

let son_kiritish = document.getElementById('son-kiritish');

son_kiritish.addEventListener('input', (event) => {
    let enter_son = document.getElementById("enter-son");
    let qiymat = +event.target.value;
    let m = Math.floor(qiymat / 10);
    let n = qiymat % 10
    let a = Math.ceil(qiymat / 10)
    switch (m) {
        case 1: m_value = "o'n"; break;
        case 2: m_value = "yigirma"; break;
        case 3: m_value = "o'ttiz"; break;
        case 4: m_value = "qirq"; break;
        case 5: m_value = "ellik"; break;
        case 6: m_value = "oltimish"; break;
        case 7: m_value = "yetimish"; break;
        case 8: m_value = "sakson"; break;
        case 9: m_value = "toqson"; break;
    }
    switch (n) {
        case 0: n_value = "nol"; break;
        case 1: n_value = "bir"; break;
        case 2: n_value = "ikki"; break;
        case 3: n_value = "uch"; break;
        case 4: n_value = "tort"; break;
        case 5: n_value = "besh"; break;
        case 6: n_value = "olti"; break;
        case 7: n_value = "yetti"; break;
        case 8: n_value = "sakkiz"; break;
        case 9: n_value = "toqqiz"; break;
    }
    if (qiymat === 10) {
        enter_son.innerHTML = "o'n";
    }
    else if (a == 1) {
        enter_son.innerHTML = n_value;
    }
    else if (n == 0) {
        enter_son.innerHTML = m_value;
    }
    else {
        enter_son.innerHTML = m_value + n_value
    }
})

//5

let array_2 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let array_3 = [4, 2, 21, 12, 13, 34, 46, 79, 10, 21, 34];
let natija_array = [];
let qiymat_array = document.getElementById("natija_five")

for (let i = 0; i < array_2.length; i++) {
    let yigindi = array_2[i] + array_3[i];
    natija_array.push(yigindi);
}
qiymat_array.innerHTML = `[${natija_array.join(', ')}]`;
//4

let massivHarPlus3 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let natija_fourHar3 = (3 + 5 + 22 + 5 + 7 + 2 + 45 + 75 + 89 + 21 + 2) + 3 * 11
document.getElementById("natija_four").innerText = "Natija" + " " + natija_fourHar3
console.log(natija_fourHar3);

//6
let names = document.getElementById("names");
let all = document.getElementById("all");
names.addEventListener('change', function (e) {
    e.preventDefault();
    let p = document.createElement('p');
    all.append(p)
    e.target.value = '';
})

//9
let ismlar = document.getElementById('Ismlar');
let ism_chiqarish = document.getElementById('ism_chiqarish');

let ism_list = document.getElementsByClassName('ism_list')[0];
ism_list.onsubmit = function (event) {
    event.preventDefault();
}

ismlar.addEventListener('keyup', chiqarish)

function chiqarish(e) {
    if (e.keyCode == 13) {
        let p = document.createElement('p');
        p.innerHTML = ismlar.value;
        ism_chiqarish.appendChild(p);
    }
}
//8
let array_dalete = [2, 7, 42, 23, 6, 53, 12, 4, 18];
let array_ochirish = document.querySelector('.array_ochirish');
let btn_dalete = document.getElementById('btn_dalete');
let och_array = document.getElementById('och-array');
btn_dalete.addEventListener('click', () => {
    array_ochirish.value
    let p = document.createElement('p')
    for (let i = 0; i < array_dalete.length; i++) {
        if (array_ochirish.value == array_dalete[i]) {
            delete array_dalete[i]
        }
    }
    console.log(array_dalete);
    p.innerHTML = `[${array_dalete.join(' ')}]`;
    och_array.appendChild(p);
});