import { onMounted, onUnmounted } from 'vue';
import jQuery from 'jquery';

export const navbarPlugin = () => {
  if (process.client) {
    onMounted(() => {
      (function ($) {
        // Dropdown on mouse hover
        function toggleNavbarMethod() {
          if ($(window).width() > 992) {
            $('.navbar .dropdown').on('mouseover', function () {
              $('.dropdown-toggle', this).trigger('click');
            }).on('mouseout', function () {
              $('.dropdown-toggle', this).trigger('click').blur();
            });
          } else {
            $('.navbar .dropdown').off('mouseover').off('mouseout');
          }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);

        // Back to top button
        $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
          } else {
            $('.back-to-top').fadeOut('slow');
          }
        });
        $('.back-to-top').click(function () {
          $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
          return false;
        });
      })(jQuery);
    });

    onUnmounted(() => {
      // Tu código aquí para realizar limpieza o remover listeners
    });
  }
};
export default navbarPlugin;