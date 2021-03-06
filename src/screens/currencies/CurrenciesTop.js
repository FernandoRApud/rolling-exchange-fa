import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const CurrenciesTop = ({ appTheme, fromCurrency, setFromCurrency, amount, setAmount, updateRates, allCurrencies }) => {
  const styles = getStyle(appTheme)
  const [ showSelection, setShowSelection ] = useState(false)
  const requireFlag = {
    ars: require('../../assets/flags/ars.png'),
    usd: require('../../assets/flags/usd.png'),
    eur: require('../../assets/flags/eur.png'),
    jpy: require('../../assets/flags/jpy.png'),
    aud: require('../../assets/flags/aud.png'),
    clp: require('../../assets/flags/clp.png'),
    mxn: require('../../assets/flags/mxn.png'),
    rub: require('../../assets/flags/rub.png'),
    zwl: require('../../assets/flags/zwl.png'),
    yer: require('../../assets/flags/yer.png'),
  }
  const onHandleShowSelection = () => {
    setShowSelection(!showSelection)
  }
  const onHandleSelectCurrency = currency => {
    setFromCurrency(currency)
    setShowSelection(!showSelection)
    updateRates()
  }

  return(
    <>
      <View style={styles.topContainer}>
        <View style={styles.fromCurrency}>
          <TouchableOpacity style={styles.fromCurrencyButton} onPress={onHandleShowSelection}>
            <Image
              source={requireFlag[fromCurrency]}
              style={{ width: 50, height: 50 }}
            />
            <Text style={styles.fromCurrencyName}>{fromCurrency.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          keyboardType='numeric'
          label="¿Cuanto queres convertir?"
          value={amount}
          onChangeText={input => setAmount(input)}
        />
        {
          amount !== '' ?
            <Button onPress={() => setAmount('')} icon='close' color={appTheme.link} />
          :
            <View style={{ width: 65 }} />
        }
      </View>
      {
        showSelection &&
        <View style={styles.selection}>
          <Text style={styles.selectionText}>Seleccioná una moneda</Text>
          <ScrollView contentContainerStyle={{ flexGrow: 10, justifyContent: 'center'}} horizontal={true}>
            <View style={styles.selectionCurrencies}>
                {allCurrencies.map((i) =>{
                  return(
                    <View style={styles.selectionCurrencyButton}>
                      <TouchableOpacity onPress={() => onHandleSelectCurrency(i.flag)}>
                        <Image
                          source={requireFlag[i.flag]}
                          style={{ width: 50, height: 50 }}
                        />
                        <Text style={styles.fromCurrencyName}>{i.flag.toUpperCase()}</Text>
                      </TouchableOpacity>
                    </View>
                  )
                })}
            </View>
          </ScrollView>
        </View>
      }
    </>
  )
}

const getStyle = theme => (
  StyleSheet.create({
    topContainer: {
      flex: 1.6,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: '100%',
      backgroundColor: theme.secondary,
    },
    input: {
      width: '60%',
      paddingBottom: 10,
      height: 60
    },
    fromCurrency: {
      width: '20%',
      paddingBottom: 10,
      height: 60,
      marginRight: 1,
      alignItems: 'center',
    },
    fromCurrencyName: {
      color: theme.link,
      textAlign: 'center',
      marginTop: 5,
    },
    selection: {
      width: '100%',
      backgroundColor: theme.secondary,
    },
    selectionText: {
      color: theme.textSecondary,
      textAlign: 'center',
      marginTop: 5,
      marginBottom: 5,
    },
    selectionCurrencies: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: '100%',
      paddingBottom: 10,
      marginLeft: 100,
      marginRight: 100
    },
    selectionCurrencyButton: {
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'column',
      width: '10%',
      paddingTop: 10,
    },
    fromCurrencyButton: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '100%',
      height: 60,
    }
  })
)

export default CurrenciesTop