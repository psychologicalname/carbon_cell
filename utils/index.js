export const fetchGraphData = async () => {
    try {
        const data = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
            .then(res => res.json())
            .then(data => data.data)

        return data;

    } catch (error) {
        console.log(error);
    }
};

export const fetchPrices = async () => {
    try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => res.json())
            .then(data => data.bpi)

        return response;
    }
    catch (error) {
        console.log(error);
    }
}

export const getCurrencySymbol = (currency) => {
    const currencySymbols = {
        USD: '$',
        EUR: '€',
        GBP: '£',
    };

    return currencySymbols[currency] || currency;
};