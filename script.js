function userAge() {
    const name = document.getElementById('name').value;

    const surname = document.getElementById('surname').value;

    const yourAge = document.getElementById('yourAge');

    if(name == "" || surname == ""){
        alert('Введите Ваше имя или фамилию')
    }

    else if(yourAge>=18){
        alert('Добро пожаловать на сайт');
    }

    else if(yourAge<18 || typeof yourAge !=='number'){
        alert('Вход воспрещен');
    }
}