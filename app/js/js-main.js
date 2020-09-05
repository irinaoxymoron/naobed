$(document).ready(function(){

    //burger 
    $(".menu-trigger").click(function () {
      $(".ul-trigger").slideToggle();
      $(".menu-trigger").toggleClass('menu_state_open');
    });
    
    $('.menu-trigger').click(function(){
      if($(this).hasClass('menu_state_open')){
        $('body').css('overflow', 'hidden');
        }else{
          $('body').css('overflow', 'auto');
        }
    });
  
    $(window).resize(function(){
      if ($(window).width() > 959) {
        $('.ul-trigger').removeAttr('style');
      };
    });

    // Header fixed scroll effect
    // var stickyOffset = $('.header').offset().top;

    // $('body').scroll(function(){
    //   var sticky = $('.header'),
    //       scroll = $('body').scrollTop();
        
    //   if (scroll >= stickyOffset) sticky.addClass('header__fixed');
    //   else sticky.removeClass('header__fixed');
    // });

    $(document).ready(function() {
  
      var $wrapper = $('.tab-wrapper'),
          $allTabs = $wrapper.find('.tab-content > div'),
          $tabMenu = $wrapper.find('.tab-menu li'),
          $line = $('<div class="line"></div>').appendTo($tabMenu);
      
      $allTabs.not(':first-of-type').hide();  
      $tabMenu.filter(':first-of-type').find(':first').width('100%')
      
      $tabMenu.each(function(i) {
        $(this).attr('data-tab', 'tab'+i);
      });
      
      $allTabs.each(function(i) {
        $(this).attr('data-tab', 'tab'+i);
      });
      
      $tabMenu.on('click', function() {
        
        var dataTab = $(this).data('tab'),
            $getWrapper = $(this).closest($wrapper);
        
        $getWrapper.find($tabMenu).removeClass('active');
        $(this).addClass('active');
        
        $getWrapper.find('.line').width(0);
        $(this).find($line).animate({'width':'100%'}, 'fast');
        $getWrapper.find($allTabs).hide();
        $getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').show();
      });
    
    });//end ready

    $('.novelty__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      // autoplay: true,
      // autoplaySpeed: 6000,
      arrows : false,
      responsive: [
          {
            breakpoint: 865,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 625,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });

});

