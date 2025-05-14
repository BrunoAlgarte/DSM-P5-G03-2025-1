import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function HistoryScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <Image
          source={require("@/assets/images/nbalogoextend.png")}
          resizeMode="contain"
          style={styles.headerImage}
        />
        <ThemedText type="title" style={styles.title}>
          Histórico
        </ThemedText>
      </ThemedView>
      <ThemedText style={{ textAlign: "center", marginBottom: 16 }}>
        Todas as classificações que você fez estão disponíveis aqui!
      </ThemedText>
      <ThemedView style={styles.stepContainer}>
        <Collapsible title="ALL-STAR 10/02/2025">
          <ThemedView style={styles.itemContainer}>
            <ThemedText style={{ color: "#fff" }}>
              <ThemedText type="defaultSemiBold" style={{ color: "#fff" }}>
                Posição:
              </ThemedText>{" "}
              Armador
            </ThemedText>
            <ThemedText style={{ color: "#fff" }}>
              <ThemedText type="defaultSemiBold" style={{ color: "#fff" }}>
                Pontos:
              </ThemedText>{" "}
              33
            </ThemedText>
            <ThemedText style={{ color: "#fff" }}>
              <ThemedText type="defaultSemiBold" style={{ color: "#fff" }}>
                Assintências:
              </ThemedText>{" "}
              9
            </ThemedText>
            <ThemedText style={{ color: "#fff" }}>
              <ThemedText type="defaultSemiBold" style={{ color: "#fff" }}>
                Rebotes:
              </ThemedText>{" "}
              11
            </ThemedText>
            <ThemedText style={{ color: "#fff" }}>
              <ThemedText type="defaultSemiBold" style={{ color: "#fff" }}>
                Tocos:
              </ThemedText>{" "}
              1
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
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 26,
    flex: 1,
    padding: 16,
    gap: 16,
    backgroundColor: "#f2f2f2",
  },
  headerImage: {
    color: "#808080",
    position: "fixed",
    top: 0,
    width: 120,
    height: 50,
  },
  titleContainer: {
    flexDirection: "column",
    gap: 8,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#e46827",
    textAlignVertical: "center",

    margin: 0,
    padding: 0,
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: 60,
    height: 60,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: "#f2f2f2",
  },
  itemContainer: {
    width: "80%",
    backgroundColor: "#b1511e",
    flexDirection: "column",
    gap: 8,
    marginTop: 8,
    marginBottom: 8,
    padding: 8,
    borderRadius: 20,
  },
});
