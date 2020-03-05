import React from "react";
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Search, Toolbar } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import {data} from './datasource';

const TablePage = () => {
  const pageSettings = { pageSize: 20 }
  const sortSettings = { columns: [
                          {field: 'EmployeeID', direction: 'Ascending' }
                      ] }; 
  const toolbarOptions = ['Search'];
  return (
    <>
      <section>
        <h1>Table Page</h1>
        <GridComponent dataSource={data} allowPaging={true} pageSettings={ pageSettings }
            allowSorting={true} sortSettings={ sortSettings }  toolbar={toolbarOptions}>
            <ColumnsDirective>
                <ColumnDirective field='EmployeeID' width='100'/>
                <ColumnDirective field='OrderID' width='100' />
                <ColumnDirective field='CustomerID' width='100'/>
                <ColumnDirective field='Freight' width='100' format="C2"/>
                <ColumnDirective field='ShipCountry' width='100'/>
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group, Search, Toolbar]} />
        </GridComponent>
      </section>
    </>
  );
};

export default TablePage;