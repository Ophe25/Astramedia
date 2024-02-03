/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */



module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    sourceExts: ["js", "json", "ts", "tsx", "cjs"],
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
};
