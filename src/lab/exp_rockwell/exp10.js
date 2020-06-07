function myfun1()
{
	var elem1=document.getElementById("tup1");
	var pos1=225;
	var id1 = setInterval(frame1, 50);
	function frame1() {
    if (pos1 == 290) {
      elem1.style.top = 285 + 'px'; 
      clearInterval(id1);
    } else {
      pos1++; 
      elem1.style.top = pos1 + 'px'; 
      //elem.style.left = pos + 'px'; 
    }
  }
}