<?php
declare(strict_types=1);

// Typed models for the Cepik SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** DrivingLicense entity data model. */
class DrivingLicense
{
    public ?string $data_waznosci = null;
    public ?string $data_wydania = null;
    public ?string $id = null;
    public ?string $kategoria = null;
    public ?string $wojewodztwo = null;
}

/** Request payload for DrivingLicense#list. */
class DrivingLicenseListMatch
{
    public ?string $data_waznosci = null;
    public ?string $data_wydania = null;
    public ?string $id = null;
    public ?string $kategoria = null;
    public ?string $wojewodztwo = null;
}

/** Permission entity data model. */
class Permission
{
    public ?string $data_uzyskania = null;
    public ?string $id = null;
    public ?string $kategoria = null;
    public ?string $wojewodztwo = null;
}

/** Request payload for Permission#list. */
class PermissionListMatch
{
    public ?string $data_uzyskania = null;
    public ?string $id = null;
    public ?string $kategoria = null;
    public ?string $wojewodztwo = null;
}

/** Statistic entity data model. */
class Statistic
{
    public ?array $data = null;
}

/** Request payload for Statistic#load. */
class StatisticLoadMatch
{
    public ?array $data = null;
}

/** Vehicle entity data model. */
class Vehicle
{
    public ?string $data_pierwszej_rejestracji = null;
    public ?string $id = null;
    public ?string $marka = null;
    public ?int $masa_wlasna = null;
    public ?string $model = null;
    public ?string $podrodzaj = null;
    public ?int $pojemnosc_silnika = null;
    public ?string $rodzaj = null;
    public ?int $rok_produkcji = null;
    public ?string $wojewodztwo = null;
}

/** Request payload for Vehicle#list. */
class VehicleListMatch
{
    public ?string $data_pierwszej_rejestracji = null;
    public ?string $id = null;
    public ?string $marka = null;
    public ?int $masa_wlasna = null;
    public ?string $model = null;
    public ?string $podrodzaj = null;
    public ?int $pojemnosc_silnika = null;
    public ?string $rodzaj = null;
    public ?int $rok_produkcji = null;
    public ?string $wojewodztwo = null;
}

