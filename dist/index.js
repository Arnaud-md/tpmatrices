"use strict";
const matrice = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const sum = [[matrice[0][0] + matrice[0][1] + matrice[0][2], matrice[1][0] + matrice[1][1] + matrice[1][2], matrice[2][0] + matrice[2][1] + matrice[2][2]],
    [matrice[0][0] + matrice[1][0] + matrice[2][0], matrice[0][1] + matrice[1][1] + matrice[2][1], matrice[0][2] + matrice[1][2] + matrice[2][2]]];
for (let i = 0; i < 3; i++) {
    console.log("-------------");
    let numberAsString = "";
    for (let j = 0; j < 3; j++) {
        numberAsString = numberAsString + matrice[i][j] + " | ";
    }
    //matrice[i][0]+" | "+matrice[i][1]+" | "+matrice[i][2]+ " | "
    console.log("| " + numberAsString + sum[0][i]);
}
// console.log("-------------");
// console.log("| "+matrice[1][0]+" | "+matrice[1][1]+" | "+matrice[1][2]+ " | "+sum[0][1]);
// console.log("-------------");
// console.log("| "+matrice[2][0]+" | "+matrice[2][1]+" | "+matrice[2][2]+ " | "+sum[0][2]);
// console.log("-------------");
console.log("-------------");
console.log(" " + sum[1][0] + "  " + sum[1][1] + "  " + sum[1][2]);
let tableauMatrice0 = [];
let tableauMatrice1 = [];
let tableauMatrice2 = [];
let matrix = [tableauMatrice0, tableauMatrice1, tableauMatrice2];
tableauMatrice0[0] = 8;
tableauMatrice0[1] = 1;
tableauMatrice0[2] = 6;
tableauMatrice1[0] = 3;
tableauMatrice1[1] = 5;
tableauMatrice1[2] = 7;
tableauMatrice2[0] = 4;
tableauMatrice2[1] = 9;
tableauMatrice2[2] = 2;
matrix = [tableauMatrice0, tableauMatrice1, tableauMatrice2];
console.log(matrix);
let matrix2 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let indexi = 0;
let indexj = 0;
let cpt = 0;
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        i = indexi;
        j = indexj;
        if (indexi === 0 && indexj === 0) {
            i = i + 1;
            j = 0;
        }
        if (i > 0) {
            indexi = i - 1;
        }
        else {
            indexi = 2;
        }
        if (j < 2) {
            indexj = j + 1;
        }
        else {
            indexj = 0;
        }
        cpt++;
        console.log(indexi, indexj);
        console.log(i, j);
        if (matrix2[indexi][indexj] === 0) {
            matrix2[indexi][indexj] = cpt;
        }
        else {
            indexi = i + 1;
            indexj = j;
            matrix2[indexi][indexj] = cpt;
        }
    }
}
console.log(matrix2);
