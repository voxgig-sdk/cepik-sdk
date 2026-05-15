package voxgigcepiksdk

import (
	"github.com/voxgig-sdk/cepik-sdk/core"
	"github.com/voxgig-sdk/cepik-sdk/entity"
	"github.com/voxgig-sdk/cepik-sdk/feature"
	_ "github.com/voxgig-sdk/cepik-sdk/utility"
)

// Type aliases preserve external API.
type CepikSDK = core.CepikSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CepikEntity = core.CepikEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CepikError = core.CepikError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewDrivingLicenseEntityFunc = func(client *core.CepikSDK, entopts map[string]any) core.CepikEntity {
		return entity.NewDrivingLicenseEntity(client, entopts)
	}
	core.NewPermissionEntityFunc = func(client *core.CepikSDK, entopts map[string]any) core.CepikEntity {
		return entity.NewPermissionEntity(client, entopts)
	}
	core.NewStatisticEntityFunc = func(client *core.CepikSDK, entopts map[string]any) core.CepikEntity {
		return entity.NewStatisticEntity(client, entopts)
	}
	core.NewVehicleEntityFunc = func(client *core.CepikSDK, entopts map[string]any) core.CepikEntity {
		return entity.NewVehicleEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCepikSDK = core.NewCepikSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
