			// Define variables
		var checkBox, input, span, currentValue;

		// Assign values to variables
		checkBox = document.getElementById("aftCheckBox1");
		input = document.getElementById("myInput");
		span = document.getElementById("result");

		// Control function
		function control() 
		{
			// Current state of the check box
			currentValue = (checkBox.checked) ? "250" : "0";
    
			// Change input value
			input.value = currentValue;
    
			// Change span element's text
			//span.innerHTML = "Current state : " + currentValue;
			calAfternoon();
		}

		// Assign control function on our checkBox element's onchange event
		checkBox.onchange = control;

		// Execute our control function once when page loads
		control();
		
		
		//----- End of First Function -------------
		
		// Define variables
		var checkBox1, input1, span1, currentValue1;

		// Assign values to variables
		checkBox1 = document.getElementById("aftCheckBox2");
		input1 = document.getElementById("myInput1");
		span1 = document.getElementById("result1");

		// Control function
		function control1() 
		{
			// Current state of the check box
			currentValue1 = (checkBox1.checked) ? "250" : "0";
    
			// Change input value
			input1.value = currentValue1;
    
			// Change span element's text
			//span.innerHTML = "Current state : " + currentValue;
			calAfternoon();
		}

		// Assign control function on our checkBox element's onchange event
		checkBox1.onchange = control1;

		// Execute our control function once when page loads
		control1();
		
		
		//------------ End of 2nd function------------
		//------------ Start of Evening Calculation---------
		
		// Define variables
		var checkBox2, input2, span2, currentValue2;

		// Assign values to variables
		checkBox2 = document.getElementById("evngCheckBox1");
		input2 = document.getElementById("myInput");
		span2 = document.getElementById("result");

		// Control function
		function control2() 
		{
			// Current state of the check box
			currentValue2 = (checkBox2.checked) ? "450" : "0";
    
			// Change input value
			input2.value = currentValue2;
    
			// Change span element's text
			//span.innerHTML = "Current state : " + currentValue;
			calEvening();
		}

		// Assign control function on our checkBox element's onchange event
		checkBox2.onchange = control2;

		// Execute our control function once when page loads
		control2();	

		//--------------End of First Evening Function--------------
		// Define variables
		var checkBox3, input3, span3, currentValue3;

		// Assign values to variables
		checkBox3 = document.getElementById("evngCheckBox2");
		input3 = document.getElementById("myInput1");
		span3 = document.getElementById("result1");

		// Control function
		function control3() 
		{
			// Current state of the check box
			currentValue3 = (checkBox3.checked) ? "450" : "0";
    
			// Change input value
			input3.value = currentValue3;
    
			// Change span element's text
			//span.innerHTML = "Current state : " + currentValue;
			calEvening();
		}

		// Assign control function on our checkBox element's onchange event
		checkBox3.onchange = control3;

		// Execute our control function once when page loads
		control3();	

		// ------------First Afternoon work from home calculation------------------
		
		var checkBox4, input4, span4, currentValue4;

		// Assign values to variables
		checkBox4 = document.getElementById("wfhAft1");
		input4 = document.getElementById("myInput");
		span4 = document.getElementById("result");

		// Control function
		function control4() 
		{
			// Current state of the check box
			currentValue4 = (checkBox4.checked) ? "150" : "0";
    
			// Change input value
			input4.value = currentValue4;
    
			// Change span element's text
			//span.innerHTML = "Current state : " + currentValue;
			calAfternoon();
		}

		// Assign control function on our checkBox element's onchange event
		checkBox4.onchange = control4;

		// Execute our control function once when page loads
		control4();
		
		// ------------Second Afternoon work from home calculation------------------
		
		var checkBox5, input5, span5, currentValue5;

		// Assign values to variables
		checkBox5 = document.getElementById("wfhAft2");
		input5 = document.getElementById("myInput1");
		span5 = document.getElementById("result2");

		// Control function
		function control5() 
		{
			// Current state of the check box
			currentValue5 = (checkBox5.checked) ? "150" : "0";
    
			// Change input value
			input5.value = currentValue5;
    
			// Change span element's text
			//span.innerHTML = "Current state : " + currentValue;
			calAfternoon();
		}

		// Assign control function on our checkBox element's onchange event
		checkBox5.onchange = control5;

		// Execute our control function once when page loads
		control5();
		
		
		// ------------First Evening work from home calculation------------------
		
		var checkBox6, input6, span6, currentValue6;

		// Assign values to variables
		checkBox6 = document.getElementById("wfhEvng1");
		input6 = document.getElementById("myInput");
		span6 = document.getElementById("result");

		// Control function
		function control6() 
		{
			// Current state of the check box
			currentValue6 = (checkBox6.checked) ? "350" : "0";
    
			// Change input value
			input6.value = currentValue6;
    
			// Change span element's text
			//span.innerHTML = "Current state : " + currentValue;
			calEvening();
		}

		// Assign control function on our checkBox element's onchange event
		checkBox6.onchange = control6;

		// Execute our control function once when page loads
		control6();
		
	// ------------Second Evening work from home calculation------------------
		
		var checkBox7, input7, span7, currentValue7;

		// Assign values to variables
		checkBox7 = document.getElementById("wfhEvng2");
		input7 = document.getElementById("myInput1");
		span7 = document.getElementById("result1");

		// Control function
		function control7() 
		{
			// Current state of the check box
			currentValue7 = (checkBox7.checked) ? "350" : "0";
    
			// Change input value
			input7.value = currentValue7;
    
			// Change span element's text
			//span.innerHTML = "Current state : " + currentValue;
			calEvening();
		}

		// Assign control function on our checkBox element's onchange event
		checkBox7.onchange = control7;

		// Execute our control function once when page loads
		control7();
		
		// ------------On Call calculation Starts------------------
		
		var checkBox8, input8, span8, currentValue8;

		// Assign values to variables
		checkBox8 = document.getElementById("oncall1");
		input8 = document.getElementById("onCallAllowance1");
		span8 = document.getElementById("result");

		// Control function
		function control8() 
		{
			// Current state of the check box
			currentValue8 = (checkBox8.checked) ? "350" : "0";
    
			// Change input value
			input8.value = currentValue8;
    
			// Change span element's text
			//span.innerHTML = "Current state : " + currentValue;
			calEvening();
		}

		// Assign control function on our checkBox element's onchange event
		checkBox8.onchange = control8;

		// Execute our control function once when page loads
		control8();
		
		// ------------Second On Call calculation------------------
		
		var checkBox9, input9, span9, currentValue9;

		// Assign values to variables
		checkBox9 = document.getElementById("oncall2");
		input9 = document.getElementById("onCallAllowance2");
		span9 = document.getElementById("result1");

		// Control function
		function control9() 
		{
			// Current state of the check box
			currentValue9 = (checkBox9.checked) ? "350" : "0";
    
			// Change input value
			input9.value = currentValue9;
    
			// Change span element's text
			//span.innerHTML = "Current state : " + currentValue;
			calEvening();
		}

		// Assign control function on our checkBox element's onchange event
		checkBox9.onchange = control9;

		// Execute our control function once when page loads
		control9();
		

