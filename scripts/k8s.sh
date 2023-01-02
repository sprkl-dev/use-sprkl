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
    helm upgrade --install use-sprkl $USE_SPRKL_ROOT_DIR/helm/use-sprkl
    shop_pod_name=""
    while true; do
        shop_pod_name=$(kubectl get pod -l app/name=shop -o jsonpath="{.items[0].metadata.name}")
        if [[ ! -z $shop_pod_name ]]; then
           break
        fi
    done
    echo " >> Waiting for shop service to be ready"
    kubectl wait --for=condition=Ready pod/"$shop_pod_name"
    echo " >> Open your browser at http://localhost"
    sudo kubectl port-forward svc/shop 80:5000
elif [ $CMD = "stop" ]; then
    echo "[+] Removing use-sprkl from your cluster"
    helm uninstall use-sprkl
fi