# Cepik SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CepikFeatures
  def self.make_feature(name)
    case name
    when "base"
      CepikBaseFeature.new
    when "test"
      CepikTestFeature.new
    else
      CepikBaseFeature.new
    end
  end
end
