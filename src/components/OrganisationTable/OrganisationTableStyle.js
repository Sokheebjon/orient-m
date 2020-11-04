import styled from "styled-components";
import { SelectPicker, Table } from "rsuite";
import Plus from "../Icons/Plus";

const { HeaderCell, Column } = Table;

export const OrganisationTableDiv = styled.div`
    overflow: hidden !important;
    width: 90%;
`;

export const SelectPickerInput = styled(SelectPicker)`
  width: 20vw !important;

  .rs-picker-toggle {
    background-color: transparent !important;
    border-color: rgba(255, 255, 255, 0.4) !important;
  }
`;

export const CustomIcon = styled(Plus)``;

export const CustomTable = styled(Table)`
  background: rgba(107, 90, 90, 0.2);
  color: white !important;
  border-radius: 5px;
  font-family: Montserrat !important;


  .rs-table-row {
    border: none !important;
    font-size: 14px !important;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2) !important;
    }
  }

  .rs-table-cell {
    background-color: transparent !important;
    height: 59px !important;
  }

  .rs-table-row-header {
    background-color: transparent !important;
    height: 59px !important;
  }

  .rs-table-cell-content{
      height: 59px !important;
  }
`;

export const CustomHeaderCell = styled(HeaderCell)`
  .rs-table-cell-content {
    font-size: 15px !important;
    color: white !important;
    font-family: Montserrat !important;
  }

  .rs-table-row-header {
    background-color: transparent !important;
    height: 59px !important;
  }
`;

export const CustomColumn = styled(Column)`
    height: 59px !important;

    
  .rs-table-cell {
    height: 59px !important;
  }
    
  .rs-table-cell-content{
      height: 59px !important;
  }
`;
