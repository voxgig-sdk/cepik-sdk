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
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
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
              'type' => '`$STRING`',
            ],
            [
              'name' => 'datawydania',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'kategoria',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'wojewodztwo',
              'type' => '`$STRING`',
            ],
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
                  'parts' => [
                    'prawo-jazdy',
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
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'kategoria',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'wojewodztwo',
              'type' => '`$STRING`',
            ],
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
                  'parts' => [
                    'uprawnienia',
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
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'liczbaprawjazdy',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'wgkategorii',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'wgmarki',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'wgrodzaju',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'wojewodztwo',
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
                  'parts' => [
                    'statystyki',
                    'pojazdy',
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
                  'parts' => [
                    'statystyki',
                    'prawo-jazdy',
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
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'marka',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'masawlasna',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'model',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'podrodzaj',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'pojemnoscsilnika',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'rodzaj',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rokprodukcji',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'wojewodztwo',
              'type' => '`$STRING`',
            ],
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
                  'parts' => [
                    'pojazdy',
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
