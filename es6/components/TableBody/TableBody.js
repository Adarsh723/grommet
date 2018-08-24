import React from 'react';

import { TableContext } from '../Table/TableContext';
import { StyledTableBody } from '../Table/StyledTable';
import { doc } from './doc';

export var TableBody = function TableBody(props) {
  return React.createElement(
    TableContext.Provider,
    { value: 'body' },
    React.createElement(StyledTableBody, props)
  );
};

if (process.env.NODE_ENV !== 'production') {
  doc(TableBody);
}