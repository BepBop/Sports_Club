new fullpage("#fullpage", {
    autoScrolling: true,
    continuousVertical: true,
    scrollingSpeed: 600,
});

let xyz = document.getElementById("main");
xyz.addEventListener("click", () => {
    xyz.scrollLeft =
        xyz.scrollLeft >= document.body.scrollWidth ? 0 : document.body.scrollWidth;
});



let W = document.getElementById("pica");
W.addEventListener("load", () => {
    OG.call(W, 1, 6);
});
let X = document.getElementById("picb");
X.addEventListener("load", () => {
    OG.call(X, 7, 12);
});
let Y = document.getElementById("picc");
Y.addEventListener("load", () => {
    OG.call(Y, 13, 19);
});
let Z = document.getElementById("picd");
Z.addEventListener("load", () => {
    OG.call(Z, 20, 27);
});

function OG(a, b) {
    let flag;
    let images = [
        "0.webp",
        "1.webp",
        "2.webp",
        "3.webp",
        "4.webp",
        "5.webp",
        "6.webp",
        "7.webp",
        "8.webp",
        "9.webp",
        "10.webp",
        "11.webp",
        "12.webp",
        "13.webp",
        "14.webp",
        "15.webp",
        "16.webp",
        "17.webp",
        "18.webp",
        "19.webp",
        "20.webp",
        "21.webp",
        "22.webp",
        "23.webp",
        "24.webp",
        "25.webp",
        "26.webp",
        "27.webp",
    ];

    this.addEventListener("mouseover", () => {
        flag = true;
        fun.call(this);
    });

    this.addEventListener("mouseout", () => {
        flag = false;
    });

    function fun() {
        const context = this;

        async function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

         async function delay() {
            let m = a;
            while (++m <= b) {
                if (flag) {
                    context.src = images[m];
                    await sleep(500);
                    m = m === b ? a : m;
                } else {
                    break;
                }
            }
        }

        delay();
    }
}

let sections = document.querySelectorAll(".image");
let options = {
    threshold: 0.5,
};

let callback = (entries) => {
    entries.forEach((entry) => {
        let target = entry.target;
        if (entry.intersectionRatio >= 0.2) {
            target.classList.add("meow");
            target.classList.add("o");
        } else {
            target.classList.remove("meow");
        }
    });
};

let observer = new IntersectionObserver(callback, options);

sections.forEach((section) => {
    observer.observe(section);
});

let sections2 = document.getElementById("blue");

let sections3 = document.getElementById("one");
let sections4 = document.getElementById("two");
let sections5 = document.getElementById("three");

let sections6 = document.getElementById("logo");

sections2.addEventListener("click", () => {
    sections2.classList.add("color_drop");

    setTimeout(myfunction, 2000);

    function myfunction() {
        sections3.classList.add("blue_strip");
        sections4.classList.add("blue_strip");
        sections5.classList.add("blue_strip");
    }

    setTimeout(myfunction2, 2000);

    function myfunction2() {
        sections3.classList.add("faint_color");
        sections4.classList.add("faint_color");
        sections5.classList.add("faint_color");
    }

    sections6.classList.add("move_diagonal");

    setTimeout(myfunction3, 5000);

    function myfunction3() {
        sections2.classList.remove("color_drop");
        sections2.classList.add("next");

        sections3.classList.remove("blue_strip");
        sections4.classList.remove("blue_strip");
        sections5.classList.remove("blue_strip");

        sections3.classList.remove("faint_color");
        sections4.classList.remove("faint_color");
        sections5.classList.remove("faint_color");

        sections3.classList.add("og");
        sections4.classList.add("og");
        sections5.classList.add("og");

        sections6.classList.remove("move_diagonal");
        sections6.classList.add("next");
    }
});

let callback2 = (entries) => {
    entries.forEach((entry) => {
        if ((entry.intersectionRatio > 0 && entry.intersectionRatio < 0.75)) {
            anime({
                targets: document.querySelector(".dot"),
                innerHTML: [0, 50],
                easing: "easeInOutQuad",
                round: 1,
                duration: 3000,
            });
        }

    });
};

let observer2 = new IntersectionObserver(callback2, options);

sections.forEach((main_elements) => {
    observer2.observe(main_elements);

});

