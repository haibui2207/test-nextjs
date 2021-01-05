import React from 'react';
import PropTypes from 'prop-types';
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss';

const JssProviderCustom = ({ children }) => {
  const registry = new SheetsRegistry();
  const generateId = createGenerateId();

  return (
    <JssProvider registry={registry} generateId={generateId}>
      {children}
    </JssProvider>
  );
};
JssProviderCustom.propTypes = { children: PropTypes.node.isRequired };

export default JssProviderCustom;
