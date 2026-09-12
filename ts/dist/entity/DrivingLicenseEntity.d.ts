import { CepikEntityBase } from '../CepikEntityBase';
import type { CepikSDK } from '../CepikSDK';
import type { Control } from '../types';
import type { DrivingLicense, DrivingLicenseListMatch } from '../CepikTypes';
declare class DrivingLicenseEntity extends CepikEntityBase<DrivingLicense> {
    constructor(client: CepikSDK, entopts: any);
    make(this: DrivingLicenseEntity): DrivingLicenseEntity;
    list(this: any, reqmatch?: DrivingLicenseListMatch, ctrl?: Control): Promise<DrivingLicenseEntity[]>;
}
export { DrivingLicenseEntity };
