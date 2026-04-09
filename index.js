let leng = prompt('');

const daysEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const daysRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

if (leng === "ru") {
    console.log(daysRu)
}

else if (leng === 'en') {
    console.log(daysEn)
}

else console.log("выберите ru или en");

switch (leng) {
    case 'ru':
        console.log(daysRu);
        break;

    case 'en':
        console.log(daysEn);
        break;

    default:
        console.log('выберите ru или en');
        break;
}

const AllLanguage = [
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
];

const langKey = {
    en: 0,
    ru: 1
}

console.log(AllLanguage[langKey[leng]] || console.log('выберите ru или en'));

let namePerson = prompt('Введите имя')



const res = namePerson === 'Артем' ? 'директор'
    : namePerson === 'Александр' ? 'преподаватель'
        : 'студент';

console.log(res);