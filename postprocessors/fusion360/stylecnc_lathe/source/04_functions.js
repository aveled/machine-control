function padStart(str, len, char) {
    char = char || '0';

    while (str.length < len) {
        str = char + str;
    }

    return str;
}

function padEnd(str, len, char) {
    char = char || '0';

    while (str.length < len) {
        str = str + char;
    }

    return str;
}


function getSequenceNumber() {
    const currentSequenceNumber = sequenceNumber;
    sequenceNumber += getProperty('sequenceNumberIncrement');
    return 'N' + padStart(currentSequenceNumber + '', 4, '0') + numberTextSpacing;
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



/**
  Writes the specified block.
*/
function writeBlock() {
    if (getProperty('showSequenceNumbers') == 'true') {
        if (optionalSection) {
            var text = formatWords(arguments);
            if (text) {
                writeWords('/', getSequenceNumber(), text);
            }
        } else {
            writeWords2(getSequenceNumber(), arguments);
        }
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
            writeWords('/', getSequenceNumber(), ' ');
        } else {
            writeWords2(getSequenceNumber(), ' ');
        }
    } else {
        writeEmptyLine();
    }
}



function formatComment(text) {
    return '(' + text + ')';
}

/**
 * Output a comment.
 */
function writeComment(text) {
    writeln(getSequenceNumber() + ' ' + formatComment(text));
}


function writeEmptyLine() {
    writeln('');
}



function writeHeader() {
    if (!isFirstSection()) {
        return;
    }

    writeComment(headerDashLine);
    writeComment(headerEmptyLine);
    writeComment(headerTitle);
    writeComment(headerEmptyLine);

    // if (programName) {
    //     writeComment(programName);
    // }
    // if (programComment) {
    //     writeComment(programComment);
    // }

    writeComment(padEnd(' Date: ' + new Date().toLocaleString(), headerDashLine.length, ' '));
    writeComment(padEnd(' File: ' + getParameter('document-path'), headerDashLine.length, ' '));
    writeComment(headerEmptyLine);
    writeComment(headerDashLine);


    const insideDiameter = 0;
    const outsideJaws = 20;
    writeBlock(gFormat.format(30), xOutput.format(insideDiameter), zOutput.format(outsideJaws));

    const outsideDiameter = getParameter('stock-diameter');
    const materialLength = 20;
    writeBlock(gFormat.format(31), xOutput.format(outsideDiameter / 2), zOutput.format(materialLength));

    writeBlock(gFormat.format(90), gFormat.format(40));

    const rpmMainSpindle = 2550;
    writeBlock(gFormat.format(92), sOutput.format(rpmMainSpindle));

    const constantSurfaceSpeed = 240;
    writeBlock(gFormat.format(96), sOutput.format(constantSurfaceSpeed));

    const perRevolutionFeed = 0.25;
    writeBlock(gFormat.format(95), feedOutput.format(perRevolutionFeed));

    // rapid position safe plane
    writeBlock(gFormat.format(0), xOutput.format(150 / 2), zOutput.format(50));
}



function getFeed(f) {
    return feedOutput.format(f); // use feed value
}



function hasCooling(tool) {
    return tool.coolant === 1;
}
