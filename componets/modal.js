import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import react, { useEffect, useState } from "react";


export default function Detalhes(props) {
    return (
        <View style={styles.contaiener}>
            <View style={styles.modalItens}>
                <TouchableOpacity
                    style={styles.btnVoltar}
                    onPress={props.voltar}>
                    <Text style={{ color: "#fff", fontSize: 18 }}>Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.titulo}>{props.filmes.nome}</Text>
                <Text style={styles.sinopse}>Sinopse</Text>
                <Text style={styles.descricao}>{props.filmes.sinopse}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contaiener: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    modalItens: {
        height: "80%",
        backgroundColor: "#121221",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    btnVoltar: {
        backgroundColor: "#e52410",
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignItems:'center'
    },
    titulo: {
        textAlign: "center",
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        padding: 10,
    },
    sinopse: {
        color: "#fff",
        fontSize: 18,
        marginBottom: 8,
        marginLeft: 10,
    },
    descricao: {
        color: "#fff",
        marginRight: 10,
        marginLeft: 10,
    },
});
