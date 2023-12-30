const btn = document.querySelector("#generate")
const search = document.querySelector("#search")
const lenght = 12

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "1234567890"
const symbols = "!@#$%^&*()_+{}[]:;',./<>?"

const allchar = upperCase + lowerCase + number + symbols

btn.addEventListener("click", function(){

    let clutter = ""

    for (let i = 0; i < allchar.length; i++){
        clutter += allchar[Math.floor(Math.random() * allchar.length)]
    }
    
    
    const finalpassword = clutter.substring(0,10)

    search.value = finalpassword
})


