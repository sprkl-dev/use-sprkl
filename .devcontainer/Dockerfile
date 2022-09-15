FROM sprkldev/sprkl-node:0.0.43

RUN apk add git curl docker

RUN mkdir -p /root/.docker/cli-plugins &&  \
    curl -SL https://github.com/docker/compose/releases/download/v2.10.2/docker-compose-linux-x86_64 -o /root/.docker/cli-plugins/docker-compose && \
    chmod +x /root/.docker/cli-plugins/docker-compose

ENV DOCKER_HOST=unix:///var/run/docker-host.sock