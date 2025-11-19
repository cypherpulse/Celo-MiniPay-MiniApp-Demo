// Type declarations for window.ethereum and MiniPay
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      isMiniPay?: boolean;
      isMetaMask?: boolean;
      [key: string]: unknown;
    };
  }
}

export {};
