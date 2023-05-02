import Web3 from 'web3'
import { contract, addressMatthew, addressGabriel, network } from '../config.js'

export async function getAppDetail() {
    let web3 = new Web3(new Web3.providers.HttpProvider(network))
    return {
        network_name: await web3.eth.net.getId(),
    }
}

export async function test() {
    let web3 = new Web3(new Web3.providers.HttpProvider(network))
    const daoContract = new web3.eth.Contract(contract.abi, contract.address)

    const balance1 = await daoContract.methods.balanceOf(addressMatthew).call()
    console.log('DAO balance of addressMatthew:', balance1)
    const name = await daoContract.methods.name().call()
    console.log('DAO name:', name)
}

export function getSampleUsers() {
    let leaders = [
        { name: 'Sarah', message: 'Subscribe to my YouTube', value: 300 },
        { name: 'Joe', message: 'Hi mom!!!!', value: 290 },
        { name: 'William', message: "I'm the best", value: 400 },
        { name: 'Daniel', message: "I'm number one", value: 101 },
        { name: 'Gabriel', message: 'Vote for me', value: 111 },
        {
            name: 'Nakamoto',
            message:
                'https://github.com/gabrielgozum/erc20dao/blob/main/src/Leaderboard.sol',
            value: 222,
        },
        { name: 'Rachel', message: 'https://xkcd.com/2267/', value: 302 },
        { name: 'Michael', message: 'https://chat.openai.com/', value: 56 },
        {
            name: 'Emily',
            message: 'https://twitter.com/Calvinn_Hobbes/',
            value: 99,
        },
        {
            name: 'Matthew',
            message: 'https://github.com/szn-cs/uw-cs839-project',
            value: 17,
        },
    ]
    return leaders
}

export async function getBalances() {
    {
        const totalSupply = await daoContract.methods.totalSupply().call()
        const holders = {}
        for (let i = 0; i < totalSupply; i++) {
            const address = await daoContract.methods.tokenByIndex(i).call()
            const balance = await daoContract.methods.balanceOf(address).call()
            if (balance > 0) {
                holders[address] = balance
            }
        }
        console.log('holders: ', holders)

        return holders
    }
    {
        // const holders = []
        // const totalSupply = await daoContract.methods.totalSupply().call()
        // for (let i = 0; i < totalSupply; i++) {
        //     const holder = await daoContract.methods
        //         .tokenOfOwnerByIndex(i)
        //         .call()
        //     holders.push(holder)
        // }
        // console.log('holders: ', holders)
    }
}

export async function getLeaders() {
    let len = 100
    let leaders = []

    let response = await getMessages(len)
    console.log('response from contract:', response)

    let [addressList, messageList, balanceList] = [
        response[0],
        response[1],
        response[2],
    ]
    for (let i = 0; i < len; i++) {
        if (addressList[i] == 0) continue
        leaders.push({
            name: addressList[i],
            message: messageList[i],
            value: balanceList[i],
        })
    }

    return leaders
}

export async function getMessages(len) {
    let web3 = new Web3(new Web3.providers.HttpProvider(network))
    const daoContract = new web3.eth.Contract(contract.abi, contract.address)

    const messageList = await daoContract.methods.getMessages(len).call()
    return messageList
}
