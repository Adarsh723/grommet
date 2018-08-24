function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

import { TableContext } from '../Table/TableContext';
import { StyledTableHeader } from '../Table/StyledTable';
import { doc } from './doc';

export var TableHeader = function (_Component) {
  _inherits(TableHeader, _Component);

  function TableHeader() {
    _classCallCheck(this, TableHeader);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TableHeader.prototype.render = function render() {
    return React.createElement(
      TableContext.Provider,
      { value: 'header' },
      React.createElement(StyledTableHeader, this.props)
    );
  };

  return TableHeader;
}(Component);

if (process.env.NODE_ENV !== 'production') {
  doc(TableHeader);
}