Meteor Identicon Package
========================

Provides a wrapper around the identicon.js lib and a simple template helper.

###Identicon
GitHub-style identicons in JS with no server-side processing.

Identicon.js (https://github.com/stewartlord/identicon.js)

##Usage

```
  <img width=400 height=400 src="{{identicon 'cc6a658395a82aeec7ce4f08fdfbe5f2'}}">
```
  or
  
```
  {{#each items}}
  	<img width=400 height=400 src="{{identicon hash}}">
  {{/each}}
```
