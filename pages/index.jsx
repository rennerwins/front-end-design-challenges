import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Title from '../src/components/Title/Title'

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

const Container = styled.div`
	min-height: 100vh;
`

const Home = () => {
	return (
		<React.Fragment>
			<Title title='Home' />
			<GlobalStyle />
			<Container></Container>
		</React.Fragment>
	)
}

export default Home
