let add_button = document.querySelector(".button")
let rem_button = document.querySelector(".remove")
let input = document.querySelector("#todoid")
let out = document.querySelector(".firstbox")
let array = []
function todo_adder() {
    let create_div = document.createElement("div")
    create_div.classList.add("new_div")
    create_div.innerHTML = ` <span>${input.value}</span><input class="class" type="checkbox" id="id name="add">`
    array.push(create_div)
    out.append(create_div)

}
add_button.addEventListener("click", (eObject) => {
    if (!input.value) {
        alert("please fill the value")

        return
    }
    else if (array.length >= 6) {
        alert("Max tasks are reached");
        eObject.preventDefault()
        return
    }
    todo_adder()
    add_button.classList.add("color")
    rem_button.classList.remove("color")
})
rem_button.addEventListener("click", (eObject) => {
    rem_button.classList.add("color")
    add_button.classList.remove("color")
    let del = array.shift()
    del.remove()
    console.log(del)
})
console.log(array)