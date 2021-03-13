import React, { useContext, useEffect, useState } from 'react'
import { SymfoniContext } from "./../hardhat/SymfoniContext"
import Web3 from "web3"
import detectEthereumProvider from '@metamask/detect-provider'

interface Props { }

export const AddressLabel: React.FC<Props> = () => {
  const contractContext = useContext(SymfoniContext)
  const [address, setAddress] = useState("")
  useEffect(() => {
    const { web3 } = window
    const web3Eth = new Web3(web3.currentProvider)
    const { eth } = web3Eth
    eth.getAccounts().then((accounts) => {
      const address = accounts[0]
      console.log("address:", address)
      setAddress(address)
    })
  }, [contractContext])

  return (
    <div>
      <p>{address}</p>
    </div>
  )
}
