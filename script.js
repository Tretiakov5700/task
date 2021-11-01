function test1 (arr){
    const result = []

    arr.forEach((element, index) => {
        if(index >= arr[arr.length - 3]) return

        if (arr[index] > arr[index + 1] && arr[index + 1] < arr[index + 2]) {
            result.push(1)
        } 
        else if (arr[index] < arr[index + 1] && arr[index + 1] > arr[index + 2]) {
            result.push(1)
        } 

        else result.push(0)
    });

    return result
}

console.log(test1([1,3,5,4,5,7]));



function test2 (){

}