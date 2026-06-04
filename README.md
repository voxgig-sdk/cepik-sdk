# Cepik SDK

Query Poland's Central Register of Vehicles and Drivers (CEPiK) for vehicle, licence, permission and statistical data

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About CEPiK API

The CEPiK API exposes data from Poland's *Centralna Ewidencja Pojazdów i Kierowców* (Central Register of Vehicles and Drivers), the national registry that tracks registered vehicles, issued driving licences, and the permissions associated with them. The register is maintained by the Polish state and the API is published at [api.cepik.gov.pl](https://api.cepik.gov.pl).

What you get from the API:

- Vehicle records drawn from the national vehicle register
- Driving licence records issued in Poland
- Permission records linked to driving licences (the categories a driver is authorised for)
- Statistical aggregations over the above datasets

The public catalogue listing at [freepublicapis.com](https://freepublicapis.com/cepik-api) currently reports the endpoint as unreliable, so expect intermittent availability. Treat any integration as best-effort and check `https://api.cepik.gov.pl` for the latest published version before relying on a response shape.

## Try it

**TypeScript**
```bash
npm install cepik
```

**Python**
```bash
pip install cepik-sdk
```

**PHP**
```bash
composer require voxgig/cepik-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/cepik-sdk/go
```

**Ruby**
```bash
gem install cepik-sdk
```

**Lua**
```bash
luarocks install cepik-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { CepikSDK } from 'cepik'

const client = new CepikSDK({})

// List all drivinglicenses
const drivinglicenses = await client.DrivingLicense().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o cepik-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "cepik": {
      "command": "/abs/path/to/cepik-mcp"
    }
  }
}
```

## Entities

The API exposes 4 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **DrivingLicense** | Driving licences (prawa jazdy) issued in Poland and held in the central register. | `/prawo-jazdy` |
| **Permission** | Permissions / categories (uprawnienia) attached to a driving licence, describing which vehicle classes the holder may operate. | `/uprawnienia` |
| **Statistic** | Aggregated statistical views (statystyki) derived from the vehicle and driver datasets. | `/statystyki/pojazdy` |
| **Vehicle** | Records from Poland's national vehicle register (pojazdy) — registered vehicles tracked in CEPiK. | `/pojazdy` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from cepik_sdk import CepikSDK

client = CepikSDK({})

# List all drivinglicenses
drivinglicenses, err = client.DrivingLicense(None).list(None, None)
```

### PHP

```php
<?php
require_once 'cepik_sdk.php';

$client = new CepikSDK([]);

// List all drivinglicenses
[$drivinglicenses, $err] = $client->DrivingLicense(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/cepik-sdk/go"

client := sdk.NewCepikSDK(map[string]any{})

// List all drivinglicenses
drivinglicenses, err := client.DrivingLicense(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Cepik_sdk"

client = CepikSDK.new({})

# List all drivinglicenses
drivinglicenses, err = client.DrivingLicense(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("cepik_sdk")

local client = sdk.new({})

-- List all drivinglicenses
local drivinglicenses, err = client:DrivingLicense(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = CepikSDK.test()
const result = await client.DrivingLicense().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = CepikSDK.test(None, None)
result, err = client.DrivingLicense(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = CepikSDK::test(null, null);
[$result, $err] = $client->DrivingLicense(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.DrivingLicense(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = CepikSDK.test(nil, nil)
result, err = client.DrivingLicense(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:DrivingLicense(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the CEPiK API

- Upstream: [https://api.cepik.gov.pl](https://api.cepik.gov.pl)

---

Generated from the CEPiK API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
