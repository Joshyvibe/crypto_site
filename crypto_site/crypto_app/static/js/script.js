var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var lite = document.getElementById("litecoin");
var bin = document.getElementById("binancecoin");
var card = document.getElementById("cardano");
var xrp = document.getElementById("ripple");
var pol = document.getElementById("polkadot");
var uni = document.getElementById("uniswap");
var btcc = document.getElementById("bitcoin-cash");
var sol = document.getElementById("solana");
var chain = document.getElementById("chainlink");
var poly = document.getElementById("matic-network");
var theta = document.getElementById("theta-token");
var shiba = document.getElementById("shiba-inu");
var vec = document.getElementById("vechain");
var stel = document.getElementById("stellar");
var file = document.getElementById("filecoin");
var aav = document.getElementById("aave");
var mon = document.getElementById("monero");
var trn = document.getElementById("tron");
var cron = document.getElementById("cronos");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Clitecoin%2Cbinancecoin%2Ccardano%2Cripple%2Cpolkadot%2Cuniswap%2Cbitcoin-cash%2Csolana%2Cchainlink%2Cmatic-network%2Ctheta-token%2Cshiba-inu%2Cvechain%2Cstellar%2Cfilecoin%2Caave%2Cmonero%2Ctron%2Ccronos&vs_currencies=usd",
    "method": "GET",

}
$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
    lite.innerHTML = response.litecoin.usd;
    bin.innerHTML = response.binancecoin.usd;
    card.innerHTML = response.cardano.usd;
    xrp.innerHTML = response.ripple.usd;
    pol.innerHTML = response.polkadot.usd;
    uni.innerHTML = response.uniswap.usd;
    btcc.innerHTML = response['bitcoin-cash'].usd;
    sol.innerHTML = response.solana.usd;
    chain.innerHTML = response.chainlink.usd;
    poly.innerHTML = response['matic-network'].usd;
    theta.innerHTML = response['theta-token'].usd;
    shiba.innerHTML = response['shiba-inu'].usd;
    vec.innerHTML = response.vechain.usd;
    stel.innerHTML = response.stellar.usd;
    file.innerHTML = response.filecoin.usd;
    aav.innerHTML = response.aave.usd;
    mon.innerHTML = response.monero.usd;
    trn.innerHTML = response.tron.usd;
    cron.innerHTML = response.cronos.usd;
});
