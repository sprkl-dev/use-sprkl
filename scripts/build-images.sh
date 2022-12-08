#!/bin/sh
set -e

USE_SPRKL_ROOT_DIR="$(git rev-parse --show-toplevel)"
for dir in $USE_SPRKL_ROOT_DIR/*; do
    if [ -f $dir/Dockerfile ]; then
        service=${dir##*/}
        echo "[+] Building $service docker image"
        (cd $dir && docker build -t use-sprkl-$service:latest ./)
    fi
done