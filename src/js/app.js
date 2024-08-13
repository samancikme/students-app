import { getData } from "./modules/request.js"



const searchStudent = document.querySelector("#search-input"),
url = "http://localhost:3000/users"

getData(url)


searchStudent.addEventListener("submit" , (e) => {
    e.preventDefault()
    const form = searchStudent["input"]
    const value = form.value.trim()
    if(value.length > 0 ){
        console.log(value)
        searchStudent.reset()
    }else{
        form.style.borderColor = "red"
        form.focus()
        form.style.border = "2px solid red"
        form.addEventListener("keypress" , () => {
            form.style.borderColor = "green"
            setTimeout(() => {
                form.style.borderColor = "transparent"
            },1000 )
        })
    }
})  





