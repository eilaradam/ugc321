self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/bio",
        "destination": "/bio/index.html"
      },
      {
        "source": "/bio/",
        "destination": "/bio/index.html"
      },
      {
        "source": "/replit",
        "destination": "/replit/index.html"
      },
      {
        "source": "/replit/",
        "destination": "/replit/index.html"
      },
      {
        "source": "/projeto/3d",
        "destination": "/projeto/3d/index.html"
      },
      {
        "source": "/projeto/3d/",
        "destination": "/projeto/3d/index.html"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()