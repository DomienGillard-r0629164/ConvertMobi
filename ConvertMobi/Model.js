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
        this.defineAreas();
        this.defineMass();
        this.defineSpeed();
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

    defineAreas()
    {
        this.areas = {};

        UnitCollection.define_unit("acres", "ac", 4046.8564224, 0, this.areas);
        UnitCollection.define_unit("ares", "ar", 100, 0, this.areas);
        UnitCollection.define_unit("circular inches", "cin", 0.000506707479, 0, this.areas);
        UnitCollection.define_unit("hectares", "hc", 1e4, 0, this.areas);
        UnitCollection.define_unit("hides", "hi", 485000, 0, this.areas);
        UnitCollection.define_unit("roods", "roo", 1011.7141056, 0, this.areas);
        UnitCollection.define_unit("square centimeters", "cm²", 1e-4, 0, this.areas);
        UnitCollection.define_unit("square centimeters",         "cm²", 1e-4, 0, this.areas);
        UnitCollection.define_unit("square feet (US & UK)",      "ft²",    0.09290304, 0, this.areas);
        UnitCollection.define_unit("square feet (US survey)",    "fts²",    0.092903411613, 0, this.areas);
        UnitCollection.define_unit("square inches",              "in²",    0.00064516, 0, this.areas);
        UnitCollection.define_unit("square kilometers",          "km²", 1e6, 0, this.areas);
        UnitCollection.define_unit("square meters",              "m²",  1, 0, this.areas);
        UnitCollection.define_unit("square miles",               "mil²",    2589988.110336, 0, this.areas);
        UnitCollection.define_unit("square millimeters",         "mm²", 1e-6, 0, this.areas);
        UnitCollection.define_unit("squares (of timber)",        "ti²",    9.290304, 0, this.areas);
        UnitCollection.define_unit("square rods (or poles)",     "rd²",    25.29285264, 0, this.areas);
        UnitCollection.define_unit("square yards",               "ya²",    0.83612736, 0, this.areas);
        UnitCollection.define_unit("townships",                  "town",    93239571.97, 0, this.areas);
    }

    defineMass()
    {
        this.mass = {};

        UnitCollection.define_unit("carats (metric)", "CD", 0.0002, 0, this.areas);
        UnitCollection.define_unit("cental", "", 45.359237, 0, this.areas);
        UnitCollection.define_unit("decagrams", "dag", 0.01, 0, this.areas);
        UnitCollection.define_unit("femtograms", "fg", 1e-18, 0, this.areas);
        UnitCollection.define_unit("grains", "gr", 0.00006479891, 0, this.areas);
        UnitCollection.define_unit("grams", "g", 1e-3, 0, this.areas);
        UnitCollection.define_unit("hectograms", "hg", 0.1, 0, this.areas);
        UnitCollection.define_unit("hundredweights", "cwt", 50.80234544, 0, this.areas);
        UnitCollection.define_unit("kilograms", "kg", 1, 0, this.areas);
        UnitCollection.define_unit("kilotonnes", "kt", 1e6, 0, this.areas);
        UnitCollection.define_unit("megatonnes", "Mt", 1e9, 0, this.areas);
        UnitCollection.define_unit("micrograms", "Âµg", 1e-9, 0, this.areas);
        UnitCollection.define_unit("milligrams", "mg", 1e-6, 0, this.areas);
        UnitCollection.define_unit("nanograms", "ng", 1e-12, 0, this.areas);
        UnitCollection.define_unit("ounces (US & UK)", "oz", 0.028349523125, 0, this.areas);
        UnitCollection.define_unit("pounds (US & UK)", "lbs", 0.45359237, 0, this.areas);
        UnitCollection.define_unit("stones", "st", 6.35029318, 0, this.areas);
        UnitCollection.define_unit("tonnes (metric)", "t", 1000, 0, this.areas);
    }

    defineSpeed()
    {
        this.speeds = {};

        UnitCollection.define_unit("centimeters/minute", "c/m", 0.00016666666666666666, 0, this.speeds);
        UnitCollection.define_unit("centimeters/second", "c/s", 0.01, 0, this.speeds);
        UnitCollection.define_unit("feet/hour", "ft/h", 0.00008466683600033866, 0, this.speeds);
        UnitCollection.define_unit("feet/minute", "ft/m", 0.00508, 0, this.speeds);
        UnitCollection.define_unit("feet/second", "ft/s", 0.3048, 0, this.speeds);
        UnitCollection.define_unit("inches/minute", "in/m", 0.0004233341800016934, 0, this.speeds);
        UnitCollection.define_unit("inches/second", "in/s", 0.0254, 0, this.speeds);
        UnitCollection.define_unit("kilometers/hour", "km/h", 0.2777777777777778, 0, this.speeds);
        UnitCollection.define_unit("kilometers/second", "km/s", 1000, 0, this.speeds);
        UnitCollection.define_unit("knots", "kn", 0.5144444444444444444, 0, this.speeds);
        UnitCollection.define_unit("meters/hour", "m/h", 0.0002777777777777778, 0, this.speeds);
        UnitCollection.define_unit("meters/minute", "m/m", 0.016666666666666666, 0, this.speeds);
        UnitCollection.define_unit("meters/second", "m/s", 1, 0, this.speeds);
        UnitCollection.define_unit("miles/hour", "mph", 0.44704, 0, this.speeds);
        UnitCollection.define_unit("miles/second", "mps", 1609.344, 0, this.speeds);
        UnitCollection.define_unit("speed of light", "sol", 2.9979e8, 0, this.speeds);
        UnitCollection.define_unit("speed of sound", "sos", 343, 0, this.speeds);
        UnitCollection.define_unit("yards/hour", "y/h", 0.000254000508001016, 0, this.speeds);
        UnitCollection.define_unit("yards/minute", "y/m", 0.01524, 0, this.speeds);
        UnitCollection.define_unit("yards/second", "y/s", 0.9144, 0, this.speeds);

    }
}
