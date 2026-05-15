<?php
declare(strict_types=1);

// Cepik SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class CepikFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new CepikBaseFeature();
            case "test":
                return new CepikTestFeature();
            default:
                return new CepikBaseFeature();
        }
    }
}
