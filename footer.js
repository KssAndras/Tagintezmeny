document.addEventListener("scroll", function () {
    var footer = document.getElementById("footer");
    var scrollPosition = window.scrollY || window.pageYOffset; // For cross-browser compatibility
    var triggerDistance = 500; // Adjust this value to set when the footer should appear

    if (scrollPosition > triggerDistance) {
        footer.style.bottom = "0";
        footer.style.display = "block";
    } else {
        footer.style.bottom = "-500px"; // Adjust -100px to the height of your footer
        footer.style.display = "none";
    }
});
