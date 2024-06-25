import { CalcularPrecios } from "./caso1";
import { Reserva } from "./model";

export class CalcularPreciosTour extends CalcularPrecios {
  descuentos: number;
  constructor(reservas: Reserva[]) {
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

      const subtotal = (this.precioHabitacion + cargos) * reserva.noches;
      const descuentos = (subtotal * this.descuentos) / 100;
      const iva = (subtotal * this.iva) / 100;
      const total = subtotal + iva - descuentos;

      this.subtotalGlobal += subtotal;
      this.totalGlobal += total;
    });

    console.log("\nCaso2");
    console.log("Total de todas las reservas del tour:");
    console.log(`  Subtotal GlobalTour: ${this.subtotalGlobal.toFixed(2)} €`);
    console.log(`  Total GlobalTour: ${this.totalGlobal.toFixed(2)} €`);
  }
}
