/**
 * Created by A15285 on 20/07/2016.
 */
function HomeController() {

    var vm = this;
    vm.message = "Bonjour OXiane";

    function activate() {
        
    }

    vm.$onInit = function() {
        activate();
    };
    console.log("home comp");
}
HomeController.$inject = [];
angular.module('pmApp.homeComponent', []).component('homeComponent', {
    templateUrl: 'src/home/home.component.html',
    controller: HomeController,
    controllerAs: "homeCtrl",
    require: { parent : '^rootComponent' },
    bindings: {

    }
});