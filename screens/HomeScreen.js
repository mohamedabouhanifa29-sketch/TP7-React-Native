import { View, Text, TextInput, Button, FlatList } from "react-native";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getTodos, createTodo } from "../services/firestore";

export default function HomeScreen() {
  const { user } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const loadTodos = async () => {
    const data = await getTodos(user.uid);
    setTodos(data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = async () => {
    if (!title.trim()) return;
    await createTodo(user.uid, title);
    setTitle("");
    loadTodos();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>Mes tâches</Text>

      <TextInput
        placeholder="Nouvelle tâche"
        value={title}
        onChangeText={setTitle}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
      />

      <Button title="Ajouter" onPress={addTodo} />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ padding: 10 }}>• {item.title}</Text>
        )}
      />
    </View>
  );
}
