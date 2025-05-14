import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  TextInput,
  Button,
  Alert,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const [position, setPosition] = useState("");
  const [points, setPoints] = useState("");
  const [rebounds, setRebounds] = useState("");
  const [assists, setAssists] = useState("");

  const handleSubmit = () => {
    Alert.alert("Dados Enviados", "Obrigado por enviar suas estatísticas!");
  };

  return (
    <ThemedView>
      <ThemedView style={styles.headerContainer}>
        <Image
          source={require("@/assets/images/logo1.png")}
          style={styles.mainLogo}
        />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>
          HOOP VISION
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.inputContainer}>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={position}
            onValueChange={(itemValue) => setPosition(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Selecione a posição" value="" />
            <Picker.Item label="Armador" value="armador" />
            <Picker.Item label="Ala-Armador" value="ala-armador" />
            <Picker.Item label="Ala" value="ala" />
            <Picker.Item label="Ala-Pivô" value="ala-pivô" />
            <Picker.Item label="Pivô" value="pivô" />
          </Picker>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Pontos"
          keyboardType="numeric"
          value={points}
          onChangeText={setPoints}
        />
        <TextInput
          style={styles.input}
          placeholder="Rebotes"
          keyboardType="numeric"
          value={rebounds}
          onChangeText={setRebounds}
        />
        <TextInput
          style={styles.input}
          placeholder="Assistências"
          keyboardType="numeric"
          value={assists}
          onChangeText={setAssists}
        />
        <Button title="Enviar" color={'#e46827'} onPress={handleSubmit} />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    height: "100%",
    fontSize: 42,
    fontWeight: "bold",
    color: "#e46827",
    textAlignVertical: "center",
  },
  inputContainer: {
    padding: 16,
    gap: 12,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    overflow: "hidden",
    marginBottom: 12,
  },
  picker: {
    height: 60,
    width: "100%",
    color: "#000",
    fontSize: 16,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  headerContainer: {
    height: 200,
    marginBottom: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e46827",
  },
  mainLogo: {
    width: "75%",
    height: "75%",
    margin: 20,
    borderRadius: 0,
    resizeMode: "contain",
  },
  btnEviar: {
    backgroundColor: "#e46827",
  }
});
