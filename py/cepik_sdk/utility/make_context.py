# Cepik SDK utility: make_context

from cepik_sdk.core.context import CepikContext


def make_context_util(ctxmap, basectx):
    return CepikContext(ctxmap, basectx)
