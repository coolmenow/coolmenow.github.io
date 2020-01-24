/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/

 //Set up an associative array

 //We use this this array when the user selects a filling from the form
 var filling_prices= new Array();
 filling_prices["None"]=0;
 filling_prices["Dark"]=215;
 filling_prices["Medium"]=210;
 filling_prices["Light"]=205;
 filling_prices["Reflect"]=215;
 var unitsC = new Array();
 unitsC["mm"]=1000000;
 unitsC["cm"]=10000;
 unitsC["m"]=1;
 	 
	 var materialPrice = 10;
	 var size1 = 0;
	 var size2 = 0;
	 var size3 = 0;
	 var size4 = 0;
	 var size5 = 0;
	 var size6 = 0;
	 var numberW1 = 0;
	 var numberW2 = 0;
	 var numberW3 = 0;
	 var numberW4 = 0;
	 var numberW5 = 0;
	 var numberW6 = 0;
	 var HeightWin1 = 0;
	 var HeightWin2 = 0;
	 var HeightWin3 = 0;
	 var HeightWin4 = 0;
	 var HeightWin5 = 0;
	 var HeightWin6 = 0;
        var WidthWin1 =0;
        var WidthWin2 =0;
        var WidthWin3 =0;
        var WidthWin4 =0;
        var WidthWin5 =0;
        var WidthWin6 =0;
	 var typeFillingPrice=0;
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
     var selectedFilling = theForm.elements["filling"];
     var selectedFilling2 = theForm.elements["filling2"];
    var typeUnit = unitsC[selectedFilling2.value];
    var TotalPrice=0;

//This function finds the filling price based on the 
//drop down selection
function getFillingPrice()
{   
	theForm = document.forms["coolform"];
    //Get a reference to the select id="filling"
     selectedFilling = theForm.elements["filling"];
     
    //set Filling Price equal to value user chose

    typeFillingPrice = filling_prices[selectedFilling.value];
	
    //finally we return cakeFillingPrice
    return typeFillingPrice;
}

function getSizePrice()
{	  
    //Get a reference to the form id="coolform"
    theForm = document.forms["coolform"];
    //Get a reference to the id="NumberWin"
    numberW1 = theForm.elements["NumberWin1"];
    //HeightWin1 = theForm.elements["HeightWin1"];
    WidthWin1 = theForm.elements["WidthWin1"];  
    numberW1 = document.getElementById('NumberWin1').value;
    HeightWin1 = document.getElementById('HeightWin1').value;
    WidthWin1 = document.getElementById('WidthWin1').value;
    numberW2 = theForm.elements["NumberWin2"];
    HeightWin2 = theForm.elements["HeightWin2"];
    WidthWin2 = theForm.elements["WidthWin2"];  
    numberW2 = document.getElementById('NumberWin2').value;
    HeightWin2 = document.getElementById('HeightWin2').value;
    WidthWin2 = document.getElementById('WidthWin2').value;
    numberW3 = theForm.elements["NumberWin3"];
    HeightWin3 = theForm.elements["HeightWin3"];
    WidthWin3 = theForm.elements["WidthWin3"];  
    numberW3 = document.getElementById('NumberWin3').value;
    HeightWin3 = document.getElementById('HeightWin3').value;
    WidthWin3 = document.getElementById('WidthWin3').value;
    numberW4 = theForm.elements["NumberWin4"];
    HeightWin4 = theForm.elements["HeightWin4"];
    WidthWin4 = theForm.elements["WidthWin4"];  
    numberW4 = document.getElementById('NumberWin4').value;
    HeightWin4 = document.getElementById('HeightWin4').value;
    WidthWin4 = document.getElementById('WidthWin4').value;
    numberW5 = theForm.elements["NumberWin5"];
    HeightWin5 = theForm.elements["HeightWin5"];
    WidthWin5 = theForm.elements["WidthWin5"];  
    numberW5 = document.getElementById('NumberWin5').value;
    HeightWin5 = document.getElementById('HeightWin5').value;
    WidthWin5 = document.getElementById('WidthWin5').value;
    numberW6 = theForm.elements["NumberWin6"];
    HeightWin6 = theForm.elements["HeightWin6"];
    WidthWin6 = theForm.elements["WidthWin6"];  
    numberW6 = document.getElementById('NumberWin6').value;
    HeightWin6 = document.getElementById('HeightWin6').value;
    WidthWin6 = document.getElementById('WidthWin6').value;
    size1 = HeightWin1*WidthWin1;
    size2 = HeightWin2*WidthWin2;
    size3 = HeightWin3*WidthWin3;
    size4 = HeightWin4*WidthWin4;
    size5 = HeightWin5*WidthWin5;
    size6 = HeightWin6*WidthWin6;
    //Get a reference to the select id="filling2"
     selectedFilling2 = theForm.elements["filling2"];
    typeUnit = unitsC[selectedFilling2.value];
    //Calculate
    
        materialPrice=Math.round(size1*numberW1*typeFillingPrice/typeUnit +
								size2*numberW2*typeFillingPrice/typeUnit +
								size3*numberW3*typeFillingPrice/typeUnit +
								size4*numberW4*typeFillingPrice/typeUnit +
								size5*numberW5*typeFillingPrice/typeUnit +
								size6*numberW6*typeFillingPrice/typeUnit);
    
    //finally we return the inscriptionPrice
    return materialPrice;
}

function labourPrice()
{
	
    //Get a refernce to the form id="coolform"
    theForm = document.forms["coolform"];
    
    //Calculate
    
        labourPriceT=Math.round(parseFloat(WinPrice)*(parseFloat(numberW1)+parseFloat(numberW2)
        +parseFloat(numberW3)+parseFloat(numberW4)+parseFloat(numberW5)+parseFloat(numberW6))+parseFloat(materialPrice)*0.17);
    
    //finally we return the inscriptionPrice
    return labourPriceT;
}
        
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    getFillingPrice();
    getSizePrice();
    labourPrice();
    
    TotalPrice = parseFloat(materialPrice)  + parseFloat(labourPriceT) + parseFloat(overhead);
    
    //cakePrice = 20;
    //display the result
    
    divobj1 = document.getElementById('materialPrice');
    divobj1.style.display='block';
    divobj1.innerHTML = "Material cost       = R"+materialPrice;
    divobj2 = document.getElementById('labourPrice');
    divobj2.style.display='block';
    labour = parseFloat(labourPriceT)+parseFloat(overhead);
    divobj2.innerHTML = "Installation and site labour = R"+labour;
    divobj3 = document.getElementById('totalPrice');
    divobj3.style.display='block';
    divobj3.innerHTML = "Total Price         = R"+TotalPrice;

}
function pdf()
{
   
    element = document.getElementById('wrap');
	html2pdf(element);

}

function hideTotal()
{
   // var divobj = document.getElementById('totalPrice');
   // divobj.style.display='none';
}
