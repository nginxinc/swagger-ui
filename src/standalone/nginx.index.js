import SwaggerUI from "core"
import NginxLayout from "./nginx.layout"
import ConfigsPlugin from "corePlugins/configs"

// the Nginx preset

export default [
  ConfigsPlugin,
  () => {
    return {
      components: { NginxLayout }
    }
  },
  SwaggerUI
]
