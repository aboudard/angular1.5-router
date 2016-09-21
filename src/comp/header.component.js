/**
 * Created by A15285 on 20/07/2016.
 */
function HeaderController() {

    var vm = this;

    function activate() {

    }

    vm.$onInit = function() {
        activate();
    };
    console.log("header comp");

}

HeaderController.$inject = [];
angular.module('pmApp.headerComponent', []).component('headerComponent', {
    templateUrl: 'src/comp/header.component.html',
    controller: HeaderController,
    controllerAs: "headCtrl",
    require: { parent : '^rootComponent' },
    bindings: {
        badge: '<'
    }
});