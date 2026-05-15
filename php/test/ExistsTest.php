<?php
declare(strict_types=1);

// Cepik SDK exists test

require_once __DIR__ . '/../cepik_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CepikSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
