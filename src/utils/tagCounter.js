const accAssignProperty = (acc, tag) =>
  Object.assign({}, acc, {
    [tag.slug]: {
      slug: tag.slug,
      text: tag.text,
      count: (acc[tag.slug]?.count || 0) + 1,
    },
});

const tagsAcc = (acc, item) => {
    const tags = [...item.taxonomy.tags]
    const accumulator = {...acc}

    return tags.reduce((accu, tag) => accAssignProperty(accu, tag), accumulator)
}

export function tagCounter(array){
    const accumulator = [...array].reduce((acc, item)=>{
        return tagsAcc(acc, item)
    }, {})

    return Object.values(accumulator).sort((a, b) => b.count - a.count)
}