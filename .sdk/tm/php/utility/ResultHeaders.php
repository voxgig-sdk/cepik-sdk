<?php
declare(strict_types=1);

// Cepik SDK utility: result_headers

class CepikResultHeaders
{
    public static function call(CepikContext $ctx): ?CepikResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
