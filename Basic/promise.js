const myPromise = new Promise((resolve, reject) => {
    const success = false;
    if (success) {
        resolve("Operation completed successfully");
    }
    else {
        const err = "Operation get rejected";
        reject(err);
    }
});

myPromise.then(function () {
    console.log("Hello Everyone");
}).catch(function (err) {
    console.log(err);
});