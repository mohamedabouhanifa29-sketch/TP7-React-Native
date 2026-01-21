import { View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function ProfileScreen() {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>
        Profil utilisateur
      </Text>

      {user && (
        <Text style={{ marginBottom: 20 }}>
          Email : {user.email}
        </Text>
      )}

      <TouchableOpacity
        onPress={logout}
        style={{
          backgroundColor: "red",
          padding: 12,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff" }}>Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
}
