class <%= component.Name %>Ctrl {
   constructor(
       private $rootScope: ng.IRootScopeService
   ) {
   }

   $onInit() {
   }

}

<%= component.Name %>Ctrl.$inject = ["$rootScope"];

export default {
   bindings: {},
   templateUrl: require("./<%= component.name %>.html"),
   controller: <%= component.Name %>Ctrl
}