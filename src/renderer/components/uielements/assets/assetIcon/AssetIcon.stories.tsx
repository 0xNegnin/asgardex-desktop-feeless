import { Meta, StoryFn } from '@storybook/react'
import { Network } from '@xchainjs/xchain-client'

import { AssetBCH, AssetBSC, AssetBTC, AssetETH, AssetRuneNative } from '../../../../../shared/utils/asset'
import * as AT from '../../../../storybook/argTypes'
import { AssetIcon as Component, ComponentProps } from './AssetIcon'

const Template: StoryFn<ComponentProps> = (args) => <Component {...args} />
export const Default = Template.bind({})

const meta: Meta<typeof Component> = {
  component: Component,
  title: 'Components/Assets/AssetIcon',
  argTypes: {
    network: AT.network,
    size: {
      name: 'size',
      control: {
        type: 'select',
        options: ['small', 'normal', 'large', 'big']
      }
    },
    asset: {
      name: 'asset',
      options: ['RUNE', 'BTC', 'BSC', 'ETH', 'BCH'],
      mapping: {
        RUNE: AssetRuneNative,
        BTC: AssetBTC,
        BSC: AssetBSC,
        BCH: AssetBCH,
        ETH: AssetETH
      }
    }
  },
  args: { network: Network.Mainnet, asset: AssetBTC, size: 'normal' }
}

export default meta
