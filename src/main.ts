import { reservas, reservas2 } from "./utils";
import { CalcularPrecios } from "./caso1";
import { CalcularPreciosTour } from "./caso2";
import {
  CalcularPreciosParticular,
  CalcularPreciosTourOperador,
} from "./desafio";
import {
  CalcularPreciosParticular2,
  CalcularPreciosTourOperador2,
} from "./ejercicioAdicional";

//Caso 1
const calcularPrecios = new CalcularPrecios(reservas);
calcularPrecios.calcularPrecios();

//Caso 2
const calcularPreciosTour = new CalcularPreciosTour(reservas);
calcularPreciosTour.calcularPreciosTour();

//Caso3
const particular = new CalcularPreciosParticular(reservas);
particular.calcularPreciosParticular();

const tour = new CalcularPreciosTourOperador(reservas);
tour.calcularPreciosTour();

//Ejercicio adicional

const particularAdicional = new CalcularPreciosParticular2(reservas2);
particularAdicional.calcularPreciosParticular();

const tourAdicional = new CalcularPreciosTourOperador2(reservas2);
tourAdicional.calcularPreciosTour();
