# A NodeJS CLI Tool For ERC20 Token

Install dependencies

```
yarn install
```

## Check Balance

```
node index.js balance c99042ffb7db7ddda4aab04cce545483e32163a
```

output:

```
balance: 1000
```

## Transfer Tokens

Generate a new address:

```
node index.js getnewaddress
rawCall: getnewaddress GRA5Edjgr5DqwJfF76BaCWxGmgybb9nXFk

node index.js gethexaddress GRA5Edjgr5DqwJfF76BaCWxGmgybb9nXFk
rawCall: gethexaddress 5037bac73097bbe699e24a9fa194c0d279d0150d
```

Send 100 tokens from `qdgznat81MfTHZUrQrLZDZteAx212X4Wjj` to the new address:

```
node index.js transfer \
 GRA5Edjgr5DqwJfF76BaCWxGmgybb9nXFk \
 5037bac73097bbe699e24a9fa194c0d279d0150d \
 100
```

> Note the from address, for now, has to be a base58 address.

The output:

```
transfer tx: 5cbf53506929c8de009ffd4b19a65446d07b81e1cfdd05a65d74c23708a5981b
{ amount: 0,
  fee: -0.08024069,
  confirmations: 0,
  bcconfirmations: 0,
  txid:
   '5cbf53506929c8de009ffd4b19a65446d07b81e1cfdd05a65d74c23708a5981b',
  walletconflicts: [],
  time: 1596100240,
  timereceived: 1596100240,
  details:
   [ { account: '',
       address: 'GRA5Edjgr5DqwJfF76BaCWxGmgybb9nXFk',
       category: 'send',
       amount: -1.75927737,
       vout: 0,
       fee: -0.08024069 },
     { account: '',
       category: 'send',
       amount: 0,
       vout: 1,
       fee: -0.08024069 },
     { account: '',
       address: 'GRA5Edjgr5DqwJfF76BaCWxGmgybb9nXFk',
       category: 'receive',
       amount: 1.75927737,
       vout: 0 } ],
  hex:
   '01000000015b4a25b250c83b84a938bd4afc814b67ff3e8a717dce3c8a85135815774ca927010000006a473044022018ef1de57f8d2a04de4fd31694904a2806
6a7c99f5ef9a02131dc1ade5d8a9dc02205a523e75e8fb0fedb83f9a100253ef16fd7fbe12412ae3aeb9c66de88f4b3d51012103eca1c7591f46b7bbc3a1c38e88b3
1c0207166a63e758e233e13476f761d02afdffffffff02b9717c0a000000001976a9145037bac73097bbe699e24a9fa194c0d279d0150d88ac000000000000000000
cc010403400d03012844a9059cbb0000000000000000000000005037bac73097bbe699e24a9fa194c0d279d0150d0000000000000000000000000000000000000000
0000000000000000000000641428a855f4153b072ffd744725da1b65248605633821039bdae1e16e624206bc1878b353649ac195bd6b47b83d3fd6501f85b31ea751
0c4630440220433ba8714d46aecf5dfad206193bda458af8708a7dff5c16fe5fa2856b8b777e022055effc8067eafa7d389be787b28de3aa740025f770fbf5d1db3e
1f309f03dbfcc40000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  method: 'transfer',
  confirm: [Function: confirm] }
√ confirm transfer
```

## Get Contract Events

```
node index.js logs 227460

{
  "entries": [
    {
      "blockHash": "1fcf8fd16c152a2f9aa76dd8d47a24053ddd67dacb25bdda7ec7c48c502c373d",
      "blockNumber": 227461,
      "transactionHash": "b7f887556ddd881bddb61d89234552019b3a8b1ca113303c3a8b84f01ae6b565",
      "transactionIndex": 2,
      "from": "c99042ffb7db7ddda4aab04cce545483e32163a5",
      "to": "28a855f4153b072ffd744725da1b652486056338",
      "cumulativeGasUsed": 58385,
      "gasUsed": 58385,
      "contractAddress": "28a855f4153b072ffd744725da1b652486056338",
      "excepted": "0",
      "log": [
        {
          "address": "28a855f4153b072ffd744725da1b652486056338",
          "topics": [
            "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "000000000000000000000000c99042ffb7db7ddda4aab04cce545483e32163a5",
            "000000000000000000000000eba34612bcfcb40b25ba3d83a0e6299f9d932c3e"
          ],
          "data": "0000000000000000000000000000000000000000000000000000000005f5e100"
        }
      ],
      "event": {
        "_value": "5f5e100",
        "_from": "c99042ffb7db7ddda4aab04cce545483e32163a5",
        "_to": "eba34612bcfcb40b25ba3d83a0e6299f9d932c3e",
        "type": "Transfer"
      }
    },
    {
      "blockHash": "5d6ba5e381c1232d373af456c8016ddb5f872108515404c937e67fb1506b0066",
      "blockNumber": 227465,
      "transactionHash": "4f13c59ed2ac2b262193acfee2906a2d96fcfebc963e89d37308d722a8745fee",
      "transactionIndex": 2,
      "from": "c99042ffb7db7ddda4aab04cce545483e32163a5",
      "to": "28a855f4153b072ffd744725da1b652486056338",
      "cumulativeGasUsed": 28449,
      "gasUsed": 28449,
      "contractAddress": "28a855f4153b072ffd744725da1b652486056338",
      "excepted": "0",
      "log": [
        {
          "address": "28a855f4153b072ffd744725da1b652486056338",
          "topics": [
            "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "000000000000000000000000c99042ffb7db7ddda4aab04cce545483e32163a5",
            "000000000000000000000000eba34612bcfcb40b25ba3d83a0e6299f9d932c3e"
          ],
          "data": "000000000000000000000000000000000000000000000000000000e8ceaf2f00"
        }
      ],
      "event": {
        "_value": "e8ceaf2f00",
        "_from": "c99042ffb7db7ddda4aab04cce545483e32163a5",
        "_to": "eba34612bcfcb40b25ba3d83a0e6299f9d932c3e",
        "type": "Transfer"
      }
    },
    {
      "blockHash": "2422ed6edf01bcf971ed5953892d2c3b5b6305ac5e0b46c622d20411c093a185",
      "blockNumber": 227523,
      "transactionHash": "e9b1c278ec6cb9090a027f8380cef035c91e11e18713070f63d1c9b7a653ef4f",
      "transactionIndex": 2,
      "from": "eba34612bcfcb40b25ba3d83a0e6299f9d932c3e",
      "to": "28a855f4153b072ffd744725da1b652486056338",
      "cumulativeGasUsed": 58321,
      "gasUsed": 58321,
      "contractAddress": "28a855f4153b072ffd744725da1b652486056338",
      "excepted": "0",
      "log": [
        {
          "address": "28a855f4153b072ffd744725da1b652486056338",
          "topics": [
            "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "000000000000000000000000eba34612bcfcb40b25ba3d83a0e6299f9d932c3e",
            "000000000000000000000000c99042ffb7db7ddda4aab04cce545483e32163a5"
          ],
          "data": "00000000000000000000000000000000000000000000000000000000000004d2"
        }
      ],
      "event": {
        "_value": "4d2",
        "_from": "eba34612bcfcb40b25ba3d83a0e6299f9d932c3e",
        "_to": "c99042ffb7db7ddda4aab04cce545483e32163a5",
        "type": "Transfer"
      }
    }
  ],
  "count": 3,
  "nextblock": 227524
}

```

## Stream Contract Events

```
node index.js events

Subscribed to contract events
Ctrl-C to terminate events subscription

{
      "blockHash": "5d6ba5e381c1232d373af456c8016ddb5f872108515404c937e67fb1506b0066",
      "blockNumber": 227465,
      "transactionHash": "4f13c59ed2ac2b262193acfee2906a2d96fcfebc963e89d37308d722a8745fee",
      "transactionIndex": 2,
      "from": "c99042ffb7db7ddda4aab04cce545483e32163a5",
      "to": "28a855f4153b072ffd744725da1b652486056338",
      "cumulativeGasUsed": 28449,
      "gasUsed": 28449,
      "contractAddress": "28a855f4153b072ffd744725da1b652486056338",
      "excepted": "0",
      "log": [
        {
          "address": "28a855f4153b072ffd744725da1b652486056338",
          "topics": [
            "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "000000000000000000000000c99042ffb7db7ddda4aab04cce545483e32163a5",
            "000000000000000000000000eba34612bcfcb40b25ba3d83a0e6299f9d932c3e"
          ],
          "data": "000000000000000000000000000000000000000000000000000000e8ceaf2f00"
        }
      ],
      "event": {
        "_value": "e8ceaf2f00",
        "_from": "c99042ffb7db7ddda4aab04cce545483e32163a5",
        "_to": "eba34612bcfcb40b25ba3d83a0e6299f9d932c3e",
        "type": "Transfer"
      }
    },
    {
      "blockHash": "2422ed6edf01bcf971ed5953892d2c3b5b6305ac5e0b46c622d20411c093a185",
      "blockNumber": 227523,
      "transactionHash": "e9b1c278ec6cb9090a027f8380cef035c91e11e18713070f63d1c9b7a653ef4f",
      "transactionIndex": 2,
      "from": "eba34612bcfcb40b25ba3d83a0e6299f9d932c3e",
      "to": "28a855f4153b072ffd744725da1b652486056338",
      "cumulativeGasUsed": 58321,
      "gasUsed": 58321,
      "contractAddress": "28a855f4153b072ffd744725da1b652486056338",
      "excepted": "0",
      "log": [
        {
          "address": "28a855f4153b072ffd744725da1b652486056338",
          "topics": [
            "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "000000000000000000000000eba34612bcfcb40b25ba3d83a0e6299f9d932c3e",
            "000000000000000000000000c99042ffb7db7ddda4aab04cce545483e32163a5"
          ],
          "data": "00000000000000000000000000000000000000000000000000000000000004d2"
        }
      ],
      "event": {
        "_value": "4d2",
        "_from": "eba34612bcfcb40b25ba3d83a0e6299f9d932c3e",
        "_to": "c99042ffb7db7ddda4aab04cce545483e32163a5",
        "type": "Transfer"
      }
    }
```
