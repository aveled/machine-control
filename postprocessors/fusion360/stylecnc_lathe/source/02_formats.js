var gFormat = createFormat({ prefix: "G", decimals: 2 });
var mFormat = createFormat({ prefix: "M", decimals: 2 });


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
