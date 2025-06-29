// PARTE 3

// Parametros opcionais

function createTag(name, prefix, suffix) {
    if(prefix && suffix) {
        return `${prefix} ${name} ${suffix}`;
    }

    if(prefix) {
        return `${prefix} ${name}`;
    }

    return name;
}

const tag = createTag("Karleandro", "[Desenvolvedor]", "Dev");
console.log(tag); 


// PARTE 4

// definir um valor padrão para o parâmetro
function pow(base, exponent = 2) {
    return base ** exponent; // base elevado ao expoente
}

console.log(pow(2)); // 4, pois o expoente é 2 por padrão
console.log(pow(2, 3)); // 8, pois o expoente é3