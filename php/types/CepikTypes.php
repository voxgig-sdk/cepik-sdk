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
    public ?string $datawaznosci = null;
    public ?string $datawydania = null;
    public ?string $id = null;
    public ?string $kategoria = null;
    public ?string $wojewodztwo = null;
}

/** Request payload for DrivingLicense#list. */
class DrivingLicenseListMatch
{
    public ?string $datawaznosci = null;
    public ?string $datawydania = null;
    public ?string $id = null;
    public ?string $kategoria = null;
    public ?string $wojewodztwo = null;
}

/** Permission entity data model. */
class Permission
{
    public ?string $datauzyskania = null;
    public ?string $id = null;
    public ?string $kategoria = null;
    public ?string $wojewodztwo = null;
}

/** Request payload for Permission#list. */
class PermissionListMatch
{
    public ?string $datauzyskania = null;
    public ?string $id = null;
    public ?string $kategoria = null;
    public ?string $wojewodztwo = null;
}

/** Statistic entity data model. */
class Statistic
{
    public ?int $liczbapojazdow = null;
    public ?int $liczbaprawjazdy = null;
    public ?array $wgkategorii = null;
    public ?array $wgmarki = null;
    public ?array $wgrodzaju = null;
    public ?string $wojewodztwo = null;
}

/** Request payload for Statistic#load. */
class StatisticLoadMatch
{
    public ?int $liczbapojazdow = null;
    public ?int $liczbaprawjazdy = null;
    public ?array $wgkategorii = null;
    public ?array $wgmarki = null;
    public ?array $wgrodzaju = null;
    public ?string $wojewodztwo = null;
}

/** Vehicle entity data model. */
class Vehicle
{
    public ?string $datapierwszejrejestracji = null;
    public ?string $id = null;
    public ?string $marka = null;
    public ?int $masawlasna = null;
    public ?string $model = null;
    public ?string $podrodzaj = null;
    public ?int $pojemnoscsilnika = null;
    public ?string $rodzaj = null;
    public ?int $rokprodukcji = null;
    public ?string $wojewodztwo = null;
}

/** Request payload for Vehicle#list. */
class VehicleListMatch
{
    public ?string $datapierwszejrejestracji = null;
    public ?string $id = null;
    public ?string $marka = null;
    public ?int $masawlasna = null;
    public ?string $model = null;
    public ?string $podrodzaj = null;
    public ?int $pojemnoscsilnika = null;
    public ?string $rodzaj = null;
    public ?int $rokprodukcji = null;
    public ?string $wojewodztwo = null;
}

