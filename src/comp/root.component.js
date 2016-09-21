function RootController() {
    console.log("root comp");
    var vm = this;

    vm.yearNow;
    vm.appVersion;
    vm.badge;

    function activate() {
        vm.appVersion = "1.0.1";
        vm.yearNow = moment().format("YYYY");
        vm.badge = "ABO";
    }


    function errorCallback(response) {
        console.error(response);
    }

    vm.$onInit = function() {
        activate();
    };
}
RootController.$inject = [];
angular.module('pmApp.rootComponent', []).component('rootComponent', {
    templateUrl: 'src/comp/root.component.html',
    controller: RootController,
    controllerAs: "rootCtrl",
    bindings: {

    }
});