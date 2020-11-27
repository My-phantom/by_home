
$('.nav>ul>li').on('touchstart',function(){
    $('.nav>ul>li').find('.hide').hide();
    $('.nav>ul>li').find('span').css({
        color:'#666666',
    })

    $('.nav>ul>li').find('span:eq(1)').removeClass('up');
    // $(this).find('span:eq(1)').addClass('up')
    $('.nav>ul>li').find('span:eq(1)').css({
        marginTop: '0.16rem',
        borderColor:' #cccccc  transparent transparent transparent'
    })
    $(this).find('span:eq(1)').css({
        marginTop: '0.09rem',
        borderColor:' transparent transparent  #ff8a00 transparent'
    })
    

    $(this).find('.hide').show()
    $(this).find('span').css({
        color:'#ff8a00',
    })
    $(this).find('.sure').css({
        color:'#fff'
      })
    $('.layer').show();
    
})


$('.area_hide>ul>li').on('touchstart',function(){
    $('.area_hide>ul>li').find('.listem').hide();
    $('.area_hide>ul>li').css('color','#666666');
    $(this).find('.listem').show();
    $(this).css('color','#ff8a00')

})
$('.area_list>ul>li').on('click',function(){
    $('.listem>ul>li').css('color','black')
    $(this).css('color','#ff8a00')
    $('.hid').css('display','none');
    $('.layer').hide();
    hide();
    
})
$('.subway_list>ul>li').on('click',function(){
    $('.listem>ul>li').css('color','black')
    $(this).css('color','#ff8a00')
    $('.hid').css('display','none');
    $('.layer').hide();
    hide();
    
})
$('.listem').on('click',function(){
    $('.hide').hide();
    $('.nav>ul>li').find('span:eq(1)').css({
        marginTop: '0.17rem',
        borderColor:' #cccccc  transparent transparent transparent'
    })
})

$('.price_hide>ul>li').on('click',function(){
    hide();
    $('.hide>ul>li').css('color','black')
    $('.hide').hide();
    $('.layer').hide();
    $(this).css('color','#ff8a00');
    $('.nav>ul>li').find('span:eq(1)').css({
        marginTop: '0.17rem',
        borderColor:' #cccccc  transparent transparent transparent'
    })
})


$('.layer').on('touchstart',function(){
    $('.hide').hide();
    $('.layer').hide();
    hide();
    $('.nav>ul>li').find('span:eq(1)').css({
        marginTop: '0.17rem',
        borderColor:' #cccccc  transparent transparent transparent'
    })
}) 
$('.sure').on('click',function(){
    $('.hide').css('display','none');
    $('.layer').hide();
    hide();
    $('.nav>ul>li').find('span:eq(1)').css({
        marginTop: '0.17rem',
        borderColor:' #cccccc  transparent transparent transparent'
    })
    
})

function hide(){
    $('.nav>ul>li').find('span').css({
        color:'#666666',
    })
    $('.nav>ul>li').find('.down').css({
        borderColor:'#cccccc transparent transparent transparent'
    })
}
$('.more_area>ul>li').on('touchstart',function(){
    $('.more_area>ul>li').css({
        color:'#000000',
        backgroundColor:'white'
        })
        $(this).css({
            color:'white',
            backgroundColor:'#ff8a00'
        })
})
$('.more_area>ul>li').on('touchstart',function(){
    $('.more_area>ul>li').css({
        color:'#000000',
        backgroundColor:'white'
        })
        $(this).css({
            color:'white',
            backgroundColor:'#ff8a00'
        })
})
$('.size>ul>li').on('touchstart',function(){
    $('.size>ul>li').css({
        color:'#000000',
        backgroundColor:'white'
        })
        $(this).css({
            color:'white',
            backgroundColor:'#ff8a00'
        })
})
$('.label>ul>li').on('touchstart',function(){
    $('.label>ul>li').css({
        color:'#000000',
        backgroundColor:'white'
        })
        $(this).css({
            color:'white',
            backgroundColor:'#ff8a00'
        })
})
$('.age>ul>li').on('touchstart',function(){
    $('.age>ul>li').css({
        color:'#000000',
        backgroundColor:'white'
        })
        $(this).css({
            color:'white',
            backgroundColor:'#ff8a00'
        })
})



$('.floor>ul>li').on('touchstart',function(){
    $('.floor>ul>li').css({
        color:'#000000',
        backgroundColor:'white'
    })
        $(this).css({
            color:'white',
            backgroundColor:'#ff8a00'
        })
    })
    $('.floor>ul>li:last').on('touchstart',function(){
        $('.more_conten>ul>li').css({
            color:'#000000',
            backgroundColor:'white'
        })
    })

