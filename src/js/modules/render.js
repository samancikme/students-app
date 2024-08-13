const studentsContent = document.querySelector("#students")

import { showAction, showModal } from "./action.js"
import {deleteStudent} from "./request.js"


export function renderStudents(array) {
    studentsContent.innerHTML = ""
    array.forEach((student , index) => {
        const studentEl = document.createElement("tr")
        studentEl.innerHTML = 
        `
        <td>${index + 1}</td>
        <td>
            <div class="fullname">
                <div class="img"><img src=${student.image
                } alt=""></div>
                <div class="title">
                    <h1>${student.firstname}</h1>
                    <h2>${student.lastname}</h2>
                </div>
            </div>
        </td>
        <td>${student.email}</td>
        <td>${student.phoneNumber}</td>
        <td >
            <div class="action">
                <div  class="dot">
                <i class='bx bx-dots-horizontal-rounded'></i>
                </div>
                <div data-id=${student.id} class="act hidden">
                    <div class="edt"> <i class='bx bxs-edit-alt' ></i></div>
                    <div class="trash"><i class='bx bxs-trash-alt'></i></div>
                </div>
            </div>
        </td>
        `
        studentsContent.appendChild(studentEl)
        const deleteBtn = studentEl.querySelector(".trash")
        const action = studentEl.querySelector(".action")
        const edit = studentEl.querySelector(".edt")
        action.addEventListener("click" ,() => showAction(student.id))
        deleteBtn.addEventListener("click" , () => deleteStudent(student.id))
        edit.addEventListener("click" , () => showModal(student.id) )
     })
}


