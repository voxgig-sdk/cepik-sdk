package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Cepik",
			"slug": "cepik",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.cepik.gov.pl",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"driving_license": map[string]any{},
				"permission": map[string]any{},
				"statistic": map[string]any{},
				"vehicle": map[string]any{},
			},
		},
		"entity": map[string]any{
			"driving_license": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "datawaznosci",
						"title": "Datawaznosci",
						"type": "`$STRING`",
						"short": "Expiry date",
						"format": "date",
					},
					map[string]any{
						"name": "datawydania",
						"title": "Datawydania",
						"type": "`$STRING`",
						"short": "Date of issue",
						"format": "date",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique license identifier",
					},
					map[string]any{
						"name": "kategoria",
						"title": "Kategoria",
						"type": "`$STRING`",
						"short": "License category",
					},
					map[string]any{
						"name": "wojewodztwo",
						"title": "Wojewodztwo",
						"type": "`$STRING`",
						"short": "Province/voivodeship of issue",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "driving_license",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/prawo-jazdy",
								"segments": []any{
									map[string]any{
										"lit": "prawo-jazdy",
									},
								},
								"parts": []any{
									"prawo-jazdy",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "data_do",
											"orig": "data_do",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "data_od",
											"orig": "data_od",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 500,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "wojewodztwo",
											"orig": "wojewodztwo",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data_do",
										"data_od",
										"limit",
										"page",
										"wojewodztwo",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"permission": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "datauzyskania",
						"title": "Datauzyskania",
						"type": "`$STRING`",
						"short": "Date permission was obtained",
						"format": "date",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique permission identifier",
					},
					map[string]any{
						"name": "kategoria",
						"title": "Kategoria",
						"type": "`$STRING`",
						"short": "Category of permission",
					},
					map[string]any{
						"name": "wojewodztwo",
						"title": "Wojewodztwo",
						"type": "`$STRING`",
						"short": "Province/voivodeship",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "permission",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/uprawnienia",
								"segments": []any{
									map[string]any{
										"lit": "uprawnienia",
									},
								},
								"parts": []any{
									"uprawnienia",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "data_do",
											"orig": "data_do",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "data_od",
											"orig": "data_od",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 500,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "wojewodztwo",
											"orig": "wojewodztwo",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data_do",
										"data_od",
										"limit",
										"page",
										"wojewodztwo",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"statistic": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "liczbapojazdow",
						"title": "Liczbapojazdow",
						"type": "`$INTEGER`",
						"short": "Total number of vehicles",
					},
					map[string]any{
						"name": "liczbaprawjazdy",
						"title": "Liczbaprawjazdy",
						"type": "`$INTEGER`",
						"short": "Total number of driving licenses",
					},
					map[string]any{
						"name": "wgkategorii",
						"title": "Wgkategorii",
						"type": "`$OBJECT`",
						"short": "Breakdown by license category",
					},
					map[string]any{
						"name": "wgmarki",
						"title": "Wgmarki",
						"type": "`$OBJECT`",
						"short": "Breakdown by brand",
					},
					map[string]any{
						"name": "wgrodzaju",
						"title": "Wgrodzaju",
						"type": "`$OBJECT`",
						"short": "Breakdown by vehicle type",
					},
					map[string]any{
						"name": "wojewodztwo",
						"title": "Wojewodztwo",
						"type": "`$STRING`",
						"short": "Province/voivodeship",
					},
				},
				"name": "statistic",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/statystyki/pojazdy",
								"segments": []any{
									map[string]any{
										"lit": "statystyki",
									},
									map[string]any{
										"lit": "pojazdy",
									},
								},
								"parts": []any{
									"statystyki",
									"pojazdy",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "rok",
											"orig": "rok",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "wojewodztwo",
											"orig": "wojewodztwo",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"rok",
										"wojewodztwo",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/statystyki/prawo-jazdy",
								"segments": []any{
									map[string]any{
										"lit": "statystyki",
									},
									map[string]any{
										"lit": "prawo-jazdy",
									},
								},
								"parts": []any{
									"statystyki",
									"prawo-jazdy",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "rok",
											"orig": "rok",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "wojewodztwo",
											"orig": "wojewodztwo",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"rok",
										"wojewodztwo",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"vehicle": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "datapierwszejrejestracji",
						"title": "Datapierwszejrejestracji",
						"type": "`$STRING`",
						"short": "Date of first registration",
						"format": "date",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique vehicle identifier",
					},
					map[string]any{
						"name": "marka",
						"title": "Marka",
						"type": "`$STRING`",
						"short": "Vehicle brand/make",
					},
					map[string]any{
						"name": "masawlasna",
						"title": "Masawlasna",
						"type": "`$INTEGER`",
						"short": "Curb weight in kg",
					},
					map[string]any{
						"name": "model",
						"title": "Model",
						"type": "`$STRING`",
						"short": "Vehicle model",
					},
					map[string]any{
						"name": "podrodzaj",
						"title": "Podrodzaj",
						"type": "`$STRING`",
						"short": "Vehicle subtype",
					},
					map[string]any{
						"name": "pojemnoscsilnika",
						"title": "Pojemnoscsilnika",
						"type": "`$INTEGER`",
						"short": "Engine capacity in cm³",
					},
					map[string]any{
						"name": "rodzaj",
						"title": "Rodzaj",
						"type": "`$STRING`",
						"short": "Vehicle type",
					},
					map[string]any{
						"name": "rokprodukcji",
						"title": "Rokprodukcji",
						"type": "`$INTEGER`",
						"short": "Year of production",
					},
					map[string]any{
						"name": "wojewodztwo",
						"title": "Wojewodztwo",
						"type": "`$STRING`",
						"short": "Province/voivodeship of registration",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "vehicle",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/pojazdy",
								"segments": []any{
									map[string]any{
										"lit": "pojazdy",
									},
								},
								"parts": []any{
									"pojazdy",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "data_do",
											"orig": "data_do",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "data_od",
											"orig": "data_od",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 500,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "wojewodztwo",
											"orig": "wojewodztwo",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"data_do",
										"data_od",
										"limit",
										"page",
										"wojewodztwo",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
