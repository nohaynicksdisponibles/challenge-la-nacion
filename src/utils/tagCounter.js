export function tagCounter(array){
    let arrayCopy = [...array]
    let accumulator = {}

    for(let i=0; i<arrayCopy.length; i++){
        for(let j = 0; j<arrayCopy[i].taxonomy.tags.length; j++){
            let tagElement = arrayCopy[i].taxonomy.tags[j]

            if(accumulator.hasOwnProperty(tagElement.slug)){
                accumulator[tagElement.slug].count +=1
                continue;
            }

            accumulator[tagElement.slug] = {
                slug: tagElement.slug,
                text: tagElement.text,
                count: 1
            }
        }
    }

    return Object.values(accumulator).sort((a, b) => b.count - a.count)
}