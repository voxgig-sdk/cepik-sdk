# Typed models for the Cepik SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class DrivingLicense:
    data_waznosci: Optional[str] = None
    data_wydania: Optional[str] = None
    id: Optional[str] = None
    kategoria: Optional[str] = None
    wojewodztwo: Optional[str] = None


@dataclass
class DrivingLicenseListMatch:
    data_waznosci: Optional[str] = None
    data_wydania: Optional[str] = None
    id: Optional[str] = None
    kategoria: Optional[str] = None
    wojewodztwo: Optional[str] = None


@dataclass
class Permission:
    data_uzyskania: Optional[str] = None
    id: Optional[str] = None
    kategoria: Optional[str] = None
    wojewodztwo: Optional[str] = None


@dataclass
class PermissionListMatch:
    data_uzyskania: Optional[str] = None
    id: Optional[str] = None
    kategoria: Optional[str] = None
    wojewodztwo: Optional[str] = None


@dataclass
class Statistic:
    data: Optional[dict] = None


@dataclass
class StatisticLoadMatch:
    data: Optional[dict] = None


@dataclass
class Vehicle:
    data_pierwszej_rejestracji: Optional[str] = None
    id: Optional[str] = None
    marka: Optional[str] = None
    masa_wlasna: Optional[int] = None
    model: Optional[str] = None
    podrodzaj: Optional[str] = None
    pojemnosc_silnika: Optional[int] = None
    rodzaj: Optional[str] = None
    rok_produkcji: Optional[int] = None
    wojewodztwo: Optional[str] = None


@dataclass
class VehicleListMatch:
    data_pierwszej_rejestracji: Optional[str] = None
    id: Optional[str] = None
    marka: Optional[str] = None
    masa_wlasna: Optional[int] = None
    model: Optional[str] = None
    podrodzaj: Optional[str] = None
    pojemnosc_silnika: Optional[int] = None
    rodzaj: Optional[str] = None
    rok_produkcji: Optional[int] = None
    wojewodztwo: Optional[str] = None

