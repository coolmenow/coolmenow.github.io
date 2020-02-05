/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/


 

//This function finds the filling price based on the 
//drop down selection
function windowOpen1(WinPlace,WinName) { 
			
            Window = window.open( 
              WinPlace, 
                WinName, "width=250, height=450", 1); 
        } 
function windowOpen(WinPlace,WinName) { 
			Window.close();
            Window = window.open( 
              WinPlace, 
                WinName, "width=250, height=450", 1); 
        } 
function whenClicked1() 
{
    opener.open(EM1.html);
}
function whenClickedDone() 
{
    window.close();
    opener.open(EMFinal.html);
}
function getFillingPrice()
{   
	theForm = document.forms["coolform"];
    //Get a reference to the select id="filling"
     selectedFilling = theForm.elements["filling"];
     
    //set Filling Price equal to value user chose

    typeFillingPrice = filling_prices[selectedFilling.value];
	materialPrice1 = Math.round(parseFloat(typeFillingPrice));
    //finally we return cakeFillingPrice
    console.log("Filling R" +materialPrice1);
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
    
        block1RL=Math.round(parseFloat(WinPrice)*(parseFloat(numberW1)+parseFloat(numberW2)
        +parseFloat(numberW3)+parseFloat(numberW4)+parseFloat(numberW5)+parseFloat(numberW6))+parseFloat(materialPrice)*0.17);
    
    //finally we returconsole.log("MP R" +materialPrice);n the inscriptionPrice
    return block1RL;
}

function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    getFillingPrice();
    getSizePrice();
    labourPrice();
    console.log("MP R" +materialPrice);
    block1R = parseFloat(materialPrice)  + parseFloat(block1RL)+parseFloat(overhead);

    //display the result
    
    divobj1 = document.getElementById('materialPrice');
    divobj1.style.display='block';
    divobj1.innerHTML = "Material cost       = R"+materialPrice;
    divobj2 = document.getElementById('labourPrice');
    divobj2.style.display='block';
    labour = parseFloat(block1RL)+parseFloat(overhead);
    divobj2.innerHTML = "Installation and site labour = R"+labour;
    divobj3 = document.getElementById('totalPrice');
    divobj3.style.display='block';
    divobj3.innerHTML = "Total Price         = R"+block1R;
    localStorage.setItem("HeightWin1",HeightWin1);
    localStorage.setItem("WidthWin1",WidthWin1);
	localStorage.setItem("NumberWin1",numberW1);
	localStorage.setItem("block1R",block1R);
	localStorage.setItem("block1RL",block1R);
	localStorage.setItem("block1RM",block1R);

}
function getSizePrice1()
{	  
    //Get a reference to the form id="coolform"
    theForm = document.forms["coolform"]; 
    numberW1 = document.getElementById('NumberWin1').value;
    HeightWin1 = document.getElementById('HeightWin1').value;
	WidthWin1 = document.getElementById('WidthWin1').value;

    size1 = HeightWin1*WidthWin1;
  
    //Get a reference to the select id="filling2"
     selectedFilling2 = theForm.elements["filling2"];
    typeUnit = unitsC[selectedFilling2.value];
    //Calculate
    
        block1RM=Math.round(size1*numberW1*typeFillingPrice/typeUnit);
    
    //finally we return the inscriptionPrice
    return block1RM;
}
function labourPrice1()
{
	
    //Get a refernce to the form id="coolform"
    theForm = document.forms["coolform"];
    
    //Calculate
    
        block1RL=Math.round(parseFloat(WinPrice)*(parseFloat(numberW1)) + parseFloat(materialPrice1)*0.17);
    block1R = block1RL+block1RM;
    //finally we return the inscriptionPrice
    return block1RL;
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


function initInput1()
	{
	document.getElementById("HeightWin1").value = Math.round(parseFloat(localStorage.getItem("HeightWin1")));
	document.getElementById("WidthWin1").value = Math.round(parseFloat(localStorage.getItem("WidthWin1")));
	document.getElementById("NumberWin1").value = Math.round(parseFloat(localStorage.getItem("numberW1")));
	calculateTotal();
	
	}
	
	function initInput2()
	{
	document.getElementById("input2").value = localStorage.getItem("block1R");
	
	calculateTotal2();
	
	}

function calculateTotal2()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    getFillingPrice();
    getSizePrice2();
    labourPrice2();
    
    block2R = parseFloat(block2RL)  + parseFloat(block2RM);

    //display the result
    
    divobj1 = document.getElementById('materialPrice');
    divobj1.style.display='block';
    divobj1.innerHTML = "Material cost Block 2      = R"+block2RM;
    divobj2 = document.getElementById('labourPrice');
    divobj2.style.display='block';
    labour = parseFloat(block2RL);
    divobj2.innerHTML = "Installation and site labour = R"+labour;
    divobj3 = document.getElementById('totalPrice');
    divobj3.style.display='block';
    divobj3.innerHTML = "Total Price Block 2         = R"+block2R;
    localStorage.setItem("HeightWin2",HeightWin2);
    localStorage.setItem("WidthWin2",WidthWin2);
	localStorage.setItem("NumberWin2",numberW2);
	localStorage.setItem("block2R",block2R);
	localStorage.setItem("block2RL",block2R);
	localStorage.setItem("block2RM",block2R);

}
function getSizePrice2()
{	  
    //Get a reference to the form id="coolform"
    theForm = document.forms["coolform"]; 
    numberW2 = document.getElementById('NumberWin2').value;
    HeightWin2 = document.getElementById('HeightWin2').value;
	WidthWin2 = document.getElementById('WidthWin2').value;

    size2 = HeightWin2*WidthWin2;
  
    //Get a reference to the select id="filling2"
     selectedFilling2 = theForm.elements["filling2"];
    typeUnit = unitsC[selectedFilling2.value];
    //Calculate
    
        block2RM=Math.round(size2*numberW2*typeFillingPrice/typeUnit);
    
    //finally we return the inscriptionPrice
    return block2RM;
}
function labourPrice2()
{
	
    //Get a refernce to the form id="coolform"
    theForm = document.forms["coolform"];
    
    //Calculate
    
        block2RL=Math.round(parseFloat(WinPrice)*(parseFloat(numberW2)) + parseFloat(materialPrice2)*0.17);
    block2R = block2RL+block2RM;
    //finally we return the inscriptionPrice
    return block2RL;
}

function initInput3()
	{
	document.getElementById("input2").value = localStorage.getItem("block1R");
	document.getElementById("input3").value = localStorage.getItem("block2R");
	
	calculateTotal3();
	
	}

function calculateTotal3()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    getFillingPrice();
    getSizePrice3();
    labourPrice3();
    
    block3R = parseFloat(block3RL)  + parseFloat(block3RM);

    //display the result
    
    divobj1 = document.getElementById('materialPrice');
    divobj1.style.display='block';
    divobj1.innerHTML = "Material cost Block 3      = R"+block3RM;
    divobj2 = document.getElementById('labourPrice');
    divobj2.style.display='block';
    labour = parseFloat(block3RL);
    divobj2.innerHTML = "Installation and site labour = R"+labour;
    divobj3 = document.getElementById('totalPrice');
    divobj3.style.display='block';
    divobj3.innerHTML = "Total Price Block 3         = R"+block3R;
    localStorage.setItem("HeightWin3",HeightWin3);
    localStorage.setItem("WidthWin3",WidthWin3);
	localStorage.setItem("NumberWin3",numberW3);
	localStorage.setItem("block3R",block3R);
	localStorage.setItem("block3RL",block3R);
	localStorage.setItem("block3RM",block3R);

}
function getSizePrice3()
{	  
    //Get a reference to the form id="coolform"
    theForm = document.forms["coolform"]; 
    numberW3 = document.getElementById('NumberWin3').value;
    HeightWin3 = document.getElementById('HeightWin3').value;
	WidthWin3 = document.getElementById('WidthWin3').value;

    size3 = HeightWin3*WidthWin3;
  
    //Get a reference to the select id="filling2"
     selectedFilling3 = theForm.elements["filling2"];
    typeUnit = unitsC[selectedFilling3.value];
    //Calculate
    
        block3RM=Math.round(size3*numberW3*typeFillingPrice/typeUnit);
    
    //finally we return the inscriptionPrice
    return block3RM;
}
function labourPrice3()
{
	
    //Get a refernce to the form id="coolform"
    theForm = document.forms["coolform"];
    
    //Calculate
    
        block3RL=Math.round(parseFloat(WinPrice)*(parseFloat(numberW3)) + parseFloat(materialPrice3)*0.17);
    block3R = block3RL+block3RM;
    //finally we return the inscriptionPrice
    return block3RL;
}

function initInput4()
	{
	document.getElementById("input2").value = localStorage.getItem("block1R");
	document.getElementById("input3").value = localStorage.getItem("block2R");
	document.getElementById("input4").value = localStorage.getItem("block3R");
	calculateTotal4();
	
	}

function calculateTotal4()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    getFillingPrice();
    getSizePrice4();
    labourPrice4();
    
    block4R = parseFloat(block4RL)  + parseFloat(block4RM);

    //display the result
    
    divobj1 = document.getElementById('materialPrice');
    divobj1.style.display='block';
    divobj1.innerHTML = "Material cost Block 4      = R"+block4RM;
    divobj2 = document.getElementById('labourPrice');
    divobj2.style.display='block';
    labour = parseFloat(block4RL);
    divobj2.innerHTML = "Installation and site labour = R"+labour;
    divobj3 = document.getElementById('totalPrice');
    divobj3.style.display='block';
    divobj3.innerHTML = "Total Price Block 4         = R"+block4R;
    localStorage.setItem("HeightWin4",HeightWin4);
    localStorage.setItem("WidthWin4",WidthWin4);
	localStorage.setItem("NumberWin4",numberW4);
	localStorage.setItem("block4R",block4R);
	localStorage.setItem("block4RL",block4R);
	localStorage.setItem("block4RM",block4R);

}
function getSizePrice4()
{	  
    //Get a reference to the form id="coolform"
    theForm = document.forms["coolform"]; 
    numberW4 = document.getElementById('NumberWin4').value;
    HeightWin4 = document.getElementById('HeightWin4').value;
	WidthWin4 = document.getElementById('WidthWin4').value;

    size4 = HeightWin4*WidthWin4;
  
    //Get a reference to the select id="filling2"
     selectedFilling4 = theForm.elements["filling2"];
    typeUnit = unitsC[selectedFilling4.value];
    //Calculate
    
        block4RM=Math.round(size4*numberW4*typeFillingPrice/typeUnit);
    
    //finally we return the inscriptionPrice
    return block4RM;
}
function labourPrice4()
{
	
    //Get a refernce to the form id="coolform"
    theForm = document.forms["coolform"];
    
    //Calculate
    
        block4RL=Math.round(parseFloat(WinPrice)*(parseFloat(numberW4)) + parseFloat(materialPrice4)*0.17);
    block4R = block4RL+block4RM;
    //finally we return the inscriptionPrice
    return block4RL;
}

function initInput5()
	{
	document.getElementById("input2").value = localStorage.getItem("block1R");
	document.getElementById("input3").value = localStorage.getItem("block2R");
	document.getElementById("input4").value = localStorage.getItem("block3R");
	document.getElementById("input5").value = localStorage.getItem("block4R");
	block1RL = localStorage.getItem("block1RL");
	block1RM = localStorage.getItem("block1RM");
	block2RL = localStorage.getItem("block2RL");
	block2RM = localStorage.getItem("block2RM");
	block3RL = localStorage.getItem("block3RL");
	block3RM = localStorage.getItem("block3RM");
	block4RL = localStorage.getItem("block4RL");
	block4RM = localStorage.getItem("block4RM");
	
	
	calculateTotal5();
	
	}

function calculateTotal5()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    getFillingPrice();
    
    
    block5RL = parseFloat(block1RL) + parseFloat(block2RL) + parseFloat(block3RL)  + parseFloat(block4RL);
    block5RM = parseFloat(block1RM)  + parseFloat(block2RM) + parseFloat(block3RM)  + parseFloat(block4RM);
	block5R = parseFloat(block5RL)  + parseFloat(block5RM);
    //display the result
    
    divobj1 = document.getElementById('materialPrice');
    divobj1.style.display='block';
    divobj1.innerHTML = "Material cost       = R"+block5RM;
    divobj2 = document.getElementById('labourPrice');
    divobj2.style.display='block';
    labour = parseFloat(block5RL);
    divobj2.innerHTML = "Installation and site labour = R"+labour;
    divobj3 = document.getElementById('totalPrice');
    divobj3.style.display='block';
    divobj3.innerHTML = "Total Price All Blocks         = R"+block5R;

	localStorage.setItem("block5R",block5R);
	localStorage.setItem("block5RL",block5RL);
	localStorage.setItem("block5RM",block5RM);

}


