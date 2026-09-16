# Cepik SDK feature factory

from cepik_sdk.feature.base_feature import CepikBaseFeature
from cepik_sdk.feature.ratelimit_feature import CepikRatelimitFeature
from cepik_sdk.feature.retry_feature import CepikRetryFeature
from cepik_sdk.feature.test_feature import CepikTestFeature
from cepik_sdk.feature.timeout_feature import CepikTimeoutFeature


_FEATURES = {
    "base": lambda: CepikBaseFeature(),
    "ratelimit": lambda: CepikRatelimitFeature(),
    "retry": lambda: CepikRetryFeature(),
    "test": lambda: CepikTestFeature(),
    "timeout": lambda: CepikTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
