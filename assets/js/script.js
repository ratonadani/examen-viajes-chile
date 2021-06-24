$(document).ready(function () {
    //tooltip
    $('[data-bs-toggle="tooltip"]').tooltip();
    //toggle
    $('.plane').click(function () {
        $('.text-plane').toggle()
    });
    $('.mountain').click(function () {
        $('.text-mountain').toggle()
    });
    $('.route').click(function () {
        $('.text-route').toggle()
    });
    //cambio de color dbclick
    $('.sub').dblclick(function () {
        $(this).css({
            "color": "yellow"
        });
    })
});
