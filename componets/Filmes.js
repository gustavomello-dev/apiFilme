import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Modal,
} from "react-native";
import react, { useEffect, useState } from "react";
import Detalhes from "./modal";

export default function Filmes({ data }) {
    const [modal, setmodal] = useState(false);
    return (
        <View>
            <View style={styles.card}>
                <Text style={styles.titulo}>{data.nome}</Text>
                <Image source={{ uri: data.foto }} style={styles.capa} />
                <View style={styles.areaBtn}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => setmodal(true)}>
                        <Text style={styles.textBtn}>LEIA MAIS</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal visible={modal} animationType="slide" transparent={true}>
                <Detalhes voltar={() => setmodal(false)} filmes={data} />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        margin: 15,
        elevation: 2,
    },
    capa: {
        height: 250,
        zIndex: 2,
    },
    titulo: {
        padding: 15,
        fontSize: 18,
        fontWeight: "bold",
    },
    areaBtn: {
        marginTop: -50,
        alignItems: "flex-end",
        zIndex: 3,
    },
    btn: {
        width: 100,
        backgroundColor: "#09a6ff",
        opacity: 1,
        alignItems: "center",
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
});
