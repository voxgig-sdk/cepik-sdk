# Cepik SDK exists test

require "minitest/autorun"
require_relative "../Cepik_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CepikSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
