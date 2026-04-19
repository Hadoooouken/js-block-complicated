const one = () => {

    let randomNumber = Math.floor(Math.random() * 100 + 1);
    let attempt = 10;

    console.log(randomNumber);
    const two = () => {
        if (attempt <= 0) {
            const answer = confirm('"Попытки закончились, хотите сыграть еще')
            if (answer) {
                randomNumber = Math.floor(Math.random() * 10 + 1);
                console.log(randomNumber);
                attempt = 10;
                two()
            }
            else return

        }
        let a = prompt("Угадай число от 1 до 100")
        if (a === null) {
            alert('Игра окончена!')
            return
        }
        const b = Number(a)

        if (isNaN(b)) {
            alert('Введи число!')
            two()
            return
        }
        if (b > randomNumber) {
            attempt--
            alert(`Загаданное число меньше, осталось попыток ${attempt}`)
            two()
        }
        else if (b < randomNumber) {
            attempt--
            alert(`Загаданное число больше, осталось попыток ${attempt}`)
            two()
        }
        else {
            let newGame = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')
            if (newGame) {

                randomNumber = Math.floor(Math.random() * 10 + 1);
                console.log(randomNumber);
                attempt = 10;
                two()
            }
        }
    }

    two()
}



one()



