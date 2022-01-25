export function shuffle(elements: any[]): any[] {
    return elements
        .map(num => ({val: num, random: Math.random()}))
        .sort((obj1, obj2) => obj1.random - obj2.random)
        .map(obj => obj.val)
}