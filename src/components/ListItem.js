import React, { Component } from 'react';
import {
  Text, TouchableWithoutFeedback, View, LayoutAnimation,
} from 'react-native';
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

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const { item, func, selected } = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => func(item.id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{item.title}</Text>
          </CardSection>
          {item.id === selected && (
            <CardSection>
              <Text style={{ flex: 1 }}>{item.description}</Text>
            </CardSection>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

ListItem.defaultProps = { selected: null };
ListItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
  func: PropTypes.func.isRequired,
  selected: PropTypes.number,
};

const mapStateToProps = ({ selected }) => ({ selected });

export default connect(mapStateToProps, { func: selectLibrary })(ListItem);
