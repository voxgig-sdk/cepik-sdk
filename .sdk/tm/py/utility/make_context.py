# Cepik SDK utility: make_context

from core.context import CepikContext


def make_context_util(ctxmap, basectx):
    return CepikContext(ctxmap, basectx)
