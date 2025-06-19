# ℹ️ Passo a passo para criar API

## Criando projeto
### Inicializa o NodeJS
```bash
npm init -y
```

### Instala o Express
```bash
npm install express
```

### Instala TypeScript
```bash
npm install typescript -D
```

### Inicializa o TypeScript
```bash
npx tsc --init
```

### Instala tipagem para Node
```bash
npm install @types/express -D
```

### Instala ferramenta que auxilia no desenvolvimentvo com TS e NodeJS
```bash
npm install ts-node-dev -D
```

## Criando scripts no ``package.json``
```json
"scripts": {
    "dev": "ts-node-dev --transpile-only src/server.ts"
},
```
---

