-- Typed models for the Cepik SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class DrivingLicense
---@field data_waznosci? string
---@field data_wydania? string
---@field id? string
---@field kategoria? string
---@field wojewodztwo? string

---@class DrivingLicenseListMatch

---@class Permission
---@field data_uzyskania? string
---@field id? string
---@field kategoria? string
---@field wojewodztwo? string

---@class PermissionListMatch

---@class Statistic
---@field data? table

---@class StatisticLoadMatch

---@class Vehicle
---@field data_pierwszej_rejestracji? string
---@field id? string
---@field marka? string
---@field masa_wlasna? number
---@field model? string
---@field podrodzaj? string
---@field pojemnosc_silnika? number
---@field rodzaj? string
---@field rok_produkcji? number
---@field wojewodztwo? string

---@class VehicleListMatch

local M = {}

return M
