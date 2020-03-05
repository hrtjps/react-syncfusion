import React, { useRef } from "react";
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Search, Toolbar, Edit } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import {data} from './datasource';

const TablePage = () => {
  const pageSettings = { pageSize: 20 }
  const sortSettings = { columns: [
                          {field: 'EmployeeID', direction: 'Ascending' }
                      ] }; 
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Search'];
  const grid = useRef(null);
  
  const actionBegin = (args) => {
    console.log(args)
    if (grid && (args.requestType === 'beginEdit' || args.requestType === 'add')) {
      console.log(grid)
      const cols = grid.current.columns;
      for (const col of cols) {
        if (col.field === "CustomerID") {
          col.visible = true;
        }
        else if (col.field === "ShipCountry") {
          col.visible = false;
        }
      }
    }
  }
  const actionComplete = (args) => {
    console.log(args)
    if (grid && args.requestType === 'save') {
      console.log(grid)
      const cols = grid.current.columns;
      for (const col of cols) {
        if (col.field === "CustomerID") {
          col.visible = false;
        }
        else if (col.field === "ShipCountry") {
          col.visible = true;
        }
      }
    }
  }

  return (
    <>
      <section>
        <h1>Table Page</h1>
        <GridComponent dataSource={data} allowPaging={true} pageSettings={ pageSettings } 
          actionBegin={actionBegin} actionComplete={actionComplete} editSettings={editOptions}
          allowSorting={true} sortSettings={ sortSettings }  toolbar={toolbarOptions}
          ref={grid}
          >
          <ColumnsDirective>
              <ColumnDirective field='EmployeeID' width='100'/>
              <ColumnDirective field='OrderID' width='100' />
              <ColumnDirective field='CustomerID' width='100'/>
              <ColumnDirective field='Freight' width='100' format="C2"/>
              <ColumnDirective field='ShipCountry' width='100'/>
          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter, Group, Search, Toolbar, Edit]} />
        </GridComponent>
      </section>
    </>
  );
};

export default TablePage;