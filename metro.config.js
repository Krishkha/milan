const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);



// new code its working

// const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
// const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

// const defaultConfig = getDefaultConfig(__dirname);

// // Your custom configurations
// const customConfig = {};

// let config = mergeConfig(defaultConfig, customConfig);

// // Wrap the config to ensure proper handling of Reanimated
// config = wrapWithReanimatedMetroConfig(config);

// module.exports = config;
