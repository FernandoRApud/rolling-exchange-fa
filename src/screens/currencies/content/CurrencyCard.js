import React from 'react'
import { StyleSheet, View, Text, Image, Linking } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import flags from '../../../constants/flags'
import { getCurrencySymbol, getCurrencyName, getExchange } from '../../../utils/currencyFunctions'
import { Button } from 'react-native-paper'

const CurrencyCard = ({ name, flag, appTheme, fromCurrency, amount, lastRates }) => {
  const styles = getStyle(appTheme)
  let url = ''
  let rate = 0
  switch(flag) {
    case 'ars':
      url = flags.ars
      rate = lastRates.rates.ARS
      break
    case 'eur':
      url = flags.eur
      rate = lastRates.rates.EUR
      break
    case 'jpy':
      url = flags.jpy
      rate = lastRates.rates.JPY
      break
    case 'usd':
      url = flags.usd
      rate = lastRates.rates.USD
      break
    case 'aud':
      url = flags.aud
      rate = lastRates.rates.AUD
      break
    case 'clp':
      url = flags.clp
      rate = lastRates.rates.CLP
      break
    case 'mxn':
      url = flags.mxn
      rate = lastRates.rates.MXN
      break
    case 'rub':
      url = flags.rub
      rate = lastRates.rates.RUB
      break
    case 'zwl':
      url = flags.zwl
      rate = lastRates.rates.ZWL
      break
    case 'yer':
      url = flags.yer
      rate = lastRates.rates.YER
      break
     
  }

  return(
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <Image
          source={url}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.rightContainer}>
        {
          amount !== '' ?
            <>
              <Text style={styles.text}>{getCurrencySymbol(flag)} {getExchange(fromCurrency, flag, rate, amount)}</Text>
              <Text style={styles.text}>{getCurrencyName(flag)}</Text>
              <FontAwesome5.Button name='share' color={appTheme.textPrimary} style={styles.share} onPress={() => Linking.openURL(`whatsapp://send?text=Conversión de ExchangeRC: \n\ - ${amount} ${fromCurrency} = ${getExchange(fromCurrency, flag, rate, amount)} ${flag}`)}></FontAwesome5.Button>
            </>
          :
            null
        }
      </View>
    </View>
  )
}

const getStyle = theme => (
  StyleSheet.create({
    card: {
      backgroundColor: theme.container,
      padding: 25,
      margin: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    text: {
      color: theme.textPrimary,
    },
    leftContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    rightContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    share: {
      padding: 0, 
      backgroundColor: theme.container,
    }
  })
)

export default CurrencyCard