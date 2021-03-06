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
    center_content.style.height = "700px";
    center_content.innerHTML = "<iframe class='full-height' style='border:none;' width='100%' height='1000px' src='archive.html'></iframe>";
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
    center_content.innerHTML = COC[0][1] + "<br>" + COC[0][2] + "<br>" + COC[0][3] + "<br>" + COC[0][4] + "<br>" + COC[0][5] + "<br>" + COC[0][6] + "<br>" + COC[0][7];
    //center_content.style = "margin-left: 2em";
    subtitle.innerHTML = "";
}

function writeFilterB() {
    filterText = JSON.parse(filter);
    title.innerHTML = filterText[0].title;
    center_content.innerHTML = filterText[0].content;
    subtitle.innerHTML = "";
}


// var docRef = db.collection("content").doc("listening");

// docRef.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });



function writeListen() {
    listenText = JSON.parse(listen);
    title.innerHTML = listenText[0].title;
    center_content.innerHTML = listenText[0].content;
    subtitle.innerHTML = "";
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

