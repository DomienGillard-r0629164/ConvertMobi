class TemperatureUnit
{
    constructor(name, symbol, factor, constant)
    {
        this.name = name;
        this.symbol = symbol;
        this.factor = factor;
        this.constant = constant;
    }

    toKelvin(temp)
    {
        return temp * this.factor + this.constant; 
    }

    fromKelvin(temp)
    {
        return (temp - this.constant) / this.factor;
    }
}

export class UnitCollection
{
    constructor()
    {
        this.defineTemperatures();
    }
    
    defineTemperatures()
    {
        const me = this;
        this.temperatures = {};

        function define_unit(name, symbol, factor, constant)
        {
            me.temperatures[name] = new TemperatureUnit(name, symbol, factor, constant);
        }

        define_unit("Celsius", "°C", 1, 273.15);
        define_unit("Fahrenheit", "°F", 5/9, 459.67);
        define_unit("Kelvin", "K", 1, 0);
        define_unit("Rankine", "°R" , 5/9, 0);
        define_unit("Réaumure", "°Ré", 5/4, 273.15);
    }
}
