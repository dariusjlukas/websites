var center_content = document.getElementById('center_content');
var title = document.getElementById('title');

function writeIntro() {
    introText = JSON.parse(home);
    center_content.innerHTML = introText[0].intro;
    title.innerHTML = introText[0].title;
}

function writeArchive() {
    classArchive = JSON.parse(archive);
    title.innerHTML = classArchive[0].title;
}

function writeRelevance() {
    relevance_text = JSON.parse(relevance);
    title.innerHTML = relevance_text[0].title;
    center_content.innerHTML = relevance_text[0].content;
}


