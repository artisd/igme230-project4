//https://stackoverflow.com/questions/28635026/rotation-animation-using-snap-svg
//https://jsfiddle.net/tuqbf9ub/

/* working in jsfiddle but not on my local browser.  
I was missing the "window.onload = function() {" but it still does not work.
*/

window.onload = function() {
    var s = Snap("#svg");

    var c = s.circle(100, 100, 100).attr({
        stroke: 'red',
        strokeDasharray: "40 280",
        fill: 'none',
        strokeWidth: 20
    });

    function anim() {
        c.transform('r0,100,100');
        c.animate({ transform: "r360,100,100" }, 1000, mina.linear, anim);
    };

    anim();

};