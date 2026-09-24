"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CepikError = void 0;
class CepikError extends Error {
    isCepikError = true;
    sdk = 'Cepik';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CepikError = CepikError;
//# sourceMappingURL=CepikError.js.map