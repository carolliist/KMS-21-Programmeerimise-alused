/*
kodutöö - Katlal on kolm temperatuurivahemikku
0-20 on liiga külm
21-40 on paras temperatuur
41-60 on liiga kuum
 
Looge funktsioon checkTemp mis võtab sisendiks temperatuuri ja tagastab vahemike puhul järgneva numbri:
Liiga külm tagastab -1
Paras temperatuur tagastab 0
Liiga kuum tagastab 1
*/

function checkTemp(temperatuur) {
    if (temperatuur >= 0 && temperatuur <=20) {
        return -1
    } else if (temperatuur >= 21 && temperatuur <= 40) {
        return 0
    } else if (temperatuur >= 41 && temperatuur <= 60) {
        return 1
    } else {
       console.log('Error: 1. Sisestus puudub. 2. Sisestatud on liiga suur number. 3. Sisestatud on negatiivne number.');
    }
    }
