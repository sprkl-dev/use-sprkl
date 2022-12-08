#!/bin/sh

set -e

CMD=$1
if [ -z $CMD ]; then
    echo "missing command, available commands: start, stop"
    exit 1
elif [ $CMD != "start" ] && [ $CMD != "stop" ]; then
    echo "invalid command, available commands: start, stop"
    exit 1
fi


echo "[+] Verifying environment"
if ! command -v kubectl > /dev/null; then
    echo "failed to start project in cluster, kubectl is missing in your PATH. For more information: https://kubernetes.io/docs/tasks/tools/"
    exit 1
fi

kubectl cluster-info > /dev/null
if [ $? -ne 0 ]; then
    echo "failed to connect the cluster using kubectl. For more information: https://kubernetes.io/docs/tasks/kubelet-credential-provider/kubelet-credential-provider/"
    exit 1
fi

if ! command -v helm > /dev/null; then
    echo "failed to start project in cluster, helm is missing in your PATH. For more information: https://helm.sh/docs/helm/helm_install/"
    exit 1
fi

if [ $CMD = "start" ]; then
    echo "[+] Appliying use-sprkl into your cluster"
    USE_SPRKL_ROOT_DIR="$(git rev-parse --show-toplevel)"
    helm install use-sprkl $USE_SPRKL_ROOT_DIR/helm/use-sprkl
    echo " >> Open your browser at http://localhost:5000"
    until kubectl port-forward service/shop 5000:5000 2> /dev/null; do : wait 10; done
elif [ $CMD = "stop" ]; then
    echo "[+] Removing use-sprkl from your cluster"
    helm uninstall use-sprkl
fi