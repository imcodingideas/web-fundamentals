$(document).ready(function () {
    $('#tab1').css('display','block');
    $(".tabs [href='#tab1']").click(function(){
        $('#tab1').css('display','block');
        $('#tab2').css('display','none');
        $('#tab3').css('display','none');
        $('li:nth-child(1)').addClass('active');
        $('li:nth-child(2)').removeClass('active');
        $('li:nth-child(3)').removeClass('active');
    });
    $(".tabs [href='#tab2']").click(function(){
        $('#tab2').css('display','block');
        $('#tab1').css('display','none');
        $('#tab3').css('display','none');
        $('li:nth-child(2)').addClass('active');
        $('li:nth-child(1)').removeClass('active');
        $('li:nth-child(3)').removeClass('active');
    });
    $(".tabs [href='#tab3']").click(function(){
        $('#tab3').css('display','block');
        $('#tab2').css('display','none');
        $('#tab1').css('display','none');
        $('li:nth-child(3)').addClass('active');
        $('li:nth-child(2)').removeClass('active');
        $('li:nth-child(1)').removeClass('active');
    });
});