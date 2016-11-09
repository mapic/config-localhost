module.exports = {
  "port": 3003,
  "redis": {
    "layers": {
      "port": 6379,
      "host": "redislayers",
      "auth": "2a67eb614ba2bee0e8abc3325e5e0ccf25248c065a8c61fd4f1c65fd917d0a71e627475b1fcd252c440cee3a4de7fcf0f3ab1b33b354a56bbb4fc928bcbc28f9",
      "db": 2
    },
    "stats": {
      "port": 6379,
      "host": "redisstats",
      "auth": "2a67eb614ba2bee0e8abc3325e5e0ccf25248c065a8c61fd4f1c65fd917d0a71e627475b1fcd252c440cee3a4de7fcf0f3ab1b33b354a56bbb4fc928bcbc28f9",
      "db": 2
    },
    "temp": {
      "port": 6379,
      "host": "redistemp",
      "auth": "2a67eb614ba2bee0e8abc3325e5e0ccf25248c065a8c61fd4f1c65fd917d0a71e627475b1fcd252c440cee3a4de7fcf0f3ab1b33b354a56bbb4fc928bcbc28f9",
      "db": 2
    }
  },
  "mongo": {
    "url": "mongodb://mongo/mapic"
  },
  "path": {
    "log": "/data/logs/"
  },
  "noAccessMessage": "No access. Please contact Systemapic.com if you believe you are getting this message in error.",
  "noAccessTile": "public/noAccessTile.png",
  "processingTile": "public/noAccessTile.png",
  "defaultStylesheets": {
    "raster": "public/cartoid.xml",
    "utfgrid": "public/utfgrid.xml"
  }
}