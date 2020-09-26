export const getCurrencySymbol = (currency) => {
  switch(currency) {
    case 'ars':
      return '$'
    case 'usd':
      return 'u$s'
    case 'eur':
      return '€'
    case 'jpy':
      return '¥'
    case 'aud':
      return '$'
    case 'clp':
      return '$'
    case 'mxn':
      return '$'
    case 'rub':
      return '₽'
    case 'zwl':
      return '$'
    case 'yer':
      return '﷼'
  }
}

export const getCurrencyName = (currency) => {
  switch(currency) {
    case 'ars':
      return 'pesos argentinos'
    case 'usd':
      return 'dolares estadounidenses'
    case 'eur':
      return 'euros'
    case 'jpy':
      return 'yenes japoneses'
    case 'aud':
      return 'dolares australianos'
    case 'clp':
      return 'pesos chilenos'
    case 'mxn':
      return 'pesos mexicanos'
    case 'rub':
      return 'rublos rusos'
    case 'zwl':
      return 'dolares de Zimbabwe'
    case 'yer':
      return 'riales'
  }
}

const exchange = {
  ars: {
    ars: (amount, rate) => amount * 1,
    usd: (amount, rate) => amount * rate,
    eur: (amount, rate) => amount * rate,
    jpy: (amount, rate) => amount * rate,
    aud: (amount, rate) => amount * rate,
    clp: (amount, rate) => amount * rate,
    mxn: (amount, rate) => amount * rate,
    rub: (amount, rate) => amount * rate,
    zwl: (amount, rate) => amount * rate,
    yer: (amount, rate) => amount * rate
  },
  usd: {
    ars: (amount, rate) => amount * rate * 1.30,
    usd: (amount, rate) => amount * 1,
    eur: (amount, rate) => amount * rate,
    jpy: (amount, rate) => amount * rate,
    aud: (amount, rate) => amount * rate,
    clp: (amount, rate) => amount * rate,
    mxn: (amount, rate) => amount * rate,
    rub: (amount, rate) => amount * rate,
    zwl: (amount, rate) => amount * rate,
    yer: (amount, rate) => amount * rate
  },
  eur: {
    ars: (amount, rate) => amount * rate,
    usd: (amount, rate) => amount * rate,
    eur: (amount, rate) => amount * 1,
    jpy: (amount, rate) => amount * rate,
    aud: (amount, rate) => amount * rate,
    clp: (amount, rate) => amount * rate,
    mxn: (amount, rate) => amount * rate,
    rub: (amount, rate) => amount * rate,
    zwl: (amount, rate) => amount * rate,
    yer: (amount, rate) => amount * rate
  },
  jpy: {
    ars: (amount, rate) => amount * rate,
    usd: (amount, rate) => amount * rate,
    eur: (amount, rate) => amount * rate,
    jpy: (amount, rate) => amount * 1,
    aud: (amount, rate) => amount * rate,
    clp: (amount, rate) => amount * rate,
    mxn: (amount, rate) => amount * rate,
    rub: (amount, rate) => amount * rate,
    zwl: (amount, rate) => amount * rate,
    yer: (amount, rate) => amount * rate
  },
  aud: {
    ars: (amount, rate) => amount * rate,
    usd: (amount, rate) => amount * rate,
    eur: (amount, rate) => amount * rate,
    jpy: (amount, rate) => amount * rate,
    aud: (amount, rate) => amount * 1,
    clp: (amount, rate) => amount * rate,
    mxn: (amount, rate) => amount * rate,
    rub: (amount, rate) => amount * rate,
    zwl: (amount, rate) => amount * rate,
    yer: (amount, rate) => amount * rate
  },
  clp: {
    ars: (amount, rate) => amount * rate,
    usd: (amount, rate) => amount * rate,
    eur: (amount, rate) => amount * rate,
    jpy: (amount, rate) => amount * rate,
    aud: (amount, rate) => amount * rate,
    clp: (amount, rate) => amount * 1,
    mxn: (amount, rate) => amount * rate,
    rub: (amount, rate) => amount * rate,
    zwl: (amount, rate) => amount * rate,
    yer: (amount, rate) => amount * rate
  },
  mxn: {
    ars: (amount, rate) => amount * rate,
    usd: (amount, rate) => amount * rate,
    eur: (amount, rate) => amount * rate,
    jpy: (amount, rate) => amount * rate,
    aud: (amount, rate) => amount * rate,
    clp: (amount, rate) => amount * rate,
    mxn: (amount, rate) => amount * 1,
    rub: (amount, rate) => amount * rate,
    zwl: (amount, rate) => amount * rate,
    yer: (amount, rate) => amount * rate
  },
  rub: {
    ars: (amount, rate) => amount * rate,
    usd: (amount, rate) => amount * rate,
    eur: (amount, rate) => amount * rate,
    jpy: (amount, rate) => amount * rate,
    aud: (amount, rate) => amount * rate,
    clp: (amount, rate) => amount * rate,
    mxn: (amount, rate) => amount * rate,
    rub: (amount, rate) => amount * 1,
    zwl: (amount, rate) => amount * rate,
    yer: (amount, rate) => amount * rate
  },
  zwl: {
    ars: (amount, rate) => amount * rate,
    usd: (amount, rate) => amount * rate,
    eur: (amount, rate) => amount * rate,
    jpy: (amount, rate) => amount * rate,
    aud: (amount, rate) => amount * rate,
    clp: (amount, rate) => amount * rate,
    mxn: (amount, rate) => amount * rate,
    rub: (amount, rate) => amount * rate,
    zwl: (amount, rate) => amount * 1,
    yer: (amount, rate) => amount * rate
  },
  yer: {
    ars: (amount, rate) => amount * rate,
    usd: (amount, rate) => amount * rate,
    eur: (amount, rate) => amount * rate,
    jpy: (amount, rate) => amount * rate,
    aud: (amount, rate) => amount * rate,
    clp: (amount, rate) => amount * rate,
    mxn: (amount, rate) => amount * rate,
    rub: (amount, rate) => amount * rate,
    zwl: (amount, rate) => amount * rate,
    yer: (amount, rate) => amount * 1
  },
}

export const getExchange = (fromCurrency, toCurrency, rate, amount) => (
  exchange[fromCurrency][toCurrency](amount, rate).toFixed(2)
)