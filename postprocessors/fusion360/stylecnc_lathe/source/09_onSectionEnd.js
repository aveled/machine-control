function onSectionEnd() {
    writeEmptyBlock();
    if (hasCooling(currentTool)) {
        writeBlock(mFormat.format(M_FUNCTIONS.COOLANT_OFF), '(Cooling Off)');
        writeEmptyBlock();
    }

    // rapid position retract

    writeBlock(mFormat.format(M_FUNCTIONS.SPINDLE_STOP));
    writeEmptyBlock();

    currentTool = undefined;
}
