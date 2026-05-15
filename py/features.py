# Cepik SDK feature factory

from feature.base_feature import CepikBaseFeature
from feature.test_feature import CepikTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CepikBaseFeature(),
        "test": lambda: CepikTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
