package = "voxgig-sdk-cepik"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/cepik-sdk.git"
}
description = {
  summary = "Cepik SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["cepik_sdk"] = "cepik_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
