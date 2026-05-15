
import { Context } from './Context'


class CepikError extends Error {

  isCepikError = true

  sdk = 'Cepik'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  CepikError
}

