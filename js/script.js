$(function () {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if (!header) return;

    if (window.scrollY > 800) {
      header.classList.add('bg_river');
    } else {
      header.classList.remove('bg_river');
    }
  });

  // Responsive Mobile  version  sidebar
  $(document).on('click', '.icon_menu', function () {
    $('.sidebar').animate(
      {
        right: '0',
      },
      1000,
    );
    $(this).fadeOut();
  });

  $(document).on('click', '.nav_icon_close', function () {
    $('.sidebar').animate(
      {
        right: '-350',
      },
      1000,
    );
    $('.icon_menu').show();
  });

  // toast message
  $('.toast_message').animate(
    {
      opacity: 1,
    },
    1000,
  );
  $('.toast_message .icon_close').click(function () {
    $('.toast_message').remove();
  });

  // Accordion Q&A
  $('.answer').hide();
  $('.qna_list li').click(function () {
    $(this).children('.answer').stop().slideToggle();
  });
});
