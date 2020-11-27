$('.hot').on('touchstart',function(){
    $('.friend_hid').hide();
    $('.hot_hid').show();
    $('.attention>ul>li').find('span').removeClass('public');
    $(this).addClass('public')
    
})
$('.friend').on('touchstart',function(){
    $('.hot_hid').hide();
    $('.friend_hid').show();
    $('.attention>ul>li').find('span').removeClass('public');
    $(this).addClass('public')

})