# ProjectName SDK exists test

import pytest
from cepik_sdk import CepikSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CepikSDK.test(None, None)
        assert testsdk is not None
