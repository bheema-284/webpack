(()=>{document.querySelector("#myForm").addEventListener("submit",(function(r){r.preventDefault();var n=document.querySelector("#name").value,i=document.querySelector("#qty").value,l=document.querySelector("#priority").value,c={itemNum:t++,itemName:n,itemQty:i,itemPriority:l};e.push(c),console.log(e),localStorage.setItem("todoList",JSON.stringify(e)),o()}));var e=JSON.parse(localStorage.getItem("todoList"))||[];o();var t=1;function o(){document.querySelector("tbody").innerHTML="",e.map((function(t,r){var n=document.createElement("tr"),i=document.createElement("td");i.textContent=t.itemNum;var l=document.createElement("td");l.textContent=t.itemName;var c=document.createElement("td");c.textContent=t.itemQty;var m=document.createElement("td");m.textContent=t.itemPriority,"high"==t.itemPriority?(m.style.backgroundColor="red",m.style.color="white"):"medium"==t.itemPriority?(m.style.backgroundColor="orange",m.style.color="white"):"low"==t.itemPriority&&(m.style.backgroundColor="green",m.style.color="white");var a=document.createElement("td");a.textContent="Delete",a.style.backgroundColor="teal",a.style.color="white",a.addEventListener("click",(function(){!function(t){e.splice(t,1),localStorage.setItem("todoList",JSON.stringify(e)),o()}(r)})),n.append(i,l,c,m,a),document.querySelector("tbody").append(n)}))}})();