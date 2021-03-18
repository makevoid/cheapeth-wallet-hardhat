# cheapeth-wallet

cheapETH sample wallet using hardhat


status: WIP


### Prepare

    cp hardhat.config.default.ts hardhat.config.ts

modify the default mnemonic with a test cTH mnemonic with a small amount of cTH to test transactions

### Install

on the main directory run:

    npm install

on the `frontend` directory run:

    npm install


### Run

on the main directory, run the backend app:

    npm run node

and then on the same directory, run the frontend:

    npm run frontend

a browser should open onto http://localhost:3000 and should show the Wallet UI

use Metamask to use the wallet functionality


@makevoid


---

### original readme

-----

# Get started

1. Clone the repo and cd into it `git clone https://github.com/symfoni/hardhat-react-boilerplate.git MyProject && cd MyProject`
2. Install deps with yarn `yarn` or npm `npm install`
3. Start hardhat `npx hardhat node --watch`

![](https://media.giphy.com/media/9l6z9MzXfHX9gKzbvU/giphy.gif)

```text
It runs up a Hardhat node, compile contracts, generates typescript interfaces, creates React context and instantiates your contract instances and factories with frontend provider.
```

4. Open up a new terminal
5. Enter the frontend directory: `cd frontend`
6. Install dependencies: `npm install`
7. Import seed phrase in Metamask. The default mnemonic currently used by hardhat is `test test test test test test test test test test test junk`
  1. Please note that you need to sign out from your current Metamask wallet to import a new one. **Instead of logging out**, you can use a new browser profile to do your Ethereum development:
  3. Click your profile icon in the top right corner of Chrome (right next to the hamburger menu icon)
  4. Click "Add"
  5. Give the profile a name and click "Add"
  6. In this new browser window, install Metamask and import the keyphrase above
8. Ensure Metamask RPC is set to `http://localhost:8545` and chainID `777`.
9. Start the React app: `npm start`

The frontend should open at http://localhost:3000/

Because of this default hardhat.config.ts it will first try to connect with an injected provider like Metamask (web3modal package does this).

If nothing found it will try to connect with your hardhat node. On localhost and hardhat nodes it will inject your mnemonic into the frontend so you have a "browser wallet" that can both call and send transactions. NB! Dont ever put a mnemonic with actual value here.

In hardhat.config.ts there is example on how to instruct your hardhat-network to use mnemonic or privatekey.

```ts
const config: HardhatUserConfig = {
  react: {
    providerPriority: ["web3modal", "hardhat"],
  },
};
```

Ensure you are useing RPC to http://localhost:8545.
