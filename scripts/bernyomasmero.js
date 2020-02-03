//Évenkénti különbözet
var K15 = 0;
var K16 = 0;
var K17 = 0;
var K18 = 0;
var K19 = 0;
var K20 = 0;

//Hibaüzenetek
var E15 = '';
var E16 = '';
var E17 = '';
var E18 = '';
var E19 = '';
var E20 = '';
var EF  = '';

function calc(x){
    var ev, kezdoPb, minBer, kezdoMinBer, pedSzint, vegSzint, fokozat, error;
    error = false;
    EF = '';
//Évenkénti fokozatok
    var F15 = ev1.fokozat.value;
    var F16 = ev2.fokozat.value;
    var F17 = ev3.fokozat.value;
    var F18 = ev4.fokozat.value;
    var F19 = ev5.fokozat.value;
    var F20 = ev6.fokozat.value;
//kezdőbér meghatározás év alapján
    if(x == 15){
        pedSzint = ev1.pedSzint.value;
        vegSzint = ev1.vegSzint.value;
        fokozat = ev1.fokozat.value;
        F15 = fokozat;
        E15 = '';
        ev = 15;
        //Pedagógus bér
        if(vegSzint == 1){kezdoPb = 120683;}
        else if(vegSzint == 2){kezdoPb = 165749;}
        else if(vegSzint == 3){kezdoPb = 182293;}
        else{error = true;}
        //Minimál bér
        minBer = 105000;
        if(vegSzint == 1){kezdoMinBer = minBer * 1.189;}
        else if(vegSzint == 2){kezdoMinBer = minBer * 1.633;}
        else if(vegSzint == 3){kezdoMinBer = minBer * 1.796;}
        else{error = true;}
        //Kitöltés ellenörzése
        if(fokozat == ''){error = true;}
        if(pedSzint == 0 && vegSzint == 0 && fokozat == 0){error = false; K15 = 0;}
        if(error){E15 += "<div id='E15'><b><i>2015:</i></b> Üres mező(k)!</div>";}
        error = false;

    }
    else if(x == 16){
        pedSzint = ev2.pedSzint.value;
        vegSzint = ev2.vegSzint.value;
        fokozat = ev2.fokozat.value;
        F16 = fokozat;
        E16 = '';
        ev = 16;
        //Pedagógus bér
        if(vegSzint == 1){kezdoPb = 121090;}
        else if(vegSzint == 2){kezdoPb = 171434;}
        else if(vegSzint == 3){kezdoPb = 189196;}
        else{error = true;}
        //Minimál bér
        minBer = 111000;
        if(vegSzint == 1){kezdoMinBer = minBer * 1.189;}
        else if(vegSzint == 2){kezdoMinBer = minBer * 1.633;}
        else if(vegSzint == 3){kezdoMinBer = minBer * 1.796;}
        else{error = true;}
        //Kitöltés ellenörzése
        if(fokozat == ''){error = true;}
        if(pedSzint == 0 && vegSzint == 0 && fokozat == 0){error = false; K16 = 0;}
        if(error){E16 += "<div id='E16'><b><i>2016:</i></b> Üres mező(k)!</div>";}
        error = false;
    }
    else if(x == 17){
        pedSzint = ev3.pedSzint.value;
        vegSzint = ev3.vegSzint.value;
        fokozat = ev3.fokozat.value;
        F17 =  fokozat;
        E17 =  '';
        ev = 17;
        //Pedagógus bér
        if(vegSzint == 1){kezdoPb = 121800;}
        else if(vegSzint == 2){kezdoPb = 182700;}
        else if(vegSzint == 3){kezdoPb = 203000;}
        else{error = true;}
        //Minimál bér
        minBer = 127500;
        if(vegSzint == 1){kezdoMinBer = minBer * 1.189;}
        else if(vegSzint == 2){kezdoMinBer = minBer * 1.633;}
        else if(vegSzint == 3){kezdoMinBer = minBer * 1.796;}
        else{error = true;}
        //Kitöltés ellenörzése
        if(fokozat == ''){error = true;}
        if(pedSzint == 0 && vegSzint == 0 && fokozat == 0){error = false; K17 = 0;}
        if(error){E17 += "<div id='E17'><b><i>2017:</i></b> Üres mező(k)!</div>";}
        error = false;
    }
    else if(x == 18){
        pedSzint = ev4.pedSzint.value;
        vegSzint = ev4.vegSzint.value;
        fokozat = ev4.fokozat.value;
        F18 = fokozat;
        E18 = '';
        ev = 18;
        //Pedagógus bér
        if(vegSzint == 1){kezdoPb = 121800;}
        else if(vegSzint == 2){kezdoPb = 182700;}
        else if(vegSzint == 3){kezdoPb = 203000;}
        else{error = true;}
        //Minimál bér
        minBer = 138000;
        if(vegSzint == 1){kezdoMinBer = minBer * 1.189;}
        else if(vegSzint == 2){kezdoMinBer = minBer * 1.633;}
        else if(vegSzint == 3){kezdoMinBer = minBer * 1.796;}
        else{error = true;}
        //Kitöltés ellenörzése
        if(fokozat == '0'){error = true;}
        if(pedSzint == 0 && vegSzint == 0 && fokozat == 0){error = false; K18 = 0;}
        if(error){E18 += "<div id='E18'><b><i>2018:</i></b> Üres mező(k)!</div>";}
        error = false;
    }
    else if(x == 19){
        pedSzint = ev5.pedSzint.value;
        vegSzint = ev5.vegSzint.value;
        fokozat = ev5.fokozat.value;
        F19 = fokozat;
        E19 = '';
        ev = 19;
        //Pedagógus bér
        if(vegSzint == 1){kezdoPb = 195000;}
        else if(vegSzint == 2){kezdoPb = 195000;}
        else if(vegSzint == 3){kezdoPb = 203000;}
        else{error = true;}
        //Minimál bér
        minBer = 149000;
        if(vegSzint == 1){kezdoMinBer = minBer * 1.189;}
        else if(vegSzint == 2){kezdoMinBer = minBer * 1.633;}
        else if(vegSzint == 3){kezdoMinBer = minBer * 1.796;}
        else{error = true;}
        //Kitöltés ellenörzése
        if(fokozat == '0'){error = true;}
        if(pedSzint == 0 && vegSzint == 0 && fokozat == 0){error = false; K19 = 0;}
        if(error){E19 += "<div id='E19'><b><i>2019:</i></b> Üres mező(k)!</div>";}
        error = false;
    }
    else if(x == 20){
        pedSzint = ev6.pedSzint.value;
        vegSzint = ev6.vegSzint.value;
        fokozat = ev6.fokozat.value;
        F20 = fokozat;
        E20 = '';
        ev = 20;
        //Pedagógus bér
        if(vegSzint == 1){kezdoPb = 210600;}
        else if(vegSzint == 2){kezdoPb = 210600;}
        else if(vegSzint == 3){kezdoPb = 203000;}
        else{error = true;}
        //Minimál bér
        minBer = 161000;
        if(vegSzint == 1){kezdoMinBer = minBer * 1.189;}
        else if(vegSzint == 2){kezdoMinBer = minBer * 1.633;}
        else if(vegSzint == 3){kezdoMinBer = minBer * 1.796;}
        else{error = true;}
        //Kitöltés ellenörzése
        if(fokozat == '0'){error = true;}
        if(pedSzint == 0 && vegSzint == 0 && fokozat == 0){error = false; K20 = 0;}
        if(error){E20 += "<div id='E20'><b><i>2020:</i></b> Üres mező(k)!</div>";}
        error = false;
    }else{}
//Szorzó meghatározása fokozat és szint alapján
    var f = fokozat;

    var fVal;
    if(pedSzint == 1){
        if(f == 1){fVal = 1;}
        else{error = true; if(f != 0){EF += "<div id='EF'><b><i>20" + ev + ":</i></b> Gyakornok csak 1-es fokozattal rendelkezhet!</div>";}}
    }else if(pedSzint == 2){
        if(ev==19 && vegSzint == 1 && f>1 && f<10){
            fVal = 1;
        }else if (ev==20 && vegSzint == 1 && f>1 && f<12){
            fVal = 1;
        }else{
            if((ev==19 || ev==20) && vegSzint == 1){kezdoPb = 121800;}

            if(f == 2){fVal = 1.2;}
            else if(f == 3){fVal = 1.3;}
            else if(f == 4){fVal = 1.35;}
            else if(f == 5){fVal = 1.4;}
            else if(f == 6){fVal = 1.45;}
            else if(f == 7){fVal = 1.5;}
            else if(f == 8){fVal = 1.55;}
            else if(f == 9){fVal = 1.6;}
            else if(f == 10){fVal = 1.65;}
            else if(f == 11){fVal = 1.7;}
            else if(f == 12){fVal = 1.75;}
            else if(f == 13){fVal = 1.8;}
            else if(f == 14){fVal = 1.85;}
            else if(f == 15){fVal = 1.9;}
            else{error = true; if(f != 0){EF += "<div id='EF'><b><i>20" + ev + ":</i></b> Ped 1 csak 2 - 15 fokozatokkal rendelkezhet!</div>";}}
        }
    }else if(pedSzint == 3){
        if(vegSzint == 2 || vegSzint == 3){
            if(f == 4){fVal = 1.5;}
            else if(f == 5){fVal = 1.55;}
            else if(f == 6){fVal = 1.6;}
            else if(f == 7){fVal = 1.65;}
            else if(f == 8){fVal = 1.7;}
            else if(f == 9){fVal = 1.75;}
            else if(f == 10){fVal = 1.8;}
            else if(f == 11){fVal = 1.85;}
            else if(f == 12){fVal = 1.9;}
            else if(f == 13){fVal = 1.95;}
            else if(f == 14){fVal = 2;}
            else if(f == 15){fVal = 2.05;}
            else{error = true; if(f != 0){EF += "<div id='EF'><b><i>20" + ev + ":</i></b> Ped 2 csak 4 - 15 fokozatokkal rendelkezhet!</div>";}}
        }else{
            error = true; if(f != 0){EF += "<div id='EF'><b><i>20" + ev + ":</i></b>Ped2 csak Főiskolai vagy MSC, Egyetemi végzetséggel rendelkezhet!</div>";}
        }
    }else if(pedSzint == 4){
        if(vegSzint == 2 || vegSzint == 3){
            if(f == 6){fVal = 2;}
            else if(f == 7){fVal = 2.05;}
            else if(f == 8){fVal = 2.1;}
            else if(f == 9){fVal = 2.15;}
            else if(f == 10){fVal = 2.2;}
            else if(f == 11){fVal = 2.25;}
            else if(f == 12){fVal = 2.3;}
            else if(f == 13){fVal = 2.35;}
            else if(f == 14){fVal = 2.4;}
            else if(f == 15){fVal = 2.45;}
            else{error = true; if(f != 0){EF += "<div id='EF'><b><i>20" + ev + ":</i></b> Mesterpedagógus csak 6 - 15 fokozatokkal rendelkezhet!</div>";}}
        }else{
            error = true; if(f != 0){EF += "<div id='EF'><b><i>20" + ev + ":</i></b> Mesterpedagógus csak Főiskolai vagy MSC, Egyetemi végzetséggel rendelkezhet!</div>";}
        }
    }else{error = true;}

//Fokozat nem nőhet 1-nél többel
    var fokMAX = false;
    if(F15 - F16 < -1 && F15 != 0){fokMAX = true;}
    if(F16 == 0){
        if(F15 - F17 < -1  && F15 != 0){fokMAX = true;}
    }else{
        if(F16 - F17 < -1  && F16 != 0){fokMAX = true;}
    }
    if(F17 == 0){
        if(F16 == 0){
            if(F15 - F18 < -1  && F15 != 0) {fokMAX = true;}
        }else{
            if(F16 - F18 < -1  && F16 != 0){fokMAX = true;}
        }
    }else{
        if(F17 - F18 < -1  && F17 != 0){fokMAX = true;}
    }
    if(fokMAX){EF += "<div id='EF'><b><i>Fokozat:</i></b> Nem nőhet 1-nél többel a fokozat 4 év alatt!</div>";}
    var fokMIN = false;

//Fokozat nem lehet kisebb az előzőknél
    //15
    if(F15 - F16 > 0 && F15 != 0 && F16 != 0){fokMIN = true;}
    if(F15 - F17 > 0 && F15 != 0 && F17 != 0){fokMIN = true;}
    if(F15 - F18 > 0 && F15 != 0 && F18 != 0){fokMIN = true;}
    if(F15 - F20 > 0 && F15 != 0 && F20 != 0){fokMIN = true;}
    //16
    if(F16 - F17 > 0 && F16 != 0 && F17 != 0){fokMIN = true;}
    if(F16 - F18 > 0 && F16 != 0 && F18 != 0){fokMIN = true;}
    if(F16 - F19 > 0 && F16 != 0 && F19 != 0){fokMIN = true;}
    if(F16 - F20 > 0 && F16 != 0 && F20 != 0){fokMIN = true;}
    //17
    if(F17 - F18 > 0 && F17 != 0 && F18 != 0){fokMIN = true;}
    if(F17 - F19 > 0 && F17 != 0 && F19 != 0){fokMIN = true;}
    if(F17 - F20 > 0 && F17 != 0 && F20 != 0){fokMIN = true;}
    //18
    if(F18 - F19 > 0 && F18 != 0 && F19 != 0){fokMIN = true;}
    if(F18 - F20 > 0 && F18 != 0 && F20 != 0){fokMIN = true;}
    //19
    if(F19 - F20 > 0 && F19 != 0 && F20 != 0){fokMIN = true;}

    if(fokMIN){EF += "<div id='EF'><b><i>Fokozat:</i></b> A fokozat nem lehet kisebb mint az előző években!</div>";}

//Hiba megjelenítés
    var error_box = document.getElementById('hiba');
    if(error == true || E15 != '' || E16 != '' || E17 != '' || E18 != '' || E19 != '' || E20 != '' || EF != ''){
        error_box.style.display = 'block';
        error_box.innerHTML = 'HIBA<br>' + E15 + E16 + E17 + E18 + E19 + E20 + EF;

        document.getElementById('pb' + ev).innerHTML = '';
        document.getElementById('pbE' + ev).innerHTML = '';
        document.getElementById('msz' + ev).innerHTML = '';
        document.getElementById('mszE' + ev).innerHTML = '';
        document.getElementById('k' + ev).innerHTML = '';
        document.getElementById('kE' + ev).innerHTML = '';
    }else{}

    if(error == true || E15 != '' || E16 != '' || E17 != '' || E18 != '' || E19 != '' || E20 != '' || EF != ''){
    }else{error_box.style.display = 'none';}
//Bérek kiszámítása
    var hBer, eBer, hMber, eMber;
    var nf = new Intl.NumberFormat();
    hBer = Math.floor(kezdoPb * fVal);
    hBer = Math.floor(kezdoPb * fVal);
    eBer = Math.floor(kezdoPb * fVal * 12);
    hMber = Math.floor(kezdoMinBer * fVal);
    eMber = Math.floor(kezdoMinBer * fVal * 12);
//Évenkénti különbözet értékadás
    var actualK = eMber - eBer;
    if(pedSzint != 0 && vegSzint != 0 && fokozat != 0){
        if(ev == 15){K15 = actualK;}
        else if(ev == 16){K16 = actualK;}
        else if(ev == 17){K17 = actualK;}
        else if(ev == 18){K18 = actualK;}
        else if(ev == 19){K19 = actualK;}
        else{K20 = actualK;}
    }else{}
//Adatok kiíratása
    if(!isNaN(hBer)){
        document.getElementById('pb' + ev).innerHTML = nf.format(hBer) + " Ft";
        document.getElementById('pbE' + ev).innerHTML = nf.format(eBer) + " Ft";

        document.getElementById('msz' + ev).innerHTML = nf.format(hMber) + " Ft";
        document.getElementById('mszE' + ev).innerHTML = nf.format(eMber) + " Ft";

        document.getElementById('k' + ev).innerHTML = nf.format(hMber - hBer) + " Ft";
        document.getElementById('kE' + ev).innerHTML = nf.format(actualK) + " Ft";

        const sum = K15 + K16 + K17 + K18 + K19 + K20;
        document.getElementById('fullK').innerHTML = nf.format(sum) + " Ft";
        visualization.run(sum);
    }else{
        document.getElementById('pb' + ev).innerHTML = 'Hibás adat';
        document.getElementById('pbE' + ev).innerHTML = 'Hibás adat';
        document.getElementById('msz' + ev).innerHTML = 'Hibás adat';
        document.getElementById('mszE' + ev).innerHTML = 'Hibás adat';
        document.getElementById('k' + ev).innerHTML = 'Hibás adat';
        document.getElementById('kE' + ev).innerHTML = 'Hibás adat';


        if(pedSzint == 0 && vegSzint == 0 && fokozat == 0){
            document.getElementById('pb' + ev).innerHTML = '';
            document.getElementById('pbE' + ev).innerHTML = '';
            document.getElementById('msz' + ev).innerHTML = '';
            document.getElementById('mszE' + ev).innerHTML = '';
            document.getElementById('k' + ev).innerHTML = '';
            document.getElementById('kE' + ev).innerHTML = '';

            const sum = K15 + K16 + K17 + K18 + K19 + K20;
            document.getElementById('fullK').innerHTML = nf.format(sum) + " Ft";
            visualization.run(sum);
        }
    }

//Automatikus kitöltés
    if(x == 15){
        ev2.pedSzint.value = ev1.pedSzint.value;
        ev2.vegSzint.value = ev1.vegSzint.value;
        ev2.fokozat.value  = ev1.fokozat.value;
        ev3.pedSzint.value = ev1.pedSzint.value;
        ev3.vegSzint.value = ev1.vegSzint.value;
        ev3.fokozat.value  = ev1.fokozat.value;
        ev4.pedSzint.value = ev1.pedSzint.value;
        ev4.vegSzint.value = ev1.vegSzint.value;
        ev4.fokozat.value  = ev1.fokozat.value;
        ev5.pedSzint.value = ev1.pedSzint.value;
        ev5.vegSzint.value = ev1.vegSzint.value;
        ev5.fokozat.value  = ev1.fokozat.value;
        ev6.pedSzint.value = ev1.pedSzint.value;
        ev6.vegSzint.value = ev1.vegSzint.value;
        ev6.fokozat.value  = ev1.fokozat.value;
        calc(16);
        calc(17);
        calc(18);
        calc(19);
        calc(20);
    }
    if(x == 16){
        ev3.pedSzint.value = ev2.pedSzint.value;
        ev3.vegSzint.value = ev2.vegSzint.value;
        ev3.fokozat.value  = ev2.fokozat.value;
        ev4.pedSzint.value = ev2.pedSzint.value;
        ev4.vegSzint.value = ev2.vegSzint.value;
        ev4.fokozat.value  = ev2.fokozat.value;
        ev5.pedSzint.value = ev2.pedSzint.value;
        ev5.vegSzint.value = ev2.vegSzint.value;
        ev5.fokozat.value  = ev2.fokozat.value;
        ev6.pedSzint.value = ev2.pedSzint.value;
        ev6.vegSzint.value = ev2.vegSzint.value;
        ev6.fokozat.value  = ev2.fokozat.value;
        calc(17);
        calc(18);
        calc(19);
        calc(20);
    }
    if(x == 17){
        ev4.pedSzint.value = ev3.pedSzint.value;
        ev4.vegSzint.value = ev3.vegSzint.value;
        ev4.fokozat.value  = ev3.fokozat.value;
        ev5.pedSzint.value = ev3.pedSzint.value;
        ev5.vegSzint.value = ev3.vegSzint.value;
        ev5.fokozat.value  = ev3.fokozat.value;
        ev6.pedSzint.value = ev3.pedSzint.value;
        ev6.vegSzint.value = ev3.vegSzint.value;
        ev6.fokozat.value  = ev3.fokozat.value;
        calc(18);
        calc(19);
        calc(20);
    }
    if(x == 18){
        ev5.pedSzint.value = ev4.pedSzint.value;
        ev5.vegSzint.value = ev4.vegSzint.value;
        ev5.fokozat.value  = ev4.fokozat.value;
        ev6.pedSzint.value = ev4.pedSzint.value;
        ev6.vegSzint.value = ev4.vegSzint.value;
        ev6.fokozat.value  = ev4.fokozat.value;
        calc(19);
        calc(20);
    }
    if(x == 19){
        ev6.pedSzint.value = ev5.pedSzint.value;
        ev6.vegSzint.value = ev5.vegSzint.value;
        ev6.fokozat.value  = ev5.fokozat.value;
        calc(20);
    }
}