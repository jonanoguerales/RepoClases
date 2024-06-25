import { Reserva2 } from "./model";

export class CalcularPreciosTotales2 {
  reservas: Reserva2[];
  totalGlobal: number;
  subtotalGlobal: number;
  iva: number;
  cargosAdicionales: number;
  precioHabitacion: number;
  precioDesayuno: number;

  constructor(reservas: Reserva2[]) {
    this.reservas = reservas;
    this.totalGlobal = 0;
    this.subtotalGlobal = 0;
    this.iva = 21;
    this.cargosAdicionales = 40;
    this.precioHabitacion = 0;
    this.precioDesayuno = 15;
  }
}

export class CalcularPreciosParticular2 extends CalcularPreciosTotales2 {
  habitacionStandard: number;
  habitacionSuite: number;
  precioHabitacion: number;

  constructor(reservas: Reserva2[]) {
    super(reservas);
    this.habitacionStandard = 100;
    this.habitacionSuite = 150;
    this.precioHabitacion = 0;
  }

  calcularPreciosParticular() {
    this.reservas.forEach((reserva) => {
      let cargos = 0;

      switch (reserva.tipoHabitacion) {
        case "standard":
          this.precioHabitacion = this.habitacionStandard;
          break;
        case "suite":
          this.precioHabitacion = this.habitacionSuite;
          break;
        default:
          break;
      }

      if (reserva.pax > 1) {
        cargos = this.cargosAdicionales * (reserva.pax - 1);
      }
      if (reserva.desayuno) {
        cargos += this.precioDesayuno * reserva.pax;
      }

      const subtotal = (this.precioHabitacion + cargos) * reserva.noches;
      const iva = (subtotal * this.iva) / 100;
      const total = subtotal + iva;

      this.subtotalGlobal += subtotal;
      this.totalGlobal += total;
    });
    console.log("\nEjercicioAdicional");
    console.log("\nCasoParticularAddicional");
    console.log("Total de todas las reservas:");
    console.log(`  Subtotal Global: ${this.subtotalGlobal.toFixed(2)} €`);
    console.log(`  Total Global: ${this.totalGlobal.toFixed(2)} €`);
  }
}

export class CalcularPreciosTourOperador2 extends CalcularPreciosTotales2 {
  descuentos: number;
  constructor(reservas: Reserva2[]) {
    super(reservas);
    this.precioHabitacion = 100;
    this.descuentos = 15;
  }

  calcularPreciosTour() {
    this.reservas.forEach((reserva) => {
      let cargos = 0;

      if (reserva.pax > 1) {
        cargos = this.cargosAdicionales * (reserva.pax - 1);
      }
      if (reserva.desayuno) {
        cargos += this.precioDesayuno * reserva.pax;
      }

      const subtotal = (this.precioHabitacion + cargos) * reserva.noches;
      const descuentos = (subtotal * this.descuentos) / 100;
      const iva = (subtotal * this.iva) / 100;
      const total = subtotal + iva - descuentos;

      this.subtotalGlobal += subtotal;
      this.totalGlobal += total;
    });

    console.log("\nCasoTourAddicional");
    console.log("Total de todas las reservas del tour:");
    console.log(`  Subtotal GlobalTour: ${this.subtotalGlobal.toFixed(2)} €`);
    console.log(`  Total GlobalTour: ${this.totalGlobal.toFixed(2)} €`);
  }
}
