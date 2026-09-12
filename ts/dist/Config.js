"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Cepik',
        slug: "cepik",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://api.cepik.gov.pl",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            driving_license: {},
            permission: {},
            statistic: {},
            vehicle: {},
        }
    };
    entity = {
        "driving_license": {
            "fields": [
                {
                    "format": "date",
                    "name": "datawaznosci",
                    "short": "Expiry date",
                    "type": "`$STRING`"
                },
                {
                    "format": "date",
                    "name": "datawydania",
                    "short": "Date of issue",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "Unique license identifier",
                    "type": "`$STRING`"
                },
                {
                    "name": "kategoria",
                    "short": "License category",
                    "type": "`$STRING`"
                },
                {
                    "name": "wojewodztwo",
                    "short": "Province/voivodeship of issue",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "driving_license",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "data_do",
                                        "orig": "data_do",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "data_od",
                                        "orig": "data_od",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 500,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "wojewodztwo",
                                        "orig": "wojewodztwo",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/prawo-jazdy",
                            "segments": [
                                {
                                    "lit": "prawo-jazdy"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "data_do",
                                    "data_od",
                                    "limit",
                                    "page",
                                    "wojewodztwo"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "prawo-jazdy"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "permission": {
            "fields": [
                {
                    "format": "date",
                    "name": "datauzyskania",
                    "short": "Date permission was obtained",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "Unique permission identifier",
                    "type": "`$STRING`"
                },
                {
                    "name": "kategoria",
                    "short": "Category of permission",
                    "type": "`$STRING`"
                },
                {
                    "name": "wojewodztwo",
                    "short": "Province/voivodeship",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "permission",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "data_do",
                                        "orig": "data_do",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "data_od",
                                        "orig": "data_od",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 500,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "wojewodztwo",
                                        "orig": "wojewodztwo",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/uprawnienia",
                            "segments": [
                                {
                                    "lit": "uprawnienia"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "data_do",
                                    "data_od",
                                    "limit",
                                    "page",
                                    "wojewodztwo"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "uprawnienia"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "statistic": {
            "fields": [
                {
                    "name": "liczbapojazdow",
                    "short": "Total number of vehicles",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "liczbaprawjazdy",
                    "short": "Total number of driving licenses",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "wgkategorii",
                    "short": "Breakdown by license category",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "wgmarki",
                    "short": "Breakdown by brand",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "wgrodzaju",
                    "short": "Breakdown by vehicle type",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "wojewodztwo",
                    "short": "Province/voivodeship",
                    "type": "`$STRING`"
                }
            ],
            "name": "statistic",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "rok",
                                        "orig": "rok",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "wojewodztwo",
                                        "orig": "wojewodztwo",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/statystyki/pojazdy",
                            "segments": [
                                {
                                    "lit": "statystyki"
                                },
                                {
                                    "lit": "pojazdy"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "rok",
                                    "wojewodztwo"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "statystyki",
                                "pojazdy"
                            ]
                        },
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "rok",
                                        "orig": "rok",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "wojewodztwo",
                                        "orig": "wojewodztwo",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/statystyki/prawo-jazdy",
                            "segments": [
                                {
                                    "lit": "statystyki"
                                },
                                {
                                    "lit": "prawo-jazdy"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "rok",
                                    "wojewodztwo"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.data`"
                            },
                            "parts": [
                                "statystyki",
                                "prawo-jazdy"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "vehicle": {
            "fields": [
                {
                    "format": "date",
                    "name": "datapierwszejrejestracji",
                    "short": "Date of first registration",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "Unique vehicle identifier",
                    "type": "`$STRING`"
                },
                {
                    "name": "marka",
                    "short": "Vehicle brand/make",
                    "type": "`$STRING`"
                },
                {
                    "name": "masawlasna",
                    "short": "Curb weight in kg",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "model",
                    "short": "Vehicle model",
                    "type": "`$STRING`"
                },
                {
                    "name": "podrodzaj",
                    "short": "Vehicle subtype",
                    "type": "`$STRING`"
                },
                {
                    "name": "pojemnoscsilnika",
                    "short": "Engine capacity in cm³",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "rodzaj",
                    "short": "Vehicle type",
                    "type": "`$STRING`"
                },
                {
                    "name": "rokprodukcji",
                    "short": "Year of production",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "wojewodztwo",
                    "short": "Province/voivodeship of registration",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "vehicle",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "data_do",
                                        "orig": "data_do",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "data_od",
                                        "orig": "data_od",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 500,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "wojewodztwo",
                                        "orig": "wojewodztwo",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/pojazdy",
                            "segments": [
                                {
                                    "lit": "pojazdy"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "data_do",
                                    "data_od",
                                    "limit",
                                    "page",
                                    "wojewodztwo"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "pojazdy"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map