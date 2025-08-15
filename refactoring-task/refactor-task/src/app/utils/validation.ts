import { Issue } from "../types/issue";

// simple validation function for issue data
export const validateIssue = (data: unknown): data is Issue => {
  if (!data || typeof data !== "object") return false;
  
  const issue = data as Record<string, unknown>;
  
  return (
    typeof issue.id === "string" &&
    typeof issue.name === "string" &&
    typeof issue.message === "string" &&
    (issue.status === "open" || issue.status === "resolved") &&
    typeof issue.numEvents === "number" &&
    typeof issue.numUsers === "number" &&
    typeof issue.value === "number"
  );
};

// validate array of issues
export const validateIssues = (data: unknown): data is Issue[] => {
  if (!Array.isArray(data)) return false;
  return data.every(validateIssue);
};

// safe data loading with validation
export const loadIssuesSafely = (data: unknown): Issue[] => {
  if (validateIssues(data)) {
    return data;
  }
  
  console.warn("invalid issues data detected, using fallback");
  return [];
};
