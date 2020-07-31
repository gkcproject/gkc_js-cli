// assume: node 8 or above
const ora = require("ora")
const parseArgs = require("minimist")

const {
  Gkc,
} = require("gkc_js")

const repoData = require("./solar.json")
const gkc = new Gkc("http://ZlNux8W33ZUIZ1SP:9z1HhZ81oWdi0i4P@192.100.3.217:48803", repoData)
const myToken = gkc.contract("ERC20")

async function rawCall(method, params = []) {
  const result = await gkc.rawCall(method, params)

  console.log("rawCall:", method, result)
}

async function getInfo() {
  const result = await gkc.getInfo()

  console.log("getinfo", result)
}

async function name() {
  const result = await myToken.call("name")

  // supply is a BigNumber instance (see: bn.js)
  const name = result.outputs[0]

  console.log("name", name)
}

async function owners() {
  const result = await myToken.call("owner")

  // supply is a BigNumber instance (see: bn.js)
  const owner = result.outputs[0]

  console.log("owner", owner)
}

async function newOwner() {
  const result = await myToken.call("newOwner")

  // supply is a BigNumber instance (see: bn.js)
  const newOwner = result.outputs[0]

  console.log("newOwner", newOwner)
}

async function totalSupply() {
  const result = await myToken.call("totalSupply")

  // supply is a BigNumber instance (see: bn.js)
  const supply = result.outputs[0]

  console.log("supply", supply.toNumber())
}

async function balanceOf(owner) {
  const res = await myToken.call("balanceOf", [owner])

  // balance is a BigNumber instance (see: bn.js)
  const balance = res.outputs[0]

  console.log(`balance:`, balance.toNumber())
}

async function transfer(fromAddr, toAddr, amount) {
  const tx = await myToken.send("transfer", [toAddr, amount], {
    senderAddress: fromAddr,
  })

  console.log("transfer tx:", tx.txid)
  console.log(tx)

  // or: await tx.confirm(1)
  const confirmation = tx.confirm(1)
  ora.promise(confirmation, "confirm transfer")
  await confirmation
}

async function streamEvents() {
  console.log("Subscribed to contract events")
  console.log("Ctrl-C to terminate events subscription")

  myToken.onLog((entry) => {
    console.log(entry)
  }, { minconf: 1 })
}

async function getLogs(fromBlock, toBlock) {
  const logs = await myToken.logs({
    fromBlock,
    toBlock,
    minconf: 1,
  })

  console.log(JSON.stringify(logs, null, 2))
}

async function emitter(fromBlock, toBlock) {
  let emitter = myToken.logEmitter({ minconf: 1 })
  emitter.on("Transfer", (event) => {
    console.log("transfer")
  })
}

async function receipt(txid) {
  const receipt = await myToken.receipt(txid)

  console.log(JSON.stringify(receipt, null, 2))
}

async function main() {
  const argv = parseArgs(process.argv.slice(2))

  const cmd = argv._[0]

  if (process.env.DEBUG) {
    console.log("argv", argv)
    console.log("cmd", cmd)
  }

  switch (cmd) {
    case "getInfo":
      await getInfo()
      break
    case "supply":
    case "totalSupply":
      await totalSupply()
      break
    case "name":
      await name()
      break
    case "owner":
      await owners()
      break
    case "newOwner":
      await newOwner()
      break
    case "balance":
      const owner = argv._[1]
      if (!owner) {
        throw new Error("please specify an address")
      }
      await balanceOf(owner)
      break
    case "transfer":
      const fromAddr = argv._[1]
      const toAddr = argv._[2]
      const amount = argv._[3]

      await transfer(fromAddr, toAddr, amount)
      break
    case "logs":
      const fromBlock = parseInt(argv._[1]) || 0
      const toBlock = parseInt(argv._[2]) || "latest"

      await getLogs(fromBlock, toBlock)
      break
    case "events":
      await streamEvents() // logEvents will never return
      break
    case "emitter":
      await emitter() // logEvents will never return
      break
    case "receipt":
      const txid = argv._[1]
      await receipt(txid) // logEvents will never return
      break
    default:
      const params1 = argv._.slice(1)
      await rawCall(cmd, params1)
  }
}

main().catch(err => {
  console.log("error", err)
})