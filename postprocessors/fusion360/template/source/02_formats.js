var gFormat = createFormat({ prefix: 'G', decimals: 2 });
var mFormat = createFormat({ prefix: 'M', decimals: 2 });


const M_FUNCTIONS = {
    PROGRAM_PAUSE: 0,
    PROGRAM_END: 2,
    SPINDLE_START_CW: 3,
    SPINDLE_START_CCW: 4,
    SPINDLE_STOP: 5,
    COOLANT_ON: 8,
    COOLANT_OFF: 9,
    PROGRAM_RESTART: 30,
};
