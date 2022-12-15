// write your code here
let ramMenu = document.querySelector("#ramen-menu")
let ramDefault = document.getElementsByClassName("card")
let ramDetail = document.getElementById("ramen-detail")
let dRating = document.getElementById("rating-display")
let dComment = document.getElementById("comment-display")
function renderData(datt){
    let card = document.createElement("ul")
    card.className = "card"
    let detail = `<div id="ramen-detail">
    <img class="detail-image" src="${datt.image}">
    <h2 class="name">${datt.name}</h2>
    <h3 class="restaurant">${datt.restaurant}</h3>
  </div>`
     card.innerHTML = detail
   card.querySelector("#ramen-detail").addEventListener("click", ()=>{
   ramDetail.innerHTML = card.innerHTML
   dRating.innerText = datt.rating
   dComment.innerText = datt.comment
}
   )
    ramMenu.appendChild(card)
}
function getAllData(){
    fetch("http://localhost:3000/ramens")
    .then(res => res.json())
    .then(dat => dat.forEach(dat => 
        renderData(dat)))
        console.log("Hallelujah")
}
getAllData()
document.querySelector("#new-ramen").addEventListener("submit",
handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    let noodlesObj = {
        name:e.target.name.value,
        restaurant:e.target.restaurant.value,
        image:e.target.image.value,
        rating:e.target.rating.value,
        comment:e.target.comment  }
    randerOneNoodle(noodlesObj)
    postNoodle(noodlesObj)
}
function postNoodle(noodleObj){
    fetch("http://localhost:3000/ramens", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(noodleObj)
    })
    .then(res => res.json())
    .then(dat => console.log(dat))
}
function randerOneNoodle(noodle){
    let card = document.createElement("ul")
    card.className = "card"
    let detail = `<div id="ramen-detail">
    <img class="detail-image" src="${noodle.image}">
    <h2 class="name">${noodle.name}</h2>
    <h3 class="restaurant">${noodle.restaurant}</h3>
  </div>`

     card.innerHTML = detail
   
   card.querySelector("#ramen-detail").addEventListener("click", ()=>{
   ramDetail.innerHTML = card.innerHTML
   dRating.innerText = noodle.rating
   dComment.innerText = noodle.comment
}
   )
    ramMenu.appendChild(card)

}