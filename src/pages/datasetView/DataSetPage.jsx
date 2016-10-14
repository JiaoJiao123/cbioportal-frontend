import * as React from "react";
import { Table } from 'react-bootstrap';
import { actionCreators, mapStateToProps } from './duck';
import { connect } from 'react-redux';
interface DataSetPageProps
{
}

interface DataSetPageState
{
}
export default class DataSetPage extends React.Component<DataSetPageProps, DataSetPageState>
{
    render()
    {
        const rows = [];
        this.props.datasets.forEach((item) => {
            rows.push(
                <tr>
                <td>{item.get('name')}</td>
                <td>{item.get('reference')}</td>
                <td>{item.get('all')}</td>
                <td>{item.get('sequenced')}</td>
                <td>{item.get('cna')}</td>
                <td>{item.get('tumor_RNA_seq')}</td>
                <td>{item.get('tumor_RNA_microarray')}</td>
                <td>{item.get('tumor_miRNA')}</td>
                <td>{item.get('methylation')}</td>
                <td>{item.get('RPPA')}</td>
                <td>{item.get('complete')}</td>
                </tr>
            );
        });

                return <Table striped>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>reference</th>
                        <th>all</th>
                        <th>sequenced</th>
                        <th>CNA</th>
                        <th>tumor_RNA_seq</th>
                        <th>tumor_RNA_microarray</th>
                        <th>tumor_miRNA</th>
                        <th>methylation</th>
                        <th>RPPA</th>
                        <th>complete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>

                </Table>;

            //return <a href="https://github.com/cBioPortal/datahub/blob/master/public/paac_jhu_2014.tar.gz" download>Download file</a>
    }
};
