/* Funcion que sirve para cambiar de color la card. */
$('.card-body').bind("mouseover", function () {
    var color = $(this).css("background-color");

    $(this).css("background", "#ff0101");

    $(this).bind("mouseout", function () {
        $(this).css("background", color);
    });
});