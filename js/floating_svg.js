//https://www.youtube.com/watch?v=MBA-1IHrPYY
window.onload = function() {



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

    function animate_camdens_svg() {

        var camden_svg = Snap('#camden');

        //create a variable to reference the camden_group object within my #camden svg object
        var camden_group = camden_svg.select("#camden_group");
        //$('#camden_group').css({ "opacity": 100 });

        /* https://davidwalsh.name/demo/svg-animations-snap/js/hill-valley.js */

        /*
                var animateCamden,
                    camdenStartMatrix = new Snap.Matrix(),
                    camdenMidMatrix = new Snap.Matrix(),
                    camdenEndMatrix = new Snap.Matrix();;
                var camden_group = camden_svg.select("#camden_group");

                // Sets up the matrix transforms
                camdenStartMatrix.rotate(10);
                camdenStartMatrix.translate(0, -50);
                camdenMidMatrix.rotate(-15);
                camdenMidMatrix.translate(300, -20);
                camdenEndMatrix.rotate(-10);
                camdenEndMatrix.translate(-20, 10);

                animateCamden = function() {
                    camden_group.animate({
                        transform: camdenStartMatrix
                    }, 1250, mina.easeinout, function() {
                        camden_group.animate({
                            transform: camdenMidMatrix
                        }, 250, function() {
                            camden_group.transform('t-300,-150');
                            setTimeout(function() {
                                camden_group.animate({
                                    transform: camdenEndMatrix
                                }, 750, mina.backout, function() {
                                    camden_group.animate({
                                        transform: 't0,0'
                                    }, 750)
                                });
                            }, 500);
                        });
                    });
                };
        */

        /*
        // rotateElems is the element we wish to rotate
        rotateElems = s.selectAll('.gotham__rotate')

        rotateElems.animate({
            transform: 'r0,250,453 s1,1'
        }, 1500, mina.elastic);
        */

        // rotateElems is the element we wish to rotate
        //rotateElems = s.selectAll('.gotham__rotate')
        var camden_group = camden_svg.select("#camden_group");


        //make the camden_group draggable
        camden_group.drag();

        //http://svg.dabbles.info/snaptut-transform
        //t=relative transform, T=absolute transform, s=relative scale, S=absolute Scale
        //r=relative rotate, R=relative rotate
        //relative means it takes into account previous transforms to accumulate
        //here it doesn't make much difference, until we combine later
        /*
                camden_group.animate({
                    //transform: 'r0,250,453 s1,1'
                    //transform: 'r10,100,100 s1,1'
                    //transform: 't100,100 s1,1'
                    transform: 't10,10'
                }, 1500, mina.elastic);
        */
        /*
        camden_group.animate({
            transform: 'rotate(1)'
        }, 15000, mina.elastic);
        */
        /*
        /* transforming this object turns it into something that I don't recognize and I'm not sure why. */
        /*
        camden_group.animate({
            //transform: 'r0,250,453 s1,1'
            //transform: 'r10,100,100 s1,1'
            //transform: 't100,100 s1,1'
            //transform: 'translate(100, 100)'
            transform: 't,10'
        }, 15000, mina.elastic);
        */
    };




    //https: //stackoverflow.com/questions/2296097/making-an-svg-image-object-clickable-with-onclick-avoiding-absolute-positioning
    //$(".btn").bind("click", function(event){alert("clicked svg")});

    //$("#camera_flash_circle").bind("click", function(event) { alert("clicked svg") });
    // the cls-1 is the class associated with the smartphone body. when the user clicks it, flash the camera flash.
    $(".cls-1").bind("click", function(event) {
        //alert("clicked svg");

        //execute the function to flash the camera_flash on and off
        animate_flash_action();
        show_camdens_svg();
        animate_camdens_svg();
    });

};