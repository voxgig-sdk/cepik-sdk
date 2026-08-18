
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


  main = {
    name: 'Cepik',
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
          "type": "`$STRING`"
        },
        {
          "name": "datawydania",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "kategoria",
          "type": "`$STRING`"
        },
        {
          "name": "wojewodztwo",
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
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "kategoria",
          "type": "`$STRING`"
        },
        {
          "name": "wojewodztwo",
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
          "type": "`$INTEGER`"
        },
        {
          "name": "liczbaprawjazdy",
          "type": "`$INTEGER`"
        },
        {
          "name": "wgkategorii",
          "type": "`$OBJECT`"
        },
        {
          "name": "wgmarki",
          "type": "`$OBJECT`"
        },
        {
          "name": "wgrodzaju",
          "type": "`$OBJECT`"
        },
        {
          "name": "wojewodztwo",
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
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "marka",
          "type": "`$STRING`"
        },
        {
          "name": "masawlasna",
          "type": "`$INTEGER`"
        },
        {
          "name": "model",
          "type": "`$STRING`"
        },
        {
          "name": "podrodzaj",
          "type": "`$STRING`"
        },
        {
          "name": "pojemnoscsilnika",
          "type": "`$INTEGER`"
        },
        {
          "name": "rodzaj",
          "type": "`$STRING`"
        },
        {
          "name": "rokprodukcji",
          "type": "`$INTEGER`"
        },
        {
          "name": "wojewodztwo",
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

