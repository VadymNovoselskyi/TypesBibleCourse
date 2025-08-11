interface Vehicle {
  type: string;
}

export class VehicleController {
  currentVehicle: Vehicle | undefined;

  constructor(currentVehicle?: Vehicle) {
    this.currentVehicle = currentVehicle;
  }

  assertHasVehicle(): asserts this is { currentVehicle: Vehicle } {
    if (!this.currentVehicle) {
      throw new Error("No vehicle selected");
    }
  }

  performMaintenance(serviceType: string, description: string) {
    let test = this.currentVehicle;
    this.assertHasVehicle();
    let test2 = this.currentVehicle;

    // Logic for performing maintenance on the selected vehicle
  }
}
