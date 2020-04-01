// alert("jud gya");
var input=document.querySelector("input");
var button=document.getElementById("button");
var vowel=document.getElementById("vc");
var consonant=document.getElementById("cc");
var space=document.getElementById("sc");
var special=document.getElementById("ssc");

var str="AEIOUaeiou";
var str_conso="bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
var special_set="!@#$%^&*(){}[]:;<>,./?";
var v_count=0;
var con_count=0;
var space_count=0;
var special_count=0;

button.addEventListener("click",function(){
 for(var i=0;i<input.value.length;i++)
 {
 	for(var j=0;j<41;j++)
 	{
 		if(input.value[i]==str[j])
 			{v_count++;
 			break;}

 		if(input.value[i]==str_conso[j])
 			{con_count++;
 			break;}

 		if(input.value[i]==" ")
 			{space_count++;
 			break;}

 		if(input.value[i]==special_set[j])
 			{
 			special_count=special_count+1;
 			break;
 			}
 		else
 			continue;
 	}

 }
 vowel.textContent=v_count;
 consonant.textContent=con_count;
 space.textContent=space_count;
 special.textContent=special_count;
});
