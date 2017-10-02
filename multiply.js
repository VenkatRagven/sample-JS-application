
multiply = {
		myFunction: function ()
		{
			var mytotalhours1 = document.getElementById('totalhours1').value;	
			if (mytotalhours1 >= 8)
			{
				var str = "1";
				document.getElementById("wfhAft1").disabled = true;
				document.getElementById("wfhEvng1").disabled = true;
			}
			else 
			{
				var str = "0";
				document.getElementById("aftCheckBox1").disabled = true;
				//document.getElementById("aftCheckBox2").disabled = true;
				document.getElementById("evngCheckBox1").disabled = true;
				//document.getElementById("evngCheckBox2").disabled = true;
				document.getElementById("wfhAft1").disabled = false;
			}
			var mytotalhours2 = document.getElementById('totalhours2').value;	
			if (mytotalhours2 >= 8)
			{
				var str = "1";
				document.getElementById("wfhAft2").disabled = true;
				document.getElementById("wfhEvng2").disabled = true;
			}
			else 
			{
				var str = "0";
				document.getElementById("aftCheckBox2").disabled = true;
				document.getElementById("evngCheckBox2").disabled = true;
			}
			
		}
		};
		
