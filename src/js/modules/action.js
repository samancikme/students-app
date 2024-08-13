const addStudentButton = document.querySelector("#button-add"),
modalAlert = document.querySelector(".modal-alert"),
exit = document.querySelector(".exit"),
canel = document.querySelector(".canel"),
btnWrapper = document.querySelector(".submit-button"),
form = document.querySelector("#add-student"),
showImg = document.querySelector(".show"),
img = document.querySelector(".image-form")

const url = "https://students-database-z0uc.onrender.com"









export function showAction(id) {
    const action = document.querySelectorAll(".action")
    action.forEach(item => {
        const actcont = item.querySelector(".act")
        const dot = item.querySelector(".dot")
        if (actcont.dataset.id == id) {
            if(actcont.style.display === "flex") {
                actcont.style.display = "none"
                dot.innerHTML = "<i class='bx bx-dots-horizontal-rounded'></i>"
            }else{
                    actcont.style.display = "flex"
                    dot.innerHTML = "<i class='bx bx-x'></i>"
            }
        }else{
                actcont.style.display = "none"
                dot.innerHTML = "<i class='bx bx-dots-horizontal-rounded'></i>"
                
        }
    })
}





function setStudentValue(student) {
    form.firstname.value = student.firstname
    form.lastname.value = student.lastname
    form.image.value = student.image
    form.email.value = student.email
    form.phoneNumber.value = student.phoneNumber
}


export function showModal(id) {
    if(id) {
        fetch("https://students-database-z0uc.onrender.com/" + id,)
        .then(res => res.json())
        .then(data => {
            setStudentValue(data)
            img.setAttribute("src" , form.image.value)
        })
        console.log(id)
        const editBtn = document.createElement("div")
        btnWrapper.innerHTML = ""
        editBtn.innerHTML = `<button class="edit-btn" type="button">edit</button>`
        editBtn.addEventListener("click" , () => {
                const formData = new FormData(form)
                const data = Object.fromEntries(formData.entries())
                fetch(`${url}/${id}`, {
                    method: 'PUT',
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
        btnWrapper.appendChild(editBtn)
    }
    modalAlert.style.display = "flex"
    
}



showImg.addEventListener("click", () => {
    if(form.image.value){
        img.setAttribute("src" , form.image.value)
    }else{
        form.focus()
    }
})



addStudentButton.addEventListener("click" , () => {
    modalAlert.style.transition = "all .5s ease-in-out"
    modalAlert.style.display = "flex"
    btnWrapper.innerHTML =
    `
    <button class="btn save" type="submit">Save</button>
    `
})

canel.addEventListener("click" , () => {
    modalAlert.style.display = "none"
    img.setAttribute("src" , "./images/Person-icon.jpg")
    form.reset()
})
exit.addEventListener("click" , () => {
    modalAlert.style.display = "none"
    img.setAttribute("src" , "./images/Person-icon.jpg")
    form.reset()
})

export function closeModal() {
    modalAlert.style.display = "none"
}