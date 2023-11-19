import { BrowserProvider, Contract, ethers, parseEther } from 'ethers';

export default async function writeToContract(contractAddress, abi) {
  try {
    const provider = new BrowserProvider(window.ethereum!);
    const signer = await provider.getSigner();
    const smartContract = new Contract(contractAddress, abi, signer);

    const methodName = 'mint'; // Replace with your  method name

    const transaction = await smartContract.connect(signer)[methodName]();

    const receipt = await transaction.wait();
    console.log('Transaction hash:', transaction.hash);
    console.log(receipt);
    return transaction;
  } catch (error) {
    console.log(error);
  }
}
