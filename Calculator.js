function myfun0() {
			document.getElementById("inp").value+=document.getElementById("btn0").value;
		}
		function myfun1() {
			document.getElementById("inp").value+=document.getElementById("btn1").value;
		}
		function myfun2() {
			document.getElementById("inp").value+=document.getElementById("btn2").value;
		}
		function myfun3() {
			document.getElementById("inp").value+=document.getElementById("btn3").value;
		}
		function myfun4() {
			document.getElementById("inp").value+=document.getElementById("btn4").value;
		}
		function myfun5() {
			document.getElementById("inp").value+=document.getElementById("btn5").value;
		}
		function myfun6() {
			document.getElementById("inp").value+=document.getElementById("btn6").value;
		}
		function myfun7() {
			document.getElementById("inp").value+=document.getElementById("btn7").value;
		}
		function myfun8() {
			document.getElementById("inp").value+=document.getElementById("btn8").value;
		}
		function myfun9() {
			document.getElementById("inp").value+=document.getElementById("btn9").value;
		}
		function myfunplus() {
			document.getElementById("inp").value+=document.getElementById("+").value;
		}
		function myfunminus() {
			document.getElementById("inp").value+=document.getElementById("-").value;
		}
		function myfunnmultiplication() {
			document.getElementById("inp").value+=document.getElementById("*").value;
		}
		function myfunndivision() {
			document.getElementById("inp").value+=document.getElementById("/").value;
		}
		function myfunoutput(){
		var x=eval(document.getElementById("inp").value);
		document.getElementById("out").value=x;
		}
		function myfunac(){
    		var value = document.getElementById("inp").value;
    		document.getElementById("inp").value = value.substr(0, value.length - value.length);
    		var value = document.getElementById("out").value;
    		document.getElementById("out").value = value.substr(0, value.length - value.length);
    	}