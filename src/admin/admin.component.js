function AdminController() {
    var vm = this;

    function activate() {
        console.log("state param : " + vm.userLabel);
    }

    vm.$onInit = function() {
        activate();
    };
    console.log("admin comp");
}
AdminController.$inject = [];
angular.module('pmApp.adminComponent', []).component('adminComponent', {
    templateUrl: 'src/admin/admin.component.html',
    controller: AdminController,
    controllerAs: "adminCtrl",
    require: { parent: '^rootComponent' },
    bindings: {
        userLabel: "="
    }
});