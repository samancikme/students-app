import { closeModal } from "./action.js"
import { renderStudents } from "./render.js"


const url = "https://students-database-z0uc.onrender.com/users"

const addStudent = document.querySelector("#add-student")

export async function getData(url) {
    try{
        console.log("loading...")
        const res = await fetch(url)
        const data =await res.json()
        renderStudents(data)
        console.log(data)
    }catch{(err) => {
        console.log(err)
    }}finally{
        console.log("Done!")
    }
}



addStudent.addEventListener("submit" , (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
            console.log(res)
        })
        .catch(err => console.log(err))
        closeModal()
})






export async function deleteStudent(id) {
    try{
        const res = await fetch(`${url}/${id}` , {
            method : "DELETE",
        })
        console.log(res)
        getData(url)
    }catch(err) {
        console.log(err)
    }
}