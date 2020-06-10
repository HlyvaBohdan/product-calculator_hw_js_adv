let bank = 1000;
let currentBank = 0;
let beerCount = parseInt($('#beer').val());
let beerPrice = 30;
let wineCount = parseInt($('#wine').val());
let winePrice = 80;
let pepsiCount = parseInt($('#pepsi').val());
let pepsiPrice = 10;
let check = 0;

function sellBeer(count) {
    beerCount -= count;
    $('#beer')[0].value = `${beerCount} шт.`;
    currentBank += beerPrice * count;
    bank += currentBank
    $('#balance')[0].value = bank + "грн";
}

function sellWine(count) {
    wineCount -= count;
    $('#wine')[0].value = `${wineCount} шт.`;
    currentBank += winePrice * count;
    bank += currentBank;
    $('#balance')[0].value = bank + "грн";
}

function sellPepsi(count) {
    pepsiCount -= count;
    $('#pepsi')[0].value = `${pepsiCount} шт.`;
    currentBank += pepsiPrice * count;
    bank += currentBank;
    $('#balance')[0].value = bank + "грн";
}

function checkBank() {
    return currentBank
}

function resetBank() {
    return currentBank = 0;
}

function shopAll(beerBottle, wineBottle, pepsiBottle) {
    if (beerBottle <= beerCount && wineBottle <= wineCount && pepsiBottle <= pepsiCount) {
        if (beerBottle > 0) {
            sellBeer(beerBottle);
        }
        if (wineBottle > 0) {
            sellWine(wineBottle);
        }
        if (pepsiBottle > 0) {
            sellPepsi(pepsiBottle);
        }
    }

    else if (beerBottle > beerCount) {
        alert(`Вибачайте, на складі лишилось ${beerCount} бутилки пива `)
        check++
    }
    else if (wineBottle > wineCount) {
        alert(`Вибачайте, на складі лишилось ${wineCount} бутилки вина`)
        check++
    }
    else if (pepsiBottle > pepsiCount) {
        alert(`Вибачайте, на складі лишилось ${pepsiCount} бутилки пепсі `)
        check++
    }
}

function checkStorage() {
    return check
}

function resetStorage() {
    return check = 0;
}

export { checkBank, resetBank, checkStorage, resetStorage, shopAll }