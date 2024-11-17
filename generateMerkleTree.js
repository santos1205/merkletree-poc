const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

// Exemplo de endereços na whitelist
// const whitelistAddresses = [
//   "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
//   "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
//   "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
//   "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB",
//   "0x617F2E2fD72FD9D5503197092aC168c91465E7f2"
// ];

const whitelistAddresses = [
  "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
  "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
  "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
  "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB",
  "0x617F2E2fD72FD9D5503197092aC168c91465E7f2",
  "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
  "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
  "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
  "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB",
  "0x617F2E2fD72FD9D5503197092aC168c91465E7f2",
  "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
  "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
  "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
  "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB",
  "0x617F2E2fD72FD9D5503197092aC168c91465E7f2",
  "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
  "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
  "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
  "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB",
  "0x617F2E2fD72FD9D5503197092aC168c91465E7f2"
];

// Gera os hashes das wallets
const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

// Pega o Merkle Root
const rootHash = merkleTree.getRoot().toString('hex');

// Gera uma Merkle Proof para um endereço específico
// const claimingAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
// const claimingHash = keccak256(claimingAddress).toString('hex');
// const proof = merkleTree.getHexProof(claimingHash);
// console.log("wallet:", claimingAddress);
// console.log("Leaf:", claimingHash);
// console.log("Merkle Proof:", proof);
// console.log("Merkle Root:", rootHash);

// Gera Merkle Proof para cada um dos endereços
whitelistAddresses.forEach((end) => {
  const claimingAddress = end;
  const claimingHash = keccak256(claimingAddress).toString('hex');
  const proof = merkleTree.getHexProof(claimingHash);
  console.log("");
  console.log("wallet:", claimingAddress);
  console.log("Leaf:", claimingHash);
  console.log("Merkle Proof:", proof);
  console.log("Merkle Proof String Output:", JSON.stringify(proof));
  console.log("Merkle Root:", `"0x${rootHash}"`);
  console.log("");
  console.log("------------------------------------------------------------------------------------------------------------------");
});
