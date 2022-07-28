import React from 'react';
import "./styles/styles.css"
import '@rainbow-me/rainbowkit/styles.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import '@rainbow-me/rainbowkit/styles.css';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
  useAccount,
} from 'wagmi';


const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum, chain.kovan],
  [
    alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'DeFinancer',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export default function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode theme={darkTheme()} chains={chains}>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

