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
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
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
						"format": "date",
						"name": "datawaznosci",
						"short": "Expiry date",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "datawydania",
						"short": "Date of issue",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique license identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "kategoria",
						"short": "License category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "wojewodztwo",
						"short": "Province/voivodeship of issue",
						"type": "`$STRING`",
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
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data_do",
											"orig": "data_do",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "data_od",
											"orig": "data_od",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 500,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "wojewodztwo",
											"orig": "wojewodztwo",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/prawo-jazdy",
								"segments": []any{
									map[string]any{
										"lit": "prawo-jazdy",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"prawo-jazdy",
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
						"format": "date",
						"name": "datauzyskania",
						"short": "Date permission was obtained",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique permission identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "kategoria",
						"short": "Category of permission",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "wojewodztwo",
						"short": "Province/voivodeship",
						"type": "`$STRING`",
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
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data_do",
											"orig": "data_do",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "data_od",
											"orig": "data_od",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 500,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "wojewodztwo",
											"orig": "wojewodztwo",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/uprawnienia",
								"segments": []any{
									map[string]any{
										"lit": "uprawnienia",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"uprawnienia",
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
						"short": "Total number of vehicles",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "liczbaprawjazdy",
						"short": "Total number of driving licenses",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "wgkategorii",
						"short": "Breakdown by license category",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "wgmarki",
						"short": "Breakdown by brand",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "wgrodzaju",
						"short": "Breakdown by vehicle type",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "wojewodztwo",
						"short": "Province/voivodeship",
						"type": "`$STRING`",
					},
				},
				"name": "statistic",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "rok",
											"orig": "rok",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "wojewodztwo",
											"orig": "wojewodztwo",
											"type": "`$STRING`",
										},
									},
								},
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
								"select": map[string]any{
									"exist": []any{
										"rok",
										"wojewodztwo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"statystyki",
									"pojazdy",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "rok",
											"orig": "rok",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "wojewodztwo",
											"orig": "wojewodztwo",
											"type": "`$STRING`",
										},
									},
								},
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
								"select": map[string]any{
									"exist": []any{
										"rok",
										"wojewodztwo",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"statystyki",
									"prawo-jazdy",
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
						"format": "date",
						"name": "datapierwszejrejestracji",
						"short": "Date of first registration",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique vehicle identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "marka",
						"short": "Vehicle brand/make",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "masawlasna",
						"short": "Curb weight in kg",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "model",
						"short": "Vehicle model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "podrodzaj",
						"short": "Vehicle subtype",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pojemnoscsilnika",
						"short": "Engine capacity in cm³",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "rodzaj",
						"short": "Vehicle type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rokprodukcji",
						"short": "Year of production",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "wojewodztwo",
						"short": "Province/voivodeship of registration",
						"type": "`$STRING`",
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
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "data_do",
											"orig": "data_do",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "data_od",
											"orig": "data_od",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 500,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "wojewodztwo",
											"orig": "wojewodztwo",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/pojazdy",
								"segments": []any{
									map[string]any{
										"lit": "pojazdy",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"pojazdy",
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
