
$('.nav>ul>li').on('touchstart',function(){
    $('.nav>ul>li').find('.hid').hide();
    $('.nav>ul>li').find('span').css({
        color:'#666666',
    })

    $('.nav>ul>li').find('.down').css({
        borderColor:'#cccccc transparent transparent transparent'
    })
    $(this).find('.hid').show()
    $(this).find('span').css({
        color:'#ff8a00',
        borderColor:' transparent  transparent #ff8a00 transparent '
    })
    $(this).find('.clic').css({
        color:'#fff'
      })
    $('.mc').show();
})


$('.qu_hide>ul>li').on('touchstart',function(){
    $('.qu_hide>ul>li').find('.qu').hide();
    $('.qu_hide>ul>li').css('color','#666666');
    $(this).find('.qu').show();
    $(this).css('color','#ff8a00')

})

$('.price>ul>li').on('click',function(){
    hide();
    $('.hid>ul>li').css('color','black')
    $('.hid').hide();
    $('.mc').hide();
    $(this).css('color','#ff8a00');
})
// $('.qu>ul>li').on('touchstart',function(){
//     $('.qu>ul>li').css('color','black')
//     $(this).css('color','#ff8a00')
    
// })
// document.documentElement.addEventListener('touchstart',function(){
//     $('.hid').hide();
// },true);

$('.mc').on('touchstart',function(){
    $('.hid').hide();
    $('.mc').hide();
    hide();
}) 
$('.clic').on('click',function(){
    $('.hid').css('display','none');
    $('.mc').hide();
    hide();
    
})
$('.qu_list>ul>li').on('click',function(){
    $('.qu>ul>li').css('color','black')
    $(this).css('color','#ff8a00')
    $('.hid').css('display','none');
    $('.mc').hide();
    hide();
    
})
function hide(){
    $('.nav>ul>li').find('span').css({
        color:'#666666',
    })
    $('.nav>ul>li').find('.down').css({
        borderColor:'#cccccc transparent transparent transparent'
    })
}
$('.q1>ul>li').on('touchstart',function(){
    $('.q1>ul>li').css({
        color:'#000000',
        backgroundColor:'white'
        })
        $(this).css({
            color:'white',
            backgroundColor:'#ff8a00'
        })
})
$('.q1>ul>li').on('touchstart',function(){
    $('.q1>ul>li').css({
        color:'#000000',
        backgroundColor:'white'
        })
        $(this).css({
            color:'white',
            backgroundColor:'#ff8a00'
        })
})
$('.q2>ul>li').on('touchstart',function(){
    $('.q2>ul>li').css({
        color:'#000000',
        backgroundColor:'white'
        })
        $(this).css({
            color:'white',
            backgroundColor:'#ff8a00'
        })
})
$('.q3>ul>li').on('touchstart',function(){
    $('.q3>ul>li').css({
        color:'#000000',
        backgroundColor:'white'
        })
        $(this).css({
            color:'white',
            backgroundColor:'#ff8a00'
        })
})
$('.q4>ul>li').on('touchstart',function(){
    $('.q4>ul>li').css({
        color:'#000000',
        backgroundColor:'white'
        })
        $(this).css({
            color:'white',
            backgroundColor:'#ff8a00'
        })
})



$('.q5>ul>li').on('touchstart',function(){
    $('.q5>ul>li').css({
        color:'#000000',
        backgroundColor:'white'
    })
        $(this).css({
            color:'white',
            backgroundColor:'#ff8a00'
        })
    })
    $('.q5>ul>li:last').on('touchstart',function(){
        $('.qu_1>ul>li').css({
            color:'#000000',
            backgroundColor:'white'
        })
    })

