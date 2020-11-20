import React, {useState, useEffect}from 'react';
import {Button, StyleSheet, Text , View} from 'react-native';
import firebase from './src/utils/firebase';
import Auth from './src/componentes/Auth';
import 'firebase/auth';
import { decode, encode } from 'base-64';

if(!global.btoa) global.btoa = encode;
if(!global.atob) global.atob = decode;

export default function App() {
  const [usuario, setUsuario] = useState(false);
  useEffect(() => {
      firebase.auth().onAuthStateChanged(response =>{
        setUsuario(response);
      })
  }, [])
  return (
    <>
      <View style = {estilo.fondo}>
        { usuario ? <ListaUsuario/> :  <Auth/> }
      </View>
    </>
  );
}
const estilo = StyleSheet.create({
  fondo:{
    backgroundColor: "#15212b",
    height: "100%"
  }
})