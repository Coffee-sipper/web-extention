
const btnEl= document.getElementById("input-btn");
let myLeads=[];
const inputEl= document.getElementById("input-el");
const ulEl= document.getElementById("ul-el");
btnEl.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

for (let i=0 ; i<myLeads.length; i++){
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}

