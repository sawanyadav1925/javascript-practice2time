function myfun(){
    var x=document.getElementById("conv").value;
     
    if(document.getElementById('hmin').checked== true){
    
    var calhourtomin= parseInt(x*60);
    document.getElementById('remm').innerHTML="<p>"+"conversion="+calhourtomin+"min</p>";
}
else{
    var hourtosec= parseInt(x*60*60);
    
    console.log(calhourtomin);
    document.getElementById('remm').innerHTML="<p>"+"conversion="+hourtosec+" "+"sec</p>";

}
}