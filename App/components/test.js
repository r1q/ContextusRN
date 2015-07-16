/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  ListView,
  Image,
  PixelRatio
} = React;

var ParseComponent = require('parse-react/class');
// var moment = require('moment');
var moment = require('moment-twitter');
// var ParseReact = require('parse-react');
// var ParseComponent = require('parse-react/class');
var getPostInstance = function (model) {
  var Post = Parse.Object.extend('Posts');
  return new Post(model);
}
class Test extends ParseComponent {
  constructor() {
    super();
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  }
  // By extending ParseComponent, it is possible to observe queries
  observe(props, state) {
    var items = new Parse.Query('Posts').ascending('date');
    return {
      items: items
    };
  }
  _getDataSource() {
    return this.ds.cloneWithRows(this.data.items);
  }
  _getDate(date) {
    // return new Date(date).toString();
    return moment(date).twitter();
  }
  renderRow(rowData){
    var post = getPostInstance({
      id:rowData.objectId,
      title: rowData.title,
      avatar: rowData.avatar,
      image: rowData.image,
      publishedAt: rowData.publishedAt
    });

    return (
      <View style={styles.container}>
        <View style={styles.Post}>
          <Image style={styles.avatar} source={{uri: post.get('avatar')}}/>
          <View style={styles.PostBody}>
            <View style={styles.PostHeader}>
              <Text style={styles.author}>TechCrunch</Text>
              <Text style={styles.date}>{this._getDate(post.get('publishedAt'))}</Text>
            </View>
              <Text style={styles.title}>{post.get('title')}</Text>
              <Image style={styles.image} source={{uri: post.get('image')}}/>
          </View>
      </View>
    </View>
    );
  }
  render() {
    // Render MyComponent
    // ...
    return (
      <ListView

        dataSource = {this._getDataSource()}
        renderRow = {this.renderRow.bind(this)}
        initialListSize={5}
        style = {styles.listView} />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  Post: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: '#EEEEEE',
    borderTopColor: '#EEEEEE',
    borderLeftColor: '#FFFFFF',
    borderRightColor: '#FFFFFF',
    borderWidth: 1 / PixelRatio.get()
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius:5,
    marginRight: 7,
    marginLeft: 10
  },
  PostHeader: {
    flex: 1,
    flexDirection: 'row',
    // borderBottomColor: '#EEEEEE',
    // borderTopColor: '#EEEEEE',
    // borderLeftColor: '#FFFFFF',
    // borderRightColor: '#FFFFFF',
    // borderWidth: 1
  },

  author: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: -2,
    textAlign: 'left',
    width: 295,
  },
  date: {
    fontSize: 11,
    marginTop: -2,
    fontWeight: '400',
    color: '#b7b7b7',
    textAlign: 'right'
  },
  title: {
    fontSize: 12,
    fontWeight: '400',
    width: 320,
  },
  image: {
    width: 310,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
    marginTop: 10
  },

});

module.exports = Test;
