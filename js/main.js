$(document).ready(function() {
    // Carga data via json en html
    loadPost();

    // Reemplaza texto del botón si es menor a 960px.
    replaceButton();
});

function loadPost() {
    let html = '';


    let json = [{
                    "image":"./img/producto.png",
                    "name":"Paragolpe delantero adap",
                    "oldPrice": 2.626,
                    "normalPrice":  2.101,
                    "button": "VER DETALLES"
                },{
                    "image":"./img/producto.png",
                    "name":"Paragolpe delantero adap",
                    "oldPrice": 2.626,
                    "normalPrice":  2.102,
                    "button": "VER DETALLES"
                },{
                    "image":"./img/producto.png",
                    "name":"Paragolpe delantero adap",
                    "oldPrice": 2.626,
                    "normalPrice":  2.103,
                    "button": "VER DETALLES"
                },{
                    "image":"./img/producto.png",
                    "name":"Paragolpe delantero adap",
                    "oldPrice": 2.626,
                    "normalPrice":  2.104,
                    "button": "VER DETALLES"
                },{
                    "image":"./img/producto.png",
                    "name":"Paragolpe delantero adap",
                    "oldPrice": 2.626,
                    "normalPrice":  2.105,
                    "button": "VER DETALLES"
                },{
                    "image":"./img/producto.png",
                    "name":"Paragolpe delantero adap",
                    "oldPrice": 2.626,
                    "normalPrice":  2.106,
                    "button": "VER DETALLES"
                },{
                    "image":"./img/producto.png",
                    "name":"Paragolpe delantero adap",
                    "oldPrice": 2.626,
                    "normalPrice":  2.107,
                    "button": "VER DETALLES"
                },{
                    "image":"./img/producto.png",
                    "name":"Paragolpe delantero adap",
                    "oldPrice": 2.626,
                    "normalPrice":  2.108,
                    "button": "VER DETALLES"
                }];

	json.forEach(function(element) {
        let image = element.image;
		let name = element.name;
        let oldPrice = element.oldPrice;
        let normalPrice = element.normalPrice;
        let button = element.button;

        html += '<div class="s_item">'
        html += '<img class="s_item-image" src="'+image+'" alt="Summa Solutions">'
        html += '<p class="s_item-title">'+name+'</p>'
        html += '<div class="s_box-price">'
        html += '<span class="old-price">Antes: $'+oldPrice+'</span>'
        html += '<span class="normal-price">$'+normalPrice+'</span>'
        html += '</div>'
        html += '<a class="s_more" href="#">'+button+'</a>'
        html += '</div>'
	})

	document.getElementById('s_post').innerHTML = html;
}

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