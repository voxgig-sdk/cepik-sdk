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
    data_waznosci: str
    data_wydania: str
    id: str
    kategoria: str
    wojewodztwo: str


class DrivingLicenseListMatch(TypedDict, total=False):
    data_waznosci: str
    data_wydania: str
    id: str
    kategoria: str
    wojewodztwo: str


class Permission(TypedDict, total=False):
    data_uzyskania: str
    id: str
    kategoria: str
    wojewodztwo: str


class PermissionListMatch(TypedDict, total=False):
    data_uzyskania: str
    id: str
    kategoria: str
    wojewodztwo: str


class Statistic(TypedDict, total=False):
    data: dict


class StatisticLoadMatch(TypedDict, total=False):
    data: dict


class Vehicle(TypedDict, total=False):
    data_pierwszej_rejestracji: str
    id: str
    marka: str
    masa_wlasna: int
    model: str
    podrodzaj: str
    pojemnosc_silnika: int
    rodzaj: str
    rok_produkcji: int
    wojewodztwo: str


class VehicleListMatch(TypedDict, total=False):
    data_pierwszej_rejestracji: str
    id: str
    marka: str
    masa_wlasna: int
    model: str
    podrodzaj: str
    pojemnosc_silnika: int
    rodzaj: str
    rok_produkcji: int
    wojewodztwo: str
