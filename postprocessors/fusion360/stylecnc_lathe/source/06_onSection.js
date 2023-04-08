function onSection() {
    checkSectionType();


    stockDiamater = getParameter('stock-diameter');
    writeComment('Stock Diameter: ' + stockDiamater);


    writeEmptyBlock();
    writeEmptyBlock();
    writeBlock(mFormat.format(M_FUNCTIONS.COOLANT_OFF));
    writeEmptyBlock();

    // rapid position retract
    writeBlock(mFormat.format(M_FUNCTIONS.SPINDLE_STOP));
    writeEmptyBlock();
}
