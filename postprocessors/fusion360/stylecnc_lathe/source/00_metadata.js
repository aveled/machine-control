description = 'Style CNC Lathe';
vendor = 'Style CNC (unofficial)';
vendorUrl = 'https://aveled.com';
longDescription = 'Turning post for Style CNC Machines Lathe (unofficial).';


legal = 'No Copyright';
certificationLevel = 2;
minimumRevision = 45702;

extension = 'cnc';
programNameIsInteger = false;
setCodePage('ascii');

capabilities = CAPABILITY_TURNING;
tolerance = spatial(0.002, MM);

minimumChordLength = spatial(0.25, MM);
minimumCircularRadius = spatial(0.01, MM);
maximumCircularRadius = spatial(1000, MM);
minimumCircularSweep = toRad(0.01);
maximumCircularSweep = toRad(180);
allowHelicalMoves = false;
allowedCircularPlanes = 1 << PLANE_ZX; // allow ZX plane only


debugMode = true;
