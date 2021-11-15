var studentDetail = {
    "studentId":"abc",
    "password":"123"
}

var adminDetail = {
    "adminId":"def",
    "password":"456"
}

var facultyDetail = {
    "facultyId":"ghi",
    "password":"789"
}




function onStudentLogin(){
    if (document.getElementById("userName").value === studentDetail.studentId && document.getElementById("password").value === studentDetail.password) {
        console.log(document.getElementById("userName"))
        console.log(document.getElementById("password"))
        console.log("Accept")
        location.href = "studentDashboard.html";
    } else {
        console.log(document.getElementById("userName"))
        console.log(document.getElementById("password"))
        console.log("Reject")
        location.href = "index.html"
    }
}

function onAdminLogin(){
    if (document.getElementById("adminName").value === adminDetail.adminId && document.getElementById("password").value === adminDetail.password) {
        console.log(document.getElementById("adminName"))
        console.log(document.getElementById("password"))
        console.log("Accept")
        location.href = "adminDashboard.html";
    } else {
        console.log(document.getElementById("adminName"))
        console.log(document.getElementById("password"))
        console.log("Reject")
        location.href = "index.html"
    }
}

function onFacultyLogin(){
    if (document.getElementById("facultyUserName").value === facultyDetail.facultyId && document.getElementById("password").value === facultyDetail.password) {
        console.log(document.getElementById("facultyUserName").value)
        console.log(document.getElementById("password").value)
        console.log("Accept")
        location.href = "facultyDashboard.html";
    } else {
        console.log(document.getElementById("facultyUserName").value)
        console.log(document.getElementById("password").value)
        console.log("Reject")
        location.href = "index.html"
    }
}