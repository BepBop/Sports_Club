/*These styles contain basic styles for fomatting along with our animation css*/

body {
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    background: #efefef;
    line-height: 170%;
}

strong,
    b {
    font-weight: 600
}

h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    font-weight: 300;
    line-height: 150%;
}

i.fa {
    color: #333;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
/*clearfixes*/

.cf:before,
.cf:after {
    content: " ";
    display: table;
}

.cf:after {
    clear: both;
}

.main-container {
    background: #fff;
    max-width: 1000px;
    margin: 25px auto 25px auto;
    position: relative;
}

.container {
    position: relative;
    padding: 25px;
}
/*animation element*/

.animation-element {
    opacity: 0;
    position: relative;
}
/*animation element sliding left*/

.animation-element.slide-left {
    opacity: 0;
    -moz-transition: all 500ms linear;
    -webkit-transition: all 500ms linear;
    -o-transition: all 500ms linear;
    transition: all 500ms linear;
    -moz-transform: translate3d(-100px, 0px, 0px);
    -webkit-transform: translate3d(-100px, 0px, 0px);
    -o-transform: translate(-100px, 0px);
    -ms-transform: translate(-100px, 0px);
    transform: translate3d(-100px, 0px, 0px);
}

.animation-element.slide-left.in-view {
    opacity: 1;
    -moz-transform: translate3d(0px, 0px, 0px);
    -webkit-transform: translate3d(0px, 0px, 0px);
    -o-transform: translate(0px, 0px);
    -ms-transform: translate(0px, 0px);
    transform: translate3d(0px, 0px, 0px);
}
