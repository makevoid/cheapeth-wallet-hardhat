import React, { useContext, useEffect, useState } from 'react'
import { SymfoniContext } from "./../hardhat/SymfoniContext"
import { Button, Columns, Column } from 'react-bulma-components'
import Web3 from "web3"

interface Props { }

export const ETHSend: React.FC<Props> = () => {
  const [message, setMessage] = useState("")
  const [recipientAddress, setRecipientAddress] = useState("")
  const [amount, setAmount] = useState(0)

  const amountEntered = (evt) =>
    setAmount(evt.target.value)

  const recipientAddressEntered = (evt) =>
    setRecipientAddress(evt.target.value)

  const cthTransfer = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    const { web3 } = window
    const web3Eth = new Web3(web3.currentProvider)
    const { eth } = web3Eth

    const oneGwei = 1000000000
    const oneWei = 1000000000000000000
    const amountWei = amount * oneWei

    eth.getAccounts().then((accounts) => {
      const address = accounts[0]
      const fromAddress = address
      const txObj = {
        from: fromAddress,
        to: recipientAddress,
        gas: 21000,
        gasPrice: oneGwei,
        amount: amountWei
      }
      eth.sendTransaction(txObj).then((receipt) => {
        console.log("txReceipt:", receipt)
      })
    })
  }

  return (
    <div>
      <div className="s20"></div>
      <p>send transaction (amount, recipient):</p>
      <Columns>
        <Columns.Column size={3}>
          <input className="input" placeholder="0.01234 ETH" onChange={amountEntered} />
        </Columns.Column>
        <Columns.Column size={3}>
          <input className="input" placeholder="0x1234567890abcdef123456789abcdef1" onChange={recipientAddressEntered} />
        </Columns.Column>
        <Columns.Column size={1}>
          <Button color="primary" onClick={cthTransfer}>
            Send
          </Button>
        </Columns.Column>
      </Columns>
      <div className="s20"></div>

    </div>
  )
}
