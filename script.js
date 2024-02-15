const URL= "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector("#fact");
const btn= document.querySelector("#btn");

// multi word
const getFacts = async () => {
    console.log("getting data..................");
    let response =  await fetch(URL);
    let data = await response.json();
    
    // Generate a random index to select a random fact
    const randomIndex = Math.floor(Math.random() * data.length);
    
    // Display the random fact
    factPara.innerText = data[randomIndex].text;
};


/*  one word
const getFacts = async () => {                                // best way
    console.log("getting data..................");
    let response =  await fetch(URL);
    console.log(response); //JSON format

    let data = await response.json();
    factPara.innerText = data[3].text;
};*/  





// another way
/*function getFacts(){
    fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        factPara.innerText = data[0].text;
    });
}
*/

btn.addEventListener("click",getFacts);