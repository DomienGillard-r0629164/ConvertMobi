class Unit
{
    constructor(name, symbol, factor, constant)
    {
        this.name = name;
        this.symbol = symbol;
        this.factor = factor;
        this.constant = constant;
    }
}

export class UnitCollection
{
    constructor()
    {
        this.defineTemperatures();
    }

    static define_unit(name, symbol, factor, constant, collection)
        {
            collection[name] = new Unit(name, symbol, factor, constant);
        }

    defineTemperatures()
    {
        
        this.temperatures = {};

        UnitCollection.define_unit("Celsius", "°C", 1, 273.15, this.temperatures);
        UnitCollection.define_unit("Fahrenheit", "°F", 5/9, 459.67, this.temperatures);
        UnitCollection.define_unit("Kelvin", "K", 1, 0, this.temperatures);
        UnitCollection.define_unit("Rankine", "°R" , 5/9, 0, this.temperatures);
        UnitCollection.define_unit("Réaumure", "°Ré", 5/4, 273.15, this.temperatures);
    }
}
