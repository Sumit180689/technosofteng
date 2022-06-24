function onBodyLoad(){
    var hideTab= document.getElementById("tanks");
    hideTab.style.display="flex";
    var selectedTab = document.getElementById("tab_tanks");
    selectedTab.style.color="#1c1c1c";
    selectedTab.style.backgroundColor="#efefef";
}
function show(tabname){
    var hideTab= document.getElementById("tanks");
    hideTab.style.display="none";
    var selectedTab = document.getElementById("tab_tanks");
    selectedTab.style.color="#1c1c1c";
    selectedTab.style.backgroundColor="#efefef";
    var hideTab= document.getElementById("mixers");
    hideTab.style.display="none";
    var selectedTab = document.getElementById("tab_mixers");
    selectedTab.style.color="#1c1c1c";
    selectedTab.style.backgroundColor="#efefef";
    var hideTab= document.getElementById("briners");
    hideTab.style.display="none";
    var selectedTab = document.getElementById("tab_briners");
    selectedTab.style.color="#1c1c1c";
    selectedTab.style.backgroundColor="#efefef";
    var hideTab= document.getElementById("polytank");
    hideTab.style.display="none";
    var selectedTab = document.getElementById("tab_polytank");
    selectedTab.style.color="#1c1c1c";
    selectedTab.style.backgroundColor="#efefef";
    var hideTab= document.getElementById("level");
    hideTab.style.display="none";
    var selectedTab = document.getElementById("tab_level");
    selectedTab.style.color="#1c1c1c";
    selectedTab.style.backgroundColor="#efefef";
    
    var tabId='tab_'+ tabname;
    var selectedTab = document.getElementById(tabId);
    selectedTab.style.color="brown";
    selectedTab.style.backgroundColor="#ffffff";
    selectedTab.style.fontWeight="900";        
    var tabToSelect = document.getElementById(tabname);
    tabToSelect.style.display="flex";

       
}
