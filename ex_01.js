function promiseMe(promise) {
    return new Promise((resolve, reject) => {
        resolve("i promise you to" + promise);
    });
}
promiseMe (" fly to the moon ") . then (( value ) => {
console . log ( value ) ;
}) ;
