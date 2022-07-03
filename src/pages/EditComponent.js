import React, { Component } from 'react';
import { Button, Checkbox, TextInput, Tab, Tabs, TabList, TabPanel, TabPanels, Dropdown } from '@carbon/react';
import DataTable from '@carbon/react/lib/components/DataTable/DataTable';
import TableContainer from '@carbon/react/lib/components/DataTable/TableContainer';
import Table from '@carbon/react/lib/components/DataTable/Table';
import TableBody from '@carbon/react/lib/components/DataTable/TableBody';
import TableCell from '@carbon/react/lib/components/DataTable/TableCell';
import TableHead from '@carbon/react/lib/components/DataTable/TableHead';
import TableRow from '@carbon/react/lib/components/DataTable/TableRow';
import TableHeader from '@carbon/react/lib/components/DataTable/TableHeader';
import TreeView from '@carbon/react/lib/components/TreeView/TreeView';
import TreeNode from '@carbon/react/lib/components/TreeView/TreeNode';
import CaseList from './CaseList';

class EditComponet extends Component {
  render() {
    /* Items definition for Dropdown list */
    const itemsOfLob = [
      {
        id: 'option-1',
        label: 'SO',
      },
      {
        id: 'option-2',
        label: 'ITS',
      },
      {
        id: 'option-3',
        label: 'AMS',
      },
      {
        id: 'option-4',
        label: 'GBS',
      },
      {
        id: 'option-4',
        label: 'SWGS',
      },
    ];
    const itemsOfNumOfRef = [
      {
        id: 'option-1',
        label: 'Max',
      },
      {
        id: 'option-2',
        label: '0',
      },
      {
        id: 'option-3',
        label: '1',
      },
    ];
    const itemsOfCountry = [
      {
        id: 'option-1',
        label: 'Unit States[US]',
      },
      {
        id: 'option-2',
        label: 'Australia[AU]',
      },
      {
        id: 'option-3',
        label: 'Canada[CA]',
      },
    ];
    const itemsOfAccqT = [
      {
        id: 'option-1',
        label: 'Assigned',
      },
      {
        id: 'option-2',
        label: 'Lease FMV',
      },
      {
        id: 'option-3',
        label: 'Lease Payout',
      },
      {
        id: 'option-4',
        label: 'Purchase',
      },
    ];
    const itemsOfSuppTyp = [
      {
        id: 'option-1',
        label: 'Internal',
      },
      {
        id: 'option-2',
        label: 'External',
      },
    ];
    const itemsOfOnWarr = [
      {
        id: 'option-1',
        label: 'Paid OTC',
      },
      {
        id: 'option-2',
        label: 'Paid Monthly',
      },
      {
        id: 'option-3',
        label: 'Paid Quarterly',
      },
      {
        id: 'option-4',
        label: 'Paid Annually',
      },
    ];
    const itemsOfDeliveryPhase = [
      {
        id: 'option-1',
        label: 'Steady State',
      },
      {
        id: 'option-2',
        label: 'Transition',
      },
      {
        id: 'option-3',
        label: 'Transformation',
      },
    ];
    const itemsOfEntryMode = [
      {
        id: 'option-1',
        label: 'No Change',
      },
      {
        id: 'option-2',
        label: 'Annual % - Stairstep',
      },
      {
        id: 'option-3',
        label: 'Annual % - Spread Monthly',
      },
      {
        id: 'option-4',
        label: 'Annual Qty - Stairstep',
      },
      {
        id: 'option-5',
        label: 'Annual Qty - Spread Monthly',
      },
      {
        id: 'option-6',
        label: 'Monthly Qty',
      },
      {
        id: 'option-7',
        label: 'Ratio of Another Rollout',
      },
      {
        id: 'option-8',
        label: 'Formula',
      },
    ];
    const itemsOfApplyIn = [
      {
        id: 'option-1',
        label: 'Jan',
      },
      {
        id: 'option-2',
        label: 'Feb',
      },
      {
        id: 'option-3',
        label: 'Mar',
      },
      {
        id: 'option-4',
        label: 'Apr',
      },
      {
        id: 'option-5',
        label: 'May',
      },
      {
        id: 'option-6',
        label: 'June',
      },
      {
        id: 'option-7',
        label: 'July',
      },
      {
        id: 'option-8',
        label: 'Aug',
      },
      {
        id: 'option-9',
        label: 'Sep',
      },
      {
        id: 'option-10',
        label: 'Oct',
      },
      {
        id: 'option-11',
        label: 'Nov',
      },
      {
        id: 'option-12',
        label: 'Dec',
      },
    ];
    const itemsOfNumber = [
      {
        id: 'option-1',
        label: '1',
      },
      {
        id: 'option-2',
        label: '2',
      },
      {
        id: 'option-2',
        label: '3',
      },
    ];
    const itemsOfCurrency = [
      {
        id: 'option-1',
        label: 'USD-U',
      },
    ];
    const itemsOfYear = [
      {
        id: 'option-1',
        label: '2022',
      },
      {
        id: 'option-1',
        label: '2021',
      },
      {
        id: 'option-1',
        label: '2020',
      },
    ];
    const itemsOfEnv = [
      {
        id: 'option-1',
        label: 'Mainframe',
      },
      {
        id: 'option-1',
        label: 'Security',
      },
    ];
    const itemsOfHWType = [
      {
        id: 'option-1',
        label: 'Config',
      },
      {
        id: 'option-1',
        label: 'Library',
      },
      {
        id: 'option-1',
        label: 'Monitor',
      },
    ];
    const itemsOfProdN = [
      {
        id: 'option-1',
        label: '3590 B11',
      },
      {
        id: 'option-1',
        label: 'SP V5030',
      },
      {
        id: 'option-1',
        label: 'Server 6C',
      },
    ];
    const itemsOfProdD = [
      {
        id: 'option-1',
        label: '2005-B32',
      },
      {
        id: 'option-1',
        label: '2054-E01',
      },
      {
        id: 'option-1',
        label: '20564SU',
      },
    ];
    const itemsOfMRT = [
      {
        id: 'option-1',
        label: 'SO.MRT.GLOBAL.WW_COU',
      },
    ];

    /* Header & Row for DataTable in Overview Editor */
    let input_headers = [
      {
        key: 'column1',
        header: 'column1',
      },
      {
        key: 'column2',
        header: 'column2',
      },
    ];
    const input_rows = [
      {
        id: 'a',
        key: 'key1',
        column1: <Dropdown
          ariaLabel="Dropdown"
          id="lob-dropdown"
          items={itemsOfLob}
          size="sm"
          type="inline"
          label="SO"
          titleText="Line of Business:"
        />,
        column2: <Dropdown
          ariaLabel="Dropdown"
          id="NumRef-dropdown"
          items={itemsOfNumOfRef}
          type="inline"
          size="sm"
          label="Max"
          titleText="Number of Refreshes:"
        />,
      },
      {
        id: 'b',
        key: 'key2',
        column1: <Dropdown
          ariaLabel="Dropdown"
          id="Country-dropdown"
          items={itemsOfCountry}
          type="inline"
          size="sm"
          label="Unit States[US]"
          titleText="Country:"
        />,
        column2: <Dropdown
          ariaLabel="Dropdown"
          id="SuppTyp-dropdown"
          items={itemsOfSuppTyp}
          type="inline"
          size="sm"
          label="Internal"
          titleText="Supplier Type:"
        />,
      },
      {
        id: 'c',
        key: 'key3',
        column1: <TextInput
          id="CurrU-textinput"
          inline="true"
          size="sm"
          labelText="Currency Used:"
        />,
        column2: <TextInput
          id="HWDiscLP-textinput"
          inline="true"
          size="sm"
          labelText="HW Disc % off List Price:"
        />,
      },
      {
        id: 'd',
        key: 'key4',
        column1: <Dropdown
          ariaLabel="Dropdown"
          id="AccquisitionType-dropdown"
          items={itemsOfAccqT}
          type="inline"
          size="sm"
          label="Assigned"
          titleText="Accquisition Type:"
        />,
        column2: <TextInput
          id="MaintDiscoffLP-textinput"
          inline="true"
          size="sm"
          labelText="Maint Disc % off List Price:"
        />,
      },
      {
        id: 'e',
        key: 'key5',
        column1: <TextInput
          id="TypeOfProdNum-textinput"
          inline="true"
          size="sm"
          labelText="Type of Product Number:"
        />,
        column2: <TextInput
          id="IntHWMarkdown-textinput"
          inline="true"
          size="sm"
          labelText="Internal HW Markdown %:"
        />,
      },
      {
        id: 'f',
        key: 'key6',
        column1: <TextInput
          id="Description-textinput"
          inline="true"
          size="sm"
          labelText="Description:"
        />,
        column2: <TextInput
          id="IntWarrandShip-textinput"
          inline="true"
          size="sm"
          labelText="Internal Warranty and Ship %:"
        />,
      },
      {
        id: 'g',
        key: 'key7',
        column1: <TextInput
          id="ListUnitPrice:-textinput"
          inline="true"
          size="sm"
          labelText="List Unit Price:"
        />,
        column2: <TextInput
          id="IntMaintMarkdown-textinput"
          inline="true"
          size="sm"
          labelText="Internal Maint Markdown %:"
        />,
      },
      {
        id: 'h',
        key: 'key8',
        column1: <TextInput
          id="LifeInMonths-textinput"
          inline="true"
          size="sm"
          labelText="Life in Months:"
        />,
        column2: <TextInput
          id="HWSalesTaxRates-textinput"
          inline="true"
          size="sm"
          labelText="HW Sales Tax Rates %:"
        />,
      },
      {
        id: 'i',
        key: 'key9',
        column1: <TextInput
          id="WarrantyPeriod(M)-textinput"
          inline="true"
          size="sm"
          labelText="Warranty Period(Months):"
        />,
        column2: <TextInput
          id="MaintSalesTaxRates-textinput"
          inline="true"
          size="sm"
          labelText="Maintenance Sales Tax Rates %:"
        />,
      },
      {
        id: 'j',
        key: 'key10',
        column1: <Dropdown
          ariaLabel="Dropdown"
          id="OnWarrantyMaintCost-dropdown"
          items={itemsOfOnWarr}
          type="inline"
          size="sm"
          label="Paid OTC"
          titleText="On Warranty Maint Cost:"
          direction="top"
        />,
        column2: <TextInput
          id="MaintDiscoffLP-textinput"
          inline="true"
          size="sm"
          labelText="Maint Disc % off List Price:"
        />,
      },
    ];
    let Checkbox_headers = [
      {
        key: 'column1',
        header: 'column1',
      },
      {
        key: 'column2',
        header: 'column2',
      },
      {
        key: 'column3',
        header: 'column3',
      },
      {
        key: 'column4',
        header: 'column4',
      },
      {
        key: 'column5',
        header: 'column5',
      },
      {
        key: 'column6',
        header: 'column6',
      },
    ];
    const Checkbox_rows = [
      {
        id: 'ca',
        key: 'keyc1',
        column1: <Checkbox labelText={"Copy Across"} id="checkbox-CopyAcross" />,
        column2: <Checkbox labelText={"Spread Base"} id="checkbox-SpreadBase" />,
      },
    ];
    let rollout_headers = [
      {
        key: 'column1',
        header: '',
      },
      {
        key: 'column2',
        header: 'Month/Year',
      },
      {
        key: 'column3',
        header: '2022',
      },
      {
        key: 'column4',
        header: '2023',
      },
      {
        key: 'column5',
        header: '2024',
      },
      {
        key: 'column6',
        header: '2025',
      },
      {
        key: 'column7',
        header: '2026',
      },
      {
        key: 'column8',
        header: '2027',
      },
    ];
    const rollout_rows = [
      {
        id: 'rollout1',
        key: 'keyr1',
        column1: '1',
        column2: 'Base',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout2',
        key: 'keyr2',
        column1: '2',
        column2: 'Chg %',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout3',
        key: 'keyr3',
        column1: '3',
        column2: '',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout4',
        key: 'keyr4',
        column1: '4',
        column2: 'Qty',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout5',
        key: 'keyr5',
        column1: '5',
        column2: 'Jan.',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout6',
        key: 'keyr6',
        column1: '6',
        column2: 'Feb.',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout7',
        key: 'keyr7',
        column1: '7',
        column2: 'Mar.',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout8',
        key: 'keyr8',
        column1: '8',
        column2: 'Apr.',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout9',
        key: 'keyr9',
        column1: '9',
        column2: 'May',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout10',
        key: 'keyr10',
        column1: '10',
        column2: 'June',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout11',
        key: 'keyr11',
        column1: '11',
        column2: 'July',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout12',
        key: 'keyr12',
        column1: '12',
        column2: 'Aug.',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout13',
        key: 'keyr13',
        column1: '13',
        column2: 'Sept.',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout14',
        key: 'keyr14',
        column1: '14',
        column2: 'Oct.',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout15',
        key: 'keyr15',
        column1: '15',
        column2: 'Nov.',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout16',
        key: 'keyr16',
        column1: '16',
        column2: 'Dec.',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
    ];
    /* Header & Row for DataTable in Rollout Editor */
    let TierR_headers = [
      {
        key: 'col_empty',
        header: '',
      },
      {
        key: 'Description',
        header: 'Description',
      },
      {
        key: 'Tier1',
        header: 'Tier1',
      },
      {
        key: 'Tier2',
        header: 'Tier2',
      },
      {
        key: 'Tier3',
        header: 'Tier3',
      },
      {
        key: 'Tier4',
        header: 'Tier4',
      },
      {
        key: 'Tier5',
        header: 'Tier5',
      },
    ];
    const TierR_rows = [
      {
        id: 'tier1',
        key: 'keyt1',
        col_empty: "Qty",
        Description: "",
        Tier1: 1.00,
        Tier2: 1.00,
        Tier3: 1.00,
        Tier4: 1.00,
        Tier5: 1.00,
      },
      {
        id: 'tier2',
        key: 'keyt2',
        col_empty: "Linked B",
        Description: "",
        Tier1: 1.00,
        Tier2: 1.00,
        Tier3: 1.00,
        Tier4: 1.00,
        Tier5: 1.00,
      },
      {
        id: 'tier3',
        key: 'keyt3',
        col_empty: "Derived",
        Description: "",
        Tier1: 1.00,
        Tier2: 1.00,
        Tier3: 1.00,
        Tier4: 1.00,
        Tier5: 1.00,
      },
    ]
    let inputR_headers = [
      {
        key: 'column1',
        header: 'column1',
      },
      {
        key: 'column2',
        header: 'column2',
      },
      {
        key: 'column3',
        header: 'column3',
      },
      {
        key: 'column4',
        header: 'column4',
      },
      {
        key: 'column5',
        header: 'column5',
      },
      {
        key: 'column6',
        header: 'column6',
      },
    ];
    const inputR_rows = [
      {
        id: 'ra',
        key: 'keyr1',
        column1: <Button onClick={<CaseList></CaseList>}>Display Baseline</Button>,
        column2: <Dropdown
          ariaLabel="Dropdown"
          id="Number-dropdown"
          items={itemsOfNumber}
          size="sm"
          label="1"
          titleText=""
        />,
        column3: <DataTable rows={TierR_rows} headers={TierR_headers}>
          {({
            rows,
            getRowProps,
            headers,
            getHeaderProps,
            getTableProps,
          }) => (
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map(header => (
                    <TableHeader
                      key={header.key}
                      {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                  <TableHeader />
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.id} {...getRowProps({ row })}>
                    {row.cells.map(cell => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </DataTable>
      },
      {
        id: 'rb',
        key: 'keyr2',
        column1: <Checkbox labelText={"Copy Across"} id="checkboxR-CopyAcross" />,
        column2: <Checkbox labelText={"Spread Base"} id="checkboxR-SpreadBase" />,
      },
      {
        id: 'rc',
        key: 'keyr3',
        column1: <Dropdown
          ariaLabel="Dropdown"
          id="EntryMode-dropdown"
          items={itemsOfEntryMode}
          size="sm"
          label="No Change"
          titleText="EntryMode:"
          direction='top'
        />,
        column2: <TextInput
          id="StarQty-textinput"
          size="sm"
          labelText="Starting Qty :"
        />,
        column3: <Dropdown
          ariaLabel="Dropdown"
          id="ApplyIn-dropdown"
          items={itemsOfApplyIn}
          size="sm"
          label="Jan"
          titleText="Apply in:"
          direction='top'
        />,
      },
    ];
    let rolloutR_headers = [
      {
        key: 'column1',
        header: '',
      },
      {
        key: 'column2',
        header: 'Month/Year',
      },
      {
        key: 'column3',
        header: '2022',
      },
      {
        key: 'column4',
        header: '2023',
      },
      {
        key: 'column5',
        header: '2024',
      },
      {
        key: 'column6',
        header: '2025',
      },
      {
        key: 'column7',
        header: '2026',
      },
      {
        key: 'column8',
        header: '2027',
      },
    ];
    const rolloutR_rows = [
      {
        id: 'rollout1',
        key: 'keyr1',
        column1: '1',
        column2: 'Base',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout2',
        key: 'keyr2',
        column1: '2',
        column2: 'Chg %',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout3',
        key: 'keyr3',
        column1: '3',
        column2: '',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout4',
        key: 'keyr4',
        column1: '4',
        column2: 'Qty',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout5',
        key: 'keyr5',
        column1: '5',
        column2: 'Jan.',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout6',
        key: 'keyr6',
        column1: '6',
        column2: 'Feb.',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout7',
        key: 'keyr7',
        column1: '7',
        column2: 'Mar.',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout8',
        key: 'keyr8',
        column1: '8',
        column2: 'Apr.',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout9',
        key: 'keyr9',
        column1: '9',
        column2: 'May',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout10',
        key: 'keyr10',
        column1: '10',
        column2: 'June',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout11',
        key: 'keyr11',
        column1: '11',
        column2: 'July',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout12',
        key: 'keyr12',
        column1: '12',
        column2: 'Aug.',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout13',
        key: 'keyr13',
        column1: '13',
        column2: 'Sept.',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout14',
        key: 'keyr14',
        column1: '14',
        column2: 'Oct.',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout15',
        key: 'keyr15',
        column1: '15',
        column2: 'Nov.',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
      {
        id: 'rollout16',
        key: 'keyr16',
        column1: '16',
        column2: 'Dec.',
        column3: '11',
        column4: '11',
        column5: '11',
        column6: '11',
        column7: '11',
        column8: '11',
      },
    ];
    let inputL_headers = [
      {
        key: 'column1',
        header: 'column1',
      },
      {
        key: 'column2',
        header: 'column2',
      },
      {
        key: 'column3',
        header: 'column3',
      },
    ];
    const inputL_rows = [
      {
        id: 'la',
        key: 'keyl1',
        column1: <Dropdown
          ariaLabel="Dropdown"
          id="Country-dropdown"
          items={itemsOfCountry}
          size="sm"
          type="inline"
          label="Unit States[US]"
          titleText="Country: "
        />,
        column2: <Dropdown
          ariaLabel="Dropdown"
          id="Currency-dropdown"
          items={itemsOfCurrency}
          size="sm"
          type="inline"
          label="USD-U"
          titleText="Currency: "
        />,
        column3: <Dropdown
          ariaLabel="Dropdown"
          id="Year-dropdown"
          items={itemsOfYear}
          size="sm"
          type="inline"
          label="2022"
          titleText="Year: "
        />,
      },
      {
        id: 'lb',
        key: 'keyl2',
        column1: <Dropdown
          ariaLabel="Dropdown"
          id="Env-dropdown"
          items={itemsOfEnv}
          size="sm"
          type="inline"
          label="Mainframe"
          titleText="Environment: "
        />,
        column2: <Dropdown
          ariaLabel="Dropdown"
          id="Vendor-dropdown"
          items={itemsOfSuppTyp}
          size="sm"
          type="inline"
          label="Internal"
          titleText="Vendor: "
        />,
        column3: <Dropdown
          ariaLabel="Dropdown"
          id="HWType-dropdown"
          items={itemsOfHWType}
          size="sm"
          type="inline"
          label="Config"
          titleText="Hardware Type: "
        />,
      },
      {
        id: 'lc',
        key: 'keyl3',
        column1: <Dropdown
          ariaLabel="Dropdown"
          id="ProdN-dropdown"
          items={itemsOfProdN}
          size="sm"
          type="inline"
          label="3590 B11"
          titleText="Product Name:"
        />,
        column2: <Dropdown
          ariaLabel="Dropdown"
          id="ProdD-dropdown"
          items={itemsOfProdD}
          size="sm"
          type="inline"
          label="2005-B32"
          titleText="Product Details:"
        />,
      },
      {
        id: 'ld',
        key: 'keyl4',
        column1: <Dropdown
          ariaLabel="Dropdown"
          id="MRT-dropdown"
          items={itemsOfMRT}
          size="sm"
          type="inline"
          label="SO.MRT.GLOBAL.WW_COU"
          titleText="MRT:"
        />,
      },
      {
        id: 'le',
        key: 'keyl5',
        column1: "Hardware Rate Data Version: 5014",
      },

    ];
    let loadC_headers = [
      {
        key: 'checkbox',
        header: '',
      },
      {
        key: 'Country',
        header: 'Country',
      },
      {
        key: 'Currency',
        header: 'Currency',
      },
      {
        key: 'Year',
        header: 'Year',
      },
      {
        key: 'Env',
        header: 'Environment',
      },
      {
        key: 'Vendor',
        header: 'Vendor',
      },
      {
        key: 'HWType',
        header: 'Hardware Type',
      },
      {
        key: 'ProdName',
        header: 'Product name',
      },
      {
        key: 'ProdDetail',
        header: 'Product Details',
      },
      {
        key: 'AcquisitionCost',
        header: 'Acquisition Cost',
      },
    ];
    const loadC_rows = [
      {
        id: 'lc1',
        key: 'keyl1',
        checkbox: <Checkbox labelText={""} id="cb1" />,
        Country: 'US',
        Currency: 'USD-U',
        Year: '2022',
        Env: 'iSeries',
        Vendor: 'IBM',
        HWType: '',
        ProdName: '3590 B11',
        ProdDetail: '',
        AcquisitionCost: '20',
      },
      {
        id: 'lc2',
        key: 'keyl2',
        checkbox: <Checkbox labelText={""} id="cb2" />,
        Country: 'US',
        Currency: 'USD-U',
        Year: '2022',
        Env: 'iSeries',
        Vendor: 'IBM',
        HWType: '',
        ProdName: '3590 B11',
        ProdDetail: '',
        AcquisitionCost: '20',
      },
      {
        id: 'lc3',
        key: 'keyl3',
        checkbox: <Checkbox labelText={""} id="cb3" />,
        Country: 'US',
        Currency: 'USD-U',
        Year: '2022',
        Env: 'iSeries',
        Vendor: 'IBM',
        HWType: '',
        ProdName: '3590 B11',
        ProdDetail: '',
        AcquisitionCost: '20',
      },
      {
        id: 'lc4',
        key: 'keyl4',
        checkbox: <Checkbox labelText={""} id="cb4" />,
        Country: 'US',
        Currency: 'USD-U',
        Year: '2022',
        Env: 'iSeries',
        Vendor: 'IBM',
        HWType: '',
        ProdName: '3590 B11',
        ProdDetail: '',
        AcquisitionCost: '20',
      },
      {
        id: 'lc5',
        key: 'keyl5',
        checkbox: <Checkbox labelText={""} id="cb5" />,
        Country: 'US',
        Currency: 'USD-U',
        Year: '2022',
        Env: 'iSeries',
        Vendor: 'IBM',
        HWType: '',
        ProdName: '3590 B11',
        ProdDetail: '',
        AcquisitionCost: '20',
      },
      {
        id: 'lc6',
        key: 'keyl6',
        checkbox: <Checkbox labelText={""} id="cb6" />,
        Country: 'US',
        Currency: 'USD-U',
        Year: '2022',
        Env: 'iSeries',
        Vendor: 'IBM',
        HWType: '',
        ProdName: '3590 B11',
        ProdDetail: '',
        AcquisitionCost: '20',
      },
      {
        id: 'lc7',
        key: 'keyl7',
        checkbox: <Checkbox labelText={""} id="cb7" />,
        Country: 'US',
        Currency: 'USD-U',
        Year: '2022',
        Env: 'iSeries',
        Vendor: 'IBM',
        HWType: '',
        ProdName: '3590 B11',
        ProdDetail: '',
        AcquisitionCost: '20',
      },
      {
        id: 'lc8',
        key: 'keyl8',
        checkbox: <Checkbox labelText={""} id="cb8" />,
        Country: 'US',
        Currency: 'USD-U',
        Year: '2022',
        Env: 'iSeries',
        Vendor: 'IBM',
        HWType: '',
        ProdName: '3590 B11',
        ProdDetail: '',
        AcquisitionCost: '20',
      },
      {
        id: 'lc9',
        key: 'keyl9',
        checkbox: <Checkbox labelText={""} id="cb9" />,
        Country: 'US',
        Currency: 'USD-U',
        Year: '2022',
        Env: 'iSeries',
        Vendor: 'IBM',
        HWType: '',
        ProdName: '3590 B11',
        ProdDetail: '',
        AcquisitionCost: '20',
      },
      {
        id: 'lc10',
        key: 'keyl10',
        checkbox: <Checkbox labelText={""} id="cb10" />,
        Country: 'US',
        Currency: 'USD-U',
        Year: '2022',
        Env: 'iSeries',
        Vendor: 'IBM',
        HWType: '',
        ProdName: '3590 B11',
        ProdDetail: '',
        AcquisitionCost: '20',
      },
      {
        id: 'lc11',
        key: 'keyl11',
        checkbox: <Checkbox labelText={""} id="cb11" />,
        Country: 'US',
        Currency: 'USD-U',
        Year: '2022',
        Env: 'iSeries',
        Vendor: 'IBM',
        HWType: '',
        ProdName: '3590 B11',
        ProdDetail: '',
        AcquisitionCost: '20',
      },
      {
        id: 'lc12',
        key: 'keyl12',
        checkbox: <Checkbox labelText={""} id="cb12" />,
        Country: 'US',
        Currency: 'USD-U',
        Year: '2022',
        Env: 'iSeries',
        Vendor: 'IBM',
        HWType: '',
        ProdName: '3590 B11',
        ProdDetail: '',
        AcquisitionCost: '20',
      },
      {
        id: 'lc13',
        key: 'keyl13',
        checkbox: <Checkbox labelText={""} id="cb13" />,
        Country: 'US',
        Currency: 'USD-U',
        Year: '2022',
        Env: 'iSeries',
        Vendor: 'IBM',
        HWType: '',
        ProdName: '3590 B11',
        ProdDetail: '',
        AcquisitionCost: '20',
      },
      {
        id: 'lc14',
        key: 'keyl14',
        checkbox: <Checkbox labelText={""} id="cb14" />,
        Country: 'US',
        Currency: 'USD-U',
        Year: '2022',
        Env: 'iSeries',
        Vendor: 'IBM',
        HWType: '',
        ProdName: '3590 B11',
        ProdDetail: '',
        AcquisitionCost: '20',
      },
      {
        id: 'lc15',
        key: 'keyl15',
        checkbox: <Checkbox labelText={""} id="cb15" />,
        Country: 'US',
        Currency: 'USD-U',
        Year: '2022',
        Env: 'iSeries',
        Vendor: 'IBM',
        HWType: '',
        ProdName: '3590 B11',
        ProdDetail: '',
        AcquisitionCost: '20',
      },
      {
        id: 'lc16',
        key: 'keyl16',
        checkbox: <Checkbox labelText={""} id="cb16" />,
        Country: 'US',
        Currency: 'USD-U',
        Year: '2022',
        Env: 'iSeries',
        Vendor: 'IBM',
        HWType: '',
        ProdName: '3590 B11',
        ProdDetail: '',
        AcquisitionCost: '20',
      },
    ];

    return (
      <Tabs>
        <TabList aria-label="List of tabs" contained activation='manual'>
          <Tab>OverView Editor</Tab>
          <Tab>Standard Editor</Tab>
          <Tab>Rollout Editor</Tab>
        </TabList>
        <TabPanels>
          { /* Overview Editor */}
          <TabPanel>
            <DataTable rows={input_rows} headers={input_headers}>
              {({
                rows,
                getRowProps,
                getTableProps,
              }) => (
                <Table {...getTableProps()}>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.id} {...getRowProps({ row })}>
                        {row.cells.map(cell => (
                          <TableCell key={cell.id}>{cell.value}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </DataTable>
            <DataTable rows={Checkbox_rows} headers={Checkbox_headers}>
              {({
                rows,
                getRowProps,
                getTableProps,
              }) => (
                <Table {...getTableProps()}>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.id} {...getRowProps({ row })}>
                        {row.cells.map(cell => (
                          <TableCell key={cell.id}>{cell.value}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </DataTable>
            <DataTable rows={rollout_rows} headers={rollout_headers}>
              {({
                rows,
                getRowProps,
                headers,
                getHeaderProps,
                getTableProps,
              }) => (
                <Table {...getTableProps()}>
                  <TableHead>
                    <TableRow>
                      {headers.map(header => (
                        <TableHeader
                          key={header.key}
                          {...getHeaderProps({ header })}>
                          {header.header}
                        </TableHeader>
                      ))}
                      <TableHeader />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.id} {...getRowProps({ row })}>
                        {row.cells.map(cell => (
                          <TableCell key={cell.id}>{cell.value}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </DataTable>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Dropdown
              ariaLabel="Dropdown"
              id="DeliveryPhase-dropdown"
              items={itemsOfDeliveryPhase}
              type="inline"
              size="sm"
              label="Steady State"
              titleText="Delivery Phase:"
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button>Save</Button>&nbsp;  <Button>Cancel</Button> &nbsp; <Button>Save and Close</Button>
          </TabPanel>
          { /* Standard Editor */}
          <TabPanel>
            <TabList aria-label="standardTab" contained activation='manual'>
              <Tab>Component Details</Tab>
              <Tab>Load Component</Tab>
              <Tab>General Info</Tab>
              <Tab>Annual Costs</Tab>
              <Tab>Annual Factors</Tab>
              <Tab>User Notes</Tab>
            </TabList>
            <TabPanels>
              { /* Component Details */}
              <TabPanel>
              </TabPanel>
              { /* Load Component */}
              <TabPanel>
                Filter by:
                <DataTable rows={inputL_rows} headers={inputL_headers}>
                  {({
                    rows,
                    getRowProps,
                    getTableProps,
                  }) => (
                    <Table {...getTableProps()}>
                      <TableBody>
                        {rows.map(row => (
                          <TableRow key={row.id} {...getRowProps({ row })}>
                            {row.cells.map(cell => (
                              <TableCell key={cell.id}>{cell.value}</TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </DataTable>
                <Button>Select All</Button> <Button>Deselect All</Button> <Button>Reset Filters</Button> <Button>Load Selected</Button>
                <DataTable rows={loadC_rows} headers={loadC_headers}>
                  {({
                    rows,
                    getRowProps,
                    headers,
                    getHeaderProps,
                    getTableProps,
                  }) => (
                    <TableContainer title="" description="">
                      <Table {...getTableProps()}>
                        <TableHead>
                          <TableRow>
                            {headers.map(header => (
                              <TableHeader
                                key={header.key}
                                {...getHeaderProps({ header })}>
                                {header.header}
                              </TableHeader>
                            ))}
                            <TableHeader />
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map(row => (
                            <TableRow key={row.id} {...getRowProps({ row })}>
                              {row.cells.map(cell => (
                                <TableCell key={cell.id}>{cell.value}</TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                </DataTable>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Dropdown
                  ariaLabel="Dropdown"
                  id="DeliveryPhase-dropdown"
                  items={itemsOfDeliveryPhase}
                  type="inline"
                  size="sm"
                  label="Steady State"
                  titleText="Delivery Phase:"
                />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button>Save</Button>&nbsp;  <Button>Cancel</Button> &nbsp; <Button>Save and Close</Button>
              </TabPanel>
              { /* General Info */}
              <TabPanel>
              </TabPanel>
              { /* Annual Costs */}
              <TabPanel>
              </TabPanel>
              { /* Annual Factors */}
              <TabPanel>
              </TabPanel>
              { /* User Notes */}
              <TabPanel>
              </TabPanel>
            </TabPanels>
          </TabPanel>
          { /* Rollout Editor */}
          <TabPanel>
            <DataTable rows={inputR_rows} headers={inputR_headers}>
              {({
                rows,
                getRowProps,
                getTableProps,
              }) => (
                <Table {...getTableProps()}>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.id} {...getRowProps({ row })}>
                        {row.cells.map(cell => (
                          <TableCell key={cell.id}>{cell.value}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </DataTable>
            &nbsp;
            <DataTable rows={rolloutR_rows} headers={rolloutR_headers}>
              {({
                rows,
                getRowProps,
                headers,
                getHeaderProps,
                getTableProps,
              }) => (
                <Table {...getTableProps()}>
                  <TableHead>
                    <TableRow>
                      {headers.map(header => (
                        <TableHeader
                          key={header.key}
                          {...getHeaderProps({ header })}>
                          {header.header}
                        </TableHeader>
                      ))}
                      <TableHeader />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.id} {...getRowProps({ row })}>
                        {row.cells.map(cell => (
                          <TableCell key={cell.id}>{cell.value}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </DataTable>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Dropdown
              ariaLabel="Dropdown"
              id="DeliveryPhase-dropdown"
              items={itemsOfDeliveryPhase}
              type="inline"
              size="sm"
              label="Steady State"
              titleText="Delivery Phase:"
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button>Save</Button>&nbsp;  <Button>Cancel</Button> &nbsp; <Button>Save and Close</Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
    );
  }
}

export default EditComponet;
