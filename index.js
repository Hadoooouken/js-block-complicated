const foo = (data) => {
    if (typeof (data) !== 'string') {
        console.log('это не строка');
        return
    }
    let trimString = data.trim()

    if (trimString.length > 30) {
        return trimString.slice(0, 30) + '...';
    }
    else return trimString;


}

console.log(foo(' гло-Академия ')); 