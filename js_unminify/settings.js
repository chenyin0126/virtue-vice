$("#back").addClass('animated fadeInUp');
$("h1").addClass('animated fadeInDown');
$("form").addClass('animated zoomIn');

$("#switch-1").on('click', function (e) {
    if (e.target.checked) {
        alert("Notification Enabled");
    } else {
        alert("Notification Disabled");
    }
});

function goBack() {
    window.history.back();
}

function logOut() {
    if (confirm("Log Out?")) {
        Parse.initialize("fQA6Nbiwo2gCK1EH9eOH3YwU0S96nLnM6rEjkjiW", "p6LeZCW3qLA6OcH0Pkfhz714pAsZOdZFJd33aLpl");
        Parse.User.current().fetch();
        Parse.User.logOut();
        window.location.href = "../src/login.min.html";
    }
}
