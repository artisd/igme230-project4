//https://www.youtube.com/watch?v=MBA-1IHrPYY
window.onload = function() {
    var s = Snap('#bicycle');

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
    //create a variable to reference the top_half_of_bicycle_frame within my #bicycle object
    var top_half_of_bicycle_frame = s.select("#top_half_of_bicycle_frame");

    //make the top_half_of_bicycle_frame draggable - primarily done to figure out how to reference the objects on the page.
    top_half_of_bicycle_frame.drag();






    function rotate_front_circle() {

        var s = Snap('#bicycle');

        //var myCircle = s.circle(175, 600, 160).attr({ stroke: 'red', strokeDasharray: "40 280", fill: 'none', strokeWidth: 20 });
        var myCircle = s.circle(100, 100, 100).attr({ stroke: 'red', strokeDasharray: "40 280", fill: 'none', strokeWidth: 20 });

        //var bbox = myCircle.getBBox(); //bounding box, get coords and centre

        //myCircle.stop().animate({ transform: "r360," + bbox.cx + ',' + bbox.cy }, 1000, rotate_front_circle);

        myCircle.transform('r0,100,100');
        myCircle.animate({ transform: "r360,100,100" }, 1000, mina.linear, rotate_front_circle);

    };

    function rotate_tires() {

        var s = Snap('#bicycle');

        //create a variable to reference the front_wheel within my #bicycle object
        var front_wheel = s.select("#front_wheel");
        var rear_tire = s.select("#rear_tire");

        //make the front_wheel draggable - primarily done to figure out how to reference the objects on the page.
        //front_wheel.drag();
        rear_tire.drag();

        //camdenStartMatrix.rotate(10);

        /*
        // rotateElems is the element we wish to rotate
        rotateElems = s.selectAll('.gotham__rotate')

        rotateElems.animate({
            transform: 'r0,250,453 s1,1'
        }, 1500, mina.elastic);
        */

        /*
        front_wheel.animate({
            transform: 'r0,250,453 s1,1'
        }, 1500, mina.elastic);
        */

        //https://stackoverflow.com/questions/28635026/rotation-animation-using-snap-svg

        //var circle = s.circle(100, 100, 100).attr({ stroke: 'red', strokeDasharray: "40 280", fill: 'none', strokeWidth: 20 });
        var circle = s.circle(175, 600, 160).attr({ stroke: 'red', strokeDasharray: "40 280", fill: 'none', strokeWidth: 20 });


        //not sure why this is not working.  rotating_circle.html works in a jsfiddle example but not in my local browser
        circle.transform('r0,600,160');

        circle.transform('r0,600,160');

        //circle.animate({ transform: "r360,100,100" }, 1000, mina.linear);
        circle.animate({ transform: "r360,100,100" }, 1000, mina.linear, rotate_tires);


        /* can't seem to rotate using this method
        front_wheel.transform('r0,100,100');
        front_wheel.animate({ transform: "r360,100,100" }, 1000, mina.linear);
        */
        /*
        rear_tire.transform('r0,100,100');
        rear_tire.animate({ transform: "r360,100,100" }, 1000, mina.linear);
        */

        //https://stackoverflow.com/questions/29942214/transform-rotate-in-snap-svg
        /*
        var bbox = front_wheel.getBBox(); //bounding box, get coords and centre
        front_wheel.stop().animate({ transform: "r360," + bbox.cx + ',' + bbox.cy }, 1000);
        */

        /*
                var front_wheel_moving_highlight = s.select("#front_wheel_moving_highlight");
                var bbox = front_wheel_moving_highlight.getBBox(); //bounding box, get coords and centre
                //front_wheel_moving_highlight.stop().animate({ transform: "r360," + bbox.cx + ',' + bbox.cy }, 1000, rotate_tires);
                front_wheel_moving_highlight.animate({ transform: "r360," + bbox.cx + ',' + bbox.cy }, 1000, rotate_tires);
        */
        var bbox = circle.getBBox(); //bounding box, get coords and centre
        //front_wheel_moving_highlight.stop().animate({ transform: "r360," + bbox.cx + ',' + bbox.cy }, 1000, rotate_tires);
        circle.animate({ transform: "r360," + bbox.cx + ',' + bbox.cy }, 1000, rotate_tires);

    };




    //https: //stackoverflow.com/questions/2296097/making-an-svg-image-object-clickable-with-onclick-avoiding-absolute-positioning
    //$(".btn").bind("click", function(event){alert("clicked svg")});

    //$("#camera_flash_circle").bind("click", function(event) { alert("clicked svg") });
    // the #bicycle is the svg id associated with the entire svg image. when the user clicks it, rotate the tires.
    $("#bicycle").bind("click", function(event) {
        //alert("clicked svg");

        //execute the function to flash the camera_flash on and off
        //rotate_tires();

        //not sure why this is not working.  rotating_circle.html works in a jsfiddle example but not in my local browser
        //rotate_front_circle();
    });

    rotate_tires();
    //not sure why this is not working.  rotating_circle.html works in a jsfiddle example but not in my local browser
    //rotate_front_circle();

};