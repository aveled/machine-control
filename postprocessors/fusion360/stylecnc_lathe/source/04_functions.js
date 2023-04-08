function onCommand(command) {
    switch (command) {
    }
}


function checkSectionType() {
    if (currentSection.getType() != TYPE_TURNING) {
        if (!hasParameter('operation-strategy') || (getParameter('operation-strategy') != 'drill')) {
            if (currentSection.getType() == TYPE_MILLING) {
                error(localize('Milling toolpath is not supported.'));
            } else {
                error(localize('Non-turning toolpath is not supported.'));
            }

            return;
        }
    }
}


function onClose() {
    writeBlock(mFormat.format(M_FUNCTIONS.PROGRAM_RESTART));
}



/**
  Writes the specified block.
*/
function writeBlock() {
    if (getProperty('showSequenceNumbers') == 'true') {
        if (optionalSection) {
            var text = formatWords(arguments);
            if (text) {
                writeWords('/', 'N' + sequenceNumber, text);
            }
        } else {
            writeWords2('N' + sequenceNumber, arguments);
        }
        sequenceNumber += getProperty('sequenceNumberIncrement');
    } else {
        if (optionalSection) {
            writeWords2('/', arguments);
        } else {
            writeWords(arguments);
        }
    }
}


function writeEmptyBlock() {
    if (getProperty('showSequenceNumbers') == 'true') {
        if (optionalSection) {
            writeWords('/', 'N' + sequenceNumber, '');
        } else {
            writeWords2('N' + sequenceNumber, '');
        }
        sequenceNumber += getProperty('sequenceNumberIncrement');
    } else {
        writeEmptyLine();
    }
}


function onComment(message) {
    writeComment(message);
}

function formatComment(text) {
    return '(' + text + ')';
}

/**
 * Output a comment.
 */
function writeComment(text) {
    writeln(formatComment(text));
}


function writeEmptyLine() {
    writeln('');
}
