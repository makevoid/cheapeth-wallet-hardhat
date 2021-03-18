import React, { useContext, useEffect, useState } from 'react'
import { SymfoniContext } from "./../hardhat/SymfoniContext"
import { Button, Columns, Column } from 'react-bulma-components'
import Web3 from "web3"

interface Props { }

export const BalanceCheck: React.FC<Props> = () => {
  const context = useContext(SymfoniContext)
  const [addressBalance, setAddressBalance] = useState("")
  useEffect(() => {
    const doAsync = async () => {
      // TODO: ...
    }
    doAsync()
  }, [context])

  const checkBalance = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const { web3 } = window
    const web3Eth = new Web3(web3.currentProvider)
    const { eth } = web3Eth
    eth.getAccounts().then((accounts) => {
      const address = accounts[0]
      console.log("address:", address)
      eth.getBalance(address).then((balance) => {
        console.log("balance:", balance)
        setAddressBalance(balance)
      })
    })
  }

  return (
    <div>
      <div className="s20"></div>
      <p>check balance:</p>
      <Columns>
        <Columns.Column size={3}>
          <input className="input" />
        </Columns.Column>
        <Columns.Column size={1}>
          <Button color="primary" onClick={checkBalance}>
            Check
          </Button>
        </Columns.Column>
      </Columns>
      <div className="s20"></div>

      <p>addressBalance: {addressBalance}</p>
    </div>
  )
}
