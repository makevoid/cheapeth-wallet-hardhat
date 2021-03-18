import React from 'react'
import logo from './logo.svg'
import './App.css'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Symfoni } from "./hardhat/SymfoniContext"
import { Greeter } from './components/Greeter'
import { GreeterLabel } from './components/GreeterLabel'
import { AddressLabel } from './components/AddressLabel'
import { BalanceCheck } from './components/BalanceCheck'
import { ETHSend } from './components/ETHSend'
import { TokenBalanceCheck } from './components/TokenBalanceCheck'
import { TokenSend } from './components/TokenSend'
import { Section, Container, Hero, Heading } from 'react-bulma-components'


function App() {

  return (
    <Container className="bordered">
      <Hero color="primary">
        <Hero.Body>
          <Container>
            <Heading>
              cTH Wallet
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

          <Heading size={3}>cTH:</Heading>

          <Heading size={4}>BalanceCheck:</Heading>
          <BalanceCheck />
          <div className="s30" />

          <ETHSend />

          <div className="s30" />
          <div className="s30" />
        </Section>
      </Symfoni>
    </Container>
  )
}

export default App
