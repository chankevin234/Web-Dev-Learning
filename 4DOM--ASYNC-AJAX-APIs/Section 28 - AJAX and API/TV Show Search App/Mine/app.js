// grab the form element
let form = document.querySelector('#searchForm');

// do something when form is submitted
form.addEventListener('submit', async function (event) {
    event.preventDefault();

    // extract the user input
    let userInput = this.elements.query.value;
    console.log(userInput);

    // you can set the params for the query string of the API
    // AKA query string object
    let config = { 
        params: {
            q: userInput
    }}

    // utilize axios to use 'get' on api
        // let response = await axios.get(`https://api.tvmaze.com/search/shows?q=${userInput}`);
    let response = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    console.log(response.data); // will get array of items/objs!

    // makeImages to append all results to the doc body
    makeImages(response.data);

    // clear the form afterwards
    form.elements.query.value = '';
});

// append all the search results
function makeImages(shows) {
    for (let result of shows) {
        if (result.show.image) {
            // create a new image
            let newImg = document.createElement('img');

            // grab 1 result
            let imageSrc = result.show.image.medium;

            // set the source of the new image
            newImg.src = imageSrc;

            // append it to the document body
            document.body.append(newImg);

        }
    }
}