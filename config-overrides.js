module.exports = function override(config, env) {
  config.resolve = {
    alias: {
      'react-native/Libraries/Renderer/src/renderers/native/ReactNativePropRegistry': 'react-native-web/dist/modules/ReactNativePropRegistry',
      'react-native/Libraries/Components/StaticContainer': 'react-native-web/dist/components/StaticContainer',
      'react-native': 'react-native-web'
    }
  };
  return config; 
}