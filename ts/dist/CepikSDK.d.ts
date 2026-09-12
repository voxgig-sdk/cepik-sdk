import { DrivingLicenseEntity } from './entity/DrivingLicenseEntity';
import { PermissionEntity } from './entity/PermissionEntity';
import { StatisticEntity } from './entity/StatisticEntity';
import { VehicleEntity } from './entity/VehicleEntity';
export type * from './CepikTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { CepikEntityBase } from './CepikEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class CepikSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    DrivingLicense(entopts?: Record<string, any>): DrivingLicenseEntity;
    Permission(entopts?: Record<string, any>): PermissionEntity;
    Statistic(entopts?: Record<string, any>): StatisticEntity;
    Vehicle(entopts?: Record<string, any>): VehicleEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): CepikSDK;
    tester(testopts?: any, sdkopts?: any): CepikSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof CepikSDK;
export { stdutil, config, BaseFeature, CepikEntityBase, CepikSDK, SDK, };
