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
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "datawydania",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "kategoria",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "wojewodztwo",
						"type": "`$STRING`",
					},
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
								"parts": []any{
									"prawo-jazdy",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "kategoria",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "wojewodztwo",
						"type": "`$STRING`",
					},
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
								"parts": []any{
									"uprawnienia",
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
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "liczbaprawjazdy",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "wgkategorii",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "wgmarki",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "wgrodzaju",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "wojewodztwo",
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
								"parts": []any{
									"statystyki",
									"pojazdy",
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
								"parts": []any{
									"statystyki",
									"prawo-jazdy",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "marka",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "masawlasna",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "podrodzaj",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pojemnoscsilnika",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "rodzaj",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rokprodukcji",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "wojewodztwo",
						"type": "`$STRING`",
					},
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
								"parts": []any{
									"pojazdy",
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
