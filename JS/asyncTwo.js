console.log("NEW FILE TAKING OVER")
/*
fetch('jsons/rOne.json').then((data) => {
    console.log("Success",data);
    return data.json()
}).then((data) => {
    console.log(data);
}).catch((error)=>{
    console.log("Failed",data)
})
*/

const getSomething = async () => {
    // will always return promise
    const response = await fetch("jsons/rOne.json");
    if(response.status !== 200){
        throw new Error("Something Went Wrong")
    }
    const data = await response.json();
    return data;

};
getSomething().then((data) => console.log(data)).catch((err) => console.log(err))