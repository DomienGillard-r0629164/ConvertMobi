interface IConverter
{
    convert(x : number) : number;

}


interface IMultiplicativeConverter extends IConverter { }

class MultiplyingConverter implements IMultiplicativeConverter
{
    constructor(private factor : number) { }
    
    convert(x: number): number {
        return x * this.factor;
    }
}

class Inverter implements IMultiplicativeConverter
{
    constructor(private child : IMultiplicativeConverter) { }

    convert(x : number) : number
    {
        return 1 / this.child.convert(x);
    }
}

class Combiner implements IMultiplicativeConverter
{
    constructor(private children : IMultiplicativeConverter[]) { }

    convert(x : number) : number
    {
        let result = x;

        for ( let child of this.children )
        {
            result = child.convert(result);
        }

        return result;
    }
}

const km2M = new MultiplyingConverter(1000);
const h2S = new MultiplyingConverter(1. / 3600);
const kmh2ms = new Combiner([km2M, new Inverter(h2S)]);
