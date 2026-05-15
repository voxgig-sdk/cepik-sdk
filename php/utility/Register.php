<?php
declare(strict_types=1);

// Cepik SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

CepikUtility::setRegistrar(function (CepikUtility $u): void {
    $u->clean = [CepikClean::class, 'call'];
    $u->done = [CepikDone::class, 'call'];
    $u->make_error = [CepikMakeError::class, 'call'];
    $u->feature_add = [CepikFeatureAdd::class, 'call'];
    $u->feature_hook = [CepikFeatureHook::class, 'call'];
    $u->feature_init = [CepikFeatureInit::class, 'call'];
    $u->fetcher = [CepikFetcher::class, 'call'];
    $u->make_fetch_def = [CepikMakeFetchDef::class, 'call'];
    $u->make_context = [CepikMakeContext::class, 'call'];
    $u->make_options = [CepikMakeOptions::class, 'call'];
    $u->make_request = [CepikMakeRequest::class, 'call'];
    $u->make_response = [CepikMakeResponse::class, 'call'];
    $u->make_result = [CepikMakeResult::class, 'call'];
    $u->make_point = [CepikMakePoint::class, 'call'];
    $u->make_spec = [CepikMakeSpec::class, 'call'];
    $u->make_url = [CepikMakeUrl::class, 'call'];
    $u->param = [CepikParam::class, 'call'];
    $u->prepare_auth = [CepikPrepareAuth::class, 'call'];
    $u->prepare_body = [CepikPrepareBody::class, 'call'];
    $u->prepare_headers = [CepikPrepareHeaders::class, 'call'];
    $u->prepare_method = [CepikPrepareMethod::class, 'call'];
    $u->prepare_params = [CepikPrepareParams::class, 'call'];
    $u->prepare_path = [CepikPreparePath::class, 'call'];
    $u->prepare_query = [CepikPrepareQuery::class, 'call'];
    $u->result_basic = [CepikResultBasic::class, 'call'];
    $u->result_body = [CepikResultBody::class, 'call'];
    $u->result_headers = [CepikResultHeaders::class, 'call'];
    $u->transform_request = [CepikTransformRequest::class, 'call'];
    $u->transform_response = [CepikTransformResponse::class, 'call'];
});
