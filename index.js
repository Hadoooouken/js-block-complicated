

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье',]
const date = new Date().getDay()
const today = (date + 6) % 7





week.forEach((day, index) => {

    const newDiv = document.createElement('div')
    newDiv.textContent = day
    if (day === 'Суббота' || day === 'Воскресенье') {
        newDiv.style.fontStyle = 'italic'
    }
    if (index === today) {
        newDiv.style.fontWeight = 'bold'
    }

    document.body.append(newDiv)
})




