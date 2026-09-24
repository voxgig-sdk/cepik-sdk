

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


describe('PermissionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CEPIK_TEST_LIVE=TRUE.
  afterEach(liveDelay('CEPIK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CepikSDK.test()
    const ent = testsdk.Permission()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CEPIK_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'permission.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"datauzyskania":{"a":true,"fo":"date","h":"Datauzyskania","n":"datauzyskania","r":false,"sh":"Date permission was obtained","t":"`$STRING`","key$":"datauzyskania","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique permission identifier","t":"`$STRING`","key$":"id","index$":1},"kategoria":{"a":true,"h":"Kategoria","n":"kategoria","r":false,"sh":"Category of permission","t":"`$STRING`","key$":"kategoria","index$":2},"wojewodztwo":{"a":true,"h":"Wojewodztwo","n":"wojewodztwo","r":false,"sh":"Province/voivodeship","t":"`$STRING`","key$":"wojewodztwo","index$":3}},"id":{"field":"id","name":"id"},"name":"permission","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /uprawnienia","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"data_do","or":"data_do","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"data_od","or":"data_od","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":500,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"wojewodztwo","or":"wojewodztwo","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/uprawnienia","q":{"exist":["data_do","data_od","limit","page","wojewodztwo"]},"r":{},"s":[{"lit":"uprawnienia"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"permission","name__orig":"permission","Name":"Permission","name_":"permission","name-":"permission","NAME":"PERMISSION","index$":1}, {"active":true,"entity":"permission","key$":"BasicPermissionFlow","kind":"basic","name":"BasicPermissionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"permission_ref01"}}],"index$":0}]}, 'Permission', {"GET /uprawnienia":{"protocol":"http","operationId":"getPermissions","responses":{"200":{"description":"Successful response with permissions data","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"items":{"properties":{"data-uzyskania":{"description":"Date permission was obtained","format":"date","type":"string","key$":"data-uzyskania"},"id":{"description":"Unique permission identifier","type":"string","key$":"id"},"kategoria":{"description":"Category of permission","type":"string","key$":"kategoria"},"wojewodztwo":{"description":"Province/voivodeship","type":"string","key$":"wojewodztwo"}},"type":"object","x-ref":"#/components/schemas/Permission","index$":0},"key$":"data","type":"array"},"links":{"key$":"links","properties":{"first":{"description":"URL to first page","type":"string"},"last":{"description":"URL to last page","type":"string"},"next":{"description":"URL to next page","nullable":true,"type":"string"},"prev":{"description":"URL to previous page","nullable":true,"type":"string"}},"type":"object","x-ref":"#/components/schemas/PaginationLinks"}}}}}},"400":{"description":"Bad request - invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"message":{"type":"string","description":"Error message"},"code":{"type":"integer","description":"Error code"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"message":{"type":"string","description":"Error message"},"code":{"type":"integer","description":"Error code"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"wojewodztwo","in":"query","description":"Province/voivodeship filter","required":false,"schema":{"type":"string"},"index$":0},{"name":"data-od","in":"query","description":"Start date for filtering (YYYY-MM-DD)","required":false,"schema":{"type":"string","format":"date"},"index$":1},{"name":"data-do","in":"query","description":"End date for filtering (YYYY-MM-DD)","required":false,"schema":{"type":"string","format":"date"},"index$":2},{"name":"limit","in":"query","description":"Maximum number of results to return","required":false,"schema":{"type":"integer","default":500,"minimum":1,"maximum":500},"index$":3},{"name":"page","in":"query","description":"Page number for pagination","required":false,"schema":{"type":"integer","default":1,"minimum":1},"index$":4}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let permission_ref01_data = Object.values(setup.data.existing.permission)[0] as any

    // LIST
    const permission_ref01_ent = client.Permission()
    const permission_ref01_match: any = {}

    const permission_ref01_list = (await permission_ref01_ent.list(permission_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/permission/PermissionTestData.json')

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
    ['permission01','permission02','permission03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CEPIK_TEST_PERMISSION_ENTID': idmap,
    'CEPIK_TEST_LIVE': 'FALSE',
    'CEPIK_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['CEPIK_TEST_PERMISSION_ENTID']

  const live = 'TRUE' === env.CEPIK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CEPIK_TEST_PERMISSION_ENTID']
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
  
