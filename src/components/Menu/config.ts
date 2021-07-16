import { MenuEntry } from 'leek-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://cryptoleek-team.github.io/leekdao-mumbai-testnet/#/'
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
    href: 'https://cryptoleek-team.github.io/leekdao-mumbai-testnet/#/farms'
  },

  {
    label: 'IDO',
    icon: 'IfoIcon',
    href: 'https://cryptoleek-team.github.io/leekdao-mumbai-testnet/#/ido',
  },
  {
    label: 'Vote',
    icon: 'GroupsIcon',
    href: 'https://cryptoleek-team.github.io/leekdao-mumbai-testnet/#/vote'
  },
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
        href: 'https://github.com/cryptoleek-team',
      },
      {
        label: 'Docs',
        href: 'https://docs.leekdao.xyz/',
      },
      {
        label: 'CryptoLeek Website',
        href: 'https://www.bitcoinleek.com/',
      },
      {
        label: 'LeekDAO Website',
        href: '#',
      },
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
