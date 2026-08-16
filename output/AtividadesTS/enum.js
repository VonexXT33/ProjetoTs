"use strict";
var Permission;
(function (Permission) {
    Permission[Permission["Admin"] = 1] = "Admin";
    Permission[Permission["User"] = 2] = "User";
    Permission[Permission["ReadOnly"] = 3] = "ReadOnly";
})(Permission || (Permission = {}));
console.log(Permission.Admin);
console.log(Permission.User);
console.log(Permission.ReadOnly);
//# sourceMappingURL=enum.js.map