export function tagCounter(array){
    const accumulator = [...array].reduce((acc, item)=>{
        item.taxonomy.tags.forEach((tag)=>{
            if(!acc.hasOwnProperty(tag.slug)){
                acc[tag.slug] = {
                    slug: tag.slug,
                    text: tag.text,
                    count: 1
                }
                return;
            }
            acc[tag.slug].count +=1;       
        })

        return acc;
    }, {})

    return Object.values(accumulator).sort((a, b) => b.count - a.count)
}