$(function () {
    $('.btn-slider').click(function () {
        $('.banner').slideToggle();
        $(this).css("buttom", "-30")
    });

    setInterval(() => {
        console.log('一次');
        $(".banner img").each(function () {
            $(this).fadeToggle(1000);
        });
    }, 6000);
});