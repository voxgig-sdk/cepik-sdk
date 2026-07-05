# frozen_string_literal: true

# Typed models for the Cepik SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# DrivingLicense entity data model.
#
# @!attribute [rw] data_waznosci
#   @return [String, nil]
#
# @!attribute [rw] data_wydania
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] kategoria
#   @return [String, nil]
#
# @!attribute [rw] wojewodztwo
#   @return [String, nil]
DrivingLicense = Struct.new(
  :data_waznosci,
  :data_wydania,
  :id,
  :kategoria,
  :wojewodztwo,
  keyword_init: true
)

# Request payload for DrivingLicense#list.
#
# @!attribute [rw] data_waznosci
#   @return [String, nil]
#
# @!attribute [rw] data_wydania
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] kategoria
#   @return [String, nil]
#
# @!attribute [rw] wojewodztwo
#   @return [String, nil]
DrivingLicenseListMatch = Struct.new(
  :data_waznosci,
  :data_wydania,
  :id,
  :kategoria,
  :wojewodztwo,
  keyword_init: true
)

# Permission entity data model.
#
# @!attribute [rw] data_uzyskania
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] kategoria
#   @return [String, nil]
#
# @!attribute [rw] wojewodztwo
#   @return [String, nil]
Permission = Struct.new(
  :data_uzyskania,
  :id,
  :kategoria,
  :wojewodztwo,
  keyword_init: true
)

# Request payload for Permission#list.
#
# @!attribute [rw] data_uzyskania
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] kategoria
#   @return [String, nil]
#
# @!attribute [rw] wojewodztwo
#   @return [String, nil]
PermissionListMatch = Struct.new(
  :data_uzyskania,
  :id,
  :kategoria,
  :wojewodztwo,
  keyword_init: true
)

# Statistic entity data model.
#
# @!attribute [rw] data
#   @return [Hash, nil]
Statistic = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for Statistic#load.
#
# @!attribute [rw] data
#   @return [Hash, nil]
StatisticLoadMatch = Struct.new(
  :data,
  keyword_init: true
)

# Vehicle entity data model.
#
# @!attribute [rw] data_pierwszej_rejestracji
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] marka
#   @return [String, nil]
#
# @!attribute [rw] masa_wlasna
#   @return [Integer, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] podrodzaj
#   @return [String, nil]
#
# @!attribute [rw] pojemnosc_silnika
#   @return [Integer, nil]
#
# @!attribute [rw] rodzaj
#   @return [String, nil]
#
# @!attribute [rw] rok_produkcji
#   @return [Integer, nil]
#
# @!attribute [rw] wojewodztwo
#   @return [String, nil]
Vehicle = Struct.new(
  :data_pierwszej_rejestracji,
  :id,
  :marka,
  :masa_wlasna,
  :model,
  :podrodzaj,
  :pojemnosc_silnika,
  :rodzaj,
  :rok_produkcji,
  :wojewodztwo,
  keyword_init: true
)

# Request payload for Vehicle#list.
#
# @!attribute [rw] data_pierwszej_rejestracji
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] marka
#   @return [String, nil]
#
# @!attribute [rw] masa_wlasna
#   @return [Integer, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] podrodzaj
#   @return [String, nil]
#
# @!attribute [rw] pojemnosc_silnika
#   @return [Integer, nil]
#
# @!attribute [rw] rodzaj
#   @return [String, nil]
#
# @!attribute [rw] rok_produkcji
#   @return [Integer, nil]
#
# @!attribute [rw] wojewodztwo
#   @return [String, nil]
VehicleListMatch = Struct.new(
  :data_pierwszej_rejestracji,
  :id,
  :marka,
  :masa_wlasna,
  :model,
  :podrodzaj,
  :pojemnosc_silnika,
  :rodzaj,
  :rok_produkcji,
  :wojewodztwo,
  keyword_init: true
)

