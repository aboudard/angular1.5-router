# angular 1.5+ router
angular 1.5+ app with components

This simple app demonstrates the use of beta ui-router with strict use of components from AngularJS 1.5 and above (1.6 as of now)
This is much like Angular 2 router system
Each route is linked to a component, no controller configuration

- run "yarn install"
- run "npm run server"

## Yarn config

Behind a proxy : create a .yarnrc fil in root folder :

proxy "http://proxy.domain:XXXX"
https-proxy "http://proxy.domain:XXXX"
registry "https://registry.npmjs.org"
strict-ssl false

## Define a route

```javascript
var adminState = {
	name: 'admin',
	url: '/admin',
	component: 'adminComponent'
};
$stateProvider.state(adminState);
```

## Run tests

- gulp tests