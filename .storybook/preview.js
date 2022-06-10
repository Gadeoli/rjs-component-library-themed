import React from "react";
import App4Test from "../src/components/Test/App4Test";
// import GlobalStyle from "../src/components/GlobalStyle"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <App4Test>
      {/* Cant use global style in sb => generate a not found body error */}
      {/* <GlobalStyle />  */}
      <Story />
    </App4Test>
  )
]