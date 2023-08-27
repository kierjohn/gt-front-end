// Example of using config in a plugin
export default function (context, inject) {
  // Access configuration options
  const apiBaseUrl = context.$config.apiBaseUrl;

  // Inject variables/methods into the context or Vue instances
  inject('apiBaseUrl', apiBaseUrl);
}