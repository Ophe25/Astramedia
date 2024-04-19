const path = require("path");
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
const { resolver: { sourceExts, assetExts } } = defaultConfig;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    transformer: {
        babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
        sourceExts: [...sourceExts, "svg"],
        assetExts: ["bmp",
            "gif",
            "jpg",
            "jpeg",
            "png",
            "psd",
            "svg",
            "webp", // Video formats
            "m4v",
            "mov",
            "mp4",
            "mpeg",
            "mpg",
            "webm", // Audio formats
            "aac",
            "aiff",
            "caf",
            "m4a",
            "mp3",
            "wav", // Document formats
            "html",
            "pdf",
            "yaml",
            "yml", // Font formats
            "otf",
            "ttf", // Archives (virtual files)
            "zip",
            "obj",
            "mtl",
            "vrx"]
    },
    watchFolders: [path.resolve(__dirname, "../")],
};

module.exports = mergeConfig(defaultConfig, config);