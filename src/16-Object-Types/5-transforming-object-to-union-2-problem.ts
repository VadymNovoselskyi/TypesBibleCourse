export interface VehicleBrands {
  car: "Camaro";
  bicycle: "GT";
  scooter: "Askoll";
}

type TransformedVehicleBrands = {
  [K in keyof VehicleBrands]: `${K}:${VehicleBrands[K]}`;
}[keyof VehicleBrands];
// "car:Camaro" | "bicycle:GT" | "scooter:Askoll"
