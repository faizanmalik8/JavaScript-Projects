const form=document.querySelector("form")
form.addEventListener("submit", function(e){
  e.preventDefault();
  const height=parseInt(document.querySelector("#height").value);
  const weight=parseInt(document.querySelector("#weight").value);
  const result=document.querySelector("#results");
  const conclusion=document.querySelector("#conclusion");
  const bmi=(weight/((height*height)/10000)).toFixed(2);
  result.innerHTML=bmi;
  if(bmi<18.6){
    conclusion.innerHTML="Under Weight, Eat More Proteins";
  }
  else if(bmi<24.9){
    conclusion.innerHTML="You Are Going Perfect";
  }
  else{
    conclusion.style.color="red"
    conclusion.innerHTML="You Are OverWeight Take Regular Excercise";
  }
})