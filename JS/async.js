console.log(1);
console.log(2);

setTimeout(() => {
    console.log("Callback Function Fired");
}, 2000);
// didn't stop the following lines from running
console.log(3);
console.log(4);

const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        //console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback("Could Not Fetch", undefined);
        }
    })

    request.open('GET', resource)
    request.send();
};
// callback hell
getTodos('jsons/rOne.json', (error, data) => {
    console.log(error, data);
    getTodos('jsons/rTwo.json', (error, data) => {
        console.log(error, data);

        getTodos('jsons/rThree.json', (error, data) => {
            console.log(error, data)
        })
    })
})

// Promise

const getSomething = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject("Could Not Fetch");
            }
        })

        request.open('GET', resource)
        request.send();
    });
}
getSomething("jsons/rOne.json").then((data) => {
    console.log("Promise Resolved",data);
    return getSomething("jsons/rTwo.json");
}).then((data) => {
    console.log("Promise 2 Resolved", data);
    return getSomething("jsons/rThree.json");
}).then((data) => {
    console.log("Promise 3 Resolved",data)
}).catch((error) => {
    console.log("Promise Rejected",error);
});