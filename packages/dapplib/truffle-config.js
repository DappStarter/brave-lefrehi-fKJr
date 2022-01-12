require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strategy crawl oil erosion half end army gauge'; 
let testAccounts = [
"0x27df393b62ef0422af72a7190f22699b77db856c81e5d98bdb65c055a11128ed",
"0x446bf9463488346f3fdac655168d49dd91fd699d3d83f59674bfc1871b562696",
"0xe7c8de7bbd76f0a976cf1eee96d7496e3c1cae8cc328ccb74ffb97a23e4ad684",
"0x29dd8651b460b08533544e9eba1b398f7f4faf75d3cbc1cc82a4bb9eb8f97d96",
"0x77e1dabe52cc72358fbe64029f5e62ca503ced2632d91e1921498c30c60859e9",
"0x69ea710f094aa85c5abab28314234652f5280ca847398d7f4f3ff8c873d0a729",
"0x5262d728ff53c4cb31459ce57487a67d464d610498cfe34c849d0014ab5fce9a",
"0xfb98b68b8766495b7c5ff88116e570d5582bec1dec36bb55490cb76575663239",
"0x914990b45f9ebf46f0658cda89e9626daad5fc03c8a2dac262c01c34e0d9babe",
"0x574004e5b4ac145b32b4967acfdebca3f82a0d66b8b97554942465c959fcfd2a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

