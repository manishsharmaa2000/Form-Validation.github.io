function data()
{
var a=document.getElementById("n1").value;
var b=document.getElementById("n2").value;
var c=document.getElementById("n3").value;
var d=document.getElementById("n4").value;
var e=document.getElementById("n5").value;
var f=document.getElementById("n6").value;
var g=document.getElementById("n7").value;

//var regx=/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

if(a==""||b==""||c==""||d==""||e==""||f==""||g=="")
{
    alert("Please fill all fields");
    return false;
}
else if(d.length<10||b.length>10)
{
    alert("Number should be 10 digit || please enter valid number");
    return false;
}
else if(isNaN(d)||isNaN(f))
{
    alert("Only Number Are Allow");
    return false;
}
else{
    true;
}
}