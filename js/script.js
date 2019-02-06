'use strict';
$(function(){
    let width = '700px';
    let animationSpeed = 1000;
    let pause = 1000;

    let slider = $('#slider');
    let sliderContainer = slider.find('ul');
    let slides = sliderContainer.find('li');
    let currentSlide = 0;
    let interval;
    function startSlider(){
        interval = setInterval(function(){
            $(sliderContainer).animate({'margin-left': '-='+width}, animationSpeed, function(){
                
                currentSlide++;
                if(currentSlide === slides.length){
                    currentSlide = 0; 
                    $(sliderContainer).css('margin-left', 0);
                }; 
            });
        }, pause);
    }
    function stopSlider(){
        clearInterval(interval);
    }
    $(slider).hover(startSlider, stopSlider);
    // $(slider).hover(stopSlider, startSlider);
    // startSlider();
    //un-comment the above two lines and comment the line before if you want auto slide function and pause on hover;
    


    $('#next').click(() => {
        console.log(currentSlide);
        $(sliderContainer).animate({'margin-left': '-='+width}, 500, function(){
            currentSlide++;
            if(currentSlide === slides.length){
                currentSlide = 0; 
                $(sliderContainer).css('margin-left', 0);
            }; 
        });
});
$('#prev').click(() => {
    $(sliderContainer).animate({'margin-left': '+='+width}, 500, function(){
        currentSlide = currentSlide-1;
        if(currentSlide <= 0){
            currentSlide = slides.length;
            width = parseFloat(width);
            $(sliderContainer).css('margin-left', '-'+((currentSlide*width)-width)+'px');
        }; 
    });
});


});