# Cepik SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module CepikFeatures
  def self.make_feature(name)
    case name
    when "base"
      CepikBaseFeature.new
    when "ratelimit"
      CepikRatelimitFeature.new
    when "retry"
      CepikRetryFeature.new
    when "test"
      CepikTestFeature.new
    when "timeout"
      CepikTimeoutFeature.new
    else
      CepikBaseFeature.new
    end
  end
end
