var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);
async function foo(){
    let res=await fetch("https://api.chucknorris.io/jokes/random"); 
    let res1=await res.json();
console.log(res1);
row.innerHTML=`
<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header text-center">categories </div>
  <div class="card-body">
  <p class="card-title">url: ${res1.url}</p>
  <p class="card-text">created_at:${res1.created_at } </p>
  <p class="card-text">Value: ${res1.value}</p>
  </div>
</div>
`;
document.body.append(container); 
    }
    foo();

   