import * as MODEL from "../model/model.js";

function route(){
  console.log("route function accessed");
    
    let hashTag = window.location.hash; 

    let pageName = hashTag.replace("#",""); 
    loadPageContent(pageName);

    console.log(pageName);

    // let pageContent = pageName + "Content"; 

    // if(pageName == ""){
    //     pageContent = "homeContent";

    // }

    //MODEL.contentName(pageContent);
  
}



function initlisteners (){
    $("nav a").click(function (e){
        let btnID = e.currentTarget.id;
        loadPageContent(btnID);
        
        
        console.log("click " + btnID);
    });
}

function loadPageContent(pageId){
    let contentID = pageId + "Content";
    console.log(contentID);
    
    // this is target the div of the app
    //$("#app").html(eval(contentID));

    //passes to model
    MODEL.contentName(contentID);
}



function initApp (){
    initlisteners();
}

$(document).ready(function(){
    loadPageContent("home");
    initApp();
})