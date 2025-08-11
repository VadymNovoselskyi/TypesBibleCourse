interface CustomerPermissions {
  actions: string[];
}

interface EmployeePermissions extends CustomerPermissions {
  tasks: string[];
}

interface ManagerPermissions extends EmployeePermissions {
  approvals: string[];
}

function getPermissions(role: "manager"): ManagerPermissions;
function getPermissions(role: "employee"): EmployeePermissions;
function getPermissions(role: string): CustomerPermissions;
function getPermissions(
  role: string
): ManagerPermissions | EmployeePermissions | CustomerPermissions {
  switch (role) {
    case "manager":
      return {
        approvals: [],
        tasks: [],
        actions: [],
      } satisfies ManagerPermissions;
    case "employee":
      return {
        tasks: [],
        actions: [],
      } satisfies EmployeePermissions;
    default:
      return {
        actions: [],
      } satisfies CustomerPermissions;
  }
}
