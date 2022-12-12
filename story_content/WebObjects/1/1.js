


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Vibration True and False 30 x 4 Questions

var Listen =function(){
	
// Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

// Three items to change: 1) Function name on the first line, variable Words (number of rows in the excel file) and the the data base. Both are noted by //========================================= 

var player = GetPlayer();

//=========================================
var Words = 120 ; 
//=========================================



var arr = [];
while(arr.length < 8)
{
    var r = Math.floor(Math.random()*Words+1)*2;
    if(arr.indexOf(r) === -1) arr.push(r);
}


// var NumA=  4;

var NumA= Math.floor(Math.random() * 120 + 1);

// var NumA1= arr[2];
// var NumA2= arr[3];
// var NumA3= arr[4];
// var NumA4= arr[5];



var Words= [
"0",

//=========================================


"	The top part of the image is spectrum.	" , "	The top part of the image is a waveform.	" , "	The top part of the image is a trend plot.	" , "	The top part of the image is a polar plot.	" ,
"	The lower part of the image is waveform.	" , "	The lower part of the image is a shaft centerline plot.	" , "	The lower part of the image is waterfall plot.	" , "	The lower part of the image is casecade plot.	" ,
"	The top part of the image is in the frequecny domain.	" , "	The top part of the image is in the DC voltage domain.	" , "	The top part of the image is in the AC voltage domain.	" , "	The top part of the image is in the time domain.	" ,
"	The lower part of the image is in the time domain.	" , "	The lower part of the image is in the imagenery domain.	" , "	The lower part of the image is in the velocity domain.	" , "	The lower part of the image is in the frequency domain.	" ,
"	The amplitude unit in these plots is inches per second.	" , "	The amplitude unit in these plots is inches.	" , "	The amplitude unit in these plots is mm per second.	" , "	The amplitude unit in these plots is cycle per second.	" ,
"	The frequency unit in the above plot is cycle per miniute.	" , "	The frequency unit in the above plot is cycle per second.	" , "	The frequency unit in the above plot is radian per miniute.	" , "	The frequency unit in the above plot is Hz.	" ,
"	The x-axis unit in the lower plot is shaft rotation.	" , "	The x-axis unit in the lower plot is RPM.	" , "	The x-axis unit in the lower plot is sec.	" , "	The x-axis unit in the lower plot is msec.	" ,
"	The shaft speed of the measure machine is 1785 rpm.	" , "	The shaft speed of the measure machine is 1785 rps.	" , "	The shaft speed of the measure machine is 1785 Hz	" , "	The shaft speed of the measure machine is 12 rotations.	" ,
"	The data covers a span of up to 32 kCPM.	" , "	The data covers a span of up to 32000 kCPM.	" , "	The data covers a span of up to 32 CPM.	" , "	The data covers a span of up to 32 kHz.	" ,
"	The time record covers 12 turns of the shaft.	" , "	The time record covers 12 RPM.	" , "	The time record covers 12 mseconds.	" , "	The time record covers 12 seconds.	" ,
"	The crest factor of this data is < 2.	" , "	The crest factor of this data is > 2.	" , "	The crest factor of this data is = 2.	" , "	The crest factor of this data shows a clear bearing defect.	" ,
"	The used method of the data calcuation is root mean square.	" , "	The used method of the data calcuation is value squared.	" , "	The used method of the data calcuation is 0-p.	" , "	The used method of the data calcuation is peak to peak.	" ,
"	The overall peak amplitude is about 0.63 IPS.	" , "	The overall peak amplitude is about 0.32 IPS.	" , "	The overall peak amplitude is about 0.16 IPS.	" , "	The overall peak amplitude is about 0.63 mm/sec.	" ,
"	The overall RMS amplitude is about 0.32 IPS.	" , "	The overall RMS amplitude is about 0.63 IPS.	" , "	The overall RMS amplitude is about 0.16 IPS.	" , "	The overall RMS amplitude is about 0.32 mm/sec.	" ,
"	There is some subsynchronous activity.	" , "	There is some major non-synchronous activity.	" , "	There is some major supersynchronous activity.	" , "	There is no synchronous activity.	" ,
"	The ampltiude of 1X = 0.307 IPS RMS.	" , "	The ampltiude of 1X = 0.307 IPS 0-P.	" , "	The ampltiude of 1X = 0.307 MM/SEC RMS.	" , "	The ampltiude of 1X = 3.07 IPS RMS.	" ,
"	The spectrum shows relatively clean floor.	" , "	The spectrum shows relatively busy noise floor.	" , "	The spectrum shows a haystack.	" , "	The spectrum shows relatively unacceptable floor.	" ,
"	The overall pattern of the waveform is sinosoidal function.	" , "	The overall pattern of the waveform is square function.	" , "	The overall pattern of the waveform is unstable function.	" , "	The overall pattern of the waveform is a rare condition.	" ,
"	A possible cuase of this vibration is mass unbalance.	" , "	A possible cuase of this vibration is rolling element bearing defect.	" , "	A possible cuase of this vibration is fluid film stability (oil whirl).	" , "	A possible cuase of this vibration is faulty sensor.	" ,
"	Compared to the common industry standards this vibration is considered high.	" , "	Compared to the common industry standards this vibration is considered very smooth.	" , "	Compared to the common industry standards this vibration is considered normal level.	" , "	Compared to the common industry standards this vibration is considered like new.	" ,
"	If 400 lines are configurd there will be 400 steps to move throug in the spectum.	" , "	If 400 lines are configurd there will be 1024 steps to move throug in the spectum.	" , "	If 400 lines are configurd there will be 800 steps to move throug in the spectum.	" , "	If 400 lines are configurd there will be 200 steps to move throug in the spectum.	" ,
"	If 400 lines are configurd at least 1.333 seconds is required to collect the data.	" , "	If 400 lines are configurd at least 0.1333 seconds is required to collect the data.	" , "	If 400 lines are configurd at least 13.33 seconds is required to collect the data.	" , "	If 400 lines are configurd at least 0.1333 min is required to collect the data.	" ,
"	The point of measurment here is motor non-drive end horizontal.	" , "	The point of measurment here is motor inboard vertical.	" , "	The point of measurment here is motor inboard axial.	" , "	The point of measurment here is pump inboard horizontal.	" ,
"	The period of the shaft completing on rotation is 0.0336 seconds.	" , "	The period of the shaft completing on rotation is 0.336 seconds.	" , "	The period of the shaft completing on rotation is 33.6 seconds.	" , "	The period of the shaft completing on rotation is 0.0336 miniute.	" ,
"	The slip of this motor is about 14 cpm.	" , "	The slip of this motor is about 14 Hz.	" , "	The slip of this motor is about 25 Hz.	" , "	The slip of this motor is about 1800 cpm.	" ,
"	The 2LF of this machine is 120 Hz.	" , "	The 2LF of this machine is 60 Hz.	" , "	The 2LF of this machine is 100 Hz.	" , "	The 2LF of this machine is 30 Hz.	" ,
"	The frequency of 1X is about 29.75 Hz.	" , "	The frequency of 1X is about 29.75 CPM.	" , "	The frequency of 1X is about 1800 Hz.	" , "	The frequency of 1X is 1775 Hz.	" ,
"	The sensor used to collect this data is most probably an accelerometer.	" , "	The sensor used to collect this data is most probably realtive probe.	" , "	The sensor used to collect this data is most probably an strain gauge.	" , "	The sensor used to collect this data is most probably an velocity transeducer.	" ,
"	The paramter displayed in the data is velocity after it has been intergrated from acceleration.	" , "	The paramter displayed in the data is velocity after it has been intergrated from displacement.	" , "	The paramter displayed in the data is velocity after it has been intergrated from speed.	" , "	The paramter displayed in the data is velocity after it has been intergrated from position.	" ,
"	A possible correction of this vibration is fixing any looseness/weakness in the strucutre.	" , "	A possible correction of this vibration is replacing the vibration sensor.	" , "	A possible correction of this vibration is replacing the bearing.	" , "	A possible correction of this vibration is increasing the resolution.	" ,


//=========================================

];

// Code to decide if the word in the quetion is Arabic or English. 
// Question word is English. All answer words arein Arabic.

var WordA = Words[NumA];
// var WordQ = Words[NumA];

// var WordA1 = Words[NumA1-1];
// var WordQ1 = Words[NumA1];

// var WordA2 = Words[NumA2-1];
// var WordQ2 = Words[NumA2];

// var WordA3 = Words[NumA3-1];
// var WordQ3 = Words[NumA3];

// var WordA4 = Words[NumA4-1];
// var WordQ4 = Words[NumA4];



// Setting values to SL

player.SetVar("NumA",NumA);
// player.SetVar("NumA1",NumA1);
// player.SetVar("NumA2",NumA2);
// player.SetVar("NumA3",NumA3);
// player.SetVar("NumA4",NumA4);

// player.SetVar("WordQ",WordQ);
// player.SetVar("WordQ1",WordQ1);
// player.SetVar("WordQ2",WordQ2);
// player.SetVar("WordQ3",WordQ3);
// player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
// player.SetVar("WordA1",WordA1);
// player.SetVar("WordA2",WordA2);
// player.SetVar("WordA3",WordA3);
// player.SetVar("WordA4",WordA4);


var Reminder = (NumA)% 4; // the first option in the line is true. The remaning three options are false.
player.SetVar("Reminder",Reminder);

if (Reminder == 1) {var CorrectAnswer = true} else {var CorrectAnswer = false};

player.SetVar("CorrectAnswer",CorrectAnswer);
			
}


