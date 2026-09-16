

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CepikSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('VehicleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CEPIK_TEST_LIVE=TRUE.
  afterEach(liveDelay('CEPIK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CepikSDK.test()
    const ent = testsdk.Vehicle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CEPIK_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'vehicle.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date","name":"datapierwszejrejestracji","req":false,"short":"Date of first registration","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":false,"short":"Unique vehicle identifier","type":"`$STRING`","index$":1},{"active":true,"name":"marka","req":false,"short":"Vehicle brand/make","type":"`$STRING`","index$":2},{"active":true,"name":"masawlasna","req":false,"short":"Curb weight in kg","type":"`$INTEGER`","index$":3},{"active":true,"name":"model","req":false,"short":"Vehicle model","type":"`$STRING`","index$":4},{"active":true,"name":"podrodzaj","req":false,"short":"Vehicle subtype","type":"`$STRING`","index$":5},{"active":true,"name":"pojemnoscsilnika","req":false,"short":"Engine capacity in cm³","type":"`$INTEGER`","index$":6},{"active":true,"name":"rodzaj","req":false,"short":"Vehicle type","type":"`$STRING`","index$":7},{"active":true,"name":"rokprodukcji","req":false,"short":"Year of production","type":"`$INTEGER`","index$":8},{"active":true,"name":"wojewodztwo","req":false,"short":"Province/voivodeship of registration","type":"`$STRING`","index$":9}],"id":{"field":"id","name":"id"},"name":"vehicle","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"data_do","orig":"data_do","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"data_od","orig":"data_od","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":500,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"kind":"query","name":"wojewodztwo","orig":"wojewodztwo","reqd":false,"type":"`$STRING`","index$":4}]},"contract":{"id":"GET /pojazdy","json":"{\"operationId\":\"getVehicles\",\"parameters\":[{\"description\":\"Province/voivodeship filter\",\"in\":\"query\",\"name\":\"wojewodztwo\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Start date for filtering (YYYY-MM-DD)\",\"in\":\"query\",\"name\":\"data-od\",\"required\":false,\"schema\":{\"format\":\"date\",\"type\":\"string\"}},{\"description\":\"End date for filtering (YYYY-MM-DD)\",\"in\":\"query\",\"name\":\"data-do\",\"required\":false,\"schema\":{\"format\":\"date\",\"type\":\"string\"}},{\"description\":\"Maximum number of results to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":500,\"maximum\":500,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"data-pierwszej-rejestracji\":{\"description\":\"Date of first registration\",\"format\":\"date\",\"type\":\"string\"},\"id\":{\"description\":\"Unique vehicle identifier\",\"type\":\"string\"},\"marka\":{\"description\":\"Vehicle brand/make\",\"type\":\"string\"},\"masa-wlasna\":{\"description\":\"Curb weight in kg\",\"type\":\"integer\"},\"model\":{\"description\":\"Vehicle model\",\"type\":\"string\"},\"podrodzaj\":{\"description\":\"Vehicle subtype\",\"type\":\"string\"},\"pojemnosc-silnika\":{\"description\":\"Engine capacity in cm³\",\"type\":\"integer\"},\"rodzaj\":{\"description\":\"Vehicle type\",\"type\":\"string\"},\"rok-produkcji\":{\"description\":\"Year of production\",\"type\":\"integer\"},\"wojewodztwo\":{\"description\":\"Province/voivodeship of registration\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"properties\":{\"first\":{\"description\":\"URL to first page\",\"type\":\"string\"},\"last\":{\"description\":\"URL to last page\",\"type\":\"string\"},\"next\":{\"description\":\"URL to next page\",\"nullable\":true,\"type\":\"string\"},\"prev\":{\"description\":\"URL to previous page\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with vehicle data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"integer\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"integer\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/pojazdy","segments":[{"lit":"pojazdy"}],"select":{"exist":["data_do","data_od","limit","page","wojewodztwo"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"vehicle","name__orig":"vehicle","Name":"Vehicle","name_":"vehicle","name-":"vehicle","NAME":"VEHICLE","index$":3}, {"active":true,"entity":"vehicle","key$":"BasicVehicleFlow","kind":"basic","name":"BasicVehicleFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"vehicle_ref01"}}],"index$":0}]}, 'Vehicle')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let vehicle_ref01_data = Object.values(setup.data.existing.vehicle)[0] as any

    // LIST
    const vehicle_ref01_ent = client.Vehicle()
    const vehicle_ref01_match: any = {}

    const vehicle_ref01_list = (await vehicle_ref01_ent.list(vehicle_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/vehicle/VehicleTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CepikSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['vehicle01','vehicle02','vehicle03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CEPIK_TEST_VEHICLE_ENTID': idmap,
    'CEPIK_TEST_LIVE': 'FALSE',
    'CEPIK_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['CEPIK_TEST_VEHICLE_ENTID']

  const live = 'TRUE' === env.CEPIK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CEPIK_TEST_VEHICLE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CepikSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.CEPIK_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
