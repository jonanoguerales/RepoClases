import { Reserva } from "./model";

export class CalcularPrecios {
  reservas: Reserva[];
  totalGlobal: number;
  subtotalGlobal: number;
  iva: number;
  cargosAdicionales: number;
  habitacionStandard: number;
  habitacionSuite: number;
  precioHabitacion: number;

  constructor(reservas: Reserva[]) {
    this.reservas = reservas;
    this.totalGlobal = 0;
    this.subtotalGlobal = 0;
    this.iva = 21;
    this.cargosAdicionales = 40;
    this.habitacionStandard = 100;
    this.habitacionSuite = 150;
    this.precioHabitacion = 0;
  }

  calcularPrecios() {
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

      const subtotal = (this.precioHabitacion + cargos) * reserva.noches;
      const iva = (subtotal * this.iva) / 100;
      const total = subtotal + iva;

      this.subtotalGlobal += subtotal;
      this.totalGlobal += total;
    });

    console.log("\nCaso1");
    console.log("Total de todas las reservas:");
    console.log(`  Subtotal Global: ${this.subtotalGlobal.toFixed(2)} €`);
    console.log(`  Total Global: ${this.totalGlobal.toFixed(2)} €`);
  }
}
