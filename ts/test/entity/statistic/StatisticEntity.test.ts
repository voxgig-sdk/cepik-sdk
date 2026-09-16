

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


describe('StatisticEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CEPIK_TEST_LIVE=TRUE.
  afterEach(liveDelay('CEPIK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CepikSDK.test()
    const ent = testsdk.Statistic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CEPIK_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'statistic.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"liczbapojazdow","req":false,"short":"Total number of vehicles","type":"`$INTEGER`","index$":0},{"active":true,"name":"liczbaprawjazdy","req":false,"short":"Total number of driving licenses","type":"`$INTEGER`","index$":1},{"active":true,"name":"wgkategorii","req":false,"short":"Breakdown by license category","type":"`$OBJECT`","index$":2},{"active":true,"name":"wgmarki","req":false,"short":"Breakdown by brand","type":"`$OBJECT`","index$":3},{"active":true,"name":"wgrodzaju","req":false,"short":"Breakdown by vehicle type","type":"`$OBJECT`","index$":4},{"active":true,"name":"wojewodztwo","req":false,"short":"Province/voivodeship","type":"`$STRING`","index$":5}],"name":"statistic","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"rok","orig":"rok","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"wojewodztwo","orig":"wojewodztwo","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /statystyki/pojazdy","json":"{\"operationId\":\"getVehicleStatistics\",\"parameters\":[{\"description\":\"Province/voivodeship filter\",\"in\":\"query\",\"name\":\"wojewodztwo\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Year for statistics\",\"in\":\"query\",\"name\":\"rok\",\"required\":false,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"liczba-pojazdow\":{\"description\":\"Total number of vehicles\",\"type\":\"integer\"},\"wg-marki\":{\"additionalProperties\":{\"type\":\"integer\"},\"description\":\"Breakdown by brand\",\"type\":\"object\"},\"wg-rodzaju\":{\"additionalProperties\":{\"type\":\"integer\"},\"description\":\"Breakdown by vehicle type\",\"type\":\"object\"},\"wojewodztwo\":{\"description\":\"Province/voivodeship\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with vehicle statistics\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"integer\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"integer\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/statystyki/pojazdy","segments":[{"lit":"statystyki"},{"lit":"pojazdy"}],"select":{"exist":["rok","wojewodztwo"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"rok","orig":"rok","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"wojewodztwo","orig":"wojewodztwo","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /statystyki/prawo-jazdy","json":"{\"operationId\":\"getDrivingLicenseStatistics\",\"parameters\":[{\"description\":\"Province/voivodeship filter\",\"in\":\"query\",\"name\":\"wojewodztwo\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Year for statistics\",\"in\":\"query\",\"name\":\"rok\",\"required\":false,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"liczba-praw-jazdy\":{\"description\":\"Total number of driving licenses\",\"type\":\"integer\"},\"wg-kategorii\":{\"additionalProperties\":{\"type\":\"integer\"},\"description\":\"Breakdown by license category\",\"type\":\"object\"},\"wojewodztwo\":{\"description\":\"Province/voivodeship\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with driving license statistics\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"integer\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"integer\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/statystyki/prawo-jazdy","segments":[{"lit":"statystyki"},{"lit":"prawo-jazdy"}],"select":{"exist":["rok","wojewodztwo"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"statistic","name__orig":"statistic","Name":"Statistic","name_":"statistic","name-":"statistic","NAME":"STATISTIC","index$":2}, {"active":true,"entity":"statistic","key$":"BasicStatisticFlow","kind":"basic","name":"BasicStatisticFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"statistic_ref01","srcdatavar":"statistic_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-statistic_ref01"}}],"index$":0}]}, 'Statistic')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let statistic_ref01_data = Object.values(setup.data.existing.statistic)[0] as any

    // LOAD
    const statistic_ref01_ent = client.Statistic()
    const statistic_ref01_match_dt0: any = {}
    const statistic_ref01_data_dt0 = (await statistic_ref01_ent.load(statistic_ref01_match_dt0)).data()
    assert(null != statistic_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/statistic/StatisticTestData.json')

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
    ['statistic01','statistic02','statistic03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CEPIK_TEST_STATISTIC_ENTID': idmap,
    'CEPIK_TEST_LIVE': 'FALSE',
    'CEPIK_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['CEPIK_TEST_STATISTIC_ENTID']

  const live = 'TRUE' === env.CEPIK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CEPIK_TEST_STATISTIC_ENTID']
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
  
