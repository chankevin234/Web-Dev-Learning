/**
 * FETCH API LEARNING & EXAMPLES
 */

// fetch the API url (doesn't need to be manually defined!)
fetch("https://swapi.dev/api/people/1/") // will return a promise obj!
  .then((res) => { // res === returned response obj
    console.log("RESOLVED!", res);
    return res.json(); // also returns a promise
  })
  .then((data) => { // this converts the res.json() that is returned, into readable json
    console.log(data);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });

// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2/");
//   })
//   .then((res) => {
//     console.log("SECOND REQUEST RESOLVED!!!");
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

const loadStarWarsPeople = async () => {
  try {
    // request 1
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);
    
    // request 2
    const res2 = await fetch("https://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log("ERROR!!!", e);
  }
};

loadStarWarsPeople();
