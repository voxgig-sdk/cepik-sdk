# Cepik SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CepikUtility.registrar = ->(u) {
  u.clean = CepikUtilities::Clean
  u.done = CepikUtilities::Done
  u.make_error = CepikUtilities::MakeError
  u.feature_add = CepikUtilities::FeatureAdd
  u.feature_hook = CepikUtilities::FeatureHook
  u.feature_init = CepikUtilities::FeatureInit
  u.fetcher = CepikUtilities::Fetcher
  u.make_fetch_def = CepikUtilities::MakeFetchDef
  u.make_context = CepikUtilities::MakeContext
  u.make_options = CepikUtilities::MakeOptions
  u.make_request = CepikUtilities::MakeRequest
  u.make_response = CepikUtilities::MakeResponse
  u.make_result = CepikUtilities::MakeResult
  u.make_point = CepikUtilities::MakePoint
  u.make_spec = CepikUtilities::MakeSpec
  u.make_url = CepikUtilities::MakeUrl
  u.param = CepikUtilities::Param
  u.prepare_auth = CepikUtilities::PrepareAuth
  u.prepare_body = CepikUtilities::PrepareBody
  u.prepare_headers = CepikUtilities::PrepareHeaders
  u.prepare_method = CepikUtilities::PrepareMethod
  u.prepare_params = CepikUtilities::PrepareParams
  u.prepare_path = CepikUtilities::PreparePath
  u.prepare_query = CepikUtilities::PrepareQuery
  u.result_basic = CepikUtilities::ResultBasic
  u.result_body = CepikUtilities::ResultBody
  u.result_headers = CepikUtilities::ResultHeaders
  u.transform_request = CepikUtilities::TransformRequest
  u.transform_response = CepikUtilities::TransformResponse
}
