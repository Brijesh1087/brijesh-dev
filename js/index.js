const btn = document.querySelector(".bars")
const close = document.querySelector(".close")
const lists = document.querySelector(".lists")
btn.addEventListener("click",()=>{
	lists.classList.toggle("show")
	// alert("show")
})
close.addEventListener("click",()=>{
	lists.classList.toggle("show")
})