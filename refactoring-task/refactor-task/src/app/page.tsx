import Table from "./components/table";
import { Issue } from "./types/issue";
import { loadIssuesSafely } from "./utils/validation";
import issuesData from "./constants/issues.json";

export default function Home() {
  // safely load and validate issues data
  const issues: Issue[] = loadIssuesSafely(issuesData);
  
  return <Table issues={issues} />;
}
