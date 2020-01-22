const arr = [1, 23, 3, 5, 2, 8, 7];

const qsort = (arr) => {
    if (arr.length < 2){
        return arr;
    } else {
        const pivot = arr[Math.floor(Math.random() * arr.length)];
        const less = arr.filter(value => value < pivot);
        const greater = arr.filter(value => value > pivot);
        return [...qsort(less), pivot, ...qsort(greater)];
    }
    
    return;
};

console.log(qsort(arr));