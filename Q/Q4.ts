function mostCommonWord(paragraph: string, banned: string[]): string {
    const lowercase = paragraph.toLowerCase()
    const clear = lowercase.replace(/[^a-z]/g, ' ')
    const splitted = clear.split(' ')
    const filttered = splitted.filter((w, i) => !!w)

    const count = {}

    filttered.forEach((w, i) => {
        if (banned.includes(w)) return;
        if (count[w]) {
            count[w] += 1
        } else {
            count[w] = 1
        }
    })

    let max = '';
    for (const w in count) {
        if (!max || count[w] > count[max]) {
            max = w
        }
    }

    return max
};

const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
const banned = ["hit"]
console.log(mostCommonWord(paragraph, banned))

class Singleton {

    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public showMessage(): void {
        console.log('Hello World!');
    }
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

singleton1.showMessage();

console.log('singleton1 === singleton2: ', singleton1 === singleton2)
