import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Button, ButtonProps, ConnectorNames, useWalletModal } from 'hertz-uikit'
import { injected, walletconnect } from 'connectors'
import useI18n from 'hooks/useI18n'

const UnlockButton: React.FC<ButtonProps> = props => {
  const TranslateString = useI18n()
  const { account, activate, deactivate, error } = useWeb3React()


  const handleLogin = (connectorId: ConnectorNames) => {
    if (connectorId === 'walletconnect') {
      return activate(walletconnect)
    }
    return activate(injected)
  }

  const { onPresentConnectModal, onPresentWrongNetworkModal } = useWalletModal(handleLogin, deactivate, account as string)

  let comp;

  if (error) {
    comp = (
      <Button onClick={onPresentWrongNetworkModal} {...props} variant="danger">
        Wrong Network
      </Button>
    )
  } else {
    comp = <Button onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Unlock Wallet')}
    </Button>
  }

  return (
    <div>{comp}</div>
  )
}

export default UnlockButton
