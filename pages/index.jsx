import React from 'react'
import Link from 'next/link'
import Title from '../src/components/Title/Title'
import Layout from '../src/Layout/Layout'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
`

const MainText = styled.h1`
	text-align: center;
`

const Home = () => {
	return (
		<Layout>
			<Title title='Home' />
			<Container>
				<MainText>Front End Design Challenges</MainText>
				<Link href='/challenges'>
					<a>Challenges</a>
				</Link>
			</Container>
		</Layout>
	)
}

export default Home
