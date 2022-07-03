import React, { Component } from 'react';
import logo from '../logo.svg';
import { Button, HeaderGlobalBar, OverflowMenu } from '@carbon/react';
import TutorialHeader from '../components/TutorialHeader';
import HeaderMenuButton from '@carbon/react/lib/components/UIShell/HeaderMenuButton';
import SkipToContent from '@carbon/react/lib/components/UIShell/SkipToContent';
import Header from '@carbon/react/lib/components/UIShell/Header';
import HeaderName from '@carbon/react/lib/components/UIShell/HeaderName';
import HeaderNavigation from '@carbon/react/lib/components/UIShell/HeaderNavigation';
import HeaderMenu from '@carbon/react/lib/components/UIShell/HeaderMenu';
import HeaderGlobalAction from '@carbon/react/lib/components/UIShell/HeaderGlobalAction';
import SideNav from '@carbon/react/lib/components/UIShell/SideNav';
import SideNavItems from '@carbon/react/lib/components/UIShell/SideNavItems';
import HeaderSideNavItems from '@carbon/react/lib/components/UIShell/HeaderSideNavItems';
import HeaderMenuItem from '@carbon/react/lib/components/UIShell/HeaderMenuItem';
import HeaderContainer from '@carbon/react/lib/components/UIShell/HeaderContainer';
import Search from '@carbon/react/lib/components/Search/Search';
import DataTable from '@carbon/react/lib/components/DataTable/DataTable';
import TableContainer from '@carbon/react/lib/components/DataTable/TableContainer';
import TableToolbar from '@carbon/react/lib/components/DataTable/TableToolbar';
import TableToolbarContent from '@carbon/react/lib/components/DataTable/TableToolbarContent';
import TableToolbarSearch from '@carbon/react/lib/components/DataTable/TableToolbarSearch';
import TableToolbarAction from '@carbon/react/lib/components/DataTable/TableToolbarAction';
import TableToolbarMenu from '@carbon/react/lib/components/DataTable/TableToolbarMenu';
import Table from '@carbon/react/lib/components/DataTable/Table';
import TableBody from '@carbon/react/lib/components/DataTable/TableBody';
import TableCell from '@carbon/react/lib/components/DataTable/TableCell';
import OverflowMenuItem from '@carbon/react/lib/components/OverflowMenuItem/OverflowMenuItem';
import TableHead from '@carbon/react/lib/components/DataTable/TableHead';
import TableRow from '@carbon/react/lib/components/DataTable/TableRow';
import TableHeader from '@carbon/react/lib/components/DataTable/TableHeader';
import TreeView from '@carbon/react/lib/components/TreeView/TreeView';
import TreeNode from '@carbon/react/lib/components/TreeView/TreeNode';

class CaseList extends Component {
  render() {
    const action = obj => {
      console.log(obj);
      return function () {
        console.log('obj onclick');
      };
    };
    
    return (
      <>
        <TreeView active="5" label="Link Baseline" selected={['5']} size="sm">
          <TreeNode id="1" label={<span>Artificial intelligence</span>}
            renderIcon={null}
            value="Artificial intelligence"
          />
          <TreeNode id="2" label="Blockchain" renderIcon={null} value="Blockchain" />
          <TreeNode id="3" label="Business automation" renderIcon={null} value="Business automation">
            <TreeNode id="3-1" label="Business process automation" renderIcon={null}
              value="Business process automation" />
            <TreeNode id="3-2" label="Business process mapping" renderIcon={null}
              value="Business process mapping" />
          </TreeNode>
          <TreeNode id="4" label="Business operations" renderIcon={null} value="Business operations" />
          <TreeNode id="5" isExpanded label="Cloud computing" renderIcon={null} value="Cloud computing">
            <TreeNode id="5-1" label="Containers" renderIcon={null} value="Containers" />
            <TreeNode id="5-2" label="Databases" renderIcon={null} value="Databases" />
            <TreeNode id="5-3" isExpanded label="DevOps" renderIcon={null} value="DevOps">
              <TreeNode id="5-4" label="Solutions" renderIcon={null} value="Solutions" />
              <TreeNode id="5-5" isExpanded label="Case studies" renderIcon={null} value="Case studies">
                <TreeNode id="5-6" label="Resources" renderIcon={null} value="Resources" />
              </TreeNode>
            </TreeNode>
          </TreeNode>
          <TreeNode id="6" label="Data & Analytics" renderIcon={null} value="Data & Analytics">
            <TreeNode id="6-1" label="Big data" renderIcon={null} value="Big data" />
            <TreeNode id="6-2" label="Business intelligence" renderIcon={null} value="Business intelligence" />
          </TreeNode>
          <TreeNode disabled id="7" isExpanded label="IT infrastructure" renderIcon={null} value="IT infrastructure">
            <TreeNode id="7-1" label="Data storage" renderIcon={null} value="Data storage" />
            <TreeNode id="7-2" label="Enterprise servers" renderIcon={null} value="Enterprise servers" />
            <TreeNode id="8" isExpanded label="Hybrid cloud infrastructure" renderIcon={null}
              value="Hybrid cloud infrastructure">
              <TreeNode id="8-1" label="Insights" renderIcon={null} value="Insights" />
              <TreeNode id="8-2" label="Benefits" renderIcon={null} value="Benefits" />
            </TreeNode>
          </TreeNode>
        </TreeView>
      </>
    );
  }
}

export default CaseList;
