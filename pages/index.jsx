import React from 'react'
import Title from '../src/components/Title/Title'
import { Container, GlobalStyle } from './index.style'

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
