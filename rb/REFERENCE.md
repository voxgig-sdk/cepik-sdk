# Cepik Ruby SDK Reference

Complete API reference for the Cepik Ruby SDK.


## CepikSDK

### Constructor

```ruby
require_relative 'cepik_sdk'

client = CepikSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CepikSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CepikSDK.test
```


### Instance Methods

#### `DrivingLicense(data = nil)`

Create a new `DrivingLicense` entity instance. Pass `nil` for no initial data.

#### `Permission(data = nil)`

Create a new `Permission` entity instance. Pass `nil` for no initial data.

#### `Statistic(data = nil)`

Create a new `Statistic` entity instance. Pass `nil` for no initial data.

#### `Vehicle(data = nil)`

Create a new `Vehicle` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## DrivingLicenseEntity

```ruby
driving_license = client.DrivingLicense
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

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.DrivingLicense.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DrivingLicenseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PermissionEntity

```ruby
permission = client.Permission
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_uzyskania` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `kategoria` | ``$STRING`` | No |  |
| `wojewodztwo` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.Permission.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PermissionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StatisticEntity

```ruby
statistic = client.Statistic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$OBJECT`` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Statistic.load({ "id" => "statistic_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StatisticEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## VehicleEntity

```ruby
vehicle = client.Vehicle
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

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.Vehicle.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `VehicleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = CepikSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

