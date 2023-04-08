properties = {
    writeMachine: {
        title: 'Write machine',
        description: 'Output the machine settings in the header of the code.',
        group: 'formats',
        type: 'boolean',
        value: false,
        scope: 'post'
    },
    writeTools: {
        title: 'Write tool list',
        description: 'Output a tool list in the header of the code.',
        group: 'formats',
        type: 'boolean',
        value: false,
        scope: 'post'
    },
    showSequenceNumbers: {
        title: 'Use sequence numbers',
        description: "'Yes' outputs sequence numbers on each block, 'Only on tool change' outputs sequence numbers on tool change blocks only, and 'No' disables the output of sequence numbers.",
        group: 'formats',
        type: 'enum',
        values: [
            { title: 'Yes', id: 'true' },
            { title: 'No', id: 'false' },
            { title: 'Only on tool change', id: 'toolChange' }
        ],
        value: 'true',
        scope: 'post'
    },
    sequenceNumberStart: {
        title: 'Start sequence number',
        description: 'The number at which to start the sequence numbers.',
        group: 'formats',
        type: 'integer',
        value: 10,
        scope: 'post'
    },
    sequenceNumberIncrement: {
        title: 'Sequence number increment',
        description: 'The amount by which the sequence number is incremented by in each block.',
        group: 'formats',
        type: 'integer',
        value: 1,
        scope: 'post'
    },
    maximumSpindleSpeed: {
        title: 'Max spindle speed',
        description: 'Defines the maximum spindle speed allowed by your machines.',
        group: 'configuration',
        type: 'integer',
        range: [0, 999999999],
        value: 3500,
        scope: 'post'
    },
};
