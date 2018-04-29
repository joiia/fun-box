$(document).ready(function () {
    
    $('.product-card:not(.product-card--disabled)').on('click', function () {
        
        $(this).toggleClass('product-card--selected').addClass('no-hover').find('.product-card__title--small').toggleClass('hidden').parents().eq(3).find('.product-description--buy, .product-description--about').toggleClass('hidden');
        
        $(this).one('mouseleave', function(){
            $(this).removeClass('no-hover');
        });
        
    });
    
    $('.product-description__link').on('click', function (event) {
        
        event.preventDefault();
        $(this).parent().toggleClass('hidden').parent().find('.product-description--about').toggleClass('hidden').parent().find('.product-card').toggleClass('product-card--selected').find('.product-card__title--small').toggleClass('hidden');
        
    });
});