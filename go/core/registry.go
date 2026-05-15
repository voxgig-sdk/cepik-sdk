package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewDrivingLicenseEntityFunc func(client *CepikSDK, entopts map[string]any) CepikEntity

var NewPermissionEntityFunc func(client *CepikSDK, entopts map[string]any) CepikEntity

var NewStatisticEntityFunc func(client *CepikSDK, entopts map[string]any) CepikEntity

var NewVehicleEntityFunc func(client *CepikSDK, entopts map[string]any) CepikEntity

