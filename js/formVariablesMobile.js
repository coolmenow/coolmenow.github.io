//formVariables.js
 //Set up local storage

 //We use this this array when the user selects a filling from the form

var filling_prices= new Array();
 filling_prices["Dark"]=215;
 filling_prices["Medium"]=210;
 filling_prices["Light"]=205;
 filling_prices["Reflect"]=215;
 var unitsC = new Array();
 unitsC["m"]=1;
 	 
	 var materialPrice = 111;
	 var size1 = 0;
	 var size2 = 0;
	 var size3 = 0;
	 var size4 = 0;
	 var size5 = 0;
	 var size6 = 0;
	 var numberW1 = 1;
	 var numberW2 = 0;
	 var numberW3 = 0;
	 var numberW4 = 0;
	 var numberW5 = 0;
	 var numberW6 = 0;
	 var HeightWin1 = 1;
	 var HeightWin2 = 0;
	 var HeightWin3 = 0;
	 var HeightWin4 = 0;
	 var HeightWin5 = 0;
	 var HeightWin6 = 0;
        var WidthWin1 = 1;
        var WidthWin2 = 0;
        var WidthWin3 = 0;
        var WidthWin4 = 0;
        var WidthWin5 = 0;
        var WidthWin6 = 0;
        var block1RM = 0;
        var block2RM = 0;
        var block3RM = 0;
        var block4RM = 0;
        var block5RM = 0;
        var block6RM = 0;
        var block1RL = 0;
        var block2RL = 0;
        var block3RL = 0;
        var block4RL = 0;
        var block5RL = 0;
        var block6RL = 0;
        var block1R = 0;
        var block2R = 0;
        var block3R = 0;
        var block4R = 0;
        var block5R = 0;
        var block6R = 0;
        var materialType1 = 0;
        var materialType2 = 0;
        var materialType3 = 0;
        var materialType4 = 0;
        var materialType5 = 0;
        var materialType6 = 0;
        var materialPrice1 = 0;
        var materialPrice2 = 215;
        var materialPrice3 = 215;
        var materialPrice4 = 215;
        var materialPrice5 = 215;
        var materialPrice6 = 215;
	 var typeFillingPrice = 215;
	 var labourPriceT = 0;
	 var labour = 0;
    //Labour Price to do single window
    var WinPrice=15;
    var overhead = 200;
    var divobj1 = document.getElementById('materialPrice');
    var divobj2 = document.getElementById('labourPrice');
    var divobj3 = document.getElementById('totalPrice');
    var element = document.getElementById('wrap');
     //Get a reference to the form id="coolform"
    var theForm = document.forms["coolform"];
    //Get a reference to the select id="filling"
    // var selectedFilling = theForm.elements["filling"];
    // var selectedFilling2 = theForm.elements["filling2"];
    //var typeUnit = unitsC[selectedFilling2.value];
    var TotalPrice=0;
    localStorage.setItem("HeightWin1",HeightWin1);
    localStorage.setItem("WidthWin1",WidthWin1);
	localStorage.setItem("NumberWin1",numberW1);
    
    
