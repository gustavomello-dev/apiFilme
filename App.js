import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
    Modal,
    ActivityIndicator,
} from "react-native";
import api from "./services/api";
import react, { useEffect, useState } from "react";
import Filmes from "./componets/Filmes";

export default function App() {
    const [filmes, setfilmes] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("r-api/?api=filmes");
            setfilmes(response.data);
            setLoad(false);
        }
        loadFilmes();
    }, []);

    if (load) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <ActivityIndicator color={"#000"} size={50} />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <FlatList
                    data={filmes}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <Filmes data={item} />}
                />

                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
