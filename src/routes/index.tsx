// libs
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

// components
import { gluestackUIConfig } from "../../config/gluestack-ui.config";
import { Box } from "@gluestack-ui/themed";

// routes
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const theme = DefaultTheme

  theme.colors.background = gluestackUIConfig.tokens.colors.gray700

  return (
    <Box flex={1} bg={'$gray700'}>
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}