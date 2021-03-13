import React from 'react'
import logo from './logo.svg'
import './App.css'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Symfoni } from "./hardhat/SymfoniContext"
import { Greeter } from './components/Greeter'
import { GreeterLabel } from './components/GreeterLabel'
import { AddressLabel } from './components/AddressLabel'
import { TokenBalanceCheck } from './components/TokenBalanceCheck'
import { Token } from './components/Token'
import { Section, Container, Hero, Heading } from 'react-bulma-components'

function App() {

  return (
    <Container className="bordered">
      <Hero color="primary">
        <Hero.Body>
          <Container>
            <Heading>
              cETH Wallet
            </Heading>
          </Container>
        </Hero.Body>
      </Hero>

      <Symfoni autoInit={true} >
        <Section>
          <img className="logo_img" src="/cheapeth-logo.png" />

          <Heading size={4}>Receiving Address:</Heading>
          <AddressLabel />
          <div className="s30" />

          <Heading size={4}>TokenBalanceCheck:</Heading>
          <TokenBalanceCheck />
          <div className="s30" />

          <Heading size={4}>Token:</Heading>
          <Token />

          <div className="s30" />
        </Section>
      </Symfoni>
    </Container>
  )
}

export default App
