<?php
declare(strict_types=1);

// Cepik SDK configuration

class CepikConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Cepik",
                "slug" => "cepik",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://api.cepik.gov.pl",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "driving_license" => [],
                    "permission" => [],
                    "statistic" => [],
                    "vehicle" => [],
                ],
            ],
            "entity" => [
        'driving_license' => [
          'fields' => [
            [
              'name' => 'datawaznosci',
              'title' => 'Datawaznosci',
              'type' => '`$STRING`',
              'short' => 'Expiry date',
              'format' => 'date',
            ],
            [
              'name' => 'datawydania',
              'title' => 'Datawydania',
              'type' => '`$STRING`',
              'short' => 'Date of issue',
              'format' => 'date',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'short' => 'Unique license identifier',
            ],
            [
              'name' => 'kategoria',
              'title' => 'Kategoria',
              'type' => '`$STRING`',
              'short' => 'License category',
            ],
            [
              'name' => 'wojewodztwo',
              'title' => 'Wojewodztwo',
              'type' => '`$STRING`',
              'short' => 'Province/voivodeship of issue',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'driving_license',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/prawo-jazdy',
                  'segments' => [
                    [
                      'lit' => 'prawo-jazdy',
                    ],
                  ],
                  'parts' => [
                    'prawo-jazdy',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'data_do',
                        'orig' => 'data_do',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'data_od',
                        'orig' => 'data_od',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 500,
                      ],
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 1,
                      ],
                      [
                        'name' => 'wojewodztwo',
                        'orig' => 'wojewodztwo',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'data_do',
                      'data_od',
                      'limit',
                      'page',
                      'wojewodztwo',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'permission' => [
          'fields' => [
            [
              'name' => 'datauzyskania',
              'title' => 'Datauzyskania',
              'type' => '`$STRING`',
              'short' => 'Date permission was obtained',
              'format' => 'date',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'short' => 'Unique permission identifier',
            ],
            [
              'name' => 'kategoria',
              'title' => 'Kategoria',
              'type' => '`$STRING`',
              'short' => 'Category of permission',
            ],
            [
              'name' => 'wojewodztwo',
              'title' => 'Wojewodztwo',
              'type' => '`$STRING`',
              'short' => 'Province/voivodeship',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'permission',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/uprawnienia',
                  'segments' => [
                    [
                      'lit' => 'uprawnienia',
                    ],
                  ],
                  'parts' => [
                    'uprawnienia',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'data_do',
                        'orig' => 'data_do',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'data_od',
                        'orig' => 'data_od',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 500,
                      ],
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 1,
                      ],
                      [
                        'name' => 'wojewodztwo',
                        'orig' => 'wojewodztwo',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'data_do',
                      'data_od',
                      'limit',
                      'page',
                      'wojewodztwo',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'statistic' => [
          'fields' => [
            [
              'name' => 'liczbapojazdow',
              'title' => 'Liczbapojazdow',
              'type' => '`$INTEGER`',
              'short' => 'Total number of vehicles',
            ],
            [
              'name' => 'liczbaprawjazdy',
              'title' => 'Liczbaprawjazdy',
              'type' => '`$INTEGER`',
              'short' => 'Total number of driving licenses',
            ],
            [
              'name' => 'wgkategorii',
              'title' => 'Wgkategorii',
              'type' => '`$OBJECT`',
              'short' => 'Breakdown by license category',
            ],
            [
              'name' => 'wgmarki',
              'title' => 'Wgmarki',
              'type' => '`$OBJECT`',
              'short' => 'Breakdown by brand',
            ],
            [
              'name' => 'wgrodzaju',
              'title' => 'Wgrodzaju',
              'type' => '`$OBJECT`',
              'short' => 'Breakdown by vehicle type',
            ],
            [
              'name' => 'wojewodztwo',
              'title' => 'Wojewodztwo',
              'type' => '`$STRING`',
              'short' => 'Province/voivodeship',
            ],
          ],
          'name' => 'statistic',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/statystyki/pojazdy',
                  'segments' => [
                    [
                      'lit' => 'statystyki',
                    ],
                    [
                      'lit' => 'pojazdy',
                    ],
                  ],
                  'parts' => [
                    'statystyki',
                    'pojazdy',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'rok',
                        'orig' => 'rok',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'wojewodztwo',
                        'orig' => 'wojewodztwo',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'rok',
                      'wojewodztwo',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/statystyki/prawo-jazdy',
                  'segments' => [
                    [
                      'lit' => 'statystyki',
                    ],
                    [
                      'lit' => 'prawo-jazdy',
                    ],
                  ],
                  'parts' => [
                    'statystyki',
                    'prawo-jazdy',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'rok',
                        'orig' => 'rok',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'wojewodztwo',
                        'orig' => 'wojewodztwo',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'rok',
                      'wojewodztwo',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'vehicle' => [
          'fields' => [
            [
              'name' => 'datapierwszejrejestracji',
              'title' => 'Datapierwszejrejestracji',
              'type' => '`$STRING`',
              'short' => 'Date of first registration',
              'format' => 'date',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'short' => 'Unique vehicle identifier',
            ],
            [
              'name' => 'marka',
              'title' => 'Marka',
              'type' => '`$STRING`',
              'short' => 'Vehicle brand/make',
            ],
            [
              'name' => 'masawlasna',
              'title' => 'Masawlasna',
              'type' => '`$INTEGER`',
              'short' => 'Curb weight in kg',
            ],
            [
              'name' => 'model',
              'title' => 'Model',
              'type' => '`$STRING`',
              'short' => 'Vehicle model',
            ],
            [
              'name' => 'podrodzaj',
              'title' => 'Podrodzaj',
              'type' => '`$STRING`',
              'short' => 'Vehicle subtype',
            ],
            [
              'name' => 'pojemnoscsilnika',
              'title' => 'Pojemnoscsilnika',
              'type' => '`$INTEGER`',
              'short' => 'Engine capacity in cm³',
            ],
            [
              'name' => 'rodzaj',
              'title' => 'Rodzaj',
              'type' => '`$STRING`',
              'short' => 'Vehicle type',
            ],
            [
              'name' => 'rokprodukcji',
              'title' => 'Rokprodukcji',
              'type' => '`$INTEGER`',
              'short' => 'Year of production',
            ],
            [
              'name' => 'wojewodztwo',
              'title' => 'Wojewodztwo',
              'type' => '`$STRING`',
              'short' => 'Province/voivodeship of registration',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'vehicle',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/pojazdy',
                  'segments' => [
                    [
                      'lit' => 'pojazdy',
                    ],
                  ],
                  'parts' => [
                    'pojazdy',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'data_do',
                        'orig' => 'data_do',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'data_od',
                        'orig' => 'data_od',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 500,
                      ],
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 1,
                      ],
                      [
                        'name' => 'wojewodztwo',
                        'orig' => 'wojewodztwo',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'data_do',
                      'data_od',
                      'limit',
                      'page',
                      'wojewodztwo',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return CepikFeatures::make_feature($name);
    }
}
