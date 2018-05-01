$('#design').on('click', ()=> {
    $('.project-nav__item').removeClass('active');
    $('.design').addClass('active');
    $('.portfolio-list__item').addClass('hide');
    $('.mans').removeClass('hide');
});

$('#filter').on('click', ()=> {
    $('.project-nav__item').removeClass('active');
    $('.all').addClass('active');
     $('.portfolio-list__item').removeClass('hide');
    });



$(window).scroll(function(){
	if($(window).scrollTop()>800){
		$('#header').css('background-image', 'linear-gradient(to right, #211b19 0%, #4e3427 100%)');
		$('#header').css('top', '0');
		$('#header').css('position', 'fixed')
} 
	else if ($(window).scrollTop()<50) {
		$('#header').css('background-image', 'none');
		$('#header').css('top', '40px');
		$('#header').css('position', 'absolute');
}
})



