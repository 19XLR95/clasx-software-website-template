onLoadAndResize();

$(window).resize(onLoadAndResize);

$('#langDropdown').dropdown();
$('#langDropdownModal').dropdown();

$('#modalMenuBtn').click(
  function()
  {
    $('#modalMenu').modal({closable: false}).modal('show');
    $('.ui.dimmer').css('background-image', 'linear-gradient(-45deg, #6f86d6 0%, #48c6ef 100%)');
  }
);

$('#contactBtn').click(
  function()
  {
    $('html, body').animate({
      scrollTop: ($('#contactFormText').offset().top)
    }, 1000);
  }
);

function showSamplePortfolioImg(element)
{
  var src = $(element).data('url');
  $('#modalImg').attr('src', src);
  $('#portfolioSampleModal').modal('show');
}

function onLoadAndResize()
{
  if($(window).width() <= 768)
  {
    $('#menuCol').hide();

    $('#modalMenuBtn').show();

    $('#logoCol').removeClass('eight wide column');
    $('#logoCol').addClass('sixteen wide column');

    $('#portfolioBtnLeft').removeClass('right aligned column');
    $('#portfolioBtnRight').removeClass('left aligned column');
    $('#portfolioBtnLeft').addClass('center aligned column');
    $('#portfolioBtnRight').addClass('center aligned column');
    $('#portfolioBtnLeft2').removeClass('right aligned column');
    $('#portfolioBtnRight2').removeClass('left aligned column');
    $('#portfolioBtnLeft2').addClass('center aligned column');
    $('#portfolioBtnRight2').addClass('center aligned column');

    $('#toolsLeftCol').css('border-right-width', '0');
    $('#toolsMiddleCol').css('border-right-width', '0');
    $('#toolsMiddleCol').css('border-left-width', '0');
    $('#toolsRightCol').css('border-left-width', '0');
  }
  else if($(window).width() <= 1100)
  {
    $('#menuCol').hide();

    $('#modalMenuBtn').show();

    $('#logoCol').removeClass('eight wide column');
    $('#logoCol').addClass('sixteen wide column');

    $('#toolsLeftCol').css('border-right-width', '1px');
    $('#toolsMiddleCol').css('border-right-width', '1px');
    $('#toolsMiddleCol').css('border-left-width', '1px');
    $('#toolsRightCol').css('border-left-width', '1px');
  }
  else
  {
    $('#menuCol').show();

    $('#modalMenuBtn').hide();

    $('#logoCol').removeClass('sixteen wide column');
    $('#logoCol').addClass('eight wide column');

    $('#portfolioBtnLeft').removeClass('center aligned column');
    $('#portfolioBtnRight').removeClass('center aligned column');
    $('#portfolioBtnLeft').addClass('right aligned column');
    $('#portfolioBtnRight').addClass('left aligned column');
    $('#portfolioBtnLeft2').removeClass('center aligned column');
    $('#portfolioBtnRight2').removeClass('center aligned column');
    $('#portfolioBtnLeft2').addClass('right aligned column');
    $('#portfolioBtnRight2').addClass('left aligned column');

    $('#toolsLeftCol').css('border-right-width', '1px');
    $('#toolsMiddleCol').css('border-right-width', '1px');
    $('#toolsMiddleCol').css('border-left-width', '1px');
    $('#toolsRightCol').css('border-left-width', '1px');
  }
}
