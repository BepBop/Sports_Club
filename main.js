new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    continuousVertical: true,
});

let xyz = document.getElementById("main");
xyz.addEventListener('click', () => {
    xyz.scrollLeft = xyz.scrollLeft > 0 ? 0 : document.body.scrollWidth;
})


let W = document.getElementById("pica");
W.addEventListener("mouseover", () => {
    OG.call(W, 1, 6)
});
let X = document.getElementById("picb");
X.addEventListener("mouseover", () => {
    OG.call(X, 6, 12)
});
let Y = document.getElementById("picc");
Y.addEventListener("mouseover", () => {
    OG.call(Y, 13, 19)
});
let Z = document.getElementById("picd");
Z.addEventListener("mouseover", () => {
    OG.call(Z, 20, 27)
});

function OG(a, b) {
    let flag;
    let images
        = ['0.webp',
        '1.webp',
        '2.webp',
        '3.webp',
        '4.webp',
        '5.webp',
        '6.webp',
        '7.webp',
        '8.webp',
        '9.webp',
        '10.webp',
        '11.webp',
        '12.webp',
        '13.webp',
        '14.webp',
        '15.webp',
        '16.webp',
        '17.webp',
        '18.webp',
        '19.webp',
        '20.webp',
        '21.webp',
        '22.webp',
        '23.webp',
        '24.webp',
        '25.webp',
        '26.webp',
        '27.webp',
    ];

    this.addEventListener("mouseover", () => {
        flag = true;
        ab.call(this);
    });
    this.addEventListener("mouseout", () => {
        flag = false;
    });

    function ab() {

        const context = this;

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function delay() {
            let m = 0;
            while (++m <= b) {
                if (flag) {
                    await sleep(500);
                    context.src = images[m];
                    m = m === b ? a : m;
                } else break;
            }
        }

        delay();
    }
}