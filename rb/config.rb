# Cepik SDK configuration

module CepikConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
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
              "name" => "datawaznosci",
              "type" => "`$STRING`",
            },
            {
              "name" => "datawydania",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "kategoria",
              "type" => "`$STRING`",
            },
            {
              "name" => "wojewodztwo",
              "type" => "`$STRING`",
            },
          ],
          "name" => "driving_license",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "data_do",
                        "orig" => "data_do",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "data_od",
                        "orig" => "data_od",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 500,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "wojewodztwo",
                        "orig" => "wojewodztwo",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "permission" => {
          "fields" => [
            {
              "name" => "datauzyskania",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "kategoria",
              "type" => "`$STRING`",
            },
            {
              "name" => "wojewodztwo",
              "type" => "`$STRING`",
            },
          ],
          "name" => "permission",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "data_do",
                        "orig" => "data_do",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "data_od",
                        "orig" => "data_od",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 500,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "wojewodztwo",
                        "orig" => "wojewodztwo",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "statistic" => {
          "fields" => [
            {
              "name" => "liczbapojazdow",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "liczbaprawjazdy",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "wgkategorii",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "wgmarki",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "wgrodzaju",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "wojewodztwo",
              "type" => "`$STRING`",
            },
          ],
          "name" => "statistic",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "rok",
                        "orig" => "rok",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "wojewodztwo",
                        "orig" => "wojewodztwo",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "rok",
                        "orig" => "rok",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "wojewodztwo",
                        "orig" => "wojewodztwo",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "vehicle" => {
          "fields" => [
            {
              "name" => "datapierwszejrejestracji",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "marka",
              "type" => "`$STRING`",
            },
            {
              "name" => "masawlasna",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "model",
              "type" => "`$STRING`",
            },
            {
              "name" => "podrodzaj",
              "type" => "`$STRING`",
            },
            {
              "name" => "pojemnoscsilnika",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "rodzaj",
              "type" => "`$STRING`",
            },
            {
              "name" => "rokprodukcji",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "wojewodztwo",
              "type" => "`$STRING`",
            },
          ],
          "name" => "vehicle",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "data_do",
                        "orig" => "data_do",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "data_od",
                        "orig" => "data_od",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 500,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "wojewodztwo",
                        "orig" => "wojewodztwo",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                },
              ],
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
