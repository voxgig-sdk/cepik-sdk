# Cepik SDK utility: make_context
require_relative '../core/context'
module CepikUtilities
  MakeContext = ->(ctxmap, basectx) {
    CepikContext.new(ctxmap, basectx)
  }
end
