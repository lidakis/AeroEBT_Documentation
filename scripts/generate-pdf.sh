#!/bin/bash

set -euo pipefail

# Usage:
#   bash scripts/generate-pdf.sh local   # uses npx docusaurus-prince-pdf (requires Prince installed)
#   bash scripts/generate-pdf.sh docker  # uses docker image openbayes/docusaurus-prince-pdf

MODE=${1:-docker}

SITE_PORT=${SITE_PORT:-4000}
BASE_PATH=${BASE_PATH:-/docs}
DEST_DIR=${DEST_DIR:-pdf}
OUTPUT_NAME=${OUTPUT_NAME:-aeroebt-docs.pdf}

# Build static site
yarn build

# Serve built site in background
(
  yarn serve --port ${SITE_PORT} --no-open >/dev/null 2>&1 & echo $! > .docusaurus_serve.pid
) || true

# Wait for server to be up
echo "Waiting for http://localhost:${SITE_PORT}${BASE_PATH} ..."
for i in {1..60}; do
  if curl -sSf "http://localhost:${SITE_PORT}${BASE_PATH}/" >/dev/null; then
    break
  fi
  sleep 1
done

mkdir -p "${DEST_DIR}"

BASE_URL="http://localhost:${SITE_PORT}${BASE_PATH}"

if [[ "${MODE}" == "local" ]]; then
  # Requires Prince installed locally; see https://github.com/signcl/docusaurus-prince-pdf
  npx docusaurus-prince-pdf -u "${BASE_URL}" --dest "./${DEST_DIR}" --output "${OUTPUT_NAME}"
else
  # Docker-based execution (no local Prince install needed)
  docker run --rm -it --init \
    -v "$(pwd)/${DEST_DIR}:/app/pdf" \
    openbayes/docusaurus-prince-pdf \
    -u "${BASE_URL}" --output "${OUTPUT_NAME}"
fi

# Stop server
if [[ -f .docusaurus_serve.pid ]]; then
  kill $(cat .docusaurus_serve.pid) 2>/dev/null || true
  rm -f .docusaurus_serve.pid
fi

echo "PDF generated at ${DEST_DIR}/${OUTPUT_NAME}"


