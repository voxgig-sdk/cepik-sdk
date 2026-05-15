# Cepik SDK utility: feature_add
module CepikUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
