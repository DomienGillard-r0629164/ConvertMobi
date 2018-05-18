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
        this.defineLengths();
        this.defineTimes();
        this.defineForces();
        this.defineVolumes();
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

    defineLengths()
    {
        this.lengths = {};

        UnitCollection.define_unit("astronomical units", "au", 149598550000, 0, this.lengths);
        UnitCollection.define_unit("barleycorns", "byc", 0.008467, 0, this.lengths);
        UnitCollection.define_unit("cables", "ca", 182.88, 0, this.lengths);
        UnitCollection.define_unit("centimeters", "cm", 0.01, 0, this.lengths);
        UnitCollection.define_unit("chains (surveyors')", "ch", 20.116840233680467360934721869444, 0, this.lengths);
        UnitCollection.define_unit("decimeters", "dm", 0.1, 0, this.lengths);
        UnitCollection.define_unit("ells (UK)", "ell", 0.875, 0, this.lengths);
        UnitCollection.define_unit("ems (pica)", "em", 0.0042333, 0, this.lengths);
        UnitCollection.define_unit("fathoms", "fa", 1.8288, 0, this.lengths);
        UnitCollection.define_unit("feet (UK & US)", "ft", 0.3048, 0, this.lengths);
        UnitCollection.define_unit("feet (US survey)", "fts", 0.30480060960121920243840487680975, 0, this.lengths);
        UnitCollection.define_unit("furlongs", "fu", 201.168, 0, this.lengths);
        UnitCollection.define_unit("hands", "ha", 0.1016, 0, this.lengths);
        UnitCollection.define_unit("hectometers", "hm", 100, 0, this.lengths);
        UnitCollection.define_unit("inches", "in", 0.0254, 0, this.lengths);
        UnitCollection.define_unit("kilometers", "km", 1000, 0, this.lengths);
        UnitCollection.define_unit("light years", "ly", 9.460528405e15, 0, this.lengths);
        UnitCollection.define_unit("meters", "m", 1, 0, this.lengths);
        UnitCollection.define_unit("micrometers", "µm", 1e-6, 0, this.lengths);
        UnitCollection.define_unit("mil", "mmm", 0.0000254, 0, this.lengths);
        UnitCollection.define_unit("miles (UK & US)", "mil", 1609.344, 0, this.lengths);
        UnitCollection.define_unit("miles (nautical, international)", "mili", 1852, 0, this.lengths);
        UnitCollection.define_unit("miles (nautical, UK)", "milu", 1853.184, 0, this.lengths);
        UnitCollection.define_unit("millimeters", "mm", 0.001, 0, this.lengths);
        UnitCollection.define_unit("nanometers", "nm", 1e-9, 0, this.lengths);
        UnitCollection.define_unit("parsecs", "psc", 3.0856776e16, 0, this.lengths);
        UnitCollection.define_unit("picometers", "pm", 1e-12, 0, this.lengths);
        UnitCollection.define_unit("Scandinavian mile", "Scm", 10000, 0, this.lengths);
        UnitCollection.define_unit("thou", "th", 0.0000254, 0, this.lengths);
        UnitCollection.define_unit("yards", "yd", 0.9144, 0, this.lengths);
    }

    defineTimes()
    {
        this.times = {};

        UnitCollection.define_unit("centuries", "c", 3153600000, 0, this.times);
        UnitCollection.define_unit("days", "d", 86400, 0, this.times);
        UnitCollection.define_unit("decades", "de", 315360000, 0, this.times);
        UnitCollection.define_unit("femtoseconds", "fs", 1e-15, 0, this.times);
        UnitCollection.define_unit("fortnights", "fo", 1209600, 0, this.times);
        UnitCollection.define_unit("hours", "h", 3600, 0, this.times);
        UnitCollection.define_unit("microseconds", "μs", 1e-6, 0, this.times);
        UnitCollection.define_unit("millenia", "mi", 31536000000, 0, this.times);
        UnitCollection.define_unit("milliseconds", "ms", 1e-3, 0, this.times);
        UnitCollection.define_unit("minutes", "min", 60, 0, this.times);
        UnitCollection.define_unit("months (Common)", "mc", 2628000, 0, this.times);
        UnitCollection.define_unit("nanoseconds", "ns", 1e-9, 0, this.times);
        UnitCollection.define_unit("picoseconds", "ps", 1e-12, 0, this.times);
        UnitCollection.define_unit("quarters (Common)", "qu", 7884000, 0, this.times);
        UnitCollection.define_unit("seconds", "s", 1, 0, this.times);
        UnitCollection.define_unit("shakes", "sh", 1e-8, 0, this.times);
        UnitCollection.define_unit("weeks", "we", 604800, 0, this.times);
        UnitCollection.define_unit("years (Common)", "y", 31536000, 0, this.times);
    }

    defineForces()
    {
        this.forces = {};

        UnitCollection.define_unit("dynes", "dyn", 1e-5, 0, this.forces);
        UnitCollection.define_unit("kilograms force", "kgf", 9.80665, 0, this.forces);
        UnitCollection.define_unit("kilonewtons", "kN", 1000, 0, this.forces);
        UnitCollection.define_unit("kips", "ki", 4448.222, 0, this.forces);
        UnitCollection.define_unit("meganewtons", "MN", 1e6, 0, this.forces);
        UnitCollection.define_unit("newtons", "N", 1, 0, this.forces);
        UnitCollection.define_unit("pounds force", "lbf", 4.4482216152605, 0, this.forces);
        UnitCollection.define_unit("poundals", "pdl", 0.138255, 0, this.forces);
        UnitCollection.define_unit("sthène", "sn",  1000, 0, this.forces);
        UnitCollection.define_unit("tonnes force", "tf", 9806.65, 0, this.forces);
        UnitCollection.define_unit("tons force (UK)", "tfuk", 9964.01641818352, 0, this.forces);
        UnitCollection.define_unit("tons force (US)", "tfus", 8896.443230521, 0, this.forces);
    }

    defineVolumes()
    {
        this.volumes = {};

        UnitCollection.define_unit("acre foot", "acf", 1233481.83754752, 0, this.volumes);
        UnitCollection.define_unit("barrels (oil)", "bbl", 158.987294928, 0, this.volumes);
        UnitCollection.define_unit("bushels (UK)", "bsu", 36.36872, 0, this.volumes);
        UnitCollection.define_unit("bushels (US)", "bss", 35.23907016688, 0, this.volumes);
        UnitCollection.define_unit("centiliters", "cli",  0.01, 0, this.volumes);
        UnitCollection.define_unit("cubic centimeters", "cm³", 1e-3, 0, this.volumes);
        UnitCollection.define_unit("cubic decimeters", "dm³", 1, 0, this.volumes);
        UnitCollection.define_unit("cubic decameters", "dc³", 1e6, 0, this.volumes);
        UnitCollection.define_unit("cubic feet", "ft³", 28.316846592, 0, this.volumes);
        UnitCollection.define_unit("cubic inches", "in³", 0.016387064, 0, this.volumes);
        UnitCollection.define_unit("cubic kilometers", "km³", 1e12, 0, this.volumes);
        UnitCollection.define_unit("cubic meters", "m³", 1e3, 0, this.volumes);
        UnitCollection.define_unit("cubic mile", "mil³", 4.168181825e12, 0, this.volumes);
        UnitCollection.define_unit("cubic millimeters", "mlm³", 1e-6, 0, this.volumes);
        UnitCollection.define_unit("cubic yards", "ya³", 764.554857984, 0, this.volumes);
        UnitCollection.define_unit("cups", "cu", 0.2365882365, 0, this.volumes);
        UnitCollection.define_unit("deciliters", "dli", 0.1, 0, this.volumes);
        UnitCollection.define_unit("dram (imperial)", "dri", 0.0035516328125000, 0, this.volumes);
        UnitCollection.define_unit("dram (US)", "dru", 0.0036966911953125, 0, this.volumes);
        UnitCollection.define_unit("fluid ounces (imperial)", "fl oz", 0.0284130625, 0, this.volumes);
        UnitCollection.define_unit("fluid ounces (US)","fl oz", 0.0295735295625, 0, this.volumes);
        UnitCollection.define_unit("gallons (imperial)", "gal", 4.54609, 0, this.volumes);
        UnitCollection.define_unit("gallons, dry (US)", "gad", 4.40488377086, 0, this.volumes);
        UnitCollection.define_unit("gallons, liquid (US)", "gall", 3.785411784, 0, this.volumes);
        UnitCollection.define_unit("gill (imperial)", "gi", 0.1420653125, 0, this.volumes);
        UnitCollection.define_unit("gill (US)", "giu", 0.11829411825, 0, this.volumes);
        UnitCollection.define_unit("kiloliters", "kl", 1e3, 0, this.volumes);
        UnitCollection.define_unit("liters", "l", 1, 0, this.volumes);
        UnitCollection.define_unit("liters (1901-1964)", "L", 1.000028, 0, this.volumes);
        UnitCollection.define_unit("milliliters", "ml", 1e-3, 0, this.volumes);
        UnitCollection.define_unit("microliters", "µl", 1e-6, 0, this.volumes);
        UnitCollection.define_unit("nanoliters", "nl", 1e-9, 0, this.volumes);
        UnitCollection.define_unit("picoliters", "pl", 1e-12, 0, this.volumes);
        UnitCollection.define_unit("pints (imperial)", "pt", 0.56826125, 0, this.volumes);
        UnitCollection.define_unit("pints, dry (US)", "ptd", 0.5506104713575, 0, this.volumes);
        UnitCollection.define_unit("pints, liquid (US)", "ptl", 0.473176473, 0, this.volumes);
        UnitCollection.define_unit("quarts (imperial)", "qt", 1.1365225, 0, this.volumes);
        UnitCollection.define_unit("quarts, dry (US)", "qtd", 1.101220942715, 0, this.volumes);
        UnitCollection.define_unit("quarts, liquid (US)", "qtl", 0.946352946, 0, this.volumes);
        UnitCollection.define_unit("table spoons", "ta", 0.01478676478125, 0, this.volumes);
        UnitCollection.define_unit("tea spoons", "te", 0.00492892159375, 0, this.volumes);
    }
}
