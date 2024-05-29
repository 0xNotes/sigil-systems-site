import { ConnectButton } from '@rainbow-me/rainbowkit';
import React, { useState } from 'react';

export default function FancyButton() {

    const [clicked, setClicked] = useState(false);

    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
            }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted;
                const connected = ready && account && chain;

                const handleConnectClick = () => {
                    setClicked(!clicked);
                    openConnectModal();
                };

                const handleChainClick = () => {
                    setClicked(!clicked);
                    openChainModal();
                };

                const handleAccountClick = () => {
                    setClicked(!clicked);
                    openAccountModal();
                };

                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <button className={`fancy-button ${clicked ? 'fancy-button-clicked' : ''}`} onClick={handleConnectClick} type="button">
                                        Connect Wallet
                                    </button>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <button className={`fancy-button ${clicked ? 'fancy-button-clicked' : ''}`} onClick={handleChainClick} type="button">
                                        Wrong network
                                    </button>
                                );
                            }
                            return (
                                <div style={{ display: 'flex', gap: 12 }}>
                                    <button
                                        onClick={handleChainClick}
                                        style={{ display: 'flex', alignItems: 'center' }}
                                        type="button"
                                    >
                                        {/* Chain icon and name */}
                                    </button>
                                    <button onClick={handleAccountClick} type="button">
                                        {/* Account display */}
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};
