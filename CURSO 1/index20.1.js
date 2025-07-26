// scripts

// No package.json, podemos configurar scripts personalizados em "scripts:start"

// Para definir variáveis de ambiente de forma segura, usamos arquivos .env
// Adicionamos ao script de start: "node --env-file .env"
// O arquivo .env armazena informações sensíveis que não devem ser compartilhadas, por exemplo:
// EMAIL=user@gmail.com
// PASSWORD=123456

// Para acessar essas variáveis no código, usamos process.env.<NOME_DA_VARIÁVEL>

console.log(process.env.EMAIL);
console.log(process.env.PASSWORD);