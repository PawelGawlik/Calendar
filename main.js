const zmienne = {};
zmienne.table = document.getElementsByTagName("table");
zmienne.tr = [];
zmienne.i = 0;
while(zmienne.i<7){
    zmienne.tr[zmienne.i]=document.createElement("tr");
    zmienne.table[0].appendChild(zmienne.tr[zmienne.i]);
    zmienne.i++;
}
zmienne.td = [];
zmienne.th = [];
zmienne.pt = [];
zmienne.j = 0;
while(zmienne.j<7){
    zmienne.i = 0;
    while(zmienne.i<7){
        zmienne.td[zmienne.i]=document.createElement("td");
        zmienne.tr[zmienne.j].appendChild(zmienne.td[zmienne.i]);
        if(!zmienne.j){
            zmienne.td[zmienne.i].classList.add("nagłówek");
            zmienne.th.push(zmienne.td[zmienne.i]);
        }
        else{
            zmienne.pt.push(zmienne.td[zmienne.i]);
        }
        zmienne.i++;
    }
    zmienne.j++;
}
zmienne.tr[0].setAttribute("height", "100px");
zmienne.th[0].textContent = "Poniedziałek";
zmienne.th[1].textContent = "Wtorek";
zmienne.th[2].textContent = "Środa";
zmienne.th[3].textContent = "Czwartek";
zmienne.th[4].textContent = "Piątek";
zmienne.th[5].textContent = "Sobota";
zmienne.th[6].textContent = "Niedziela";
zmienne.h1 = document.getElementsByTagName("h1");
zmienne.date = new Date();
zmienne.funkcja1 = function(){
    let a;
    switch(zmienne.date.getMonth()){
        case 0:
            a = "STYCZEŃ";
            break;
        case 1:
            a = "LUTY";
            break;
        case 2:
            a = "MARZEC";
            break;
        case 3:
            a = "KWIECIEŃ";
            break;
        case 4:
            a = "MAJ";
            break;
        case 5:
            a = "CZERWIEC";
            break;
        case 6:
            a = "LIPIEC";
            break;
        case 7:
            a = "SIERPIEŃ";
            break;
        case 8:
            a = "WRZESIEŃ";
            break;
        case 9:
            a = "PAŹDZIERNIK";
            break;
        case 10:
            a = "LISTOPAD";
            break;
        case 11:
            a = "GRUDZIEŃ";
     }
    return a;
}
zmienne.date2 = new Date();
zmienne.date2.setDate(1);
zmienne.date3 = new Date();
zmienne.date3.setDate(1);
zmienne.date3.setMonth(zmienne.date.getMonth()+1);
zmienne.iloscDni = (Date.parse(zmienne.date3)-Date.parse(zmienne.date2))/86400000;
zmienne.h1[0].innerText = zmienne.funkcja1();
if(!zmienne.date.getDay()){
    zmienne.dzien = 7;
}else{
    zmienne.dzien = zmienne.date.getDay();
}
if(!zmienne.date2.getDay()){
    zmienne.dzien2 = 7;
}else{
    zmienne.dzien2 = zmienne.date2.getDay();
}
zmienne.funkcja2 = function(param){
    if(zmienne.date.getDate()<=(8-param)){
        zmienne.licznik = 0;
    }else if(zmienne.date.getDate()>(8-param)&&zmienne.date.getDate()<=(15-param)){
        zmienne.licznik = 7;
    }else if(zmienne.date.getDate()>(15-param)&&zmienne.date.getDate()<=(22-param)){
        zmienne.licznik = 14;
    }else if(zmienne.date.getDate()>(22-param)&&zmienne.date.getDate()<=(29-param)){
        zmienne.licznik = 21;
    }else if(zmienne.date.getDate()>(29-param)&&zmienne.date.getDate()<=(36-param)){
        zmienne.licznik = 28;
    }else if(zmienne.date.getDate()>(36-param)){
        zmienne.licznik = 35;
    }
    return zmienne.licznik;
}
zmienne.funkcja2(zmienne.dzien2);
zmienne.pt[zmienne.dzien-1+zmienne.licznik].innerText = zmienne.date.getDate();
zmienne.i = zmienne.dzien+zmienne.licznik;
zmienne.j = 1;
while(zmienne.i<zmienne.pt.length){
    if(zmienne.date.getDate() + zmienne.j<=zmienne.iloscDni){
        zmienne.pt[zmienne.i].innerText = zmienne.date.getDate() + zmienne.j;
    }
    zmienne.i++;
    zmienne.j++;
}
zmienne.i = zmienne.date.getDate()-1;
zmienne.j = 2;
while(zmienne.i>0){
    zmienne.pt[zmienne.dzien+zmienne.licznik-zmienne.j].innerText = zmienne.i;
    zmienne.pt[zmienne.dzien+zmienne.licznik-zmienne.j].style.color="red";
    zmienne.i--;
    zmienne.j++;
}
zmienne.forms = [];
zmienne.body = document.getElementsByTagName("body");
class Forms{
    constructor(id){
        this.id = id;
    }
    isTurnedOn = false;
    creatingForm(){
        zmienne.forms[this.id] = document.createElement("form");
        zmienne.body[0].appendChild(zmienne.forms[this.id]);
        zmienne.forms[this.id].classList.add("hidden");
    }
    turningOn(){
        zmienne.forms[this.id].classList.remove("hidden");
        this.isTurnedOn = true;
    }
    turningOff(){
        if(this.isTurnedOn===true){
            zmienne.forms[this.id].classList.add("hidden");
            this.isTurnedOn = false;
        }
    }
}
zmienne.i = 0;
zmienne.obiekty = [];
zmienne.funkcja3 = function(param){
    zmienne.pt[param].onclick = function(){
    (zmienne.obiekty[param]).turningOn();
    }
}
while(zmienne.i<42){
    zmienne.obiekty[zmienne.i] = new Forms(zmienne.i);
    if(zmienne.pt[zmienne.i].innerText!==""){
        zmienne.obiekty[zmienne.i].creatingForm();
        zmienne.funkcja3(zmienne.i);
    }
    zmienne.i++;
}
zmienne.i = 0;
class inForm{
    constructor(id){
        this.id = id;
    }
    formularz = [];
    creatingInForm(){
        if(zmienne.forms[this.id]!==undefined){
            zmienne.table2 = document.createElement("table");
            zmienne.forms[this.id].appendChild(zmienne.table2);
            zmienne.j = 0;
            while(zmienne.j<34){
                zmienne.row = document.createElement("tr");
                zmienne.table2.appendChild(zmienne.row);
                zmienne.data = document.createElement("td");
                zmienne.row.appendChild(zmienne.data);
                zmienne.data.classList.add("formularz");
                this.formularz.push(zmienne.data);
                zmienne.data = document.createElement("td");
                zmienne.row.appendChild(zmienne.data);
                zmienne.data.classList.add("formularz");
                zmienne.j++;
            }
        }
    }
    godziny(){
        zmienne.godziny = 6;
        zmienne.godzina = [];
        while(zmienne.godziny<23){
            zmienne.godzina.push(`${zmienne.godziny}:00`);
            zmienne.godzina.push(`${zmienne.godziny}:30`);
            zmienne.godziny++;
        }
        zmienne.j = 0;
        while(zmienne.j<this.formularz.length){
            this.formularz[zmienne.j].textContent = zmienne.godzina[zmienne.j];
            zmienne.j++;
        }
    }
}
zmienne.i = 0;
zmienne.obiekty2 = [];
while(zmienne.i<zmienne.forms.length){
    zmienne.obiekty2[zmienne.i] = new inForm(zmienne.i);
    zmienne.obiekty2[zmienne.i].creatingInForm();
    zmienne.obiekty2[zmienne.i].godziny();
    zmienne.i++; 
}
