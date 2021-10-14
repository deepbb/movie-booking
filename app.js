const movieName = document.getElementById("movie")
const container = document.querySelector(".container")
const seats = document.querySelectorAll(".row.seat:not(.occupied)")
const count = document.getElementById("count")
const total = document.getElementById("total")
console.log(seats);

let moviePrice = +movieName.value

function setMovieIndex(movieIndex,moviePrice){
    localStorage.setItem("selectedMovieName",movieIndex)
    localStorage.setItem("selectedMoviePrice",moviePrice)

}


//function to update the count and total value
function updateTotalSeats() {
    const selectedSeatCount = document.querySelectorAll(".row .seat.selected")
    console.log(selectedSeatCount);

    const seatIndex = [...selectedSeatCount].map(seat=> [...seats].indexOf(seat))
    console.log(seatIndex);
    localStorage.setItem("selectedSeatCount",JSON.stringify(seatIndex))
    const seatCount = selectedSeatCount.length
    count.innerText = seatCount
    total.innerText = seatCount * moviePrice
}
// a change event to select the price of a movie
movieName.addEventListener("change",(e)=>{
    const list = document.querySelectorAll("#list")
     moviePrice = e.target.value
    setMovieIndex(e.target.selectedIndex,e.target.value)
    
   // console.log(listMovie);
    console.log(moviePrice);
    updateTotalSeats()
})
//selecting classes when the event triggers
container.addEventListener("click",(e)=>{
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
        e.target.classList.toggle("selected")
        updateTotalSeats()
    }
})