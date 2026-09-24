function goToPage(number) {

    const pages = document.querySelectorAll(".birthday-page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const nextPage = document.getElementById("page" + number);

    if (nextPage) {
        nextPage.classList.add("active");
        window.scrollTo(0, 0);
    }
}


function celebrate() {

    if (typeof confetti === "function") {

        confetti({
            particleCount: 200,
            spread: 100,
            origin: {
                y: 0.6
            }
        });

    }
}


document.addEventListener("DOMContentLoaded", function() {

    goToPage(1);

});
