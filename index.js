


const quickSort = (arr)=>{
    if (arr.length <= 1){
        return arr
    }

    let pivot = arr[0]
    let leftArr = [];
    let rightArr = [];
    for (let i = 1 ; i < arr.length ; i++){
        if (arr[i] < pivot){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }
    
    leftArr =  quickSort(leftArr)
    rightArr =  quickSort(rightArr)
    let newArray = [...leftArr , pivot , ...rightArr]
    return newArray
}




let array =  quickSort([9,8,7,6,2,4,7,8,5,6,32,1,4,5,8,9])

console.log(array)