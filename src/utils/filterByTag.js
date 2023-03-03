export function filterByTag(objeto, slug){
    return Boolean(objeto.taxonomy.tags.find(obj => slug === '' ? true: obj.slug === slug))
}