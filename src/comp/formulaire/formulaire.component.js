function FormulaireController() {

    var vm = this;
    vm.validMe = validMe;

    function activate() {

    }

    function validMe(e) {
        console.log('ok tonton');
        e.preventDefault();
    }

    vm.$onInit = function() {
        activate();
    };
    console.log("formulaire comp");

}

FormulaireController.$inject = [];
angular.module('pmApp.formulaireComponent', []).component('formulaireComponent', {
    templateUrl: 'src/comp/formulaire/formulaire.component.html',
    controller: FormulaireController,
    controllerAs: "formCtrl",
    bindings: {

    }
});