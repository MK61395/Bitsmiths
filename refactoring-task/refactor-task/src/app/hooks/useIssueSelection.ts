import { useState, useCallback, useMemo } from "react";
import { Issue, CheckboxState } from "../types/issue";
import { TABLE_CONSTANTS } from "../constants/table";

// custom hook for managing issue selection state and logic
export const useIssueSelection = (issues: Issue[]) => {
  // simplified state - just track checked status, calculate colors on demand
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  // memoized calculations to avoid recalculating on every render
  const openIssues = useMemo(() => 
    issues.filter(issue => issue.status === TABLE_CONSTANTS.STATUS.OPEN), 
    [issues]
  );

  const openIssueIndices = useMemo(() => 
    issues.map((issue, index) => issue.status === TABLE_CONSTANTS.STATUS.OPEN ? index : -1)
      .filter(index => index !== -1), 
    [issues]
  );

  // calculate total value of selected issues (not count of issues)
  const totalSelectedValue = useMemo(() => 
    Array.from(checkedItems).reduce((sum, index) => 
      sum + issues[index].value, 0
    ), 
    [checkedItems, issues]
  );

  // handle individual checkbox changes
  const toggleItem = useCallback((index: number) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  }, []);

  // handle select/deselect all
  const toggleSelectAll = useCallback((checked: boolean) => {
    if (checked) {
      setCheckedItems(new Set(openIssueIndices));
    } else {
      setCheckedItems(new Set());
    }
    setSelectAllChecked(checked);
  }, [openIssueIndices]);

  // get checkbox state for a specific index
  const getCheckboxState = useCallback((index: number): CheckboxState => {
    const isChecked = checkedItems.has(index);
    return {
      checked: isChecked,
      backgroundColor: isChecked ? TABLE_CONSTANTS.COLORS.SELECTED_BG : TABLE_CONSTANTS.COLORS.DEFAULT_BG,
    };
  }, [checkedItems]);

  // determine if select all should be indeterminate
  const isSelectAllIndeterminate = useMemo(() => {
    const checkedCount = checkedItems.size;
    const openCount = openIssueIndices.length;
    return checkedCount > 0 && checkedCount < openCount;
  }, [checkedItems.size, openIssueIndices.length]);

  return {
    checkedItems,
    selectAllChecked,
    totalSelectedValue,
    openIssues,
    openIssueIndices,
    toggleItem,
    toggleSelectAll,
    getCheckboxState,
    isSelectAllIndeterminate,
  };
};
