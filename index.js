function notificationShow(notification) {
    notification.classList.add("show");
    setTimeout(function () {
        notification.className = notification.classList.remove("show");
    }, 3000);
}

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("name") === "" || localStorage.getItem("name") === null) {
        localStorage.setItem("name","");
        localStorage.setItem("email","");
    } else {
        var notification = document.getElementById("notification");
        var notificationMessage = "Thank you <b>" + localStorage.getItem("name") + "</b> for registering! Soon we will contact you by <b>" + localStorage.getItem("email") + "</b> with more information.";
        notification.innerHTML = notificationMessage;
	    notificationShow(notification);
        localStorage.setItem("name","");
        localStorage.setItem("email","");
    }
});

(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
				form.classList.add('was-validated');
                var name = document.getElementById("name").value;
                var email = document.getElementById("email").value;
                localStorage.setItem("name",name);
                localStorage.setItem("email",email);
            }, false);
        });
    }, false);
})();