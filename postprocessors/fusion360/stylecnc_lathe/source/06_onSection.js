function onSection() {
    writeHeader();

    checkSectionType();


    writeEmptyBlock();
    writeEmptyBlock();
    writeBlock(mFormat.format(M_FUNCTIONS.COOLANT_OFF));
    writeEmptyBlock();

    // rapid position retract
    writeBlock(mFormat.format(M_FUNCTIONS.SPINDLE_STOP));
    writeEmptyBlock();
}
