<?php
declare(strict_types=1);

// Cepik SDK utility: feature_add

class CepikFeatureAdd
{
    public static function call(CepikContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
