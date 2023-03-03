export function getFood(){
    return fetch('https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/').then(data => data.json())
}

export async function getFoodLocal(){
    const data = (await import("./data.json")).articles

    return {data}
}