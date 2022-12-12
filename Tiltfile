docker_build("use-sprkl-orders", "orders")
docker_build("use-sprkl-catalog", "catalog")
docker_build("use-sprkl-metrics", "metrics")
docker_build("use-sprkl-payments", "payments")
docker_build("use-sprkl-shop", "shop")

k8s_yaml(helm('helm/use-sprkl'))

local_resource("use-sprkl", "sprkl apply --recipe=uncommitted", trigger_mode=TRIGGER_MODE_AUTO, auto_init=True, deps=['./'])