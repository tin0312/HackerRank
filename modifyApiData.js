// this url return an array of object which each represent an emoji
const url = 'https://apis.scrimba.com/emojihub/api/all/category/animals-and-nature';
// flowerBed is the <ul> html element
const flowerBed = document.querySelector('.emoji-flower-bed');

function clearTheGarden(arr){
    // filter by group property - "animal bug" && "plant flower"
    return arr.filter(emoji => emoji.group === "animal bug" || emoji.group === "plant flower");
}


fetch(url) 
    .then(response => response.json())
    // use the clearTheGarden after parsing the data to filter the required groups
    .then(result => clearTheGarden(result))
    .then((data) => {
        data.forEach(emoji => {
            flowerBed.innerHTML += `<li>${emoji.htmlCode}</li>`;
        });    
    })
    .catch(err => console.log(err));
