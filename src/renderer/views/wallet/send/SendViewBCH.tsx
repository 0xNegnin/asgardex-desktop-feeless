import React, { useMemo } from 'react'

import * as RD from '@devexperts/remote-data-ts'
import { BCHChain } from '@xchainjs/xchain-bitcoincash'
import { Spin } from 'antd'
import * as FP from 'fp-ts/lib/function'
import * as O from 'fp-ts/Option'
import { useObservableState } from 'observable-hooks'

import { SendFormBCH } from '../../../components/wallet/txs/send'
import { useBitcoinCashContext } from '../../../contexts/BitcoinCashContext'
import { useChainContext } from '../../../contexts/ChainContext'
import { useMidgardContext } from '../../../contexts/MidgardContext'
import { useThorchainQueryContext } from '../../../contexts/ThorchainQueryContext'
import { useWalletContext } from '../../../contexts/WalletContext'
import { getWalletBalanceByAddress } from '../../../helpers/walletHelper'
import { useNetwork } from '../../../hooks/useNetwork'
import { useOpenExplorerTxUrl } from '../../../hooks/useOpenExplorerTxUrl'
import { useValidateAddress } from '../../../hooks/useValidateAddress'
import { FeesWithRatesLD } from '../../../services/bitcoincash/types'
import { WalletBalances } from '../../../services/clients'
import { DEFAULT_BALANCES_FILTER, INITIAL_BALANCES_STATE } from '../../../services/wallet/const'
import { SelectedWalletAsset, WalletBalance } from '../../../services/wallet/types'
import * as Styled from '../Interact/InteractView.styles'

type Props = {
  asset: SelectedWalletAsset
  emptyBalance: WalletBalance
}
export const SendViewBCH: React.FC<Props> = (props): JSX.Element => {
  const { asset, emptyBalance } = props

  const { network } = useNetwork()

  const {
    balancesState$,
    keystoreService: { validatePassword$ }
  } = useWalletContext()

  const [{ balances: oBalances }] = useObservableState(
    () => balancesState$(DEFAULT_BALANCES_FILTER),
    INITIAL_BALANCES_STATE
  )
  const {
    service: {
      pools: { poolsState$ }
    }
  } = useMidgardContext()
  const poolsRD = useObservableState(poolsState$, RD.pending)
  const poolDetails = RD.toNullable(poolsRD)?.poolDetails ?? []

  const { openExplorerTxUrl, getExplorerTxUrl } = useOpenExplorerTxUrl(O.some(BCHChain))

  const oWalletBalance = useMemo(
    () =>
      FP.pipe(
        oBalances,
        O.chain((balances) => getWalletBalanceByAddress(balances, asset.walletAddress))
      ),
    [asset.walletAddress, oBalances]
  )
  const { transfer$ } = useChainContext()
  const { thorchainQuery } = useThorchainQueryContext()

  const { feesWithRates$, reloadFeesWithRates } = useBitcoinCashContext()

  const feesWithRatesLD: FeesWithRatesLD = useMemo(() => feesWithRates$(), [feesWithRates$])
  const feesWithRatesRD = useObservableState(feesWithRatesLD, RD.initial)
  const { validateAddress } = useValidateAddress(BCHChain)

  return FP.pipe(
    oWalletBalance,
    O.fold(
      () => (
        <Spin>
          <Styled.Container>
            <SendFormBCH
              asset={asset}
              balances={FP.pipe(
                oBalances,
                O.getOrElse<WalletBalances>(() => [])
              )}
              balance={emptyBalance}
              transfer$={transfer$}
              openExplorerTxUrl={openExplorerTxUrl}
              getExplorerTxUrl={getExplorerTxUrl}
              addressValidation={validateAddress}
              feesWithRates={feesWithRatesRD}
              reloadFeesHandler={reloadFeesWithRates}
              validatePassword$={validatePassword$}
              thorchainQuery={thorchainQuery}
              network={network}
              poolDetails={poolDetails}
            />
          </Styled.Container>
        </Spin>
      ),
      (walletBalance) => (
        <Styled.Container>
          <SendFormBCH
            asset={asset}
            balances={FP.pipe(
              oBalances,
              O.getOrElse<WalletBalances>(() => [])
            )}
            balance={walletBalance}
            transfer$={transfer$}
            openExplorerTxUrl={openExplorerTxUrl}
            getExplorerTxUrl={getExplorerTxUrl}
            addressValidation={validateAddress}
            feesWithRates={feesWithRatesRD}
            reloadFeesHandler={reloadFeesWithRates}
            validatePassword$={validatePassword$}
            thorchainQuery={thorchainQuery}
            network={network}
            poolDetails={poolDetails}
          />
        </Styled.Container>
      )
    )
  )
}
