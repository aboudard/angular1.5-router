function AdminController() {
    var vm = this;

    function activate() {

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