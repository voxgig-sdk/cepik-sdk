# Typed models for the Cepik SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class DrivingLicense(TypedDict, total=False):
    datawaznosci: str
    datawydania: str
    id: str
    kategoria: str
    wojewodztwo: str


class DrivingLicenseListMatch(TypedDict, total=False):
    data_do: str
    data_od: str
    limit: int
    page: int
    wojewodztwo: str


class Permission(TypedDict, total=False):
    datauzyskania: str
    id: str
    kategoria: str
    wojewodztwo: str


class PermissionListMatch(TypedDict, total=False):
    data_do: str
    data_od: str
    limit: int
    page: int
    wojewodztwo: str


class Statistic(TypedDict, total=False):
    liczbapojazdow: int
    liczbaprawjazdy: int
    wgkategorii: dict
    wgmarki: dict
    wgrodzaju: dict
    wojewodztwo: str


class StatisticLoadMatch(TypedDict, total=False):
    rok: int
    wojewodztwo: str


class Vehicle(TypedDict, total=False):
    datapierwszejrejestracji: str
    id: str
    marka: str
    masawlasna: int
    model: str
    podrodzaj: str
    pojemnoscsilnika: int
    rodzaj: str
    rokprodukcji: int
    wojewodztwo: str


class VehicleListMatch(TypedDict, total=False):
    data_do: str
    data_od: str
    limit: int
    page: int
    wojewodztwo: str
