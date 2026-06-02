# Image de base légère
FROM node:20-alpine

WORKDIR /app

# On copie package.json EN PREMIER (optimisation du cache Docker)
# Si le code change mais pas package.json → cette couche est réutilisée
COPY package*.json ./
RUN npm install

# Ensuite seulement on copie le code source
COPY tsconfig.json ./
COPY src/ ./src/

# Compilation TypeScript → JavaScript
RUN npm run build

# Utilisateur non-root pour la sécurité
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 8080

CMD ["node", "dist/server.js"]