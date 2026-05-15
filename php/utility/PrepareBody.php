<?php
declare(strict_types=1);

// Cepik SDK utility: prepare_body

class CepikPrepareBody
{
    public static function call(CepikContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
