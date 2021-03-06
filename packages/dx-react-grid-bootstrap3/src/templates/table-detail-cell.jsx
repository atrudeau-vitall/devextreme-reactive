import * as React from 'react';
import classNames from 'clsx';
import * as PropTypes from 'prop-types';

export const TableDetailCell = ({
  colSpan,
  children,
  className,
  tableColumn, tableRow, row,
  ...restProps
}) => (
  <td
    colSpan={colSpan}
    className={classNames('active', className)}
    {...restProps}
  >
    {children}
  </td>
);

TableDetailCell.propTypes = {
  colSpan: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object,
  row: PropTypes.any,
};

TableDetailCell.defaultProps = {
  colSpan: 1,
  className: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined,
  children: undefined,
};
