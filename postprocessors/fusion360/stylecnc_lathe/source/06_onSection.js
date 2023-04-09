function onSection() {
    writeHeader();

    checkSectionType();


    currentTool = tool;

    writeEmptyBlock();
    writeBlock('T' + toolFormat.format(currentTool.number), numberTextSpacing + '(' + currentTool.description + ')');


    writeEmptyBlock();
    writeEmptyBlock();
    writeBlock(mFormat.format(M_FUNCTIONS.SPINDLE_START_CW_GEAR3));


    if (hasCooling(currentTool)) {
        writeEmptyBlock();
        writeBlock(mFormat.format(M_FUNCTIONS.COOLANT_ON), '(Cooling On)');
    }
}
