import { ChangeEvent } from "react";
import { TABLE_CONSTANTS } from "../constants/table";

interface TableHeaderProps {
  totalSelected: number;
  selectAllChecked: boolean;
  isIndeterminate: boolean;
  onSelectAllChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checkedItemsCount: number;
}

// table header component with select all functionality
const TableHeader = ({ 
  totalSelected, 
  selectAllChecked, 
  isIndeterminate, 
  onSelectAllChange,
  checkedItemsCount
}: TableHeaderProps) => {
  // show both count and total value for clarity
  const selectionText = checkedItemsCount > 0 
    ? `Selected ${checkedItemsCount} issues (total value: ${totalSelected})`
    : "None selected";

  return (
    <thead>
      <tr className="border-2 border-gray-200">
        <th className="py-6 pl-6 text-left w-[48px]">
          <input
            className={`${TABLE_CONSTANTS.CHECKBOX.SIZE} cursor-pointer`}
            type="checkbox"
            id="select-all-checkbox"
            checked={selectAllChecked}
            onChange={onSelectAllChange}
            ref={(input) => {
              // set indeterminate state for visual feedback
              if (input) {
                input.indeterminate = isIndeterminate;
              }
            }}
          />
        </th>
        <th className="py-6 min-w-[8rem] text-left text-black">
          {selectionText}
        </th>
        <th colSpan={2} />
      </tr>
      <tr className="border-2 border-gray-200">
        <th className="py-6 pl-6" />
        <th className="py-6 text-left font-medium text-black">Name</th>
        <th className="py-6 text-left font-medium text-black">Message</th>
        <th className="py-6 text-left font-medium text-black">Status</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
