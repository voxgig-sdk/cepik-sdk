
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CepikSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await CepikSDK.test()
    equal(null !== testsdk, true)
  })

})
