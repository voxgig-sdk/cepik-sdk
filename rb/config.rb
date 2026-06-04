# Cepik SDK configuration

module CepikConfig
  def self.make_config
    {
      "main" => {
        "name" => "Cepik",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.cepik.gov.pl",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "driving_license" => {},
          "permission" => {},
          "statistic" => {},
          "vehicle" => {},
        },
      },
      "entity" => {
        "driving_license" => {
          "fields" => [
            {
              "name" => "data_waznosci",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "data_wydania",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "id",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 2,
            },
            {
              "name" => "kategoria",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 3,
            },
            {
              "name" => "wojewodztwo",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 4,
            },
          ],
          "name" => "driving_license",
          "op" => {
            "list" => {
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "data_do",
                        "orig" => "data_do",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "data_od",
                        "orig" => "data_od",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "example" => 500,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "wojewodztwo",
                        "orig" => "wojewodztwo",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/prawo-jazdy",
                  "parts" => [
                    "prawo-jazdy",
                  ],
                  "select" => {
                    "exist" => [
                      "data_do",
                      "data_od",
                      "limit",
                      "page",
                      "wojewodztwo",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "permission" => {
          "fields" => [
            {
              "name" => "data_uzyskania",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "id",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "kategoria",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 2,
            },
            {
              "name" => "wojewodztwo",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 3,
            },
          ],
          "name" => "permission",
          "op" => {
            "list" => {
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "data_do",
                        "orig" => "data_do",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "data_od",
                        "orig" => "data_od",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "example" => 500,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "wojewodztwo",
                        "orig" => "wojewodztwo",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/uprawnienia",
                  "parts" => [
                    "uprawnienia",
                  ],
                  "select" => {
                    "exist" => [
                      "data_do",
                      "data_od",
                      "limit",
                      "page",
                      "wojewodztwo",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "statistic" => {
          "fields" => [
            {
              "name" => "data",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 0,
            },
          ],
          "name" => "statistic",
          "op" => {
            "load" => {
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "rok",
                        "orig" => "rok",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "wojewodztwo",
                        "orig" => "wojewodztwo",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/statystyki/pojazdy",
                  "parts" => [
                    "statystyki",
                    "pojazdy",
                  ],
                  "select" => {
                    "exist" => [
                      "rok",
                      "wojewodztwo",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "rok",
                        "orig" => "rok",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "wojewodztwo",
                        "orig" => "wojewodztwo",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/statystyki/prawo-jazdy",
                  "parts" => [
                    "statystyki",
                    "prawo-jazdy",
                  ],
                  "select" => {
                    "exist" => [
                      "rok",
                      "wojewodztwo",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 1,
                },
              ],
              "input" => "data",
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "vehicle" => {
          "fields" => [
            {
              "name" => "data_pierwszej_rejestracji",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "id",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "marka",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 2,
            },
            {
              "name" => "masa_wlasna",
              "req" => false,
              "type" => "`$INTEGER`",
              "active" => true,
              "index$" => 3,
            },
            {
              "name" => "model",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 4,
            },
            {
              "name" => "podrodzaj",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 5,
            },
            {
              "name" => "pojemnosc_silnika",
              "req" => false,
              "type" => "`$INTEGER`",
              "active" => true,
              "index$" => 6,
            },
            {
              "name" => "rodzaj",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 7,
            },
            {
              "name" => "rok_produkcji",
              "req" => false,
              "type" => "`$INTEGER`",
              "active" => true,
              "index$" => 8,
            },
            {
              "name" => "wojewodztwo",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 9,
            },
          ],
          "name" => "vehicle",
          "op" => {
            "list" => {
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "data_do",
                        "orig" => "data_do",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "data_od",
                        "orig" => "data_od",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "example" => 500,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "wojewodztwo",
                        "orig" => "wojewodztwo",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/pojazdy",
                  "parts" => [
                    "pojazdy",
                  ],
                  "select" => {
                    "exist" => [
                      "data_do",
                      "data_od",
                      "limit",
                      "page",
                      "wojewodztwo",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    CepikFeatures.make_feature(name)
  end
end
