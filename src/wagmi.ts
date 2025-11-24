import { http, createConfig } from 'wagmi';
import { celo, celoSepolia } from 'wagmi/chains';
import { farcasterMiniApp as miniAppConnector } from '@farcaster/miniapp-wagmi-connector';

export const config = createConfig({
  chains: [celo, celoSepolia],
  transports: {
    [celo.id]: http(),
    [celoSepolia.id]: http(),
  },
  connectors: [miniAppConnector()],
});