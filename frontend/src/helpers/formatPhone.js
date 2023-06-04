export function format_phone(phone) {
    return phone.replace(/[^\d]+/g,'').slice(2)
}
