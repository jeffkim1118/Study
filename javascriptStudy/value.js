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