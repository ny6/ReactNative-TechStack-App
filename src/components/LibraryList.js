import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const LibraryList = ({ libraries }) => (
  <FlatList
    data={libraries}
    renderItem={x => <ListItem {...x} />}
    keyExtractor={({ id }) => id}
  />
);

LibraryList.propTypes = {
  libraries: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = ({ libraries }) => ({ libraries });

export default connect(mapStateToProps)(LibraryList);
