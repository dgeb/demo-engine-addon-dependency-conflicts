import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.mount('demo-engine');
  this.mount('demo-engine-two');
  this.mount('demo-lazy-engine');
});

export default Router;
