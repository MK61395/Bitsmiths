// table constants for consistent styling and behavior
export const TABLE_CONSTANTS = {
  COLORS: {
    SELECTED_BG: "#eeeeee",
    DEFAULT_BG: "#ffffff",
    OPEN_STATUS: "#3b82f6", // blue-600
    RESOLVED_STATUS: "#9ca3af", // gray-400
    OPEN_TEXT: "#1d4ed8", // blue-700
    RESOLVED_TEXT: "#374151", // gray-700
  },
  STATUS: {
    OPEN: "open",
    RESOLVED: "resolved",
  },
  CHECKBOX: {
    SIZE: "w-5 h-5",
    BASE_CLASSES: "cursor-pointer",
    DISABLED_CLASSES: "opacity-50",
  },
} as const;

// status display labels
export const STATUS_LABELS = {
  open: "Open",
  resolved: "Resolved",
} as const;
