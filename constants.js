const tokens = [
    {
        "name" : "Ether",
        "symbol" : 'ETH',
        "address" : "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "decimals" : 18
    },
    {
        "name": "Tether",
        "symbol": "USDT",
        "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "decimals": 6
    },
    {
        "name": "USD Coin",
        "symbol": "USDC",
        "address": "0xA0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "decimals": 6
    },
    {
        "name": "Binance USD",
        "symbol": "BUSD",
        "address": "0x4fabb145d64652a948d72533023f6e7c2e6e4d8c",
        "decimals": 18
    },
    {
        "name": "Uniswap",
        "symbol": "UNI",
        "address": "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        "decimals": 18
    },
    {
        "name": "Chainlink",
        "symbol": "LINK",
        "address": "0x514910771AF9Ca656af840dff83E8264EcF986CA",
        "decimals": 18
    },
    {
        "name": "Dai",
        "symbol": "DAI",
        "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "decimals": 18
    },
    {
        "name": "Wrapped Bitcoin",
        "symbol": "WBTC",
        "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "decimals": 8
    },
    {
        "name": "Shiba Inu",
        "symbol": "SHIB",
        "address": "0x95aD61b0a150d79219dCF64E1E43F4c4d2f2A2f1",
        "decimals": 18
    },
    {
        "name": "SushiSwap",
        "symbol": "SUSHI",
        "address": "0x6b35950687f4677a84e172a6c231e1d4f7a3c1b2",
        "decimals": 18
    },
    {
        "name": "Aave",
        "symbol": "AAVE",
        "address": "0x7c5f0d4CFE9c2b673e6291F0a8b8E8B438F8c8A7",
        "decimals": 18
    },
    {
        "name": "Compound",
        "symbol": "COMP",
        "address": "0xc00e94Cb662C3520282E6f5717214004A7f26888",
        "decimals": 18
    },
    {
        "name": "Yearn Finance",
        "symbol": "YFI",
        "address": "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
        "decimals": 18
    },
    {
        "name": "PancakeSwap",
        "symbol": "CAKE",
        "address": "0x0E09Fabb73BD3ade0a17ECC321fD13a19e81cE82",
        "decimals": 18
    },
    {
        "name": "The Graph",
        "symbol": "GRT",
        "address": "0x0a8a46F6b75e658fC2B83B9C7D7C6d742F67F0dF",
        "decimals": 18
    },
    {
        "name": "1inch",
        "symbol": "1INCH",
        "address": "0x111111111117dC0aa78b770fA6A738034120C302",
        "decimals": 18
    },
    {
        "name": "Basic Attention Token",
        "symbol": "BAT",
        "address": "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
        "decimals": 18
    },
    {
        "name": "Enjin Coin",
        "symbol": "ENJ",
        "address": "0xF629cbd94c39WfF1F605B1d9B63B9684C8B4d08",
        "decimals": 18
    },
    {
        "name": "ZRX",
        "symbol": "0x",
        "address": "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
        "decimals": 18
    },
    {
        "name": "Ren",
        "symbol": "REN",
        "address": "0x408e41876cCCDC0F92D8A9c5eB7b8cF3F6f5Ff34",
        "decimals": 18
    },
    {
        "name": "Kyber Network",
        "symbol": "KNC",
        "address": "0xdd974d5c2e2928de7f6c7e17d0b9d0f0b6e8b441",
        "decimals": 18
    },
    {
        "name": "Bancor",
        "symbol": "BNT",
        "address": "0x1f5731D6bC611f6dB1dD0150F97F0e1b2e4C6c59",
        "decimals": 18
    },
    {
        "name": "Synthetix Network Token",
        "symbol": "SNX",
        "address": "0xC011a73e14B45fF2D8e1D8dE8b7A19C8D7b7F2b5",
        "decimals": 18
    },
    {
        "name": "Celo Dollar",
        "symbol": "cUSD",
        "address": "0x765de816845861e7c9c48aAD87748d0B0293D12C",
        "decimals": 18
    },
    {
        "name": "Celo Euro",
        "symbol": "cEUR",
        "address": "0x9c9eD0a62e586743f8d1700C7C14C48A1F1eB76f",
        "decimals": 18
    },
    {
        "name": "Audius",
        "symbol": "AUDIO",
        "address": "0x18B7eC30A3A4E4C0fE6eBf4c36dE4C8cF1E5D7dC",
        "decimals": 18
    },
    {
        "name": "Decentraland",
        "symbol": "MANA",
        "address": "0x4e07d2C64A6aF53A2e6E9F2C5F9F4d74D54c02A3",
        "decimals": 18
    },
    {
        "name": "Nervos Network",
        "symbol": "CKB",
        "address": "0x0cFCd5fD9A0f8F43FFBdbb81D9eB1c7D254Fc1e3",
        "decimals": 18
    },
    {
        "name": "Kava",
        "symbol": "KAVA",
        "address": "0x5B4A7864b2A748646b50F7F8D3D1A8D29D4F4C43",
        "decimals": 18
    },
    {
        "name": "OMG Network",
        "symbol": "OMG",
        "address": "0xd4a33860578De61DBAbE6D8B8b2b74c1d6D0f8a9",
        "decimals": 18
    },
    {
        "name": "Thorchain",
        "symbol": "RUNE",
        "address": "0xE9B104E4D7B4A43B833e7D21cBFC5cFFb78cdd50",
        "decimals": 18
    },
    {
        "name": "Ankr",
        "symbol": "ANKR",
        "address": "0x82903a05deD5e6D388F4B62DAe4303eF2D7d79C4",
        "decimals": 18
    },
    {
        "name": "Golem",
        "symbol": "GLM",
        "address": "0x9d7e52A61cA8F885CCEC08D9E1bB4B9437c0635F",
        "decimals": 18
    }
]
export default tokens
