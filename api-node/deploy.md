Posso colocar o banco postgress no neon
O redis no upstash
O node no render (no canal da rocket tem exemplo)

Mas essa última opção não é comendável para APIs grandes.

Se a pasta dist não estiver aqui
Vou rodar npm run build (Jpa tem o script no package)
Vou fornecer as variaveis rodando:
node --env-file .env dist/server.mjs
