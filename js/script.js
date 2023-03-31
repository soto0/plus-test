const coinsBlock = document.querySelector('.coins__block');

const getCoins = async () => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1').then(response => response.json());
        coinsBlock.innerHTML = response.map(coin => {
            return (
                `<div class=${coin.symbol === "usdt" ? "coin__block_green" : "coin__block"}>
                    <p class="coin__name">${coin.name}</p>
                    <p class="coin__symbol">${coin.symbol}</p>
                    <p class="coin__id">${coin.id}</p>
                </div>`
            );
        }).join('');
    } catch {
        coinsBlock.innerHTML = '<h1 class="error">No coins</h1>'
    };
};

getCoins();



