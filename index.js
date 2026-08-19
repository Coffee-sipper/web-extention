
const btnEl= document.getElementById("input-btn");
let myLeads=[];
const inputEl= document.getElementById("input-el");
const ulEl= document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );
if (leadsFromLocalStorage){
  myLeads=leadsFromLocalStorage;
  render(myLeads);
}

deleteBtn.addEventListener("dblclick", function() {
    console.log("double clicked!");
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

btnEl.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  inputEl.value="";
  localStorage.setItem("myLeads", JSON.stringify(myLeads) );
  render(myLeads);
});

function render(leads){
  let listItems="";
  for (let i=0 ; i<leads.length; i++){
   //listItems += "<li> <a target='_blank'href='"+ myLeads[i]  +"'>" + myLeads[i]  + "</a></li>";
   listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}</a>
            </li>
    `
  }

 ulEl.innerHTML = listItems;
}
