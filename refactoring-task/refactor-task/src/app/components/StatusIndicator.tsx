import { IssueStatus } from "../types/issue";
import { TABLE_CONSTANTS, STATUS_LABELS } from "../constants/table";

interface StatusIndicatorProps {
  status: IssueStatus;
}

// status indicator component for showing open/resolved status
const StatusIndicator = ({ status }: StatusIndicatorProps) => {
  const isOpen = status === TABLE_CONSTANTS.STATUS.OPEN;
  
  const dotColor = isOpen ? TABLE_CONSTANTS.COLORS.OPEN_STATUS : TABLE_CONSTANTS.COLORS.RESOLVED_STATUS;
  const textColor = isOpen ? TABLE_CONSTANTS.COLORS.OPEN_TEXT : TABLE_CONSTANTS.COLORS.RESOLVED_TEXT;
  const label = STATUS_LABELS[status];

  return (
    <div className="flex items-center gap-2">
      <span 
        className="inline-block w-[15px] h-[15px] rounded-full" 
        style={{ backgroundColor: dotColor }}
      />
      <span 
        className="font-medium" 
        style={{ color: textColor }}
      >
        {label}
      </span>
    </div>
  );
};

export default StatusIndicator;
