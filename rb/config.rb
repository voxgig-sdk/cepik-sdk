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
        "slug" => "cepik",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
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
              "short" => "Expiry date",
              "type" => "`$STRING`",
            },
            {
              "name" => "datawydania",
              "short" => "Date of issue",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique license identifier",
              "type" => "`$STRING`",
            },
            {
              "name" => "kategoria",
              "short" => "License category",
              "type" => "`$STRING`",
            },
            {
              "name" => "wojewodztwo",
              "short" => "Province/voivodeship of issue",
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
              "short" => "Date permission was obtained",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique permission identifier",
              "type" => "`$STRING`",
            },
            {
              "name" => "kategoria",
              "short" => "Category of permission",
              "type" => "`$STRING`",
            },
            {
              "name" => "wojewodztwo",
              "short" => "Province/voivodeship",
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
              "short" => "Total number of vehicles",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "liczbaprawjazdy",
              "short" => "Total number of driving licenses",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "wgkategorii",
              "short" => "Breakdown by license category",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "wgmarki",
              "short" => "Breakdown by brand",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "wgrodzaju",
              "short" => "Breakdown by vehicle type",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "wojewodztwo",
              "short" => "Province/voivodeship",
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
              "short" => "Date of first registration",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique vehicle identifier",
              "type" => "`$STRING`",
            },
            {
              "name" => "marka",
              "short" => "Vehicle brand/make",
              "type" => "`$STRING`",
            },
            {
              "name" => "masawlasna",
              "short" => "Curb weight in kg",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "model",
              "short" => "Vehicle model",
              "type" => "`$STRING`",
            },
            {
              "name" => "podrodzaj",
              "short" => "Vehicle subtype",
              "type" => "`$STRING`",
            },
            {
              "name" => "pojemnoscsilnika",
              "short" => "Engine capacity in cm³",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "rodzaj",
              "short" => "Vehicle type",
              "type" => "`$STRING`",
            },
            {
              "name" => "rokprodukcji",
              "short" => "Year of production",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "wojewodztwo",
              "short" => "Province/voivodeship of registration",
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
