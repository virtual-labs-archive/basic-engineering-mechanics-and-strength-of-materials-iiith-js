var i;
var ud;
function start(){
	 i=1;
	 document.getElementById("rtrapeze2").style.left=744 + 'px';
	ud=setInterval(real,1500);		
	var elem1=document.getElementById("ptorque");
	var elem2=document.getElementById("pangle");
	var id1 = setInterval(frame1, 500);
  	var id2 = setInterval(frame2, 500);
  	 var k=0;
  function frame1() {
  	len1=[0.2 , 0.9 , 1.7 , 2.2 , 3.1 , 3.8 , 4.6 , 4.8 , 5.3 , 5.5 , 5.6 , 6 , 5.8 , 5.9 , 5.8 , 5.9 , 5.9 , 5.8 , 5.8 , 5.8 , 5.9 , 6 , 6 , 6.3 , 6.3 , 6.3 , 6.4 , 6.5 , 6.5];
  	if(k==29){
  		clearInterval(id1);
  	}
  	else{
  	
  	document.getElementById("ptorque").innerHTML=len1[k]+' N-m';}
  	k++;
  	
  }
var j=0;
  function frame2() {
  	len2=[0.3 , 1.2 , 2.1 , 2.7 , 3.6 , 4.5 , 5.4 , 6.3 , 7.2 , 8.1 , 9 , 9.9 , 10.8 , 11.7 , 12.6 , 13.5 , 14.4 , 18 , 27 , 36 , 45 , 51 , 60 , 150 , 240 , 600 , 1500 , 1800 , 1887];
  	if(j==29){
  		clearInterval(id2);
  	}
  	else{
  	
  	document.getElementById("pangle").innerHTML=len2[j] +' deg';}
  	j++;
  	
  }
}
function real(){
	i++;
	//document.getElementById("butt").innerHTML=i;
	if(i==10)
		{	document.getElementById("rtrapeze2").style.left=750 + 'px';
			
			clearInterval(ud);
		}
}
function myfun2()
{
	 var x = document.getElementById("chartContainer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}