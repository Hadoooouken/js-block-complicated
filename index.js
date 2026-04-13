const arr = ['2225', '52555', '333', '444', '777', '888', '4546616']

const newArr = arr.filter((item) => {
    return item.startsWith('2') || item.startsWith('4')
})

console.log(newArr);

let filtered = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
        console.log(arr[i]);
        filtered.push(arr[i])
    }
}

console.log(filtered);

