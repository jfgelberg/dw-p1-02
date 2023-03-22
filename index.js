/**
 * Programación 1 
 * Prof.: Fabrizio Carlassara
 * Alumno: Javier Gelberg
 * Turno Noche
 * Comisión: DWN2CV
 * 
 * 
 * ----------------------------------
*/
"use strict";

//declaro Variables
let
    categoria,
    sueldoBasico,
    subCategoria,
    multi,
    sueldoTotal,

    respuesta;

categoria = parseInt(prompt('Ingrese la categoría 1, 2 o 3:'));
subCategoria = prompt('Ingrese el multiplicador A: x1.5, B: x2, C: x2.5:  ');

switch (categoria) {
    case 1:
        sueldoBasico = 1000;
        if (subCategoria === "A") {
            multi = 1.5;
        }
        if (subCategoria === "B") {
            multi = 2;
        }
        if (subCategoria === "C") {
            multi = 2.5;
        }
        else{
            "no ingresó una opción válida";
        } 
        break;

    case 2:
        sueldoBasico = 1500;
        if (subCategoria === "A") {
            multi = 1.5;
        }
        if (subCategoria === "B") {
            multi = 2;
        }
        if (subCategoria === "C") {
            multi = 2.5;
        }
        else{
            "no ingresó una opción válida";
        } 
        break;

    case 3:
        sueldoBasico = 2000;
        if (subCategoria === "A") {
            multi = 1.5;
        }
        if (subCategoria === "B") {
            multi = 2;
        }
        if (subCategoria === "C") {
            multi = 2.5;
        }
        else{
            "no ingresó una opción válida";
        } 
        break;

    default:
        sueldoBasico = 0;
        subCategoria = 0;
}

sueldoTotal = sueldoBasico * multi;


respuesta =
    `Su sueldo básico es de: <strong>u$s ${sueldoBasico} </strong>,<br /> 
    Ingresó el multiplicador: <strong>${subCategoria} </strong><br /> 
    y su sueldo suma a : <strong>u$s ${sueldoTotal}</strong><br /><br />`;


if (sueldoTotal >= 1500 && sueldoTotal <= 3000) {
    respuesta += 'Su sueldo es de categoría INICIAL';

} else if (sueldoTotal >= 3001 && sueldoTotal <= 4000) {
    respuesta += ' Su sueldo es de categoría INTERMEDIO';
} else {
    respuesta += 'Su sueldo es de categoría AVANZADO';
}
document.write(`${respuesta}`);

