var i = 0;
var j = 0;
var k = 0;
var intro = "Hello, my name is ";
var my_name = " Anthony. ";
var desc = "I'm a Web Developer";
var speed = 200;
var speed2 = 250;


function typeWriter() {

  if (i < intro.length) {
    document.getElementById('greeting').innerHTML += intro.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
  if(i == intro.length){
    if(j < my_name.length){
    document.getElementById('name').innerHTML += my_name.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
    }
  }
  if(j == my_name.length){
    if(k < desc.length){
    document.getElementById('title').innerHTML += desc.charAt(k);
    k++;
    setTimeout(typeWriter, speed);
    }
  }
 
}

