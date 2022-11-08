/*

Intro:

    Our attempt to Open Source didn't work quite as
    expected. It turned out there were already many
    existing functional JS libraries.

    All the remaining developers left the company as
    well. It seems that they are joining a very
    ambitious startup which re-invented a juicer and
    raised millions of dollars.
    Too bad we cannot compete with this kind of
    financing even though we believe our idea is
    great.

    It's time to shine for the last time and publish
    our new invention: object-constructor as our CTO
    named it. A small library which helps
    manipulating an object.

Exercise:

    Here is a library which helps manipulating objects.
    We tried to write type annotations and we failed.
    Please help!

*/

/**
 * 用到泛型的方法的返回值多确认几遍，尽量自己写
 */

export class ObjectManipulator<T> {

    constructor(protected obj: T) {}

    public set<K extends string, V>(key: K, value: V): ObjectManipulator<T & {[NK in K]:V}> {     //不手动添加返回值类型时推断出来的返回值类型： ObjectManipulator<T & {[x: string]: V;}>
        return new ObjectManipulator({...this.obj, [key]: value}) as ObjectManipulator<T & {[NK in K]:V}>;  //通过计算出来的结果要加[]，使用Symbol时也是要加
    }

    public get<K extends keyof T>(key: K) {
        return this.obj[key];
    }

    public delete<K extends keyof T>(key: K): ObjectManipulator<Omit<T,K>> {  //不手动添加返回值类型时ts推断出来的返回值： ObjectManipulator<T>
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() {
        return this.obj;
    }
}
