"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('DrivingLicenseEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CEPIK_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CEPIK_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CepikSDK.test();
        const ent = testsdk.DrivingLicense();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CEPIK_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'driving_license.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "datawaznosci": { "a": true, "fo": "date", "h": "Datawaznosci", "n": "datawaznosci", "r": false, "sh": "Expiry date", "t": "`$STRING`", "key$": "datawaznosci", "index$": 0 }, "datawydania": { "a": true, "fo": "date", "h": "Datawydania", "n": "datawydania", "r": false, "sh": "Date of issue", "t": "`$STRING`", "key$": "datawydania", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique license identifier", "t": "`$STRING`", "key$": "id", "index$": 2 }, "kategoria": { "a": true, "h": "Kategoria", "n": "kategoria", "r": false, "sh": "License category", "t": "`$STRING`", "key$": "kategoria", "index$": 3 }, "wojewodztwo": { "a": true, "h": "Wojewodztwo", "n": "wojewodztwo", "r": false, "sh": "Province/voivodeship of issue", "t": "`$STRING`", "key$": "wojewodztwo", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "driving_license", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /prawo-jazdy", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "data_do", "or": "data_do", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "data_od", "or": "data_od", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 500, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "k": "query", "n": "wojewodztwo", "or": "wojewodztwo", "r": false, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/prawo-jazdy", "q": { "exist": ["data_do", "data_od", "limit", "page", "wojewodztwo"] }, "r": {}, "s": [{ "lit": "prawo-jazdy" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "driving_license", "name__orig": "driving_license", "Name": "DrivingLicense", "name_": "driving_license", "name-": "driving-license", "NAME": "DRIVING_LICENSE", "index$": 0 }, { "active": true, "entity": "driving_license", "key$": "BasicDrivingLicenseFlow", "kind": "basic", "name": "BasicDrivingLicenseFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "driving_license_ref01" } }], "index$": 0 }] }, 'DrivingLicense', { "GET /prawo-jazdy": { "protocol": "http", "operationId": "getDrivingLicenses", "responses": { "200": { "description": "Successful response with driving license data", "content": { "application/json": { "schema": { "type": "object", "properties": { "data": { "items": { "properties": { "data-waznosci": { "description": "Expiry date", "format": "date", "type": "string", "key$": "data-waznosci" }, "data-wydania": { "description": "Date of issue", "format": "date", "type": "string", "key$": "data-wydania" }, "id": { "description": "Unique license identifier", "type": "string", "key$": "id" }, "kategoria": { "description": "License category", "type": "string", "key$": "kategoria" }, "wojewodztwo": { "description": "Province/voivodeship of issue", "type": "string", "key$": "wojewodztwo" } }, "type": "object", "x-ref": "#/components/schemas/DrivingLicense", "index$": 0 }, "key$": "data", "type": "array" }, "links": { "key$": "links", "properties": { "first": { "description": "URL to first page", "type": "string" }, "last": { "description": "URL to last page", "type": "string" }, "next": { "description": "URL to next page", "nullable": true, "type": "string" }, "prev": { "description": "URL to previous page", "nullable": true, "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/PaginationLinks" } } } } } }, "400": { "description": "Bad request - invalid parameters", "content": { "application/json": { "schema": { "type": "object", "properties": { "message": { "type": "string", "description": "Error message" }, "code": { "type": "integer", "description": "Error code" } }, "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "message": { "type": "string", "description": "Error message" }, "code": { "type": "integer", "description": "Error code" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "wojewodztwo", "in": "query", "description": "Province/voivodeship filter", "required": false, "schema": { "type": "string" }, "index$": 0 }, { "name": "data-od", "in": "query", "description": "Start date for filtering (YYYY-MM-DD)", "required": false, "schema": { "type": "string", "format": "date" }, "index$": 1 }, { "name": "data-do", "in": "query", "description": "End date for filtering (YYYY-MM-DD)", "required": false, "schema": { "type": "string", "format": "date" }, "index$": 2 }, { "name": "limit", "in": "query", "description": "Maximum number of results to return", "required": false, "schema": { "type": "integer", "default": 500, "minimum": 1, "maximum": 500 }, "index$": 3 }, { "name": "page", "in": "query", "description": "Page number for pagination", "required": false, "schema": { "type": "integer", "default": 1, "minimum": 1 }, "index$": 4 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let driving_license_ref01_data = Object.values(setup.data.existing.driving_license)[0];
        // LIST
        const driving_license_ref01_ent = client.DrivingLicense();
        const driving_license_ref01_match = {};
        const driving_license_ref01_list = (await driving_license_ref01_ent.list(driving_license_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/driving_license/DrivingLicenseTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CepikSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['driving_license01', 'driving_license02', 'driving_license03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CEPIK_TEST_DRIVING_LICENSE_ENTID': idmap,
        'CEPIK_TEST_LIVE': 'FALSE',
        'CEPIK_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['CEPIK_TEST_DRIVING_LICENSE_ENTID'];
    const live = 'TRUE' === env.CEPIK_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CEPIK_TEST_DRIVING_LICENSE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CepikSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CEPIK_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=DrivingLicenseEntity.test.js.map