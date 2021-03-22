$(function () {
    // $('.btn-slider').click(function () {
    //     $('.banner').slideToggle();
    //     $(this).css("buttom", "-30")
    // });

    setInterval(() => {
        $(".banner img").each(function () {
            console.log("一次");
            $(this).fadeToggle(1000);
        });
    }, 6000);


    console.log(111);
    window.addEventListener('scroll', function () {
        let t = $('body, html').scrollTop();   // 目前监听的是整个body的滚动条距离
        if (t > 0) {
            $('header').addClass('header-active')
        } else {
            $('header').removeClass('header-active')
        }
    })
});