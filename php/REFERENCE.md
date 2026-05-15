# Cepik PHP SDK Reference

Complete API reference for the Cepik PHP SDK.


## CepikSDK

### Constructor

```php
require_once __DIR__ . '/cepik_sdk.php';

$client = new CepikSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CepikSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CepikSDK::test();
```


### Instance Methods

#### `DrivingLicense($data = null)`

Create a new `DrivingLicenseEntity` instance. Pass `null` for no initial data.

#### `Permission($data = null)`

Create a new `PermissionEntity` instance. Pass `null` for no initial data.

#### `Statistic($data = null)`

Create a new `StatisticEntity` instance. Pass `null` for no initial data.

#### `Vehicle($data = null)`

Create a new `VehicleEntity` instance. Pass `null` for no initial data.

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## DrivingLicenseEntity

```php
$driving_license = $client->DrivingLicense();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_waznosci` | ``$STRING`` | No |  |
| `data_wydania` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `kategoria` | ``$STRING`` | No |  |
| `wojewodztwo` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->DrivingLicense()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): DrivingLicenseEntity`

Create a new `DrivingLicenseEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## PermissionEntity

```php
$permission = $client->Permission();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_uzyskania` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `kategoria` | ``$STRING`` | No |  |
| `wojewodztwo` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Permission()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): PermissionEntity`

Create a new `PermissionEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## StatisticEntity

```php
$statistic = $client->Statistic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$OBJECT`` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Statistic()->load(["id" => "statistic_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): StatisticEntity`

Create a new `StatisticEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## VehicleEntity

```php
$vehicle = $client->Vehicle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_pierwszej_rejestracji` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `marka` | ``$STRING`` | No |  |
| `masa_wlasna` | ``$INTEGER`` | No |  |
| `model` | ``$STRING`` | No |  |
| `podrodzaj` | ``$STRING`` | No |  |
| `pojemnosc_silnika` | ``$INTEGER`` | No |  |
| `rodzaj` | ``$STRING`` | No |  |
| `rok_produkcji` | ``$INTEGER`` | No |  |
| `wojewodztwo` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Vehicle()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): VehicleEntity`

Create a new `VehicleEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new CepikSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

