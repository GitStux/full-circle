// get the input from the form when the submit button gets clicked

const myForm = document.getElementById("myForm")

myForm.onsubmit = (event) => {
    event.preventDefault()

    const fName = document.getElementById("firstName").value;
    const lName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;

    console.log({
        fName,
        lName,
        email,
        role
    })

    //Send this employee to POST to CRUD
    axios.post('https://crud-demo-mj.herokuapp.com/employees', {
            fName,
            lName,
            email,
            role
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
document.getElementById("showEmp").addEventListener("click", getEmployees)

function getEmployees() {
    axios
        .get("https://crud-demo-mj.herokuapp.com/employees")
        .then((res) => {
            const emps = res.data

            for (let index = 0; index < emps.length; index++) {
                const {
                    fName,
                    lName,
                    email,
                    role
                } = emps[index];

                let newP = document.createElement("p")
                newP.innerHTML = `${lName}, ${fName} - ${email} - ${role}`
                document.getElementById("employee_container").appendChild(newP)

            }
        })
}