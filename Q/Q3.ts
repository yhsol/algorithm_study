function reorderLogFiles(logs: string[]): string[] {
    let d: string[] = []
    let l :string[]= []

    for (const log of logs) {
        const isLetter = log.split(' ')[1].charCodeAt(0) >= 97
        if (isLetter) {
            l.push(log)
        } else {
            d.push(log)
        }
    }

    // 문자가 동일할 경우, 식별자로 정렬
    l.sort((a: string, b: string) => {
        const aSplit = a.split(' ')
        const bSplit = b.split(' ')
        const aId = aSplit[0]
        const bId = bSplit[0]
        const aStr = aSplit.slice(1).join(' ')
        const bStr = bSplit.slice(1).join(' ')
        if (aStr === bStr) {
            return aId.localeCompare(bId)
        }
        return aStr.localeCompare(bStr)
    })

    return [...l, ...d];
};

const result = reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo","a2 act car"])
console.log('result: ',result)
