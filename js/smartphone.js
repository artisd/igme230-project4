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

window.onload = function() {
    var camera_phone_with_arrow = Snap();
    camera_phone_with_arrow.attr({
        viewBox: [0, 0, 800, 600]
    });



    Snap.load("image/camera_phone_with_arrow.svg", function(f) {




        window.onclick = function() {


        };
    });
};

/*
});
};
*/