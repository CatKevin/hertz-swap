import React, { useContext } from 'react'
import { Menu as UikitMenu, ConnectorNames } from 'leek-uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import BigNumber from 'bignumber.js'
import useTheme from 'hooks/useTheme'
import useGetPriceData from 'hooks/useGetPriceData'
import { injected, bsc, walletconnect } from 'connectors'
import links from './config'


const Menu: React.FC = props => {
  const { account, activate, deactivate, error } = useWeb3React()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = useGetPriceData()

  let leekPrice;

  if (cakePriceUsd === 0) {
    leekPrice = new BigNumber(0);
  } else {
    leekPrice = cakePriceUsd
  }

  return (
    <UikitMenu
      links={links}
      priceLink="#"
      account={account as string}
      login={(connectorId: ConnectorNames) => {
        if (connectorId === 'walletconnect') {
          return activate(walletconnect)
        }

        if (connectorId === 'bsc') {
          return activate(bsc)
        }

        return activate(injected)
      }}
      logout={deactivate}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={leekPrice}
      error={error}
      {...props}
    />
  )
}

export default Menu
