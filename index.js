const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const monthName = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
];

const hourArr = ['час', 'часа', 'часов']
const minutesArr = ['минута', 'минуты', 'минут']
const secondArr = ['секунда', 'секунды', 'секунд']


const p = document.createElement('p')
const p2 = document.createElement('p')
document.body.append(p)
document.body.append(p2)


const editTimer = (num) => {

    if (num < 10) {
        return '0' + num
    }
    else return num

}

const numWord = (value, words) => {
    value = Math.abs(value) % 100
    const lastNum = value % 10

    if (value > 10 && value < 20) return words[2]
    if (lastNum > 1 && lastNum < 5) return words[1]
    if (lastNum === 1) return words[0]
    return words[2]
}

setInterval(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const today = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const todayCheck = day === 0 ? 6 : day - 1;
    const formatedMonth = editTimer(month + 1);
    const formatedDay = editTimer(today);
    const formatedHour = editTimer(hour);
    const formatedMinute = editTimer(minute);
    const formatedSecond = editTimer(second);
    const res = `Сегодня ${week[todayCheck]}, ${today} ${monthName[month]} ${year} года, ${formatedHour} ${numWord(hour, hourArr)} ${formatedMinute} ${numWord(minute, minutesArr)} ${formatedSecond} ${numWord(second, secondArr)}`;
    const res2 = `${formatedDay}.${formatedMonth}.${year}  - ${formatedHour}:${formatedMinute}:${formatedSecond}`


    p.textContent = res
    p2.textContent = res2

}, 1000);

