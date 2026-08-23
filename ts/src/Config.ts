
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Cepik',
        slug: "cepik",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://api.cepik.gov.pl",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      driving_license: {
      },

      permission: {
      },

      statistic: {
      },

      vehicle: {
      },

    }
  }


  entity = {
    "driving_license": {
      "fields": [
        {
          "name": "datawaznosci",
          "short": "Expiry date",
          "type": "`$STRING`"
        },
        {
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
              "parts": [
                "prawo-jazdy"
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
              }
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
              "parts": [
                "uprawnienia"
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
              }
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
              "parts": [
                "statystyki",
                "pojazdy"
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
              }
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
              "parts": [
                "statystyki",
                "prawo-jazdy"
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
              }
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
              "parts": [
                "pojazdy"
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
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

