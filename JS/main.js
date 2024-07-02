/// <reference types="../node_modules/@types/jquery" />


$('.clickable').on('click',function(){
    if($(this).next().hasClass('clicked')){
        $(this).next().slideUp(500)
        $(this).next().removeClass('clicked')
    }
    else{
        $('html').find('.clicked').slideUp(500)
        $('html').find('.clicked').removeClass('clicked')
        $(this).next().slideToggle(500)
        $(this).next().addClass('clicked')
    }
})