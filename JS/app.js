function login() {
    var userName = document.getElementById('name')
    var userPassword = document.getElementById('pass')
    if (userName.value === "admin" && userPassword.value === "12345") {
        swal({
            title: "Authentication!",
            text: "Correct!",
            icon: "success",
        });
        userName.value = "";
        userPassword.value = "";
        document.getElementById("loginContainer").setAttribute("class", "hide");
        document.getElementById("viewContainer").setAttribute("class", "show");
        document.getElementById("addContainer").setAttribute("class", 'hide');

    }
    else if (userName.value === "" && userPassword.value === "") {
        swal({
            title: "Authentication!",
            text: "Pleas Enter User Name & Password",
            icon: "warning",
        });
        userName.value = "";
        userPassword.value = "";
    }
    else {
        swal({
            title: "Authentication!",
            text: "username or password incorrect",
            icon: "error",
        });
    }
    userName.value = "";
    userPassword.value = "";
}
function cancleB() {

    document.getElementById("addContainer").setAttribute("class", 'hide');
    document.getElementById("viewContainer").setAttribute("class", "show");
    document.getElementById('dep').value = "";
    document.getElementById('sub').value = "";
    document.getElementById('det').value = "";
}



function addTask() {
    if (document.getElementById('sub').value === "" || document.getElementById('dep').value === "" || document.getElementById('det').value === "") {
        alert("Pleas Enter data");
    }
    if (document.getElementById('sub').value != "" && document.getElementById('dep').value != "" && document.getElementById('det').value != "") {


        cancleB()


        var sub = document.getElementById('sub').value;
        var dep = document.getElementById('dep').value;
        var det = document.getElementById('det').value;
        var ol = document.getElementById('table');
        var tr = document.createElement('tr');
        ol.appendChild(tr);
        var snBox = document.createElement('td');
        var sNo = document.createTextNode('1');
        snBox.appendChild(sNo);
        tr.appendChild(snBox);
        var depBox = document.createElement('td');
        var department = document.createTextNode(dep);
        depBox.appendChild(department);
        tr.appendChild(depBox);
        var subBox = document.createElement('td');
        var subject = document.createTextNode(sub);
        subBox.appendChild(subject);
        tr.appendChild(subBox);
        var detailBox = document.createElement('td');
        var detText = document.createTextNode(det);
        detailBox.appendChild(detText);
        tr.appendChild(detailBox);
        var editBox = document.createElement('td');
        editBox.style.cursor = "pointer";
        var editText = document.createTextNode('Edit');
        editBox.appendChild(editText);
        tr.appendChild(editBox);
        var delBox = document.createElement('td');
        delBox.addEventListener("click", function remove() {
            this.parentNode.remove();
        })
        delBox.style.cursor = "pointer";
        var delText = document.createTextNode('Dellet');
        delBox.appendChild(delText);
        tr.appendChild(delBox);

        document.getElementById('dep').value = "";
        document.getElementById('sub').value = "";
        document.getElementById('det').value = "";
        console.log(ol);

    }

}

function changeClass() {
    document.getElementById("viewContainer").setAttribute("class", "hide");
    document.getElementById("addContainer").setAttribute("class", 'show');
}

function removeAll() {
    var remove = document.getElementById('table').getElementsByTagName('tr');
    for (var i = 1; i < remove.length; i++) {
        remove[i].innerHTML = "";
    }
}