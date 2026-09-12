import { Context } from './Context';
declare class CepikError extends Error {
    isCepikError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { CepikError };
