import { MenuEntry } from 'hertz-uikit'
import UrlConfig from './UrlConfig'

const chainId: string = process.env.REACT_APP_CHAIN_ID || '80001'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: UrlConfig[chainId].home
  },
  {
    label: 'Asset Management',
    icon: 'VaultsIcon',
    href: UrlConfig[chainId].home
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: UrlConfig[chainId].farms
  },

  {
    label: 'IDO',
    icon: 'IfoIcon',
    href: UrlConfig[chainId].ido,
  },
  {
    label: 'Vote',
    icon: 'GroupsIcon',
    href: UrlConfig[chainId].vote
  },
  {
    label: 'Lucky Draw',
    icon: 'TicketIcon',
    href: UrlConfig[chainId].lottery,
  },
  // {
  //   label: 'AirDrop',
  //   icon: 'VaultsIcon',
  //   href: UrlConfig[chainId].airdrop,
  // },
  // // {
  // //   label: 'Lottery',
  // //   icon: 'TicketIcon',
  // //   href: 'https://www.goosedefi.com/lottery'
  // // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/goose-finance',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/goose-finance/',
  //     },
  //     {
  //       label: 'AstroTools',
  //       href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
  //     },
  //   ]
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/HertzFinance',
      },
      {
        label: 'Docs',
        href: '#',
      }
    ],
  },
  //     {
  //       label: "Blog",
  //       href: "https://goosefinance.medium.com/",
  //     },
  //   ],
  // },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
