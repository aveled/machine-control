function onOpen() {
    sequenceNumber = getProperty('sequenceNumberStart');

    if (programName) {
        writeComment(programName);
    }
    if (programComment) {
        writeComment(programComment);
    }

    writeComment('Post Processor');
}
