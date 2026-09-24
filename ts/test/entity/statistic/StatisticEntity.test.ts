

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"liczbapojazdow":{"a":true,"h":"Liczbapojazdow","n":"liczbapojazdow","r":false,"sh":"Total number of vehicles","t":"`$INTEGER`","key$":"liczbapojazdow","index$":0},"liczbaprawjazdy":{"a":true,"h":"Liczbaprawjazdy","n":"liczbaprawjazdy","r":false,"sh":"Total number of driving licenses","t":"`$INTEGER`","key$":"liczbaprawjazdy","index$":1},"wgkategorii":{"a":true,"h":"Wgkategorii","n":"wgkategorii","r":false,"sh":"Breakdown by license category","t":"`$OBJECT`","key$":"wgkategorii","index$":2},"wgmarki":{"a":true,"h":"Wgmarki","n":"wgmarki","r":false,"sh":"Breakdown by brand","t":"`$OBJECT`","key$":"wgmarki","index$":3},"wgrodzaju":{"a":true,"h":"Wgrodzaju","n":"wgrodzaju","r":false,"sh":"Breakdown by vehicle type","t":"`$OBJECT`","key$":"wgrodzaju","index$":4},"wojewodztwo":{"a":true,"h":"Wojewodztwo","n":"wojewodztwo","r":false,"sh":"Province/voivodeship","t":"`$STRING`","key$":"wojewodztwo","index$":5}},"name":"statistic","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /statystyki/pojazdy","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"rok","or":"rok","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"wojewodztwo","or":"wojewodztwo","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/statystyki/pojazdy","q":{"exist":["rok","wojewodztwo"]},"r":{},"s":[{"lit":"statystyki"},{"lit":"pojazdy"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /statystyki/prawo-jazdy","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"rok","or":"rok","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"wojewodztwo","or":"wojewodztwo","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/statystyki/prawo-jazdy","q":{"exist":["rok","wojewodztwo"]},"r":{},"s":[{"lit":"statystyki"},{"lit":"prawo-jazdy"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"statistic","name__orig":"statistic","Name":"Statistic","name_":"statistic","name-":"statistic","NAME":"STATISTIC","index$":2}, {"active":true,"entity":"statistic","key$":"BasicStatisticFlow","kind":"basic","name":"BasicStatisticFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"statistic_ref01","srcdatavar":"statistic_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-statistic_ref01"}}],"index$":0}]}, 'Statistic', {"GET /statystyki/pojazdy":{"protocol":"http","operationId":"getVehicleStatistics","responses":{"200":{"description":"Successful response with vehicle statistics","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"key$":"data","properties":{"liczba-pojazdow":{"description":"Total number of vehicles","type":"integer","key$":"liczba-pojazdow"},"wg-marki":{"additionalProperties":{"type":"integer"},"description":"Breakdown by brand","type":"object","key$":"wg-marki"},"wg-rodzaju":{"additionalProperties":{"type":"integer"},"description":"Breakdown by vehicle type","type":"object","key$":"wg-rodzaju"},"wojewodztwo":{"description":"Province/voivodeship","type":"string","key$":"wojewodztwo"}},"type":"object","x-ref":"#/components/schemas/VehicleStatistics","index$":0}}}}}},"400":{"description":"Bad request - invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"message":{"type":"string","description":"Error message"},"code":{"type":"integer","description":"Error code"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"message":{"type":"string","description":"Error message"},"code":{"type":"integer","description":"Error code"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"wojewodztwo","in":"query","description":"Province/voivodeship filter","required":false,"schema":{"type":"string"},"index$":0},{"name":"rok","in":"query","description":"Year for statistics","required":false,"schema":{"type":"integer"},"index$":1}],"securitySource":"unspecified"},"GET /statystyki/prawo-jazdy":{"protocol":"http","operationId":"getDrivingLicenseStatistics","responses":{"200":{"description":"Successful response with driving license statistics","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"key$":"data","properties":{"liczba-praw-jazdy":{"description":"Total number of driving licenses","type":"integer","key$":"liczba-praw-jazdy"},"wg-kategorii":{"additionalProperties":{"type":"integer"},"description":"Breakdown by license category","type":"object","key$":"wg-kategorii"},"wojewodztwo":{"description":"Province/voivodeship","type":"string","key$":"wojewodztwo"}},"type":"object","x-ref":"#/components/schemas/DrivingLicenseStatistics","index$":0}}}}}},"400":{"description":"Bad request - invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"message":{"type":"string","description":"Error message"},"code":{"type":"integer","description":"Error code"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"message":{"type":"string","description":"Error message"},"code":{"type":"integer","description":"Error code"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"wojewodztwo","in":"query","description":"Province/voivodeship filter","required":false,"schema":{"type":"string"},"index$":0},{"name":"rok","in":"query","description":"Year for statistics","required":false,"schema":{"type":"integer"},"index$":1}],"securitySource":"unspecified"}})
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
  
