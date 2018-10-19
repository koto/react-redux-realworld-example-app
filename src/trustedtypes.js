// Dummy policies
let createReactPolicy = (name, rules) => rules;
let createDefaultPolicy = (rules) => {};

if (window.TrustedTypes) {
  createDefaultPolicy = (rules) => window.TrustedTypes.createPolicy('default', rules, true);
  createReactPolicy = (name, rules) => window.TrustedTypes.createPolicy('react-' + name, rules);
}

export { createReactPolicy, createDefaultPolicy };