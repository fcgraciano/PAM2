import { View, StyleSheet } from 'react-native';

export default function Box() {
    return (
    <View style={styles.container}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
    </View>
  );
}
const css = StyleSheet.create(
  {
    container:
    {

        //torna o componente flexivel para caber completamente no pai
    //Flex:1 significa ocupe 1 espaço de todo e espaço
    //caso tenha 2 item dentro do pai ele ocupara o numero de partes da divisão da tela
    flex: 1,


    //aqui vão os codigos principais do container da tela
    //Alinhamento Horizontal
    alignItems: 'center',

    //alinhamento Vertical
    justifyContent: 'center',

    },
    box:{
      height:100,
      width:100,
      backgroundColor: '#666',
      borderColor: '#999',
      borderWidth: 5,
      margin: 10

    }

  }
)
