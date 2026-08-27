-- Typed models for the Cepik SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class DrivingLicense
---@field datawaznosci? string
---@field datawydania? string
---@field id? string
---@field kategoria? string
---@field wojewodztwo? string

---@class DrivingLicenseListMatch
---@field data_do? string
---@field data_od? string
---@field limit? number
---@field page? number
---@field wojewodztwo? string

---@class Permission
---@field datauzyskania? string
---@field id? string
---@field kategoria? string
---@field wojewodztwo? string

---@class PermissionListMatch
---@field data_do? string
---@field data_od? string
---@field limit? number
---@field page? number
---@field wojewodztwo? string

---@class Statistic
---@field liczbapojazdow? number
---@field liczbaprawjazdy? number
---@field wgkategorii? table
---@field wgmarki? table
---@field wgrodzaju? table
---@field wojewodztwo? string

---@class StatisticLoadMatch
---@field rok? number
---@field wojewodztwo? string

---@class Vehicle
---@field datapierwszejrejestracji? string
---@field id? string
---@field marka? string
---@field masawlasna? number
---@field model? string
---@field podrodzaj? string
---@field pojemnoscsilnika? number
---@field rodzaj? string
---@field rokprodukcji? number
---@field wojewodztwo? string

---@class VehicleListMatch
---@field data_do? string
---@field data_od? string
---@field limit? number
---@field page? number
---@field wojewodztwo? string

local M = {}

return M
