import { CepikEntityBase } from '../CepikEntityBase';
import type { CepikSDK } from '../CepikSDK';
import type { Control } from '../types';
import type { Statistic, StatisticLoadMatch } from '../CepikTypes';
declare class StatisticEntity extends CepikEntityBase<Statistic> {
    constructor(client: CepikSDK, entopts: any);
    make(this: StatisticEntity): StatisticEntity;
    load(this: any, reqmatch?: StatisticLoadMatch, ctrl?: Control): Promise<StatisticEntity>;
}
export { StatisticEntity };
