
const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets'); // PARENT tag

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

// EVENT DELEGATION EXAMPLE
tweetsContainer.addEventListener('click', function (e) {
    console.log("Clicked on LIs under the UL parent!")
    console.log(e);
    e.target.nodeName === 'LI' && e.target.remove();
})

