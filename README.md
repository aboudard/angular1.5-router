# angular1.5-router
angular 1.5 app with components

This simple app demonstrates the use of beta ui-router with strict use of components from AngularJS 1.5
This is much like Angular 2 router system
Each route is linked to a component, no controller configuration

- run bower install
- run with http-server

## Define a route

```javascript
var adminState = {
	name: 'admin',
	url: '/admin',
	component: 'adminComponent'
};
$stateProvider.state(adminState);
```