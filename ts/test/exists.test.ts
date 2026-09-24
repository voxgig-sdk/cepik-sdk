
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CepikSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CepikSDK.test()
    equal(testsdk instanceof CepikSDK, true,
      'CepikSDK.test() must return a client synchronously')
  })

})
