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
$('textarea').on('input',function(){
    let x = $('textarea').val().length
    if(x>100){
        document.getElementById('charcounter').innerHTML = 'your available character finished'
    }
    else{
        document.getElementById('charcounter').innerHTML = 100 - x
    }
})
document.addEventListener('DOMContentLoaded',function(){
    function updatetime(){
        var dateFuture = new Date(2024 , 6 , 26);
        var dateNow = new Date();
        var seconds = Math.floor((dateFuture - (dateNow))/1000);
        var minutes = Math.floor(seconds/60);
        var hours = Math.floor(minutes/60);
        var days = Math.floor(hours/24);
        hours = hours-(days*24);
        minutes = minutes-(days*24*60)-(hours*60);
        seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
        $('.days').text(days + ' D')
        $('.hours').text(hours + ' h')
        $('.minutes').text(minutes + ' m')
        $('.seconds').text(seconds + ' s')
    }
    updatetime()
    setInterval(updatetime,1000)
})
$('.btn-close').on('click',function(){
    $('.sidenav').removeClass('nothidden');
    var sidebarWidth = $('.sidenav').hasClass('nothidden') ? '260px' : '10px';
    $('.openNav').animate({ 'margin-left': sidebarWidth }, 300)
})
$('.openNav').on('click',function(){
    $('.sidenav').addClass('nothidden');
    var sidebarWidth = $('.sidenav').hasClass('nothidden') ? '260px' : '10px';
    $('.openNav').animate({ 'margin-left': sidebarWidth }, 300)
})