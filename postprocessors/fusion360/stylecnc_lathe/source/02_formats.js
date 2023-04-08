var gFormat = createFormat({ prefix: 'G', decimals: 2, minDigitsLeft: 2, suffix: numberTextSpacing });
var mFormat = createFormat({ prefix: 'M', decimals: 2, minDigitsLeft: 2, suffix: numberTextSpacing });

var xFormat = createFormat({ decimals: (unit == MM ? 3 : 4), suffix: numberTextSpacing, forceDecimal: true, scale: 2 }); // diameter mode
var yFormat = createFormat({ decimals: (unit == MM ? 3 : 4), suffix: numberTextSpacing, forceDecimal: true });
var zFormat = createFormat({ decimals: (unit == MM ? 3 : 4), suffix: numberTextSpacing, forceDecimal: true });

var feedFormat = createFormat({ decimals: (unit == MM ? 4 : 5), forceDecimal: true });
var rpmFormat = createFormat({ decimals: 0 });


const M_FUNCTIONS = {
    PROGRAM_PAUSE: 0,
    PROGRAM_END: 2,
    SPINDLE_START_CW: 3,
    SPINDLE_START_CCW: 4,
    SPINDLE_STOP: 5,
    COOLANT_ON: 8,
    COOLANT_OFF: 9,
    PROGRAM_RESTART: 30,
    SPINDLE_START_CW_GEAR1: 31,
    SPINDLE_START_CW_GEAR2: 32,
    SPINDLE_START_CW_GEAR3: 33,
    SPINDLE_START_CW_GEAR4: 34,
    SPINDLE_START_LOWEST_GEAR: 40,
    SPINDLE_START_CCW_GEAR1: 41,
    SPINDLE_START_CCW_GEAR2: 42,
    SPINDLE_START_CCW_GEAR3: 43,
    SPINDLE_START_CCW_GEAR4: 44,
};



var xOutput = createVariable({ prefix: 'X' }, xFormat);
var yOutput = createVariable({ prefix: 'Y' }, yFormat);
var zOutput = createVariable({ onchange: function () { retracted[Z] = false; }, prefix: 'Z' }, zFormat);

var feedOutput = createVariable({ prefix: 'F' }, feedFormat);
var sOutput = createVariable({ prefix: 'S', force: true }, rpmFormat);
