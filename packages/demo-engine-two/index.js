'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'demo-engine-two',
  lazyLoading: {
    enabled: false
  }
});
