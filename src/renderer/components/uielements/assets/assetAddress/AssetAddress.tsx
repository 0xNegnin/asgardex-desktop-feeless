import React from 'react'

import { Network } from '@xchainjs/xchain-client'
import { Address, AnyAsset } from '@xchainjs/xchain-util'

import { AssetIcon, Size } from '../assetIcon'
import * as Styled from './AssetAddress.styles'

export type Props = {
  asset: AnyAsset
  address: Address
  network: Network
  size?: Size
  className?: string
  classNameAddress?: string
}

export const AssetAddress: React.FC<Props> = (props): JSX.Element => {
  const { asset, address, network, size = 'normal', className = '', classNameAddress = '' } = props

  return (
    <Styled.Wrapper className={className}>
      <AssetIcon asset={asset} size={size} network={network} />
      <Styled.AddressWrapper>
        <Styled.AddressEllipsis
          className={`${classNameAddress}`}
          address={address}
          iconSize={size}
          chain={asset.chain}
          network={network}
          enableCopy
        />
      </Styled.AddressWrapper>
    </Styled.Wrapper>
  )
}
