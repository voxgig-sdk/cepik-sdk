// Typed models for the Cepik SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// DrivingLicense is the typed data model for the driving_license entity.
type DrivingLicense struct {
	DataWaznosci *string `json:"data_waznosci,omitempty"`
	DataWydania *string `json:"data_wydania,omitempty"`
	Id *string `json:"id,omitempty"`
	Kategoria *string `json:"kategoria,omitempty"`
	Wojewodztwo *string `json:"wojewodztwo,omitempty"`
}

// DrivingLicenseListMatch is the typed request payload for DrivingLicense.ListTyped.
type DrivingLicenseListMatch struct {
	DataWaznosci *string `json:"data_waznosci,omitempty"`
	DataWydania *string `json:"data_wydania,omitempty"`
	Id *string `json:"id,omitempty"`
	Kategoria *string `json:"kategoria,omitempty"`
	Wojewodztwo *string `json:"wojewodztwo,omitempty"`
}

// Permission is the typed data model for the permission entity.
type Permission struct {
	DataUzyskania *string `json:"data_uzyskania,omitempty"`
	Id *string `json:"id,omitempty"`
	Kategoria *string `json:"kategoria,omitempty"`
	Wojewodztwo *string `json:"wojewodztwo,omitempty"`
}

// PermissionListMatch is the typed request payload for Permission.ListTyped.
type PermissionListMatch struct {
	DataUzyskania *string `json:"data_uzyskania,omitempty"`
	Id *string `json:"id,omitempty"`
	Kategoria *string `json:"kategoria,omitempty"`
	Wojewodztwo *string `json:"wojewodztwo,omitempty"`
}

// Statistic is the typed data model for the statistic entity.
type Statistic struct {
	Data *map[string]any `json:"data,omitempty"`
}

// StatisticLoadMatch is the typed request payload for Statistic.LoadTyped.
type StatisticLoadMatch struct {
	Data *map[string]any `json:"data,omitempty"`
}

// Vehicle is the typed data model for the vehicle entity.
type Vehicle struct {
	DataPierwszejRejestracji *string `json:"data_pierwszej_rejestracji,omitempty"`
	Id *string `json:"id,omitempty"`
	Marka *string `json:"marka,omitempty"`
	MasaWlasna *int `json:"masa_wlasna,omitempty"`
	Model *string `json:"model,omitempty"`
	Podrodzaj *string `json:"podrodzaj,omitempty"`
	PojemnoscSilnika *int `json:"pojemnosc_silnika,omitempty"`
	Rodzaj *string `json:"rodzaj,omitempty"`
	RokProdukcji *int `json:"rok_produkcji,omitempty"`
	Wojewodztwo *string `json:"wojewodztwo,omitempty"`
}

// VehicleListMatch is the typed request payload for Vehicle.ListTyped.
type VehicleListMatch struct {
	DataPierwszejRejestracji *string `json:"data_pierwszej_rejestracji,omitempty"`
	Id *string `json:"id,omitempty"`
	Marka *string `json:"marka,omitempty"`
	MasaWlasna *int `json:"masa_wlasna,omitempty"`
	Model *string `json:"model,omitempty"`
	Podrodzaj *string `json:"podrodzaj,omitempty"`
	PojemnoscSilnika *int `json:"pojemnosc_silnika,omitempty"`
	Rodzaj *string `json:"rodzaj,omitempty"`
	RokProdukcji *int `json:"rok_produkcji,omitempty"`
	Wojewodztwo *string `json:"wojewodztwo,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
