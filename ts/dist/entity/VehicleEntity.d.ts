import { CepikEntityBase } from '../CepikEntityBase';
import type { CepikSDK } from '../CepikSDK';
import type { Control } from '../types';
import type { Vehicle, VehicleListMatch } from '../CepikTypes';
declare class VehicleEntity extends CepikEntityBase<Vehicle> {
    constructor(client: CepikSDK, entopts: any);
    make(this: VehicleEntity): VehicleEntity;
    list(this: any, reqmatch?: VehicleListMatch, ctrl?: Control): Promise<VehicleEntity[]>;
}
export { VehicleEntity };
