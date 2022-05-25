$(document).ready(function() {
    // Reemplaza texto del botón si es menor a 960px.
    replaceButton();
});

function replaceButton() {
    let element;
    let textToReplace;
    let newText;

    $(window).resize(function() {
        if ($(window).width() < 960) {
            $('.s_more').each(function() {
                element = $(this);
                textToReplace = element.text();
                newText = textToReplace.replace("VER DETALLES", "COMPRAR");
                element.text(newText); 
            });
        }
        else {
            $('.s_more').each(function() {
                element = $(this);
                textToReplace = element.text();
                newText = textToReplace.replace("COMPRAR", "VER DETALLES");
                element.text(newText); 
            });
        }
    });
}