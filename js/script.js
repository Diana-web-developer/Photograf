$(document).ready(function () {
    /**
     * При прокрутке страницы, показываем или срываем кнопку
     */
    $(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 50) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });

    /** При нажатии на кнопку мы перемещаемся к началу страницы */
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //  Для меню бургера:
    // $('.menuToggle').on('click', function (e) {
    //     e.preventDefault();
    //     $('.menu').slideToggle(300, function () {
    //         if ($(this).css('display') === "none") {
    //             $(this).removeAttr('style');
    //         }
    //     });
    // });
    // Для меню, чтобы закрывалось:
    // $('.for-menu a').on('click', function (e) {
    //     e.preventDefault();
    //     $('.menu').slideToggle(0, function () {
    //         if ($(this).css('display') === "none") {
    //             $(this).removeAttr('style');
    //         }
    //     });
    // });


    // Зафиксировать меню:

    var fixed = $("#black");
    $(window).scroll(function (e) {
        e.preventDefault();
        if ($(window).scrollTop() > 455) {
            fixed.addClass("to-fix");
        } else {
            fixed.removeClass("to-fix");
        }
    });



    // Плавная прокрутка для всех ссылок: добавить класс go_to нужным ссылкам
    $(".go_to").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
    


});