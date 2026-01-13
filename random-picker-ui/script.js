const tagsElement = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10);

        randomSelector();
    }
});

function createTags(input) {
    //create tags by splitting the input string by ','
    //filter out any empty strings and trim whitespace
    //map over the array to create a span element for each tag
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    //reset tag element
    tagsElement.innerHTML = '';

    //create and append tag elements
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsElement.appendChild(tagEl);
    });
}

function randomSelector() {
    //select a random tag and highlight it
    const times = 30;
    //set interval because the highlight of each tag should be visible
    const interval = setInterval(() => {

        //shifting to the next tag and highlight/unhighlight it
        const randomtag = pickRandomTag();
        highlightTag(randomtag);

        setTimeout(() => {
            removeHighlight(randomtag);
        }, 100);
    }, 100);

    //stop the interval and highlight the next random tag
    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);
    }, 100 * times);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    const randomIndex = Math.floor(Math.random() * tags.length);
    return tags[randomIndex];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function removeHighlight(tag) {
    tag.classList.remove('highlight');
}