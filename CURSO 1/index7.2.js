const tomarBanho = true;
const escovarDentes = true;

const sairDeCasa = tomarBanho && escovarDentes; // só sai de casa se tomar banho e escovar os dentes

console.log(sairDeCasa); // true, pois ambos são verdadeiros



const LavarLouca = false;
const FazerDeverDeCasa = false;

const PodeSair = LavarLouca || FazerDeverDeCasa; // pode sair se lavar a louça ou fazer o dever de casa

console.log(PodeSair); // true, pois pelo menos um é verdadeiro


console.log((tomarBanho && escovarDentes) && (LavarLouca || FazerDeverDeCasa)); // falso, pois tomar banho e escovar os dentes são verdadeiros, mas lavar a louça e fazer o dever de casa são falsos