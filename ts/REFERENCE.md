# Cepik TypeScript SDK Reference

Complete API reference for the Cepik TypeScript SDK.


## CepikSDK

### Constructor

```ts
new CepikSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CepikSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CepikSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CepikSDK` instance in test mode.


### Instance Methods

#### `DrivingLicense(data?: object)`

Create a new `DrivingLicense` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DrivingLicenseEntity` instance.

#### `Permission(data?: object)`

Create a new `Permission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PermissionEntity` instance.

#### `Statistic(data?: object)`

Create a new `Statistic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatisticEntity` instance.

#### `Vehicle(data?: object)`

Create a new `Vehicle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VehicleEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CepikSDK.test()`.

**Returns:** `CepikSDK` instance in test mode.


---

## DrivingLicenseEntity

```ts
const driving_license = client.DrivingLicense()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DrivingLicense().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DrivingLicenseEntity` instance with the same client and
options.

#### `client()`

Return the parent `CepikSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PermissionEntity

```ts
const permission = client.Permission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_uzyskania` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `kategoria` | ``$STRING`` | No |  |
| `wojewodztwo` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Permission().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CepikSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatisticEntity

```ts
const statistic = client.Statistic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$OBJECT`` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Statistic().load({ id: 'statistic_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatisticEntity` instance with the same client and
options.

#### `client()`

Return the parent `CepikSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VehicleEntity

```ts
const vehicle = client.Vehicle()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Vehicle().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VehicleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CepikSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new CepikSDK({
  feature: {
    test: { active: true },
  }
})
```

