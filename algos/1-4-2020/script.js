let arr = [7, 5, 3, 4, 2, 8, 1]

function bubblesort(array) {
    arr = array
    newArr = []

    for (let R = 0; R < arr.length; R++) {
        let L = arr.length - newArr.length
        if (arr[L] > arr[R]) {
            console.log(L)
        }
    }
}

bubblesort(arr)