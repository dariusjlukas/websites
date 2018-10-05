var center_content = document.getElementById('center_content');
var title = document.getElementById('title');
var subtitle = document.getElementById('subtitle');

function hideNav(){
    document.getElementById("sideBar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("sourceLink").innerHTML = "";
    document.getElementById("show").innerHTML = "show >";
}

function showNav(){
    document.getElementById("sideBar").style.width = "230px";
    document.getElementById("main").style.marginLeft = "230px";
    document.getElementById("show").innerHTML = "";
    document.getElementById("sourceLink").innerHTML = "Source";
}

function writeIntro() {
    introText = JSON.parse(home);
    center_content.innerHTML = introText[0].intro;
    title.innerHTML = introText[0].title;
    subtitle.innerHTML = introText[0].subtitle;
}

function writeArchive() {
    classArchive = JSON.parse(archive);
    title.innerHTML = classArchive[0].title;
    center_content.innerHTML = "";
    subtitle.innerHTML = "";
}

function writeRelevance() {
    relevance_text = JSON.parse(relevance);
    title.innerHTML = relevance_text[0].title;
    center_content.innerHTML = relevance_text[0].content;
    subtitle.innerHTML = "";
}

function writeCOC() {
    COC = JSON.parse(codeOfConduct);
    title.innerHTML = COC[0].title;
    center_content.innerHTML = COC[0][1] + "<br>" + COC[0][2] + "<br>" + COC[0][3] + "<br>" + COC[0][4] + "<br>" + COC[0][5];
    //center_content.style = "margin-left: 2em";
    subtitle.innerHTML = "";
}


