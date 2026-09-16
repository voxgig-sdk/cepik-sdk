

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date","name":"datauzyskania","req":false,"short":"Date permission was obtained","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":false,"short":"Unique permission identifier","type":"`$STRING`","index$":1},{"active":true,"name":"kategoria","req":false,"short":"Category of permission","type":"`$STRING`","index$":2},{"active":true,"name":"wojewodztwo","req":false,"short":"Province/voivodeship","type":"`$STRING`","index$":3}],"id":{"field":"id","name":"id"},"name":"permission","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"data_do","orig":"data_do","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"data_od","orig":"data_od","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":500,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"kind":"query","name":"wojewodztwo","orig":"wojewodztwo","reqd":false,"type":"`$STRING`","index$":4}]},"contract":{"id":"GET /uprawnienia","json":"{\"operationId\":\"getPermissions\",\"parameters\":[{\"description\":\"Province/voivodeship filter\",\"in\":\"query\",\"name\":\"wojewodztwo\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Start date for filtering (YYYY-MM-DD)\",\"in\":\"query\",\"name\":\"data-od\",\"required\":false,\"schema\":{\"format\":\"date\",\"type\":\"string\"}},{\"description\":\"End date for filtering (YYYY-MM-DD)\",\"in\":\"query\",\"name\":\"data-do\",\"required\":false,\"schema\":{\"format\":\"date\",\"type\":\"string\"}},{\"description\":\"Maximum number of results to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":500,\"maximum\":500,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"data-uzyskania\":{\"description\":\"Date permission was obtained\",\"format\":\"date\",\"type\":\"string\"},\"id\":{\"description\":\"Unique permission identifier\",\"type\":\"string\"},\"kategoria\":{\"description\":\"Category of permission\",\"type\":\"string\"},\"wojewodztwo\":{\"description\":\"Province/voivodeship\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"properties\":{\"first\":{\"description\":\"URL to first page\",\"type\":\"string\"},\"last\":{\"description\":\"URL to last page\",\"type\":\"string\"},\"next\":{\"description\":\"URL to next page\",\"nullable\":true,\"type\":\"string\"},\"prev\":{\"description\":\"URL to previous page\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with permissions data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"integer\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"integer\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/uprawnienia","segments":[{"lit":"uprawnienia"}],"select":{"exist":["data_do","data_od","limit","page","wojewodztwo"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"permission","name__orig":"permission","Name":"Permission","name_":"permission","name-":"permission","NAME":"PERMISSION","index$":1}, {"active":true,"entity":"permission","key$":"BasicPermissionFlow","kind":"basic","name":"BasicPermissionFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"permission_ref01"}}],"index$":0}]}, 'Permission')
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
  
