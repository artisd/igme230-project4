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