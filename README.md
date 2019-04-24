# ember-cli-addon-guard namespacing demo

This project is based on the [CodeOfficer/demo-engine-addon-dependency-conflicts](https://github.com/CodeOfficer/demo-engine-addon-dependency-conflicts) project, which illustrates a number of issues that can occur between when apps, engines, and addons share different versions of dependencies.

Instead of just illustrating these problems, this project uses [ember-cli-addon-guard](https://github.com/dgeb/ember-cli-addon-guard) to namespace different versions of dependencies so that they can co-exist in a single application.

Note that ember-cli-addon-guard's namespacing capability is experimental and not appropriate for all applications, as described in its README.

## Installation

This project is a yarn workspace that can be installed simply by running `yarn` from the project root.

## Usage

```
cd packages/host-app
ember s
```

## Variations

The ember-cli-addon-guard config file in `host-app` is currently set to namespace the addons with dependency conflicts:

```js
// packages/host-app/config/addon-guard.js
'use strict';

module.exports = {
  namespaceAddons: [
    'conflictable-addon'
  ]
};
```

If you'd like to see the project running without namespacing and with the dependency conflicts intact, change this to ignore addons:

```js
// packages/host-app/config/addon-guard.js
'use strict';

module.exports = {
  ignoreAddons: [
    'conflictable-addon'
  ]
};
```

And finally, if you'd like to see the dependency errors that will be reported by ember-cli-addon-guard, simply remove the settings altogether:

```js
// packages/host-app/config/addon-guard.js
'use strict';

module.exports = {
};
```
