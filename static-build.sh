nerdctl run --rm -it     -v "$PWD:/src:ro"     -v "$PWD/dist-static:/out"     node:24-alpine     sh -lc '
      apk add --no-cache git rsync &&
      rsync -a /src/ /app/ &&
      git config --global --add safe.directory /app &&
      cd /app &&
      npm ci &&
      rm -rf app/api &&
      BIG_AGI_BUILD=static npm run build &&
      cp -a dist/. /out/
    '
