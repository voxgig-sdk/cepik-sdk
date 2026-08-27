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
# @!attribute [rw] datawaznosci
#   @return [String, nil]
#
# @!attribute [rw] datawydania
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
  :datawaznosci,
  :datawydania,
  :id,
  :kategoria,
  :wojewodztwo,
  keyword_init: true
)

# Request payload for DrivingLicense#list.
#
# @!attribute [rw] data_do
#   @return [String, nil]
#
# @!attribute [rw] data_od
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] wojewodztwo
#   @return [String, nil]
DrivingLicenseListMatch = Struct.new(
  :data_do,
  :data_od,
  :limit,
  :page,
  :wojewodztwo,
  keyword_init: true
)

# Permission entity data model.
#
# @!attribute [rw] datauzyskania
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
  :datauzyskania,
  :id,
  :kategoria,
  :wojewodztwo,
  keyword_init: true
)

# Request payload for Permission#list.
#
# @!attribute [rw] data_do
#   @return [String, nil]
#
# @!attribute [rw] data_od
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] wojewodztwo
#   @return [String, nil]
PermissionListMatch = Struct.new(
  :data_do,
  :data_od,
  :limit,
  :page,
  :wojewodztwo,
  keyword_init: true
)

# Statistic entity data model.
#
# @!attribute [rw] liczbapojazdow
#   @return [Integer, nil]
#
# @!attribute [rw] liczbaprawjazdy
#   @return [Integer, nil]
#
# @!attribute [rw] wgkategorii
#   @return [Hash, nil]
#
# @!attribute [rw] wgmarki
#   @return [Hash, nil]
#
# @!attribute [rw] wgrodzaju
#   @return [Hash, nil]
#
# @!attribute [rw] wojewodztwo
#   @return [String, nil]
Statistic = Struct.new(
  :liczbapojazdow,
  :liczbaprawjazdy,
  :wgkategorii,
  :wgmarki,
  :wgrodzaju,
  :wojewodztwo,
  keyword_init: true
)

# Request payload for Statistic#load.
#
# @!attribute [rw] rok
#   @return [Integer, nil]
#
# @!attribute [rw] wojewodztwo
#   @return [String, nil]
StatisticLoadMatch = Struct.new(
  :rok,
  :wojewodztwo,
  keyword_init: true
)

# Vehicle entity data model.
#
# @!attribute [rw] datapierwszejrejestracji
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] marka
#   @return [String, nil]
#
# @!attribute [rw] masawlasna
#   @return [Integer, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] podrodzaj
#   @return [String, nil]
#
# @!attribute [rw] pojemnoscsilnika
#   @return [Integer, nil]
#
# @!attribute [rw] rodzaj
#   @return [String, nil]
#
# @!attribute [rw] rokprodukcji
#   @return [Integer, nil]
#
# @!attribute [rw] wojewodztwo
#   @return [String, nil]
Vehicle = Struct.new(
  :datapierwszejrejestracji,
  :id,
  :marka,
  :masawlasna,
  :model,
  :podrodzaj,
  :pojemnoscsilnika,
  :rodzaj,
  :rokprodukcji,
  :wojewodztwo,
  keyword_init: true
)

# Request payload for Vehicle#list.
#
# @!attribute [rw] data_do
#   @return [String, nil]
#
# @!attribute [rw] data_od
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] wojewodztwo
#   @return [String, nil]
VehicleListMatch = Struct.new(
  :data_do,
  :data_od,
  :limit,
  :page,
  :wojewodztwo,
  keyword_init: true
)

