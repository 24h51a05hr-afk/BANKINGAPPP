function check() {
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;

    if (u === "" || p === "") {
        document.getElementById("message").innerHTML = "INVALID";
    } else {
        document.getElementById("message").innerHTML = "LOGIN SUCCESS";
    }
}