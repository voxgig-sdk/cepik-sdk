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
              'format' => 'date',
              'name' => 'datawaznosci',
              'short' => 'Expiry date',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date',
              'name' => 'datawydania',
              'short' => 'Date of issue',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique license identifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'kategoria',
              'short' => 'License category',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'wojewodztwo',
              'short' => 'Province/voivodeship of issue',
              'type' => '`$STRING`',
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
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'data_do',
                        'orig' => 'data_do',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'data_od',
                        'orig' => 'data_od',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 500,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'wojewodztwo',
                        'orig' => 'wojewodztwo',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/prawo-jazdy',
                  'segments' => [
                    [
                      'lit' => 'prawo-jazdy',
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'prawo-jazdy',
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
              'format' => 'date',
              'name' => 'datauzyskania',
              'short' => 'Date permission was obtained',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique permission identifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'kategoria',
              'short' => 'Category of permission',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'wojewodztwo',
              'short' => 'Province/voivodeship',
              'type' => '`$STRING`',
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
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'data_do',
                        'orig' => 'data_do',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'data_od',
                        'orig' => 'data_od',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 500,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'wojewodztwo',
                        'orig' => 'wojewodztwo',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/uprawnienia',
                  'segments' => [
                    [
                      'lit' => 'uprawnienia',
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'uprawnienia',
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
              'short' => 'Total number of vehicles',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'liczbaprawjazdy',
              'short' => 'Total number of driving licenses',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'wgkategorii',
              'short' => 'Breakdown by license category',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'wgmarki',
              'short' => 'Breakdown by brand',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'wgrodzaju',
              'short' => 'Breakdown by vehicle type',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'wojewodztwo',
              'short' => 'Province/voivodeship',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'statistic',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'rok',
                        'orig' => 'rok',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'wojewodztwo',
                        'orig' => 'wojewodztwo',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
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
                  'select' => [
                    'exist' => [
                      'rok',
                      'wojewodztwo',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'parts' => [
                    'statystyki',
                    'pojazdy',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'rok',
                        'orig' => 'rok',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'wojewodztwo',
                        'orig' => 'wojewodztwo',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
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
                  'select' => [
                    'exist' => [
                      'rok',
                      'wojewodztwo',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'parts' => [
                    'statystyki',
                    'prawo-jazdy',
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
              'format' => 'date',
              'name' => 'datapierwszejrejestracji',
              'short' => 'Date of first registration',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique vehicle identifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'marka',
              'short' => 'Vehicle brand/make',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'masawlasna',
              'short' => 'Curb weight in kg',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'model',
              'short' => 'Vehicle model',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'podrodzaj',
              'short' => 'Vehicle subtype',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'pojemnoscsilnika',
              'short' => 'Engine capacity in cm³',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'rodzaj',
              'short' => 'Vehicle type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rokprodukcji',
              'short' => 'Year of production',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'wojewodztwo',
              'short' => 'Province/voivodeship of registration',
              'type' => '`$STRING`',
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
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'data_do',
                        'orig' => 'data_do',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'data_od',
                        'orig' => 'data_od',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 500,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'wojewodztwo',
                        'orig' => 'wojewodztwo',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/pojazdy',
                  'segments' => [
                    [
                      'lit' => 'pojazdy',
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'pojazdy',
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
