
/*

Given a collection array of object and a object property, check if the object property value is truthy in all object of the array


*/ 

function truthCheck(collection, pre) {
    //loop over the array of the collection
    let preValidation = 0
    for (let object in collection){
      if(collection[object].hasOwnProperty(pre) && Boolean(collection[object][pre])){
          preValidation+=1
      }
    }
    return preValidation === collection.length;
  }

//Test 
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));