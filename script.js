/* =====================================
   Aimen's Birthday Website
===================================== */


/* =====================================
   OPEN WEBSITE
===================================== */

const startButton =
    document.getElementById("startButton");

const intro =
    document.getElementById("intro");

const website =
    document.getElementById("website");


startButton.addEventListener("click", function () {

    intro.style.opacity = "0";

    intro.style.transform = "scale(1.05)";

    setTimeout(function () {

        intro.style.display = "none";

        website.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        launchConfetti();

    }, 900);

});



/* =====================================
   FINAL SURPRISE
===================================== */

const surpriseButton =
    document.getElementById("surpriseButton");

const finalSurprise =
    document.getElementById("finalSurprise");


surpriseButton.addEventListener(
    "click",
    function () {

        finalSurprise.classList.remove("hidden");

        surpriseButton.style.display = "none";

        launchConfetti();

        setTimeout(
            launchConfetti,
            700
        );

        setTimeout(
            launchConfetti,
            1400
        );

        setTimeout(
            launchConfetti,
            2100
        );

    }
);



/* =====================================
   CONFETTI
===================================== */

function launchConfetti() {

    if (typeof confetti === "undefined") {
        return;
    }

    confetti({
        particleCount: 180,
        spread: 110,
        startVelocity: 40,
        origin: {
            y: 0.6
        }
    });

}



/* =====================================
   FLOATING HEARTS
===================================== */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className = "heart";

    const symbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "✨",
        "🌸"
    ];

    heart.innerHTML =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (14 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);


    setTimeout(function () {

        heart.remove();

    }, 11000);

}


setInterval(
    createHeart,
    900
);



/* =====================================
   EXTRA HEARTS WHEN MOUSE MOVES
===================================== */

let mouseTimer;

document.addEventListener(
    "mousemove",
    function (event) {

        clearTimeout(mouseTimer);

        mouseTimer = setTimeout(
            function () {

                if (
                    Math.random() > 0.75
                ) {

                    const heart =
                        document.createElement(
                            "div"
                        );

                    heart.className =
                        "heart";

                    heart.innerHTML =
                        "♡";

                    heart.style.left =
                        event.clientX + "px";

                    heart.style.bottom =
                        (
                            window.innerHeight -
                            event.clientY
                        ) + "px";

                    heart.style.fontSize =
                        "20px";

                    heart.style.animationDuration =
                        "4s";

                    document.body.appendChild(
                        heart
                    );

                    setTimeout(
                        () => heart.remove(),
                        5000
                    );

                }

            },
            100
        );

    }
);