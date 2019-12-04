import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  FlatList
} from "react-native";

import Pedras from "./src/components/Pedras";

export default function App() {
  const [countWe, setCountWe] = useState([17, 13, 18, 15]);
  const [countThey, setCountThey] = useState([10, 20, 30, 10, 20]);
  const [modalVisible, setModalVisible] = useState(false);

  _keyExtractor = item => item.index;

  _renderItem = ({ index, item }) => {
    if (item > 0) {
      return (
        <Text style={styles.listText} key={index}>
          {item}
        </Text>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.rowText}>NÓS</Text>
          <FlatList
            data={countWe}
            renderItem={_renderItem}
            keyExtractor={_keyExtractor}
          />
          <Text style={styles.total}>
            TOTAL:{" "}
            {countWe.length > 0 && countWe.reduce((acc, value) => acc + value)}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>ELES</Text>
          <FlatList
            data={countThey}
            renderItem={_renderItem}
            keyExtractor={_keyExtractor}
          />
          <Text style={styles.total}>
            TOTAL:{" "}
            {countThey.length > 0 &&
              countThey.reduce((acc, value) => acc + value)}
          </Text>
        </View>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.buttonText}>ADICIONAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonReset}
          onPress={() => {
            setCountWe([0]);
            setCountThey([0]);
          }}
        >
          <Text style={styles.buttonText}>RESETAR</Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <SafeAreaView style={styles.modal}>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setModalVisible(false);
                setCountWe([...countWe, 13]);
              }}
            >
              <Text style={styles.modalButtonText}>NÓS</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonReset}
              onPress={() => {
                setModalVisible(false);
                setCountThey([...countThey, 21]);
              }}
            >
              <Text style={styles.modalButtonText}>ELES</Text>
            </TouchableOpacity>
          </View>
          <Pedras />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "center"
  },
  row: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  rowText: {
    fontSize: 48
  },
  listText: {
    fontSize: 28
  },
  buttons: {
    flexDirection: "row"
  },
  button: {
    flexGrow: 1,
    height: 72,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2
  },
  buttonReset: {
    flexGrow: 1,
    height: 72,
    backgroundColor: "#999",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2
  },
  buttonText: {
    color: "#fff",
    padding: 20
  },
  modal: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  modalButton: {
    flex: 1,
    backgroundColor: "#139818"
  },
  modalButtonText: {
    color: "#fff"
  },

  text: {
    fontSize: 48,
    textAlign: "center"
  },
  total: {
    fontSize: 32,
    marginBottom: 15
  }
});
