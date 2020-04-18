import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`

const LayoutContainer = styled.div`
	min-height: 100vh;
`

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<LayoutContainer>{children}</LayoutContainer>
		</React.Fragment>
	)
}

export default Layout
