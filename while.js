let siegeLibre = 10;
let passagersEncoreABord = 8;

let passagersEmbarques = 0;

while (siegeLibre > 0 || passagersEncoreABord > 0) {
    passagersEmbarques++;
    passagersEncoreABord--;
    siegeLibre--;
}

console.log(passagersEmbarques);