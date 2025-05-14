import { StyleSheet, Image, Platform } from "react-native";
import { useRouter } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TouchableOpacity } from "react-native";

export default function AboutScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.title}>
          DSM Basquete
        </ThemedText>
      </ThemedView>
      <ThemedText style={styles.description}>
        O projeto DSM Basquete é um aplicativo desenvolvido para classificar o desempenho de qualquer jogador amador baseado nas estatísticas da NBA. Nosso objetivo é proporcionar uma experiência intuitiva e eficiente para jogadores e fãs do esporte!
      </ThemedText>
      <ThemedText type="subtitle" style={styles.subtitle}>
        Desenvolvedores:
      </ThemedText>
      <ThemedView style={styles.devList}>
        <ThemedText>• Bruno Algarte</ThemedText>
        <ThemedText>• Cristian Nascimento</ThemedText>
        <ThemedText>• Eduardo Vilas Boas</ThemedText>
        <ThemedText>• Rafael Veríssimo</ThemedText>
      </ThemedView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/login")}
      >
        <ThemedText style={styles.buttonText}>Voltar para Login</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 26,
    flex: 1,
    padding: 24,
    gap: 24,
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 8,
  },
  logo: {
    width: 48,
    height: 48,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a237e",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 12,
    color: "#1a237e",
  },
  devList: {
    gap: 4,
    alignItems: "flex-start",
    marginBottom: 24,
  },
  button: {
    marginTop: "auto",
    backgroundColor: "#1a237e",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});