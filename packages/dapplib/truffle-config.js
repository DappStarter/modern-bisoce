require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue raise place hospital gloom civil army gasp'; 
let testAccounts = [
"0x4ad231efc588ede9b872bcb62cff4eae2e47c173647215f1d604e7570726650b",
"0xac7387c5daddc649aec7224ae6a1f9b82ddd883a7dea6922790cc2d5166606d1",
"0x8ba97e38e46ea4362cba71213f7ed52a3996e28eaf8271157a7fc4236104b37b",
"0x6e67acaca85a9d86011dcbd875ef7d1b2c29017ea0ef640a8d2f3b6c0bbdb055",
"0x3bc1f37a565af7518f647f8e91390e30398f8db4ed25f9c25872b54e0a35f899",
"0x9137c63f19795d576a93a4c18cf33075476e49a02271b3026e0866cec0f29f4c",
"0xfdcf668ea7882ee95d629b53bc98243a17a75cd05844241e7d29acd8b67dc8cc",
"0xeab6abb966b8bb2a5c9ff30f645ef2e9010d5a2106704dc5479aeb60ca294ba8",
"0x81c09755df352612cb14523dfd12fa46178ad9c8ca6551c7af9ab6bbc15a8956",
"0x853b3ed9e06f5e67b7ce21b379b2252af9a43b61557197aabef7befda8c65c3c"
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
            version: '^0.5.11'
        }
    }
};
