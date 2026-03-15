const countries = [
"Japan","United States","France","Germany","United Kingdom","Italy","Spain","Canada","Australia","South Korea",
"China","Thailand","Singapore","Malaysia","Indonesia","Philippines","Vietnam","India","Brazil","Mexico"
]

let visited = JSON.parse(localStorage.getItem("visited")) || []

const list = document.getElementById("countryList")
const search = document.getElementById("search")
const count = document.getElementById("count")

function save(){
localStorage.setItem("visited",JSON.stringify(visited))
}

function toggle(country){

if(visited.includes(country)){
visited = visited.filter(c=>c!==country)
}else{
visited.push(country)
}

save()
render()
}

function render(){

list.innerHTML=""

const keyword = search.value.toLowerCase()

const filtered = countries.filter(c=>c.toLowerCase().includes(keyword))

filtered.forEach(country=>{

const li = document.createElement("li")

const name = document.createElement("span")
name.textContent = country

const btn = document.createElement("button")

if(visited.includes(country)){
btn.textContent = "Visited"
btn.classList.add("visited")
}else{
btn.textContent = "Add"
}

btn.onclick = ()=>toggle(country)

li.appendChild(name)
li.appendChild(btn)

list.appendChild(li)

})

count.textContent = `Visited ${visited.length} countries`
}

search.addEventListener("input",render)

render()
