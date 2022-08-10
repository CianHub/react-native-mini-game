import React from 'react';

export const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#ddb52f',
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12,
  },
});
