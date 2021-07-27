
    function ef(){
        alert("Hey Iam a Alert");
    }
var x=3,y=5,z=x|y,c="India",a=undefined,b=[1,2,3,4,5],d=(x==y),e={Name:"Moshr",Age:20};

document.getElementById("abc1").innerHTML=z;
document.getElementById("abc2").innerHTML=typeof(c);
document.getElementById("abc3").innerHTML=typeof(a);
document.getElementById("abc4").innerHTML=typeof(b);
document.getElementById("abc5").innerHTML=typeof(d);
document.getElementById("abc6").innerHTML=typeof(e);
var abc;
for(var a=0;a<=3;a++)
{
  abc+="</br>"+"this is a number "+a+"</br>";
  
}
document.getElementById("for").innerHTML=abc;
var adc=["apple","orange","Banana"];
var adclen=adc.length;
var list="<ol>";
for(var m=0;m<adclen;m++)
{
  list+="<li>"+adc[m]+"</li>";
}

list+="</ol>";
document.getElementById("adc1").innerHTML=list;
 

var def="";
var i=0;

while(i<11)
{
  def+=i+"<br/>";
  i++;
}
document.getElementById("add1").innerHTML=def;

var j=5;
var fj="";
do
{
  fj+=j+"<br/>";
  j--;
}while(j>0);
document.getElementById("add2").innerHTML=fj;


var Computer={ram_size:"6gb",Monitor:"26inch",mouse_type:"laser"};

var k="<ul>";

for(var n in Computer){
  k+="<li>"+Computer[n]+"</li>";
}
k+="</ul>";


document.getElementById("add3").innerHTML=k;


var a1="I",a2="am",a3="from",a4="India";
var len=a1.length+a2.length+a3.length+a4.length;
var p1="Hello Everyone Welcome to Edureka";
var r1=p1.replace("Edureka","India");
document.getElementById("add4").innerHTML=a1+ " " +a2+ " " +a3+ " " +a4+
"<br/> The lenght of the string is "+len+"<br/>"+p1.slice(6,-8)+"<br/>"+p1.substr(0,5)+"<br/>"+" The replaced string is "+r1+"<br/> The upper case and lower case of string India as follows respectively "+a4.toUpperCase()+" and "+a4.toLowerCase();

document.getElementById("add5").innerHTML=Math.ceil(Math.random() * 6);


let date=new Date();
let date2=new Date(2021,0,1,16,10,0,0);
let date3=new Date("01/01/2021");
document.getElementById("add6").innerHTML=date+" <br/> New date  "+date2+" <br/> New date  "+date3;
{
function jsformvalidate(){
  let fm1=document.forms["myform"] ["Fname"].value;
  if(fm1 == "" )
  {
    alert("The first name field is empty");
    return false;
  }
  else if(fm1.length > 10 )
  {
    alert("The First Name is lengthier")
    return false;

  }

  let fm2=document.forms["myform"] ["lname"].value;
  if( fm2 == "" )
  {
    alert("The Last name field is empty");
    return false;
  }
  else if(fm2.length > 10 )
  {
    alert("The Last Name is lengthier")
    return false;

  }
  let fm3=document.forms["myform"] ["UserId"].value;
  if(fm3 == "")
  {
    alert("The User ID field is empty");
    return false;
  }
  else if(fm3.length > 5 )
  {
    alert("The User ID is lengthier")
    return false;

  }
  let fm4=document.forms["myform"] ["Password"].value;
  if(fm4 == "")
  {
    alert("The Password field is empty");
    return false;
  }
  else if(fm4.length > 12 )
  {
    alert("The Password is lengthier")
    return false;

  }
  let fm5=document.forms["myform"] ["Phno"].value;
  if(fm5 == "")
  {
    alert("The Phone number field is empty");
    return false;
  }
  else if(fm5.length != 10 )
  {
    alert("The Phone Number is not 10 digit ")
    return false;

  }
  if(fm1 && fm2 && fm3 && fm4 && fm5 == "" )
  {
    alert("The Whole field is empty");
    return false;
  }
}}


{
try{
  alert("Hello");
}
catch(error){
  document.getElementById("add7").innerHTML=error.message;
}
}

const employee1 = {
      name:"Edureka",company:"EdTech",
      funname : function(){
        return this.name;
      }
}
const employee2 = {
  name:"Edureka1",company:"EdTech1",
  funname : function(){
    return this.company;
  }
}
document.getElementById("add8").innerHTML=employee1.funname();
document.getElementById("add9").innerHTML=employee2.funname();

var abced=100;
var tra={
  abced:"50",
  funabced:function(){
    return this.abced;
  }
}
document.getElementById("add10").innerHTML=tra.funabced();
hef=()=>"abced";
document.getElementById("add11").innerHTML=hef();

var i1= "Hello";
var i2= "World";
var i3= `hey guys ${i1} ${i2}`;
document.getElementById("add12").innerHTML=i3;


var arr1 = ["Purse" , "Mobile" ,"Keyboard"];
var arr2 ="<ol style='color:yellow'>";
let arr3;
for(arr3 of arr1)
{
  arr2 +=`<li>${arr3}</li>`;
}
arr2 +="</ol>";
document.getElementById("add13").innerHTML=arr2;

class Internship{
  constructor(first,last){
    this.first=first;
    this.last=last;
  }
  name(){
    return `${this.first} ${this.last}`;
  }
}
var object1= new Internship("Iam","Mohd");
document.getElementById("add15").innerHTML=object1.name();

var object2= new Internship("Iam","Moshr");
document.getElementById("add14").innerHTML=object2.name();

class Hello{
  constructor(iam,good){
    this.iam=iam;
    this.good=good;
  }
  good_(){
    var strabc= `hey you ${this.iam} ${this.good}`;
    console.log(strabc);
    return `hey you ${this.iam} ${this.good}`;

  }
}
var iams=new Hello("iam","good");
document.getElementById("add16").innerHTML=iams.good_();

