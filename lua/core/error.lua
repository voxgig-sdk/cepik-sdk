-- Cepik SDK error

local CepikError = {}
CepikError.__index = CepikError


function CepikError.new(code, msg, ctx)
  local self = setmetatable({}, CepikError)
  self.is_sdk_error = true
  self.sdk = "Cepik"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CepikError:error()
  return self.msg
end


function CepikError:__tostring()
  return self.msg
end


return CepikError
