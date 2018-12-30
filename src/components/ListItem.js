import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { selectLibrary } from '../action';

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};
const { titleStyle } = styles;

const ListItem = ({ item, func, selected }) => (
  <TouchableWithoutFeedback onPress={() => func(item.id)}>
    <View>
      <CardSection>
        <Text style={titleStyle}>{item.title}</Text>
      </CardSection>
      {item.id === selected && <Text>{item.description}</Text>}
    </View>
  </TouchableWithoutFeedback>
);

ListItem.defaultProps = { selected: null };
ListItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
  func: PropTypes.func.isRequired,
  selected: PropTypes.number,
};

const mapStateToProps = ({ selected }) => ({ selected });

export default connect(mapStateToProps, { func: selectLibrary })(ListItem);
