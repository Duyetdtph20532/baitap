import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

const App = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={{color:'red',}}>Họ tên: </Text>
      <TextInput style={styles.paragraph}></TextInput>
      <Text style={{color:'red',}}>MSV: </Text>
      <TextInput style={styles.paragraph}></TextInput>
      <Text style={{color:'red',}}>Lớp: </Text>
      <TextInput style={styles.paragraph}></TextInput>
      <Button
        title="hủy"
        onPress={() => drawer.current.closeDrawer()}
      />
      <Button
        title="lưu"
        
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
       <Text style={{color:'red',}}>Họ tên: Đào  Thế Duyệt</Text>
       <Text>MSV: PH20532</Text>
       <Text>Lớp: CP17303</Text>
       
        <Button
          title="thêm mới"
          onPress={() => drawer.current.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  paragraph1: {
    padding: 10,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default App;