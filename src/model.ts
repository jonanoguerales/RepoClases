export interface Reserva {
  tipoHabitacion: "standard" | "suite";
  pax: number;
  noches: number;
}

export interface Reserva2 {
  tipoHabitacion: "standard" | "suite";
  desayuno: boolean;
  pax: number;
  noches: number;
}
