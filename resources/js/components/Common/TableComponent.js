import React from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
const TableComponent = (props) => {
    const {columns, rows, actions} = props;
    return(
        <Table striped bordered hover>
            <thead>
            <tr>
                {
                    columns.map(col => {
                        return <th key={`head-${col.id}`}>{col.label}</th>
                    })
                }
                {
                    actions.length ?
                        <th>
                            Actions
                        </th>
                        : null
                }
            </tr>
            </thead>
            <tbody>
            {
                rows.length > 0 ?
                    rows.map(row => {
                        return (
                            <tr key={`row-${row.id}`}>
                                {
                                    columns.map((col,idx) => {
                                        const value = row[col.id];
                                        return (
                                            <td key={`cell-${row.id}-${idx}`}>{value}</td>
                                        )
                                    })
                                }

                                {
                                    actions.length ?
                                        <td>
                                            {actions.map(act => {
                                                return (
                                                    <i key={`action-${act.label}-${row.id}`} className={act.className} style={{cursor: "pointer"}} onClick={act.handle.bind(null, row.id)}></i>
                                                )
                                            })}
                                        </td>
                                        : null
                                }
                            </tr>
                        )
                    })
                    :
                    <tr><td colSpan={columns.length+1}>No Record Found.</td></tr>
            }
            </tbody>
        </Table>
    );
}

export default TableComponent;
