

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"datapierwszejrejestracji":{"a":true,"fo":"date","h":"Datapierwszejrejestracji","n":"datapierwszejrejestracji","r":false,"sh":"Date of first registration","t":"`$STRING`","key$":"datapierwszejrejestracji","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique vehicle identifier","t":"`$STRING`","key$":"id","index$":1},"marka":{"a":true,"h":"Marka","n":"marka","r":false,"sh":"Vehicle brand/make","t":"`$STRING`","key$":"marka","index$":2},"masawlasna":{"a":true,"h":"Masawlasna","n":"masawlasna","r":false,"sh":"Curb weight in kg","t":"`$INTEGER`","key$":"masawlasna","index$":3},"model":{"a":true,"h":"Model","n":"model","r":false,"sh":"Vehicle model","t":"`$STRING`","key$":"model","index$":4},"podrodzaj":{"a":true,"h":"Podrodzaj","n":"podrodzaj","r":false,"sh":"Vehicle subtype","t":"`$STRING`","key$":"podrodzaj","index$":5},"pojemnoscsilnika":{"a":true,"h":"Pojemnoscsilnika","n":"pojemnoscsilnika","r":false,"sh":"Engine capacity in cm³","t":"`$INTEGER`","key$":"pojemnoscsilnika","index$":6},"rodzaj":{"a":true,"h":"Rodzaj","n":"rodzaj","r":false,"sh":"Vehicle type","t":"`$STRING`","key$":"rodzaj","index$":7},"rokprodukcji":{"a":true,"h":"Rokprodukcji","n":"rokprodukcji","r":false,"sh":"Year of production","t":"`$INTEGER`","key$":"rokprodukcji","index$":8},"wojewodztwo":{"a":true,"h":"Wojewodztwo","n":"wojewodztwo","r":false,"sh":"Province/voivodeship of registration","t":"`$STRING`","key$":"wojewodztwo","index$":9}},"id":{"field":"id","name":"id"},"name":"vehicle","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /pojazdy","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"data_do","or":"data_do","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"data_od","or":"data_od","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":500,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"wojewodztwo","or":"wojewodztwo","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/pojazdy","q":{"exist":["data_do","data_od","limit","page","wojewodztwo"]},"r":{},"s":[{"lit":"pojazdy"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"vehicle","name__orig":"vehicle","Name":"Vehicle","name_":"vehicle","name-":"vehicle","NAME":"VEHICLE","index$":3}, {"active":true,"entity":"vehicle","key$":"BasicVehicleFlow","kind":"basic","name":"BasicVehicleFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"vehicle_ref01"}}],"index$":0}]}, 'Vehicle', {"GET /pojazdy":{"protocol":"http","operationId":"getVehicles","responses":{"200":{"description":"Successful response with vehicle data","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"items":{"properties":{"data-pierwszej-rejestracji":{"description":"Date of first registration","format":"date","type":"string","key$":"data-pierwszej-rejestracji"},"id":{"description":"Unique vehicle identifier","type":"string","key$":"id"},"marka":{"description":"Vehicle brand/make","type":"string","key$":"marka"},"masa-wlasna":{"description":"Curb weight in kg","type":"integer","key$":"masa-wlasna"},"model":{"description":"Vehicle model","type":"string","key$":"model"},"podrodzaj":{"description":"Vehicle subtype","type":"string","key$":"podrodzaj"},"pojemnosc-silnika":{"description":"Engine capacity in cm³","type":"integer","key$":"pojemnosc-silnika"},"rodzaj":{"description":"Vehicle type","type":"string","key$":"rodzaj"},"rok-produkcji":{"description":"Year of production","type":"integer","key$":"rok-produkcji"},"wojewodztwo":{"description":"Province/voivodeship of registration","type":"string","key$":"wojewodztwo"}},"type":"object","x-ref":"#/components/schemas/Vehicle","index$":0},"key$":"data","type":"array"},"links":{"key$":"links","properties":{"first":{"description":"URL to first page","type":"string"},"last":{"description":"URL to last page","type":"string"},"next":{"description":"URL to next page","nullable":true,"type":"string"},"prev":{"description":"URL to previous page","nullable":true,"type":"string"}},"type":"object","x-ref":"#/components/schemas/PaginationLinks"}}}}}},"400":{"description":"Bad request - invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"message":{"type":"string","description":"Error message"},"code":{"type":"integer","description":"Error code"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"message":{"type":"string","description":"Error message"},"code":{"type":"integer","description":"Error code"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"wojewodztwo","in":"query","description":"Province/voivodeship filter","required":false,"schema":{"type":"string"},"index$":0},{"name":"data-od","in":"query","description":"Start date for filtering (YYYY-MM-DD)","required":false,"schema":{"type":"string","format":"date"},"index$":1},{"name":"data-do","in":"query","description":"End date for filtering (YYYY-MM-DD)","required":false,"schema":{"type":"string","format":"date"},"index$":2},{"name":"limit","in":"query","description":"Maximum number of results to return","required":false,"schema":{"type":"integer","default":500,"minimum":1,"maximum":500},"index$":3},{"name":"page","in":"query","description":"Page number for pagination","required":false,"schema":{"type":"integer","default":1,"minimum":1},"index$":4}],"securitySource":"unspecified"}})
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
  
