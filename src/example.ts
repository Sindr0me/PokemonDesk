function concat(arg1: string, arg2: string) {
    return arg1+arg2;
}
concat('Hello ', 'World') // -> Hello World;

type simeArr = (string|number)[];
type howDoIt = string;
type withData = { howIDoIt: howDoIt,simeArray: simeArr }
type withData2 = Record<"howIDoIt" | "simeArray", (simeArr | howDoIt)>;
type withData3 = {[key: string]: (simeArr | howDoIt)}

interface IMyHometask {
    howIDoIt: howDoIt;
    simeArray: simeArr;
    withData: withData[]
}
const MyHometask: IMyHometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

interface MyArray<T> {
    [N: number]: T;
    reduce<U>(fn: (prevV: U, currV: T, i: number, arr: T[]) => U, acc: U ): U;
}

let arr: MyArray<number> = [1,2,3];
arr.reduce((prevV, currV) => {
    prevV.push(String(currV));
    return prevV;
}, [] as Array<string>)
