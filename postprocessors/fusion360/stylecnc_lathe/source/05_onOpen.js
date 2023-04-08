function onOpen() {
    sequenceNumber = getProperty('sequenceNumberStart');

    if (programName) {
        writeComment(programName);
    }
    if (programComment) {
        writeComment(programComment);
    }


    writeComment('Style Lathe');

    writeBlock(gFormat.format(30));

    writeBlock(gFormat.format(31));
}
