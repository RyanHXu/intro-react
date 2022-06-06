

const getAsyncData = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a===1){
                resolve('Async Data');
            }else{
                reject('Error');
            }
        }, 1000);
    });
}



getAsyncData(1).then(data => {
    console.log(data);
});
