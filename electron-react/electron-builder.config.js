const buildConfig = {
  "productName": process.platform === "darwin" ? "electron-react" : "electron-react",
  "appId": "top.alongman",
  "copyright": "Copyright © 2021 Along",
  "directories": {
    "output": "build"
  },
  "files": [
    "dist/electron/**/*"
  ],
  "dmg": {
    "contents": [
      {
        "x": 410,
        "y": 150,
        "type": "link",
        "path": "/Applications"
      },
      {
        "x": 130,
        "y": 150,
        "type": "file"
      }
    ]
  },
  "mac": {
    "icon": "build/icons/icon.icns",
    "artifactName": "electron-react-${version}.${ext}",
    "publish": [
      {
        "provider": "generic",
        "url": "https://www.dabanjia.com/download/stage/dabanjia2.0/mac/"
      }
    ],
    "entitlements": "electron-react/entitlements.mac.plist",
    "hardenedRuntime": true,
    "extendInfo": {
      "NSMicrophoneUsageDescription": "请允许本程序访问您的麦克风",
      "NSCameraUsageDescription": "请允许本程序访问您的摄像头"
    }
  },
  "win": {
    "icon": "build/icons/icon.ico",
    "artifactName": "electron-react-${version}.${ext}",
    "publish": [
      {
        "provider": "generic",
        "url": "https://www.dabanjia.com/download/stage/dabanjia2.0/windows/"
      },
    ]
  },
  "linux": {
    "icon": "build/icons"
  },
  "nsis": {
    "shortcutName": "electron-react-nsis",
    // "oneClick": false,
    // "allowElevation": true,
    // "allowToChangeInstallationDirectory": true,
    // "perMachine": true,
  },
  "dmg": {
    "title": "elctron-react-dmg-title"
  }
}

module.exports = buildConfig;