# Bonus — Architecture 3 tiers WordPress

## Architecture

```
Client → nginx:8080 → wordpress-1 (x2 replicas)
                    → wordpress-2
                           ↓
                        mysql (BDD)
                        redis (cache)
```

## Services

| Service | Image | Rôle | Exposé |
|---|---|---|---|
| nginx | nginx:alpine | Reverse proxy | ✅ port 8080 |
| wordpress | wordpress:6-apache | Application (x2) | ❌ interne |
| mysql | mysql:8.0 | Base de données | ❌ interne |
| redis | redis:7-alpine | Cache objet | ❌ interne |

## Lancement

```bash
cd bonus
docker compose up -d
```

## Accès

- WordPress : http://localhost:8080
- Admin : http://localhost:8080/wp-admin

## Activation du cache Redis

1. Admin → Extensions → Ajouter
2. Chercher "Redis Object Cache"
3. Installer et activer
4. Réglages → Redis → Activer le cache objet

## Arrêt

```bash
docker compose down        # Arrête les containers
docker compose down -v     # Arrête et supprime les volumes (données perdues)
```