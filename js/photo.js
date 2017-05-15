/*
function init_scene(type) {

    // Set up Snap.svg Camera and Flash
    var camera_arrow = Snap.select('#camera-arrow');
    var flash_action = Snap.select('#flash-svg');
    var flash_gradient_slider = Snap.select('#flash_gradient .slider');

    start_arrow_animation = function() {
        camera_arrow.node.className.baseVal += 'bouncing';
    }

    stop_arrow_animation = function() {
        camera_arrow.node.className.baseVal = '';
    }

    function animate_flash_action() {
        flash_action.node.className.baseVal += 'visible';

        flash_gradient_slider.animate({ offset: .75 }, 75, function() {
            flash_gradient_slider.animate({ offset: 0 }, 75, function() {
                flash_action.node.className.baseVal = '';
            });
        });

    }
*/

/*
//var s = Snap();
var s = Snap("#camera-svg");

var rect = s.rect(0, 0, 10, 10);

//lets draw 2 rects at position 100,100 and then reposition them

var r = s.rect(100, 100, 100, 100, 20, 20).attr({
    stroke: '#123456',
    'strokeWidth': 20,
    fill: 'red',
    'opacity': 0.2
});

*/

//https://www.youtube.com/watch?v=MBA-1IHrPYY
window.onload = function() {
    var s = Snap('#camera-svg');

    /*
        //create a circle in this named svg
        var myCircle = s.circle(150, 150, 100);

        //change the attributes of the circle in this named svg
        myCircle.attr({
            fill: '#f00',
            stroke: '#000',
            strokeWidth: 2
        })

    */
    //create a variable to reference the arrow within my #camera-svg object
    var arrow = s.select("#arrow");

    //make the arrow draggable - primarily done to figure out how to reference the objects on the page.
    arrow.drag();



    var flash = Snap('#flash-svg');

    //create a variable to reference the camera flash object within my #flash-svg object
    //var camera_flash = flash.select("#flash_gradient");
    var camera_flash = flash.select("#camera_flash_circle");

    //make the camera_flash draggable
    camera_flash.drag();

    //from pbs kids - theme.js
    var flash_action = Snap.select('#flash-svg');
    var flash_gradient_slider = Snap.select('#flash_gradient .slider');



    function animate_flash_action() {

        /*
        var camera_flash = $('#flash-svg');
        //attach is not a valid function, it is not the opposite of detach.
        camera_flash.attach();
        */

        //https://stackoverflow.com/questions/27105895/hide-svg-elements-with-javascript
        //show the flash before flashing it


        $('#flash-svg').css({ "opacity": 100 });

        flash_action.node.className.baseVal += 'visible';

        flash_gradient_slider.animate({ offset: .75 }, 75, function() {
            flash_gradient_slider.animate({ offset: 0 }, 75, function() {
                flash_action.node.className.baseVal = '';
            });
        });

        //hide the flash after flashing it
        //$('#flash-svg').css({ "opacity": 0 });

        //wait 3 seconds before hiding the flash-svg object

        //https://stackoverflow.com/questions/14226803/javascript-wait-5-seconds-before-executing-next-line
        var delay = (function() {
            var timer = 0;
            return function(callback, ms) {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            };
        })();

        delay(function() {
            // do stuff
            //hide the flash after flashing it
            $('#flash-svg').css({ "opacity": 0 });

            //hide this camera_flash_div so that the next person picture moves up
            var camera_flash_div = document.getElementById('camera_flash');
            camera_flash_div.style.display = 'none';

        }, 300); // end delay



    };



    function show_camdens_svg() {

        var camden_svg = Snap('#camden');

        //create a variable to reference the camden_group object within my #camden svg object
        var camden_group = camden_svg.select("#camden_group");
        $('#camden_group').css({ "opacity": 100 });
    };


    function hide_camdens_svg() {

        var camden_svg = Snap('#camden');

        //create a variable to reference the camden_group object within my #camden svg object
        var camden_group = camden_svg.select("#camden_group");
        $('#camden_group').css({ "opacity": 0 });
    };


    //trying to figure out how ot hide the camera flash until the smartphone body is clicked.

    //flash_action.node.className.baseVal += 'visible';
    flash_action.node.className.baseVal += 'hidden';

    //https://stackoverflow.com/questions/2420135/hide-html-element-by-id
    /*
    var link = document.getElementById('nav-ask');
    link.style.display = 'none'; //or
    link.style.visibility = 'hidden';
    */
    /* did not work
        var camera_flash = document.getElementById('#flash-svg');
        camera_flash.style.display = 'none';
        */


    //https://stackoverflow.com/questions/27105895/hide-svg-elements-with-javascript
    var camera_flash = $('#flash-svg');
    //camera_flash.detach();

    //$('#play-button').css({ "opacity": 0 });
    $('#flash-svg').css({ "opacity": 0 });

    hide_camdens_svg();


    //execute the function to flash the camera_flash on and off
    //animate_flash_action();
    /*
        s.attr({
            viewBox: [0, 0, 800, 600]
        });
    */


    //Snap.load("image/map.svg", function(f) {});

    //https: //stackoverflow.com/questions/2296097/making-an-svg-image-object-clickable-with-onclick-avoiding-absolute-positioning
    //$(".btn").bind("click", function(event){alert("clicked svg")});

    //$("#camera_flash_circle").bind("click", function(event) { alert("clicked svg") });
    // the cls-1 is the class associated with the smartphone body. when the user clicks it, flash the camera flash.
    $(".cls-1").bind("click", function(event) {
        //alert("clicked svg");

        //execute the function to flash the camera_flash on and off
        animate_flash_action();
        show_camdens_svg();
    });

};