<?php
declare(strict_types=1);

// Cepik SDK utility: result_body

class CepikResultBody
{
    public static function call(CepikContext $ctx): ?CepikResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
