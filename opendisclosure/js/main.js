$(document).ready(function () {
    $(".primary-btn").click(function () {
        $("#tabs li").removeClass("active");
        $(".primary-btn").addClass("active");
        $(".candidate-gp").css("display", "none");
        $("#primary").css("display", "block");
    });
    $(".runoff-btn").click(function () {
        $("#tabs li").removeClass("active");
        $(".runoff-btn").addClass("active");
        $(".candidate-gp").css("display", "none");
        $("#runoff").css("display", "block");
        var name = 'Cortese';
        var total = '1.12m';
        var contrib = '1.1k';
        var percent = '15%';
        $( "h2" ).html(name);
        $( "h3" ).html(total);
        $( "h4" ).html(contrib);
        $( "h5" ).html(percent);
    });
    $(".pac-btn").click(function () {
        $("#tabs li").removeClass("active");
        $(".pac-btn").addClass("active");
        $(".candidate-gp").css("display", "none");
        $("#pac").css("display", "block");
        var name = 'Cortese';
        var total = '1.12m';
        var contrib = '1.1k';
        var percent = '15%';
        $( "h2" ).html(name);
        $( "h3" ).html(total);
        $( "h4" ).html(contrib);
        $( "h5" ).html(percent);

    });
    /*$("#importance").click(function () {
        $('#importancediv').css('display', 'block');
        //$(this).next('#importancediv').stop().show('slide', {direction: 'down'}, 1400);
    });*/
    // On start up show the About screen
    $("#blackout").css('display', 'block');
    $("#about").css('display', 'block');
    $("#blackout").click(function () {
        $("#blackout").css("display", "none");
        $(".modal").css("display", "none");
    });
    // $(".importance-btn").click(function () {
    //     $("#blackout").css("display", "block");
    //     $(".modal").css("display", "none");
    //     $("#importance-div").css("display", "block");
    // });
    // $(".whats-a-pac-btn").click(function () {
    //     $("#blackout").css("display", "block");
    //     $(".modal").css("display", "none");
    //     $("#whats-a-pac-div").css("display", "block");
    // });
    $(".about-btn").click(function () {
        $("#blackout").css("display", "block");
        $(".modal").css("display", "none");
        $("#about-div").css("display", "block");
    });

// This code will show and hide the iframes
// Primaries
    $('.liccardo-pri-btn').click(function() {
        $('iframe').css('display', 'none');
        $('iframe.liccardo-pri').css('display', 'block');
        var name = 'Liccardo';
        var total = '1.2m';
        var contrib = '1k';
        var percent = '20%';
        $( "h2" ).html(name);
        $( "h3" ).html(total);
        $( "h4" ).html(contrib);
        $( "h5" ).html(percent);
    });

    $('.cortese-pri-btn').click(function() {
        $('iframe').css('display', 'none');
        $('iframe.cortese-pri').css('display', 'block');
        var name = 'Cortese';
        var total = '1.12m';
        var contrib = '1.1k';
        var percent = '15%';
        $( "h2" ).html(name);
        $( "h3" ).html(total);
        $( "h4" ).html(contrib);
        $( "h5" ).html(percent);
    });

    $('.nguyen-pri-btn').click(function() {
        $('iframe').css('display', 'none');
        $('iframe.nguyen-pri').css('display', 'block');
        var name = 'Nguyen';
        var total = '800k';
        var contrib = '1.3k';
        var percent = '5%';
        $( "h2" ).html(name);
        $( "h3" ).html(total);
        $( "h4" ).html(contrib);
        $( "h5" ).html(percent);
    });

    $('.oliverio-pri-btn').click(function() {
        $('iframe').css('display', 'none');
        $('iframe.oliverio-pri').css('display', 'block');
        var name = 'Oliverio';
        var total = '500k';
        var contrib = '500';
        var percent = '1%';
        $( "h2" ).html(name);
        $( "h3" ).html(total);
        $( "h4" ).html(contrib);
        $( "h5" ).html(percent);
    });

    $('.herrera-pri-btn').click(function() {
        $('iframe').css('display', 'none');
        $('iframe.herrera-pri').css('display', 'block');
        var name = 'Herrera';
        var total = '$200';
        var contrib = '750';
        var percent = '2%';
        $( "h2" ).html(name);
        $( "h3" ).html(total);
        $( "h4" ).html(contrib);
        $( "h5" ).html(percent);
    });

    //Run offs
    $('.liccardo-run-btn').click(function() {
        $('iframe').css('display', 'none');
        $('iframe.liccardo-run').css('display', 'block');
        var name = 'Licarrdo';
        var total = '1.2m';
        var contrib = '1k';
        var percent = '20%';
        $( "h2" ).html(name);
        $( "h3" ).html(total);
        $( "h4" ).html(contrib);
        $( "h5" ).html(percent);

    });

    $('.cortese-run-btn').click(function() {
        $('iframe').css('display', 'none');
        $('iframe.cortese-run').css('display', 'block');
        var name = 'Cortese';
        var total = '1.12m';
        var contrib = '1.1k';
        var percent = '15%';
        $( "h2" ).html(name);
        $( "h3" ).html(total);
        $( "h4" ).html(contrib);
        $( "h5" ).html(percent);
    });

    //PACs
    $('.liccardo-pac-btn').click(function() {
        $('iframe').css('display', 'none');
        $('iframe.liccardo-pac').css('display', 'block');
        var name = 'Licarrdo';
        var total = '1.2m';
        var contrib = '1k';
        var percent = '20%';
        $( "h2" ).html(name);
        $( "h3" ).html(total);
        $( "h4" ).html(contrib);
        $( "h5" ).html(percent);

    });

    $('.cortese-pac-btn').click(function() {
        $('iframe').css('display', 'none');
        $('iframe.cortese-pac').css('display', 'block');
        var name = 'Cortese';
        var total = '1.12m';
        var contrib = '1.1k';
        var percent = '20%';
        $( "h2" ).html(name);
        $( "h3" ).html(total);
        $( "h4" ).html(contrib);
        $( "h5" ).html(percent);
    });
})
