// Typed models for the Cepik SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/cepik-sdk/go/core"
)

// DrivingLicense is the typed data model for the driving_license entity.
type DrivingLicense struct {
	Datawaznosci *string `json:"datawaznosci,omitempty"`
	Datawydania *string `json:"datawydania,omitempty"`
	Id *string `json:"id,omitempty"`
	Kategoria *string `json:"kategoria,omitempty"`
	Wojewodztwo *string `json:"wojewodztwo,omitempty"`
}

// DrivingLicenseListMatch is the typed request payload for DrivingLicense.ListTyped.
type DrivingLicenseListMatch struct {
	DataDo *string `json:"data_do,omitempty"`
	DataOd *string `json:"data_od,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
	Wojewodztwo *string `json:"wojewodztwo,omitempty"`
}

// Permission is the typed data model for the permission entity.
type Permission struct {
	Datauzyskania *string `json:"datauzyskania,omitempty"`
	Id *string `json:"id,omitempty"`
	Kategoria *string `json:"kategoria,omitempty"`
	Wojewodztwo *string `json:"wojewodztwo,omitempty"`
}

// PermissionListMatch is the typed request payload for Permission.ListTyped.
type PermissionListMatch struct {
	DataDo *string `json:"data_do,omitempty"`
	DataOd *string `json:"data_od,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
	Wojewodztwo *string `json:"wojewodztwo,omitempty"`
}

// Statistic is the typed data model for the statistic entity.
type Statistic struct {
	Liczbapojazdow *int `json:"liczbapojazdow,omitempty"`
	Liczbaprawjazdy *int `json:"liczbaprawjazdy,omitempty"`
	Wgkategorii *map[string]any `json:"wgkategorii,omitempty"`
	Wgmarki *map[string]any `json:"wgmarki,omitempty"`
	Wgrodzaju *map[string]any `json:"wgrodzaju,omitempty"`
	Wojewodztwo *string `json:"wojewodztwo,omitempty"`
}

// StatisticLoadMatch is the typed request payload for Statistic.LoadTyped.
type StatisticLoadMatch struct {
	Rok *int `json:"rok,omitempty"`
	Wojewodztwo *string `json:"wojewodztwo,omitempty"`
}

// Vehicle is the typed data model for the vehicle entity.
type Vehicle struct {
	Datapierwszejrejestracji *string `json:"datapierwszejrejestracji,omitempty"`
	Id *string `json:"id,omitempty"`
	Marka *string `json:"marka,omitempty"`
	Masawlasna *int `json:"masawlasna,omitempty"`
	Model *string `json:"model,omitempty"`
	Podrodzaj *string `json:"podrodzaj,omitempty"`
	Pojemnoscsilnika *int `json:"pojemnoscsilnika,omitempty"`
	Rodzaj *string `json:"rodzaj,omitempty"`
	Rokprodukcji *int `json:"rokprodukcji,omitempty"`
	Wojewodztwo *string `json:"wojewodztwo,omitempty"`
}

// VehicleListMatch is the typed request payload for Vehicle.ListTyped.
type VehicleListMatch struct {
	DataDo *string `json:"data_do,omitempty"`
	DataOd *string `json:"data_od,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
