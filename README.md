# ember-cli-addon-guard namespacing demo

This project is based on the [CodeOfficer/demo-engine-addon-dependency-conflicts](https://github.com/CodeOfficer/demo-engine-addon-dependency-conflicts) project, which illustrates a number of issues that can occur between when apps, engines, and addons share different versions of dependencies.

Instead of just illustrating these problems, this project uses [ember-cli-addon-guard](https://github.com/dgeb/ember-cli-addon-guard) to namespace different versions of dependencies so that they can co-exist in a single application.

Note that ember-cli-addon-guard's namespacing capability is experimental and not appropriate for all applications, as described in its README.

## Installation

This project is a yarn workspace that can be installed simply by running `yarn` from the project root.

