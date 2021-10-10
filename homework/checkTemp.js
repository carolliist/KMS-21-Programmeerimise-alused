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

let checkTemp;

if (checkTemp <= 20 && checkTemp >=0) {
    console.log('-1');
} else if (checkTemp <= 40 && checkTemp >= 21) {
    console.log('0');
} else if (checkTemp >= 41 && checkTemp <= 60) {
    console.log('1');
} else {
   console.log('Error: 1. Sisestus puudub. 2. Sisestatud on liiga suur number. 3. Sisestatud on negatiivne number.');
}