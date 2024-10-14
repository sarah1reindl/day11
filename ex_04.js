function initializeMachine(machineName, timeRequired) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${machineName} initialized`); 
        }, timeRequired * 3000); 
    });
}
initializeMachine("Computer", 3).then((value) => {
    console.log(value); 
});
