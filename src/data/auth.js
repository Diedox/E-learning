export const AUTH_DASHBOARD_PATHS = {
  student: "/student/dashboard",
  teacher: "/teacher/dashboard",
};

export const DEFAULT_DEMO_ROLE = "student";

export function getDashboardPath(role = DEFAULT_DEMO_ROLE) {
  return AUTH_DASHBOARD_PATHS[role] ?? AUTH_DASHBOARD_PATHS[DEFAULT_DEMO_ROLE];
}
