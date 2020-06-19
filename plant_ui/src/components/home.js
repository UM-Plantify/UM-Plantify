import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

export default class HomeScreen extends React.Component {
 constructor(props) {
    super(props);

    this.state  = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      base_url: "http://192.168.50.43:8000"
    }
  }

  componentDidMount() {
    this.fetchDataFromApi();
  }

  fetchDataFromApi = ()  => {
    const url = "http://192.168.50.43:8000/api/list.json";

    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {

        this.setState({
          data: res,
          error: null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading : false });
      })
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%",
          marginTop: "3%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <Text>This is a header.</Text>;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
              Hello World, This is the homepage.
        </Text>
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
            <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
                <ListItem
                onPress={() => this.props.navigation.navigate('Detail',
                {common_name: `${item.common_name}`, scientific_name: `${item.scientific_name}`})}
                title={`${item.common_name}`}
                titleStyle={{ fontSize: 16}}
                titleContainerStyle = {{ marginLeft: 120 }}
                subtitle={<View style={styles.subtitleView}>
                <Text style={styles.menuText}>{item.scientific_name}</Text>
                </View>}
                containerStyle={{ borderBottomWidth: 0, marginBottom: 20 }}
                />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}

            />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontWeight: 'bold'
  }
});