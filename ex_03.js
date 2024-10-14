function checkStatus(machine) {
  machine.then((message) => {
    return new Promise((resolve, reject) => {
      resolve("I promise you to " + message);
    });
  }).then((finalMessage) => {
    console.log(finalMessage);
  }).finally(() => {
    console.log("Checking status over");
  });
}
const machine = new Promise((resolve, reject) => {
  resolve("fly to the moon"); 
});
checkStatus(machine);

