<?php
declare(strict_types=1);

// Cepik SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CepikMakeContext
{
    public static function call(array $ctxmap, ?CepikContext $basectx): CepikContext
    {
        return new CepikContext($ctxmap, $basectx);
    }
}
