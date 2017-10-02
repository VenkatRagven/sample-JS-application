<!-- calculation script -->

<script type="text/javascript">

function calTotal()
{
    var strval;
	var strval1;
	var strval2;
	var strval3;
	var strval4;
	var strval5;
	var strval6;
	var strval7;
	var strval8;
	var strval9;
	var strval10;
	var strval11;
	var strval12;
	var strval13;
	var strval14;
	var strval15;
	var strval16;
	var strval17;
	var strval18;
	var strTotal;
	var strMissed;
	
	
	var strval19;
	var strval20;
	var strval21;
	var strval22;
	var strval23;
	
	
	if(document.getElementById("fill1").value=='')
	{
	strval1=0;
	}
	else
	{
	strval1=document.getElementById("fill1").value;
	}
	
	if(document.getElementById("fill2").value=='')
	{
	strval2=0;
	}
	else
	{
	strval2=document.getElementById("fill2").value;
	}
	
	if(document.getElementById("fill3").value=='')
	{
	strval3=0;
	}
	else
	{
	strval3=document.getElementById("fill3").value;
	}
	
	
	
	if(document.getElementById("fill4").value=='')
	{
	strval4=0;
	}
	else
	{
	strval4=document.getElementById("fill4").value;
	}
	
	if(document.getElementById("fill5").value=='')
	{
	strval5=0;
	}
	else
	{
	strval5=document.getElementById("fill5").value;
	}
	
	if(document.getElementById("fill6").value=='')
	{
	strval6=0;
	}
	else
	{
	strval6=document.getElementById("fill6").value;
	}
	
	if(document.getElementById("fill7").value=='')
	{
	strval7=0;
	}
	else
	{
	strval7=document.getElementById("fill7").value;
	}
	
	if(document.getElementById("fill8").value=='')
	{
	strval8=0;
	}
	else
	{
	strval8=document.getElementById("fill8").value;
	}
	
	if(document.getElementById("fill9").value=='')
	{
	strval9=0;
	}
	else
	{
	strval9=document.getElementById("fill9").value;
	}
	
	if(document.getElementById("fill10").value=='')
	{
	strval10=0;
	}
	else
	{
	strval10=document.getElementById("fill10").value;
	}
	
	if(document.getElementById("fill11").value=='')
	{
	strval11=0;
	}
	else
	{
	strval11=document.getElementById("fill11").value;
	}
	
	if(document.getElementById("fill12").value=='')
	{
	strval12=0;
	}
	else
	{
	strval12=document.getElementById("fill12").value;
	}
	
	if(document.getElementById("fill13").value=='')
	{
	strval13=0;
	}
	else
	{
	strval13=document.getElementById("fill13").value;
	}
	
		if(document.getElementById("fill14").value=='')
	{
	strval14=0;
	}
	else
	{
	strval14=document.getElementById("fill14").value;
	}
	
		if(document.getElementById("fill15").value=='')
	{
	strval15=0;
	}
	else
	{
	strval15=document.getElementById("fill15").value;
	}
	
		if(document.getElementById("fill16").value=='')
	{
	strval16=0;
	}
	else
	{
	strval16=document.getElementById("fill16").value;
	}
	
		if(document.getElementById("fill17").value=='')
	{
	strval17=0;
	}
	else
	{
	strval17=document.getElementById("fill17").value;
	}
	
		if(document.getElementById("fill18").value=='')
	{
	strval18=0;
	}
	else
	{
	strval18=document.getElementById("fill18").value;
	}
	
	if(document.getElementById("text14").value==0 && document.getElementById("text14").value!='')
	{
	strval19=0;
	}
	else
	{
	strval19=1;
	}
	
	if(document.getElementById("text15").value==0 && document.getElementById("text15").value!='')
	{
	strval20=0;
	}
	else
	{
	strval20=1;
	}
	
	if(document.getElementById("text16").value==0 && document.getElementById("text16").value!='')
	{
	strval21=0;
	}
	else
	{
	strval21=1;
	}
	
	if(document.getElementById("text17").value==0 && document.getElementById("text17").value!='')
	{
	strval22=0;
	}
	else
	{
	strval22=1;
	}
	
	if(document.getElementById("text18").value==0 && document.getElementById("text18").value!='')
	{
	strval23=0;
	}
	else
	{
	strval23=1;
	}
	
		
	strTotal=parseFloat(parseFloat(strval)+parseFloat(strval1)+parseFloat(strval2)+parseFloat(strval3)+parseFloat(strval4)+parseFloat(strval5)+parseFloat(strval6)+parseFloat(strval7)+parseFloat(strval8)+parseFloat(strval9)
	+parseFloat(strval10) + parseFloat(strval11) + parseFloat(strval12) + parseFloat(strval13) + parseFloat(strval14) + parseFloat(strval15) + parseFloat(strval16) + parseFloat(strval17) +
	parseFloat(strval18) ) * parseFloat(strval19) * parseFloat(strval20) * parseFloat(strval21) * parseFloat(strval22) * parseInt(strval23);

	strMissed=100-strTotal;


	document.getElementById("output").value=strTotal;
	document.getElementById("missing").value=strMissed;
	
}
</script>
