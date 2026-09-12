# Cepik SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Cepik",
            "slug": "cepik",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://api.cepik.gov.pl",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "driving_license": {},
                "permission": {},
                "statistic": {},
                "vehicle": {},
            },
        },
        "entity": {
      "driving_license": {
        "fields": [
          {
            "format": "date",
            "name": "datawaznosci",
            "short": "Expiry date",
            "type": "`$STRING`",
          },
          {
            "format": "date",
            "name": "datawydania",
            "short": "Date of issue",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique license identifier",
            "type": "`$STRING`",
          },
          {
            "name": "kategoria",
            "short": "License category",
            "type": "`$STRING`",
          },
          {
            "name": "wojewodztwo",
            "short": "Province/voivodeship of issue",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "data_od",
                      "orig": "data_od",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 500,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "wojewodztwo",
                      "orig": "wojewodztwo",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/prawo-jazdy",
                "segments": [
                  {
                    "lit": "prawo-jazdy",
                  },
                ],
                "select": {
                  "exist": [
                    "data_do",
                    "data_od",
                    "limit",
                    "page",
                    "wojewodztwo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "prawo-jazdy",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "permission": {
        "fields": [
          {
            "format": "date",
            "name": "datauzyskania",
            "short": "Date permission was obtained",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique permission identifier",
            "type": "`$STRING`",
          },
          {
            "name": "kategoria",
            "short": "Category of permission",
            "type": "`$STRING`",
          },
          {
            "name": "wojewodztwo",
            "short": "Province/voivodeship",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "data_od",
                      "orig": "data_od",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 500,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "wojewodztwo",
                      "orig": "wojewodztwo",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/uprawnienia",
                "segments": [
                  {
                    "lit": "uprawnienia",
                  },
                ],
                "select": {
                  "exist": [
                    "data_do",
                    "data_od",
                    "limit",
                    "page",
                    "wojewodztwo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "uprawnienia",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "statistic": {
        "fields": [
          {
            "name": "liczbapojazdow",
            "short": "Total number of vehicles",
            "type": "`$INTEGER`",
          },
          {
            "name": "liczbaprawjazdy",
            "short": "Total number of driving licenses",
            "type": "`$INTEGER`",
          },
          {
            "name": "wgkategorii",
            "short": "Breakdown by license category",
            "type": "`$OBJECT`",
          },
          {
            "name": "wgmarki",
            "short": "Breakdown by brand",
            "type": "`$OBJECT`",
          },
          {
            "name": "wgrodzaju",
            "short": "Breakdown by vehicle type",
            "type": "`$OBJECT`",
          },
          {
            "name": "wojewodztwo",
            "short": "Province/voivodeship",
            "type": "`$STRING`",
          },
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
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "wojewodztwo",
                      "orig": "wojewodztwo",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/statystyki/pojazdy",
                "segments": [
                  {
                    "lit": "statystyki",
                  },
                  {
                    "lit": "pojazdy",
                  },
                ],
                "select": {
                  "exist": [
                    "rok",
                    "wojewodztwo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "parts": [
                  "statystyki",
                  "pojazdy",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "rok",
                      "orig": "rok",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "wojewodztwo",
                      "orig": "wojewodztwo",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/statystyki/prawo-jazdy",
                "segments": [
                  {
                    "lit": "statystyki",
                  },
                  {
                    "lit": "prawo-jazdy",
                  },
                ],
                "select": {
                  "exist": [
                    "rok",
                    "wojewodztwo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "parts": [
                  "statystyki",
                  "prawo-jazdy",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "vehicle": {
        "fields": [
          {
            "format": "date",
            "name": "datapierwszejrejestracji",
            "short": "Date of first registration",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique vehicle identifier",
            "type": "`$STRING`",
          },
          {
            "name": "marka",
            "short": "Vehicle brand/make",
            "type": "`$STRING`",
          },
          {
            "name": "masawlasna",
            "short": "Curb weight in kg",
            "type": "`$INTEGER`",
          },
          {
            "name": "model",
            "short": "Vehicle model",
            "type": "`$STRING`",
          },
          {
            "name": "podrodzaj",
            "short": "Vehicle subtype",
            "type": "`$STRING`",
          },
          {
            "name": "pojemnoscsilnika",
            "short": "Engine capacity in cm³",
            "type": "`$INTEGER`",
          },
          {
            "name": "rodzaj",
            "short": "Vehicle type",
            "type": "`$STRING`",
          },
          {
            "name": "rokprodukcji",
            "short": "Year of production",
            "type": "`$INTEGER`",
          },
          {
            "name": "wojewodztwo",
            "short": "Province/voivodeship of registration",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "data_od",
                      "orig": "data_od",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 500,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "wojewodztwo",
                      "orig": "wojewodztwo",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/pojazdy",
                "segments": [
                  {
                    "lit": "pojazdy",
                  },
                ],
                "select": {
                  "exist": [
                    "data_do",
                    "data_od",
                    "limit",
                    "page",
                    "wojewodztwo",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "pojazdy",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
