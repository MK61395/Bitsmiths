"use client";

import { ChangeEvent } from "react";
import { Issue, TableProps } from "../types/issue";
import { useIssueSelection } from "../hooks/useIssueSelection";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

// main table component - now much cleaner and focused
const Table = ({ issues }: TableProps) => {
  const {
    checkedItems,
    selectAllChecked,
    totalSelectedValue,
    toggleItem,
    toggleSelectAll,
    getCheckboxState,
    isSelectAllIndeterminate,
  } = useIssueSelection(issues);

  // handle select all checkbox change
  const handleSelectAllChange = (event: ChangeEvent<HTMLInputElement>) => {
    toggleSelectAll(event.target.checked);
  };

  return (
    <table className="w-full border-collapse shadow-lg">
      <TableHeader
        totalSelected={totalSelectedValue}
        selectAllChecked={selectAllChecked}
        isIndeterminate={isSelectAllIndeterminate}
        onSelectAllChange={handleSelectAllChange}
        checkedItemsCount={checkedItems.size}
      />
      
      <tbody>
        {issues.map((issue, index) => (
          <TableRow
            key={issue.id}
            issue={issue}
            index={index}
            checkboxState={getCheckboxState(index)}
            onCheckboxChange={toggleItem}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
export type { Issue };
