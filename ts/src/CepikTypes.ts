// Typed models for the Cepik SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface DrivingLicense {
  data_waznosci?: string
  data_wydania?: string
  id?: string
  kategoria?: string
  wojewodztwo?: string
}

export interface DrivingLicenseListMatch {
  data_waznosci?: string
  data_wydania?: string
  id?: string
  kategoria?: string
  wojewodztwo?: string
}

export interface Permission {
  data_uzyskania?: string
  id?: string
  kategoria?: string
  wojewodztwo?: string
}

export interface PermissionListMatch {
  data_uzyskania?: string
  id?: string
  kategoria?: string
  wojewodztwo?: string
}

export interface Statistic {
  data?: Record<string, any>
}

export interface StatisticLoadMatch {
  data?: Record<string, any>
}

export interface Vehicle {
  data_pierwszej_rejestracji?: string
  id?: string
  marka?: string
  masa_wlasna?: number
  model?: string
  podrodzaj?: string
  pojemnosc_silnika?: number
  rodzaj?: string
  rok_produkcji?: number
  wojewodztwo?: string
}

export interface VehicleListMatch {
  data_pierwszej_rejestracji?: string
  id?: string
  marka?: string
  masa_wlasna?: number
  model?: string
  podrodzaj?: string
  pojemnosc_silnika?: number
  rodzaj?: string
  rok_produkcji?: number
  wojewodztwo?: string
}

