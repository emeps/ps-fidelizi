export function format_CPF(cpf) {
    return cpf.replace(/[^\d]+/g,'')
}