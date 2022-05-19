//Asynchronous Code
const fetchData = (callback) => {
  setTimeout(() => {
    callback("Done!!!!!");
  }, 5000);
};
setTimeout(() => {
  console.log("Timer is Done");
  fetchData((text) => console.log(text));
}, 10000);
//Synchronous Code
console.log("Hello");
console.log("Hi");
