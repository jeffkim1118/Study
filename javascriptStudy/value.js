let person = {
    name: "Kim",
    age: 25,
    rating: 4.5,
    topic: "JavaScript"
  };
  
  function example(tmpPerson){
    tmpPerson.topic = "Intro to JavaScript";
    console.log(tmpPerson.topic)
  }
  
  console.log(person.topic);  // "JavaScript"
  example(person);            // "Intro to JavaScript"
  console.log(person.topic);  // "Intro to JavaScript"


  function median(array){
    let sortedArray = array.sort((a,b) => a-b)
    if(sortedArray % 2 !== 0){
      return sortedArray[Math.floor(sortedArray[sortedArray.length/2])]
    }else{
      let first = sortedArray[sortedArray.length / 2]
      let second = sortedArray[sortedArray.length / 2 - 1]
      let result = (first + second) / 2
      return result
    }
  }
  console.log(median([3,6,2,7,23,4]))


  function modeFinder(array){
    let chart = {}
   
    array.forEach(ele => {
      if(!chart[ele]){chart[ele] = 0;}
      chart[ele]++;
    })

  }
  console.log(modeFinder([3,6,2,3,7,23,4]))