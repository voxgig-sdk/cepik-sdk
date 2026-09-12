import { CepikEntityBase } from '../CepikEntityBase';
import type { CepikSDK } from '../CepikSDK';
import type { Control } from '../types';
import type { Permission, PermissionListMatch } from '../CepikTypes';
declare class PermissionEntity extends CepikEntityBase<Permission> {
    constructor(client: CepikSDK, entopts: any);
    make(this: PermissionEntity): PermissionEntity;
    list(this: any, reqmatch?: PermissionListMatch, ctrl?: Control): Promise<PermissionEntity[]>;
}
export { PermissionEntity };
