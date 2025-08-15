import { Issue, CheckboxState } from "../types/issue";
import { TABLE_CONSTANTS } from "../constants/table";
import StatusIndicator from "./StatusIndicator";

interface TableRowProps {
  issue: Issue;
  index: number;
  checkboxState: CheckboxState;
  onCheckboxChange: (index: number) => void;
}

// individual table row component
const TableRow = ({ 
  issue, 
  index, 
  checkboxState, 
  onCheckboxChange 
}: TableRowProps) => {
  const isOpen = issue.status === TABLE_CONSTANTS.STATUS.OPEN;
  
  // build row classes based on status and selection state
  const rowClasses = [
    "border-b border-gray-200",
    isOpen 
      ? "cursor-pointer hover:bg-blue-50 text-black" 
      : "text-gray-600 cursor-not-allowed",
    checkboxState.checked ? "bg-blue-50" : ""
  ].filter(Boolean).join(" ");

  const handleRowClick = isOpen ? () => onCheckboxChange(index) : undefined;

  return (
    <tr className={rowClasses} onClick={handleRowClick}>
      <td className="py-6 pl-6">
        {isOpen ? (
          <input
            className={`${TABLE_CONSTANTS.CHECKBOX.SIZE} ${TABLE_CONSTANTS.CHECKBOX.BASE_CLASSES}`}
            type="checkbox"
            id={`checkbox-${index}`}
            name={issue.name}
            checked={checkboxState.checked}
            onChange={() => onCheckboxChange(index)}
          />
        ) : (
          <input
            className={`${TABLE_CONSTANTS.CHECKBOX.SIZE} ${TABLE_CONSTANTS.CHECKBOX.DISABLED_CLASSES}`}
            type="checkbox"
            disabled
          />
        )}
      </td>
      <td className="py-6">{issue.name}</td>
      <td className="py-6">{issue.message}</td>
      <td className="py-6">
        <StatusIndicator status={issue.status} />
      </td>
    </tr>
  );
};

export default TableRow;
