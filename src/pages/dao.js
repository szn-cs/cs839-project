import Web3 from 'web3';
export async function updateLeaderboardData(){
    const network = "https://api.avax-test.network/ext/bc/C/rpc"
    const daoAdd = "0xEf84bE8dFc4B529F5e544d8B8D678f1b223F2B51"
//        Gabriel
    const testAdd = "0xF0B48DA5c26CA87AfD5b3d083A772E980a7001Fc"
//        Matthew
    const myAdd = "0x89BF19105d76033F328C54B8DDeA404A4b282Ef8"
    const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"form","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]

    let web3 = new Web3(new Web3.providers.HttpProvider(network));
    console.log(web3)
    console.log(await web3.eth.net.getId())

    // Replace <DAO_CONTRACT_ABI> and <DAO_CONTRACT_ADDRESS> with the ABI and address of your DAO contract
    const daoContract = new web3.eth.Contract(abi, daoAdd);

    // Replace <YOUR_WALLET_ADDRESS> with your wallet address
    const balance = await daoContract.methods.balanceOf(testAdd).call();
    const balance1 = await daoContract.methods.balanceOf(myAdd).call();
    const name = await daoContract.methods.name().call();
    const methods = await daoContract.methods;

    console.log('DAO balance:', balance);
    console.log('DAO balance1:', balance1);
    console.log('DAO name:', name);
    console.log('DAO methods:', methods);
    console.log('DAO methods:', methods.totalSupply());
//       const totalSupply = await daoContract.methods.totalSupply().call();
//          const holders = {};
//          for (let i = 0; i < totalSupply; i++) {
//            const address = await daoContract.methods.tokenByIndex(i).call();
//            const balance = await daoContract.methods.balanceOf(address).call();
//            if (balance > 0) {
//              holders[address] = balance;
//            }
//          }
//        const holders = [];
//        const totalSupply = await daoContract.methods.totalSupply().call();
//        for (let i = 0; i < totalSupply; i++) {
//            const holder = await daoContract.methods.tokenOfOwnerByIndex(i).call();
//            holders.push(holder);
//        }
//        console.log(holders)
}
export function getSampleUsers(){
    let leaders = [{"name":"Matthew","message":"I'm the best", "value":25},
    {"name":"Joe","message":"I'm the best","value":55},
    {"name":"Nakamoto","message":"I'm the best","value":1}]
    return leaders
}
function getUsers(){}
function getBalances(){}


export default function dao() {
  return <>{/* nothing */}</>;
}



