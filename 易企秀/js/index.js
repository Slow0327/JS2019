let $btn = $('.music_icon'),
    $audio = $('#audio');

var mySwiper = new Swiper('.swiper-container', {
    loop: false,
})

mySwiper.on('slideChangeTransitionEnd', function () {
    console.log(mySwiper.activeIndex)
    let $first = $('.first_box'),
    $second = $('.second_box'),
    $third = $('.third_box'),
    $fouth = $('.fouth_box');
    switch (mySwiper.activeIndex) {
        case 0:
            $first.addClass('zoomIn animated')
            $second.removeClass('zoomIn animated')
            $third.removeClass('zoomIn animated')
            $fouth.removeClass('zoomIn animated')
            break;
        case 1:
            $first.removeClass('zoomIn animated')
            $second.addClass('zoomIn animated')
            $third.removeClass('zoomIn animated')
            $fouth.removeClass('zoomIn animated')
            break;
        case 2:
            $first.removeClass('zoomIn animated')
            $second.removeClass('zoomIn animated')
            $third.addClass('zoomIn animated')
            $fouth.removeClass('zoomIn animated')
            break;

        case 3:
            $first.removeClass('zoomIn animated')
            $second.removeClass('zoomIn animated')
            $third.removeClass('zoomIn animated')
            $fouth.addClass('zoomIn animated')
            break;
            
            // case 5:
            //     $first.addClass('zoomIn animated')
            //     $second.removeClass('zoomIn animated')
            //     $third.removeClass('zoomIn animated')
            //     $fouth.removeClass('zoomIn animated')
            //     break;
            // case 0:
            //     $first.removeClass('zoomIn animated')
            //     $second.removeClass('zoomIn animated')
            //     $third.removeClass('zoomIn animated')
            //     $fouth.addClass('zoomIn animated')
            //     break;
    }
});




let isRunning = false;
$btn.on('touchend', function () {
    if (isRunning) {
        $(this).css({
            animationPlayState: 'paused'
        })
        isRunning = false;
        $audio[0].pause();
    } else {
        $(this).css({
            animationPlayState: 'running'
        })
        isRunning = true;
        $audio[0].play();
    }
})