// issue types for the tracking system
export type IssueStatus = "open" | "resolved";

export interface Issue {
  id: string;
  name: string;
  message: string;
  status: IssueStatus;
  numEvents: number;
  numUsers: number;
  value: number;
}

// checkbox state interface
export interface CheckboxState {
  checked: boolean;
  backgroundColor: string;
}

// table props interface
export interface TableProps {
  issues: Issue[];
}
