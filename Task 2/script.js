import * as shop from './math.js'

let drink;
let beerBottle = 0;
let wineBottle = 0;
let pepsiBottle = 0;

$("[name='radio']").click(function () {
    drink = event.target.value;
})

$(".add").click(function () {
    let count = $("#count").val()
    if (count != '' && '0' && drink != '') {
        if (drink == 'Пиво') {
            beerBottle = count;
            $("[value='Пиво']").attr('disabled', true)
        }

        else if (drink == 'Вино') {
            wineBottle = count;
            $("[value='Вино']").attr('disabled', true)
        }

        else if (drink == 'Пепсі') {
            pepsiBottle = count;
            $("[value='Пепсі']").attr('disabled', true)
        }

        $("#count_area")[0].innerHTML += `${drink}: ${count} шт. \n`;
        $(".second_form")[0].reset();
        drink = '';
    }
})

$(".buy").click(function () {
    shop.shopAll(beerBottle, wineBottle, pepsiBottle)
    beerBottle = 0;
    wineBottle = 0;
    pepsiBottle = 0;
    $("[name='radio']").attr('disabled', false)

    if (shop.checkStorage() == 0) {
        $(".block_3_area")[0].innerHTML = `${$("#count_area")[0].textContent}Всього: ${shop.checkBank()} гривень`;
    }
    
    $("#count_area")[0].textContent = "";
    shop.resetBank();
    shop.resetStorage();
})


