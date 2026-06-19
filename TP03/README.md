# WIK-DPS-TP03

Docker Compose avec nginx comme reverse proxy et load balancer pour l'API du TP02.

## Architecture

```
Client → nginx (port 8080) → api_1
                           → api_2
                           → api_3
                           → api_4
```

## Lancement

```bash
cd TP03
docker compose up --build
```

## Test

```bash
curl http://localhost:8080/ping
```

Observer dans les logs que les requêtes sont réparties entre les 4 containers.

## Arrêt

```bash
docker compose down
```