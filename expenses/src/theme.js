import { createSystem, defaultConfig } from "@chakra-ui/react"

export const theme = createSystem(defaultConfig, {
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
})