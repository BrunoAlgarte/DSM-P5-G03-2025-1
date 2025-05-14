import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function AboutScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Histórico</ThemedText>
      </ThemedView>
      <ThemedText>
        Todas as classificações que você fez estão disponíveis aqui!
      </ThemedText>
      <Collapsible title="ALL-STAR 10/02/2025">
        <ThemedView style={styles.itemContainer}>
          <ThemedText>
            <ThemedText type="defaultSemiBold">Posição:</ThemedText> Armador
          </ThemedText>
          <ThemedText>
            <ThemedText type="defaultSemiBold">Pontos:</ThemedText> 33
          </ThemedText>
          <ThemedText>
            <ThemedText type="defaultSemiBold">Assintências:</ThemedText> 9
          </ThemedText>
          <ThemedText>
            <ThemedText type="defaultSemiBold">Rebotes:</ThemedText> 11
          </ThemedText>
          <ThemedText>
            <ThemedText type="defaultSemiBold">Tocos:</ThemedText> 1
          </ThemedText>
        </ThemedView>
      </Collapsible>
      <Collapsible title="ROLE PLAYER 04/04/2025">
        <ThemedView style={styles.itemContainer}>
          <ThemedText>
            <ThemedText type="defaultSemiBold">Posição:</ThemedText> Armador
          </ThemedText>
          <ThemedText>
            <ThemedText type="defaultSemiBold">Pontos:</ThemedText> 33
          </ThemedText>
          <ThemedText>
            <ThemedText type="defaultSemiBold">Assintências:</ThemedText> 9
          </ThemedText>
          <ThemedText>
            <ThemedText type="defaultSemiBold">Rebotes:</ThemedText> 11
          </ThemedText>
          <ThemedText>
            <ThemedText type="defaultSemiBold">Tocos:</ThemedText> 1
          </ThemedText>
        </ThemedView>
      </Collapsible>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 26,
    flex: 1,
    padding: 16,
    gap: 16,
  },
  headerImage: {
    color: "#808080",
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  itemContainer: {
    flexDirection: "column",
    gap: 8,
    marginTop: 8,
    marginBottom: 8,
  },
});
