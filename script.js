const togglebtn = document.getElementById("toggle-theme")
const body = document.body

if (localStorage.getItem("theme") === "dark"){
    body.classList.add("dark-mode")
    togglebtn.innerHTML = `Switch to Light Mode <span class="icon">☀️</span>`
}

togglebtn.addEventListener("click", function(){
    body.classList.toggle("dark-mode")

    if(body.classList.contains("dark-mode")){
        togglebtn.innerText= `Switch to Light Mode ☀️`
        localStorage.setItem("theme","dark")
    }else{
        togglebtn.innerText= `Switch to Dark Mode 🌙`
        localStorage.setItem("theme","light")
    }
})