$(()=>{
    const $buscar = $('#buscar');
    const $btn_buscar = $('#btn_buscar');
    $buscar.on('keypress', (e) => {
        e.preventDefault();
        if(($buscar.val() === "") && (e.key == 'Enter')){
            setTimeout(function(){
                console.log('Usted busca: '+$buscar.val());
                alert('Pronto tendremos resultados de: '+$buscar.val());
                $buscar.val('');
            },1000);
        }
    });
    $btn_buscar.click(function(){
        if(!($buscar.val() === "")){
            setTimeout(function(){
                alert('Pronto tendremos resultados de: '+$buscar.val());
                $buscar.val('');
            },1000);
        }
    })
    const card = $('.card');
    card.on('mouseover', function () {
      $(this).addClass('shadow-lg upAnimate');;
    });
    card.on('mouseout', function () {
      $(this).removeClass('shadow-lg upAnimate');
    });

    //sticky menu
    $(window).on('scroll', function (){
      let $scrollTop = $(window).scrollTop();
      const nav = $('nav'), ul = $('ul'), a = $('ul li a'), logo = $('#logo');
      if($scrollTop > 500){
        logo.attr("src","./assets/logo-green.png");
        nav.removeClass('navbar-dark');
        nav.addClass('fixed-top bg-white shadow-sm navbar-light');
        ul.removeClass('ulBgGreen');
        ul.addClass('ulMain');
        a.removeClass('text-white');
      }else{
        logo.attr("src","./assets/logo-white.png");
        nav.removeClass('bg-white shadow-sm');
        ul.removeClass('ulMain');
        ul.addClass('ulBgGreen');
        a.addClass('text-white');
      }

    });

    // slideshow
    const slides = $('#slideshow');
    console.log(slides);

});
