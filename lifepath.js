//this will store the step and the result.

var packagePoints = 0;
var nextPathTable = 0; //table 6.2
var factionTable = 0; //table 9.2
var skipPreFall = false;
var skiptoPostFallPath = false;


//no longer necessary, but is the order of phases to roll
var table1 = [
    { "Aptitudes": "" }, //done
    { "Native Language": "" }, //done
    { "Youth Path": "" }, //done
    { "Background Event": "" }, //done
    { "Age": "" }, //done
    { "Adult Pre-Fall Path": "" }, //done
    { "Pre-Fall Event": "" },//done
    { "The Fall Event": "" }, //done
    { "Post-Fall Path": "" }, //done with some pending fixes
    { "Extra Packages": "" }, //done
    { "Post-Fall Event": "" }, //done
    { "Firewall Event": "" }, //done
    { "Gear/Credits": "" },
    { "Gatecrashing": "" }, //data table pending
    { "Story": "" }, // data table pending
	{ "Morphs": ""}, //done
];

function CreateCharacter() {

var textbox = document.getElementById("aptitudes");
textbox.innerHTML = "Aptitudes: " + Aptitudes();
textbox.innerHTML += "<br /><br />";
textbox.innerHTML += "Language: " + Language();
textbox.innerHTML += "<br /><br />";
textbox.innerHTML += "Youth Path: " + Youth();
textbox.innerHTML += "<br />";
textbox.innerHTML += "Background Event: " + Background();
textbox.innerHTML += "<br /><br />";
textbox.innerHTML += "Age: " + Age();
textbox.innerHTML += "<br /><br />";
textbox.innerHTML += "Adult Pre-Fall Path: " + PreFallPath();
textbox.innerHTML += "<br /><br />";
textbox.innerHTML += "Pre-Fall Event: " + PreFallEvent();
textbox.innerHTML += "<br /><br />";
textbox.innerHTML += "The Fall: " + Fall();
textbox.innerHTML += "<br /><br />";
textbox.innerHTML += "Post-Fall Path: " + PostFallPath();
textbox.innerHTML += "<br /><br />";
textbox.innerHTML += "Extra Packages: " + Extras();
textbox.innerHTML += "<br />";
textbox.innerHTML += "Post-Fall Event: " + PostFallEvent();
textbox.innerHTML += "<br /><br />";
textbox.innerHTML += "Firewall Event: " + Firewall();
textbox.innerHTML += "<br /><br />";
//textbox.innerHTML += "Gear/Credits: " + Gear();
//textbox.innerHTML += "<br /><br />";
}

function Aptitudes() {
    var apts = RollD10();
    while (apts > 8)
        apts = RollD10();

    switch (apts) {
        case 1:
            return "(1) Brawler: 10, 20, 15, 20, 10, 20, 10";
            break;
        case 2:
            return "(2) Dilettante: 15, 15, 15, 15, 15, 15, 15";
            break;
        case 3:
            return "(3) Extrovert: 15, 15, 15, 15, 20, 10, 15";
            break;
        case 4:
            return "(4) Inquisitive: 20, 10, 20, 10, 20, 10, 15";
            break;
        case 5:
            return "(5) Researcher: 20, 15, 20, 15, 10, 10, 15";
            break;
        case 6:
            return "(6) Survivor: 10, 15, 15, 15, 10, 20, 20";
            break;
        case 7:
            return "(7) Techie: 20, 15, 10, 15, 15, 15, 15";
            break;
        case 8:
            return "(8) Thrill Seeker: 10, 20, 15, 20, 15, 15, 10";
            break;
    }
}

function Language() {
    var lang = RollD100();
    switch (true) {
        case (lang <= 6):
            return "(" + lang + ") " + "Arabic";
            break;
        case (lang <= 9):
            return "(" + lang + ") " + "Bengali";
            break;
        case (lang <= 14):
            return "(" + lang + ") " + "Cantonese";
            break;
        case (lang <= 15):
            return "(" + lang + ") " + "Dutch";
            break;
        case (lang <= 24):
            return "(" + lang + ") " + "English";
            break;
        case (lang <= 27):
            return "(" + lang + ") " + "Farsi/Persian";
            break;
        case (lang <= 31):
            return "(" + lang + ") " + "French";
            break;
        case (lang <= 35):
            return "(" + lang + ") " + "German";
            break;
        case (lang <= 41):
            return "(" + lang + ") " + "Hindi";
            break;
        case (lang <= 42):
            return "(" + lang + ") " + "Italian";
            break;
        case (lang <= 47):
            return "(" + lang + ") " + "Japanese";
            break;
        case (lang <= 51):
            return "(" + lang + ") " + "Javanese";
            break;
        case (lang <= 53):
            return "(" + lang + ") " + "Korean";
            break;
        case (lang <= 62):
            return "(" + lang + ") " + "Mandarin";
            break;
        case (lang <= 63):
            return "(" + lang + ") " +  "Polish";
            break;
        case (lang <= 68):
            return "(" + lang + ") " +"Portuguese";
            break;
        case (lang <= 71):
            return "(" + lang + ") " + "Punjabi";
            break;
        case (lang <= 76):
            return "(" + lang + ") " + "Russian";
            break;
        case (lang <= 78):
            return "(" + lang + ") " + "Skandinaviska";
            break;
        case (lang <= 84):
            return "(" + lang + ") " + "Spanish";
            break;
        case (lang <= 85):
            return "(" + lang + ") " + "Swedish";
            break;
        case (lang <= 87):
            return "(" + lang + ") " + "Tamil";
            break;
        case (lang <= 89):
            return "(" + lang + ") " + "Turkish";
            break;
        case (lang <= 92):
            return "(" + lang + ") " + "Urdu";
            break;
        case (lang <= 94):
            return "(" + lang + ") " + "Vietnamese";
            break;
        case (lang <= 98):
            return "(" + lang + ") " + "Wu";
            break;
    default:
            return "(" + lang + ") " + "Other";
            break;
    }
}

function Youth() {
    var heritage = RollD10();
    var rolls = 1;
    var results = "(" + heritage + ")";
	

    if (heritage == 10) {
        rolls = 3;
        results += "Fractured Youth: 3x 1PP - ";
		packagePoints += 3;
    }
    else if (heritage >= 7) {
        rolls = 2;
        results += "Split Youth: 2x 1PP - ";
		packagePoints += 2;
    }
	else
	{
		results += "Wholesome Youth: 3PP - ";
		packagePoints += 3;
	}
	results += "<br />";

    while (rolls > 0) {
        rolls--;
		var bgInfo = "";
		var typeOfBackground = RollD100();
		bgInfo += "(" + typeOfBackground;
		switch (true)
		{
			case (typeOfBackground <= 50):
			//earthborn
			var ypackage = RollD10();
			bgInfo += "/" + ypackage + ")";
			switch (true)
			{
				case (ypackage <= 1):
					bgInfo += "[Silver Nanoswarm in your blood - Hyperelite: Scion package][Exalt morph]";
					nextPathTable = 6.5;
					break;
				case (ypackage <= 2):
					bgInfo += "[Celebrity Child - Hyperelite: Media Personality package][Sylph morph]";
					nextPathTable = 6.5;
					break;
				case (ypackage <= 5):
					bgInfo += "[Privileged: enclave born -  Fall Evacuee: Enclaver package][Splicer morph]";
					nextPathTable = 6.6;
					break;
				case (ypackage <= 7):
					bgInfo += "[Precariat: poverty is a step away - Re-instantiated: Civilian Casualty package]";
					var subBodyRoll = RollD10();
					switch(true)
					{
						case (subBodyRoll <= 4):
							bgInfo += "[Splicer ";
							break;
						default:
							bgInfo += "[Flat ";
							break;
					}
					bgInfo += " morph]";
					nextPathTable = 6.3;
					break;
				case (ypackage <= 8):
					bgInfo += "[Troubled: raised among disaster or war -  Fall Evacuee: Underclass package][Flat morph]";
					var nextPathRoll = RollD10();
					switch(true)
					{
						case (nextPathRoll <5):
							nextPathTable = 6.4;
							break;
						case (nextPathRoll < 9):
							nextPathTable = 6.3;
							break;	
						default:
							nextPathTable = 6.2;
					}
					break;
				case (ypackage <= 9):
					bgInfo += "[Raised on the Street -  Street Rat package][Flat morph]";
					nextPathTable = 6.4;
					break;
				default:
					bgInfo+= "[Raised in a collective/communal grouping - Re-instantiated: Civilian Casualty package]";
					var subBodyRoll = RollD10();
					switch(true)
					{
						case (subBodyRoll <= 4):
							bgInfo += "[Splicer ";
							break;
						default:
							bgInfo += "[Flat ";
							break;
					}
					bgInfo += " morph]";
					nextPathTable = 6.2;
					break;
			}
			break;
			case (typeOfBackground <= 60):
			//Orbital
			var ypackage = RollD10();
			bgInfo += "/" + ypackage + ")";
			switch (true)
			{
				case (ypackage <= 1):
					bgInfo += "[Orbital Elite - Hyperelite: Scion package][Exalt morph]";
					nextPathTable = 6.5;
					break;
				case (ypackage <= 2):
					bgInfo += "[A new star born above the earth - Hyperelite: Media Personality package][Sylph morph]";
					nextPathTable = 6.5;
					break;
				case (ypackage <= 4):
					bgInfo += "[Orbital Colonist  Fall Evacuee: Enclaver package][Splicer morph]";
					nextPathTable = 6.6;
					break;
				case (ypackage <= 6):
					bgInfo += "[Orbital Colony Staff " + ColonialStaff() + "]";
					nextPathTable = 6.5;
					break;
				case (ypackage <= 8):
					bgInfo += "[One of the lucky few to live above -  Re-instantiated: Civilian Casualty package]";
					var subBodyRoll = RollD10();
					switch(true)
					{
						case (subBodyRoll <= 4):
							bgInfo += "[Splicer ";
							break;
						case (subBodyRoll <= 9):
							bgInfo += "[Flat ";
							break;
						default:
							bgInfo += "[Bouncer ";
							break;
					}
					bgInfo += " morph]";
					nextPathTable = 6.3;
					break;
				default:
					bgInfo+= "[Orbital worker family - Indenture package]";
					var subBodyRoll = RollD10();
					switch(true)
					{
						case (subBodyRoll <= 8):
							bgInfo += "[Flat ";
							break;
						default:
							bgInfo += "[Bouncer ";
							break;
					}
					bgInfo += " morph]";
					nextPathTable = 6.7;
					break;
			}
			break;
			case (typeOfBackground <= 68):
			//Lunar
			var ypackage = RollD10();
			bgInfo += "/" + ypackage + ")";
			switch (true)
			{
				case (ypackage <= 1):
					bgInfo += "[Lunar Elite - ";
					var subProll = RollD10();
					if (subProll <= 7)
						bgInfo += "Hyperelite: Scion package]";
					else
						bgInfo += "Hyperelite: Media Personality package]";
					var morphRoll = RollD10();
					if (morphRoll <= 7)
						bgInfo += "[Exalt morph]";
					else
						bgInfo += "[Sylph morph]";
					nextPathTable = 6.5;
					break;
				case (ypackage <= 3):
					bgInfo += "[Lunar colonist - privileged homesteader - Fall Evacuee: Enclaver package][Splicer morph]";
					nextPathTable = 6.6;
					break;
				case (ypackage <= 5):
					bgInfo += "[Lunar Colony Staff -" + ColonialStaff() + "]";
					//nextPathTable = 6.6;
					break;
				case (ypackage <= 7):
					bgInfo += "[Raised with a view of Earth - Re-instantiated: Civilian Casualty package]";
					var subBodyRoll = RollD10();
					switch(true)
					{
						case (subBodyRoll <= 4):
							bgInfo += "[Splicer ";
							break;
						default:
							bgInfo += "[Flat ";
							break;
					}
					bgInfo += " morph]";
					nextPathTable = 6.3;
					break;
				default:
					bgInfo += "[Lunar work force - Indenture package][Flat morph]";
					nextPathTable = 6.7;
					break;
			}
			break;
			case (typeOfBackground <=  76):
			//martian
			var ypackage = RollD10();
			bgInfo += "/" + ypackage + ")";
			switch (true)
			{
				case (ypackage <= 1):
					bgInfo += "[Martian Elite - Hyperelite: Scion package][Olympian morph]";
					nextPathTable = 6.5;
					break;
				case (ypackage <= 3):
					bgInfo += "[Martian colonist - privileged homesteader - Fall Evacuee: Enclaver package][Splicer morph]";
					nextPathTable = 6.6;
					break;
				case (ypackage <= 5):
					bgInfo += "[Martian Colony Staff -" + ColonialStaff() + "]";
					//nextPathTable = 6.6;
					break;
				case (ypackage <= 6):
					bgInfo += "[Risk-taking Martian settler - Re-instantiated: Civilian Casualty package]";
					var subBodyRoll = RollD10();
					if (subBodyRoll <= 4)
						bgInfo += "[Splicer morph]";
					else
						bgInfo += "[Flat morph]";
					nextPathTable = 6.3;
					break;
				case (ypackage <= 9):
					bgInfo += "[Martian slave labor - Indentured package][Flat morph]";
					nextPathTable = 6.7;
					break;
				default:
					bgInfo += "[Pre-Barsoomian Martian nomad - Drifter package]";
					var subBodyRoll = RollD10();
					if (subBodyRoll <= 4)
						bgInfo += "[Splicer morph]";
					else
						bgInfo += "[Flat morph]";
					nextPathTable = 6.2;
					break;
			}
			break;
			case (typeOfBackground <= 82):
			//sunward hab
			var ypackage = RollD10();
			bgInfo += "/" + ypackage + ")";
			switch (true)
			{
				case (ypackage <= 1):
					bgInfo += "[Pioneer dynasty - Hyperelite: Scion package][Exalt morph]";
					nextPathTable = 6.5;
					break;
				case (ypackage <= 3):
					bgInfo += "[Venusian colonist - privileged homesteader - Fall Evacuee: Enclaver package][Splicer morph]";
					nextPathTable = 6.6;
					break;
				case (ypackage <= 6):
					bgInfo += "[Venusian Colony Staff -" + ColonialStaff() + "]";
					//nextPathTable = 6.6;
					break;
				default:
					bgInfo += "[Mercurian slave labor - Indentured package]";
					var bodyRoll = RollD10();
					if (bodyRoll <= 7)
						bgInfo += "[Flat morph]";
					else
						bgInfo += "[Case morph]";
					nextPathTable = 6.7;
					break;
			}
			break;
			case (typeOfBackground <= 89):
			//rimward hab
			var ypackage = RollD10();
			bgInfo += "/" + ypackage + ")";
			switch (true)
			{
				case (ypackage <= 1):
					bgInfo += "[Extropian Founders - Fall Evacuee: Enclaver package][Bouncer morph]";
					nextPathTable = 6.5;
					break;
				case (ypackage <= 2):
					bgInfo += "[Jovian colonist - shelter among giants - Isolate: Survior package]";
					var subBodyRoll = RollD10();
					if (subBodyRoll <= 5)
						bgInfo += "[Flat morph]";
					else if (subBodyRoll <= 8)
						bgInfo += "[Splicer morph]";
					else
						bgInfo += "[Olympian morph]";
					nextPathTable = 6.8;
					break;
				case (ypackage <= 3):
					bgInfo += "[Titanian colonist - Colonist: Science Staff package]";
					var subBodyRoll = RollD10();
					if (subBodyRoll <= 8)
						bgInfo += "[Splicer morph]";
					else
						bgInfo += "[Menton morph]";
					nextPathTable = 6.9;
					break;
				case (ypackage <= 5):
					bgInfo += "[Anarchist colonist - Colonist: Tech Staff package]";
					var subBodyRoll = RollD10();
					if (subBodyRoll <= 6)
						bgInfo += "[Splicer morph]";
					else
						bgInfo += "[Bouncer morph]";
					nextPathTable = 6.2;
					break;
				case (ypackage <= 8):
					bgInfo += "[Small colony outpost - " + ColonialStaff() + "]";
					nextPathTable = 6.7;
					break;
				default:
					bgInfo += "[Asteroid miner - Indenture package]";
					var subBodyRoll = RollD10();
					if (subBodyRoll <= 4)
						bgInfo += "[Flat morph]";
					else if (subBodyRoll <= 7)
						bgInfo += "[Case morph]";
					else
						bgInfo += "[Bouncer morph]";
					nextPathTable = 6.7;
					break;
			}
			break;
			case (typeOfBackground <= 95):
			//migrant	
			var ypackage = RollD10();
			bgInfo += "/" + ypackage + ")";
			switch (true)
			{
				case (ypackage <= 3):
					bgInfo += "[Wandering the system - Drifter package]";
					var bodyRoll = RollD10();
					if (bodyRoll <= 6)
						bgInfo += "[Splicer morph]";
					else
						bgInfo += "[Bouncer morph]";
					nextPathTable = 6.10;
					break;
				case (ypackage <= 5):
					bgInfo += "[Found freedom in orbit - Original Scum package]";
					var bodyRoll = RollD10();
					if (bodyRoll <= 5)
						bgInfo += "[Splicer morph]";
					else if (bodyRoll <= 8)
						bgInfo += "[Bouncer morph]";
					else
						bgInfo += RandomMorph(false, false, false, false);
					nextPathTable = 6.2;
					break;
				case (ypackage <= 68):
					bgInfo += "[Supply ship crew - Colonist: Flight Staff package]";
					var bodyRoll = RollD10();
					if (bodyRoll <= 4)
						bgInfo += "[Splicer morph]";
					else if (bodyRoll <= 7)
						bgInfo += "[Case morph]";
					else
						bgInfo += "[Bouncer morph]";
					nextPathTable = 6.10;
					break;
				default:
					bgInfo += "[Mercurian slave labor - Indentured package]";
					var bodyRoll = RollD10();
					if (bodyRoll <= 7)
						bgInfo += "[Flat morph]"
					else
						bgInfo += "[Case morph]"
					nextPathTable = 6.7;
					break;
			}
			break;
			break;
			default:
			//created not born
			//TODO: AGI results roll 1d10, on 1-3 they are post-fall AIs and skip to step 9. (adult post-fall)
			//TODO: Lost skip straight to step 9 as well.
			var ypackage = RollD10();
			bgInfo += "/" + ypackage + ")";
			switch (true)
			{
				case (ypackage <= 3):
					bgInfo += "[Almost human - Infolife: Humanities package][Informorph]";
					nextPathTable = 6.3;
					break;
				case (ypackage <= 5):
					bgInfo += "[More machine than man - Infolife: Machine AGI package][Informorph]";
					nextPathTable = 6.11;
					break;
				case (ypackage <= 7):
					bgInfo += "[Created by and for science - Infolife: Research AGI package][Informorph]";
					nextPathTable = 6.9;
					break;
				case (ypackage <= 8):
					bgInfo += "[An experiment gone horribly wrong - ";
					var pRoll = RollD10();
					if (pRoll = 5)
						bgInfo += "Lost: Disturbed Child package]";
					else
						bgInfo += "Lost: Masked Normalcy package]";
					bgInfo += "[Futura morph]";
					nextPathTable = 6.1;
					break;
				case (ypackage <= 9):
					bgInfo += "[Second class citizenship was not for you - Uplife: Escapee package]";
					bgInfo += RandomMorph(false, false, true, false);
					nextPathTable = 6.3;
					break;
				default:
					bgInfo += "[Living proof that uplif works - Uplift: Standard Specimen package]";
					bgInfo += RandomMorph(false, false, true, false);
					nextPathTable = 6.3;
					break;
			}
			break;
		}
		results += bgInfo + "<br />";
    }
    return results;
}

//called in several childhood tables.
function ColonialStaff()
{
	var colonyResult = RollD10();
	var bgInfo = "(" + colonyResult + ")"
	switch(true)
	{
		case (colonyResult <= 1):
		bgInfo += "[Born to Lead -  Colonist: Command Staff package]";
					var subBodyRoll = RollD10();
					switch(true)
					{
						case (subBodyRoll <= 7):
							bgInfo += "[Splicer ";
							break;
						default:
							bgInfo += "[Exalt ";
							break;
					}
					bgInfo += " morph]";
					nextPathTable = 6.6;
		break;
		case (colonyResult <= 3):
		bgInfo += "[Space Crew -  Colonist: Flight Staff package]";
					var subBodyRoll = RollD10();
					switch(true)
					{
						case (subBodyRoll <= 5):
							bgInfo += "[Splicer ";
							break;
						default:
							bgInfo += "[Bouncer ";
							break;
					}
					bgInfo += " morph]";
					nextPathTable = 6.10;
		break;
		case (colonyResult <= 5):
		bgInfo += "[Peacekeeper -  Colonist: Security Staff package]";
					var subBodyRoll = RollD10();
					switch(true)
					{
						case (subBodyRoll <= 3):
							bgInfo += "[Flat ";
							break;
						case (subBodyRoll <= 7):
							bgInfo += "[Splicer ";
							break;
						default:
							bgInfo += "[Olympian ";
							break;
					}
					bgInfo += " morph]";
					nextPathTable = 6.8;
		break;
		case (colonyResult <= 7):
			bgInfo += "[Researcher -  Colonist: Science Staff package]";
					var subBodyRoll = RollD10();
					switch(true)
					{
						case (subBodyRoll <= 6):
							bgInfo += "[Splicer ";
							break;
						default:
							bgInfo += "[Menton ";
							break;
					}
					bgInfo += " morph]";
					nextPathTable = 6.9;
		break;
		default:
		bgInfo += "[You kept the habitat functioning -  Colonist: Tech Staff package]";
					var subBodyRoll = RollD10();
					switch(true)
					{
						case (subBodyRoll <= 3):
							bgInfo += "[Flat ";
							break;
						case (subBodyRoll <= 8):
							bgInfo += "[Splicer ";
							break;
						default:
							bgInfo += "[Bouncer ";
							break;
					}
					bgInfo += " morph]";
					nextPathTable = 6.11;
		break;
	}
	return bgInfo;
}

function Background() {
    var bg = RollD100();
    switch(true)
    {
        case (bg <=20):
            return "(" + bg + ") roll on Story event table, gain 1 Moxie";
            break;
        case (bg <=22):
            return "(" + bg + ") Traumatic childhood accident. Gain PSTD trait.";
            break;
            case (bg <=24):
            return "(" + bg + ") You are not only good with your hands, you are good with both hands. Gain Ambidexterity trait";
            break;
            case (bg <=26):
            return "(" + bg + ") The people that raise you do not tolerate foolishness. Gain Common Sense trait";
            break;
            case (bg <=28):
            return "(" + bg + ") You are raised in an abusive environment. Gain Pain Tolerance(Level 1) trait.";
            break;
            case (bg <=30):
            return "(" + bg + ") You fall in with the wrong crowd. [background override]";
            break;
            case (bg <=32):
            return "(" + bg + ") You are kept at home and not allowed to play sports or with other kids. -5 COO";
            break;
            case (bg <=34):
            return "(" + bg + ") You grow up in a maze-like urban area or a difficult rural area. Gain Direction Sense trait.";
            break;
            case (bg <=36):
            return "(" + bg + ") You are raised in dangerous conditions where you have to adapt or die. Gain Fast Learner trait.";
            break;
            case (bg <=38):
            return "(" + bg + ") You skip too much school. -20 to one skill";
            break;
            case (bg <=40):
            return "(" + bg + ") Growing up isolated from others, you develop introvert tendencies. -5 SAV";
            break;
            case (bg <=42):
            return "(" + bg + ") While your friends throw themselves into VR gaming worlds, you simply throw up. Gain VR Vertigo trait.";
            break;
            case (bg <=44):
            return "(" + bg + ") Raised in an environment of constant stimulus, you are forced to tune out. Gain Oblivious trait.";
            break;
            case (bg <=46):
            return "(" + bg + ") You grow up in a melting-pot, polyglot culture. Gain Hyper Linguist trait.";
            break;
            case (bg <=48):
            return "(" + bg + ") You party too hard. -20 to one skill.";
            break;
            case (bg <=50):
            return "(" + bg + ") Your childhood education is poor to non-existent. Gain Illiterate trait.";
            break;
            case (bg <=52):
            return "(" + bg + ") A healthy amount of physical activities improves your abilities. +5 COO";
            break;
            case (bg <=54):
            return "(" + bg + ") One (or both) of your parents is bilingual. +20 to a Language skill.";
            break;
            case (bg <=56):
            return "(" + bg + ") A misunderstood situation makes you the laughing stock of your peer group. Gain Socially Graceless trait.";
            break;
            case (bg <=58):
            return "(" + bg + ") Shoplifting and stealing are either hobbies or a necessity. +10 Palming skill.";
            break;
            case (bg <=60):
            return "(" + bg + ") You experiment with drugs, but it isn't for you. Gain Drug Exception trait.";
            break;
            case (bg <=62):
            return "(" + bg + ") A dysfunctional home life keeps you from doing well in school. -5 COG.";
            break;
            case (bg <=64):
            return "(" + bg + ") Being a bully has its advantages. +10 Intimidation skill.";
            break;
            case (bg <=66):
            return "(" + bg + ") Your first experiments with forking prove to you that merging will not be easy. Gain Divergent Personality trait.";
            break;
            case (bg <=68):
            return "(" + bg + ") You receive your first cortical stack at an early age - and luckily just in time. Gain a random morph" + RandomMorph();
            break;
            case (bg <=70):
            return "(" + bg + ") You are raised around animals. +10 Animal Handling skill.";
            break;
            case (bg <=72):
            return "(" + bg + ") Your parents raise you with some unusual ideas. Gain Faulty Education trait.";
            break;
            case (bg <=74):
            return "(" + bg + ") You cheat your way through school. -10 to one skill.";
            break;
            case (bg <=76):
            return "(" + bg + ") You enjoy urban exploration and getting into off-limits areas. +10 to Climbing or Infiltration skill.";
            break;
            case (bg <=78):
            return "(" + bg + ") You hone your headshot skills in VR combat simulations. Gain Murder Simulator Addict trait.";
            break;
            case (bg <=80):
            return "(" + bg + ") Because you excel in your studies, you are placed in an advanced program. +5 COG.";
            break;
            case (bg <=82):
            return "(" + bg + ") Your parents are highly private and extremely strict. Gain Poorly Socialized trait.";
            break;
            case (bg <=84):
            return "(" + bg + ") You leave home at an early age and forge your own path. +1 Moxie.";
            break;
            case (bg <=86):
            return "(" + bg + ") One of your personality quirks gains you some attention from peers, but then it becomes a permanent and noticeable part of your daily behavior. Gain Identifiable Quirk trait.";
            break;
            case (bg <=88):
            return "(" + bg + ") As a free-range kid, you learn how to get around on your own. +10 Navigation skill.";
            break;
            case (bg <=90):
            return "(" + bg + ") One of your parental figures abandons you as a child. Gain Trusting Heart trait.";
            break;
            case (bg <=92):
            return "(" + bg + ") A series of childhood injuries leaves you struggling to catch up physically. -5 SOM.";
            break;
            case (bg <=94):
            return "(" + bg + ") You lose all of your close friends in a horribly awkward teen social situation. Gain Not A Team Player trait.";
            break;
            case (bg <=96):
            return "(" + bg + ") Tormented by bullies as a kid, you learn to stand up for yourself. +10 Unarmed Combat skill.";
            break;
            case (bg <=98):
            return "(" + bg + ") The strictness of your parents leaves you only one choice: to excel at lying. +10 Deception skill.";
            break;
            default:
            return "(" + bg + ") Adult generations are never quite as on-top of technological changes, and you use that to your advantage. +10 Infosec skill.";
            break;
    }
}

function Age() {
    //1 roll for decade, one roll for exact age.
	var decade = RollD100();
	var onesYear = RollD10();
	if (onesYear == 10)
		onesYear = 0;
	var results = "(" + decade + "/" + onesYear + ") ";
	
	switch (true)
	{
		case (decade <= 20):
		results += "2" + onesYear;
		skipPreFall= true;
		//this one case, skip to step 8.
		break;
		case (decade <= 50):
		results += "3" + onesYear;
		break;
		case (decade <= 70):
		results += "4" + onesYear;
		break;
		case (decade <= 80):
		results += "5" + onesYear;
		break;
		case (decade <= 85):
		results += "6" + onesYear;
		break;
		case (decade <= 90):
		results += "7" + onesYear;
		break;
		case (decade <= 94):
		results += "8" + onesYear;
		break;
		case (decade <= 98):
		results += "9" + onesYear + AdvancedAge(1);
		break;
		default:
		results += "10" + onesYear + AdvancedAge(0);
		break;
	}
	
	return results;
}

function AdvancedAge(rollmod)
{
	var roll = RollD10();
	switch (roll + rollmod)
	{
		case 1:
		return "(1: [-10 SOM, REF, or COO, your choice]" + AdvancedAge(0) + ")";
		break;
		case 2:
		return "(2: [-5 SOM, REF, or COO, your choice]" + AdvancedAge(0) + ")"
		case 3:
		return "(3: Gain Immortality Blues trait)";
		break;
		case 4:
		return "(4: +5 COG, INT, SAV, or WIL, your choice." + AdvancedAge(0);
		break;
		default:
		return "(" + (roll + rollmod) + " end Advanced Age rolls)";
	}
}

function PreFallPath() {
   //step 6
   if (skipPreFall || skiptoPostFallPath)
	   return "You weren't around before the fall. No packages for this step."
   
   packagePoints += 1;
   var results = "";
   //roll 1d10 to see if we keep going or things change
   var willspecialize = false;
   var adultpath = RollD10();
   switch(true)
   {
	   case (adultpath <= 3):
		//roll whatever table is in nextPathRoll
		results += "(" + adultpath + ") Stay on the path. Add 1PP ";
	   break;
	   case (adultpath <= 6):
		//roll specialization/customization table instead of path.
		results += "(" + adultpath + ") Specialize. Gain 1PP " + Specialize() + " package";
		willspecialize = true;
	   break;
	   default:
	   results += "(" + adultpath + ") Switch gears. New path is ";
	   //roll on the new path table and then roll on that path instead.
	   results += RollNewPathTable();
	   results += " and new package is 1PP ";
	   break;
   }
	   if (willspecialize == false)
	   {
		   results += RollStep6Tables();
   }
   results += " package";
   return results;   
}

function RollNewPathTable()
{
	var results = "";
	var newpathoption = RollD10();
	   switch (newpathoption)
	   {
		   case 1:
		   nextPathTable = 6.2;
		   results += "Autonomist";
		   break;
		   case 2:
		   nextPathTable = 6.3;
		   results += "Civilian";
		   break;
		   case 3:
		   nextPathTable = 6.4;
		   results += "Criminal";
		   break;
		   case 4:
		   nextPathTable = 6.5;
		   results += "Enclaver";
		   break;
		   case 5:
		   nextPathTable = 6.6;
		   results += "Indenture";
		   break;
		   case 6:
		   nextPathTable = 6.7;
		   results += "Military";
		   break;
		   case 7:
		   nextPathTable = 6.8;
		   results += "Scientist";
		   break;
		   case 8:
		   nextPathTable = 6.9;
		   results += "Scientist";
		   break;
		   case 9:
		   nextPathTable = 6.10;
		   results += "Spacer";
		   break;
		   case 10:
		   nextPathTable = 6.11;
		   results += "Techie";
		   break;
	   }
	   return results;
}

function RollStep6Tables()
{
	var results = "";
	var thisPathResult = RollD10();
		   results += "(" + thisPathResult + ")";
		   thisPathResult--; //display 1-10 roll, use 0-9 array value.
		   //actually roll on the tables/arrays.
		   switch (nextPathTable)
		   {
				case  6.2:
					results += Autonomist6[thisPathResult];
					factionTable = 9.4;
				break;
				case  6.3:
					results += Civilian6[thisPathResult];
					factionTable = 9.5;
				break;
				case  6.4:
					results += Criminal6[thisPathResult];
					factionTable = 9.6;
				break;
			   case  6.5:
					results += Elite6[thisPathResult];
					factionTable = 9.7;
				break;
				case  6.6:
					results += Enclaver6[thisPathResult];
					factionTable = 9.8;
				break;
				case  6.7:
					results += Indenture6[thisPathResult];
					factionTable = 9.9;
				break;
				case  6.8:
					results += Military6[thisPathResult];
					factionTable = 9.10;
				break;
				case  6.9:
					results += Scientist6[thisPathResult];
					factionTable = 9.11;
				break;
				case  6.10:
					results += Spacer6[thisPathResult];
					factionTable = 9.12;
				break;
				case  6.11:
					results += Techie6[thisPathResult];
					factionTable = 9.13;
				break;
		   }
		   return results;
}

var Autonomist6 = ["Academic", "Activist", "Bot Jammer", "Covert Ops", "Explorer", "Genehacker", "Hacker", "Medic", "Scientist", "Techie"]; //next 9.4
var Civilian6 = ["Activist",  "Con Artist", "Dealer", "Face", "Investigator", "Journo", "Smart Animal Handler", "Soldier", "Techie", "Thief"]; //next 9.5
var Criminal6 = ["Assassin", "Con Artist", "Covert Ops", "Dealer", "Ego Hunter", "Enforcer", "Hacker", "Pirate", "Smuggler", "Thief"]; //next 9.6
var Elite6 = ["Academic", "Dealer", "Face", "Face", "Icon", "Icon", "Journo", "Medic", "Psychosurgeon", "Scientist"]; //next 9.7
var Enclaver6 = ["Academic", "Con Artist", "Dealer", "Dealer", "Face", "Icon", "Investigator", "Journo", "Medic", "Psychosurgeon"]; //next 9.8
var Indenture6 = ["Activist", "Bodyguard", "Bot Jammer", "Con Artist", "Enforcer", "Pirate", "Scavenger", "Smart Animal Handler", "Smuggler", "Thief"]; //next 9.9
var Military6 = ["Assassin", "Bodyguard", "Covert Ops", "Ego Hunter", "Enforcer", "Investigator", "Soldier", "Soldier", "Soldier", "Spy"]; //next 9.10
var Scientist6 = ["Academic", "Explorer", "Genehacker", "Investigator", "Medic", "Psychosurgeon", "Scientist", "Scientist", "Smart Animal Handler", "Techie"]; //next 9.11
var Spacer6 = ["Bot Jammer", "Ego Hunter", "Explorer", "Explorer", "Pirate", "Scavenger", "Soldier", "Smuggler", "Smuggler", "Spy"]; //next 9.12
var Techie6 = ["Bot Jammer", "Explorer", "Genehacker", "Hacker",  "Hacker", "Scavenger", "Scientist", "Spy", "Techie", "Techie"]; //next 9.13


function PreFallEvent() {
	if (skipPreFall)
		return "You are too young to have a pre-Fall event in your life.";
	
        var bg = RollD100();
    switch(true)
    {
        case (bg <=20):
            return "(" + bg + ") roll on Story event table, gain 1 Moxie";
            break;
        case (bg <=22):
            return "(" + bg + ") You save an animal from danger. Gain Animal Empathy trait.";
            break;
            case (bg <=24):
            return "(" + bg + ") You take up a sport. +10 to Climbing, Fray, Free Fall, Freerunning, or Swimming";
            break;
            case (bg <=26):
            return "(" + bg + ") Your inability to improve holds you back from an important  promotion/advancement. Gain Slow Learner trait.";
            break;
            case (bg <=28):
            return "(" + bg + ") You simply are not very comfortable with that whole resleeving thing. Gain Morphing Disorder(Level 1) trait.";
            break;
            case (bg <=30):
            return "(" + bg + ") You are not a slacker. You take on part-time jobs or additional training. +20 to one skill.";
            break;
            case (bg <=32):
            return "(" + bg + ") You travel extensively. +10 to 2 language skills.";
            break;
            case (bg <=34):
            return "(" + bg + ") Regular attention to your health and exercise improves your abilities. +5 SOM.";
            break;
            case (bg <=36):
            return "(" + bg + ") You decide you want to experiment. Gain a new random morph " + RandomMorph(true, false, false, false);
            break;
            case (bg <=38):
            return "(" + bg + ") You are fired and your new career hopes are now dashed. Re-roll your Adult Pre-Fall Path"; //TODO add roll here.
            break;
            case (bg <=40):
            return "(" + bg + ") You pick up a new hobby. +20 to one Art or Interest skill";
            break;
            case (bg <=42):
            return "(" + bg + ") An unfortunate habitat failure, traffic accident, or fire ends your life. Gain a new morph " + RandomMorph(true, true, false, false);
            break;
            case (bg <=44):
            return "(" + bg + ") You travel extensively. +20 Navigation skill.";
            break;
            case (bg <=46):
            return "(" + bg + ") Your work requires you to change your morph. Gain a new morph " + RandomMorph(true, true, false, false);
            break;
            case (bg <=48):
            return "(" + bg + ") Curiosity gets the better of you. -5 to one aptitude.";
            break;
            case (bg <=50):
            return "(" + bg + ") You lose a limb in a traumatic incident, but grow it back. Gain 1 Moxie.";
            break;
            case (bg <=52):
            return "(" + bg + ") An experience with still-unrefined psychosurgery leaves you forever altered. Gain Anomalous Mind trait.";
            break;
            case (bg <=54):
            return "(" + bg + ") Something goes seriously glitchy with your muse, and you are nearly hurt as a result. Gain Phobia Disorder(Muse) trait.";
            break;
            case (bg <=56):
            return "(" + bg + ") You are a pioneer in the practice of egocasting. Gain the Ego Plasticity(Level 1) trait and a random morph " + RandomMorph();
            break;
            case (bg <=58):
            return "(" + bg + ") You save someone from drowning. +10 Swimming skill.";
            break;
            case (bg <=60):
            return "(" + bg + ") You experiment with some minor self-modification. Gain Modified Behavior(Level 1) trait.";
            break;
            case (bg <=62):
            return "(" + bg + ") You exhibit a serious lack of willpower in coping with your adult life. Gain Addiction(Major) trait.";
            break;
            case (bg <=64):
            return "(" + bg + ") You experience a deadly vehicle accident. Gain a new morph " + RandomMorph() + " and lose 10,000 credits from your starting total.";
            break;
            case (bg <=66):
            return "(" + bg + ") A hacker friend shows you a few things, and then you show them a few things. Gain Intuitive Cracker (Level 1) trait.";
            break;
            case (bg <=68):
            return "(" + bg + ") The poor state of affairs on Earth before the Fall impacts you heavily. Gain Mental Disorder(Depression) trait.";
            break;
            case (bg <=70):
            return "(" + bg + ") You spend some time in some of the rougher, crisis-impacted areas on Earth before the Fall. +10 Fray skill.";
            break;
            case (bg <=72):
            return "(" + bg + ") A period of poverty leaves you with the skills to get by. +10 Scrounging skill.";
            break;
            case (bg <=74):
            return "(" + bg + ") You are implicated in a news-making scandal. -10 c-rep.";
            break;
            case (bg <=76):
            return "(" + bg + ") You pick up a new hobby. Gain +10 to one Art or Interest skill";
            break;
            case (bg <=78):
            return "(" + bg + ") You are an early adopter of psychosurgery, finding that your mind adapts well to changes. Gain Malleable Mind (Level 1) trait.";
            break;
            case (bg <=80):
            return "(" + bg + ") The stress of rapid technological change overwhelms you. Gain Mental Disorder(ADHD) trait.";
            break;
            case (bg <=82):
            return "(" + bg + ") You study or train hard. Gain a free specialization in one skill.";
            break;
            case (bg <=84):
            return "(" + bg + ") You take up martial arts training. +10 Unarmed Combat.";
            break;
            case (bg <=86):
            return "(" + bg + ") You choose your own path over what others tell you to do. Replace any one skill you have gained so far with any other skill of your choosing at the same rating.";
            break;
            case (bg <=88):
            return "(" + bg + ") You take care of someone in a way that makes them obligated to help you out for a long time to come. Gain Personal Connection trait.";
            break;
            case (bg <=90):
            return "(" + bg + ") You learn the hard way that ignoring money management lessons was a bad idea. Lose 10,000 credits.";
            break;
            case (bg <=92):
            return "(" + bg + ") You take the fall for a crime you may or may not have been complicit in. Gain 1 Moxie, -10 c-rep.";
            break;
            case (bg <=94):
            return "(" + bg + ") An accident on a space elevator leaves you fearful of space. Gain Phobia Disorder(Microgravity) trait.";
            break;
            case (bg <=96):
            return "(" + bg + ") You start up an unusual hobby. Gain +20 to one Exotic Melee Weapon or Exotic Ranged Weapon skill.";
            break;
            case (bg <=98):
            return "(" + bg + ") You lose a bet and spend a month sleeved in a pod or uplift morph before it was cool. Gain a morph " + RandomMorph(false, false, false, true);
            break;
            default:
            return "(" + bg + ") You make some life decisions that prove prescient after the Fall. Gain 20,000 credits.";
            break;
	}
}

function Fall()
{
	var fall = RollD100();
    switch(true)
    {
        case (fall <=10):
            return "(" + fall + ") You somehow stay safe and untouched by the chaos and horror. Gain 1 Moxie and roll on the Story table.";
            break;
			case (fall <=13):
            return "(" + fall + ") You stay to the end, fighting a rear-guard action. Gain 1 Moxie and a new morph " + RandomMorph(false, false, false, false);
            break;
			case (fall <=14):
            return "(" + fall + ") You are trapped on Earth when the homeworld is interdicted and quarantined. Join the Earth Survivor faction in step 9."; //TODO force faction.
            break;
			case (fall <=16):
            return "(" + fall + ") You exemplify yourself in destroying TITAN machines. Gain the Wrecker focus in Step 9."; //TODO force focus
            break;
			case (fall <=18):
            return "(" + fall + ") Exposure to the Watts-MacLeod exsurgent virus opens your awareness to aspects of the world of which others are blind. Gain the Savant Async focus in step 9."; //todo force focus
            break;
			case (fall <=20):
            return "(" + fall + ") Infected with the Watts-MacLeod exsurgent virus, you learn to use your new powers forcefully. Gain the Controller Async focus in step 9."; //todo force focus
            break;
			case (fall <=22):
            return "(" + fall + ") After you are infected, you are trained to use your psi to kill. Gain the Combat Async focus in step 9."; //todo force focus
            break;
			case (fall <=24):
            return "(" + fall + ") Infection permanently changes your perceptions. Gain the Scanner Async focus in step 9.";
            break;
			case (fall <=26):
            return "(" + fall + ") You rack up a major debt to pay a bribe to get yourself off-world. Gain the Debt(Level 3) trait.";
            break;
			case (fall <=28):
            return "(" + fall + ") You assume that you died on Earth, but you don't know for sure. Gain the Edited Memories trait and a new morph " + RandomMorph(false, false, false, false);
            break;
			case (fall <=30):
            return "(" + fall + ") You know that the TITANs killed or uploaded you, according to reports. Gain a new morph " + RandomMorph(false, false, false, false);
            break;
			case (fall <=32):
            return "(" + fall + ") You fall victim to the TITANs in Earth orbit, on Luna, or on Mars. Gain a new morph " + RandomMorph(false, false, false, false);
            break;
			case (fall <=34):
            return "(" + fall + ") You are slain, not by the TITANs, but by hostile action from a rival government, faction, or hypercorp. Gain a new morph " + RandomMorph(false,false, false, false);
            break;
			case (fall <=36):
            return "(" + fall + ") You hide your body away in cold storage on Earth before farcasting off to safety. Gain a new morph " + RandomMorph(false,false,false,false); 
            break;
			case (fall <=38):
            return "(" + fall + ") Your ego escapes the devastation of Earth, only to be locked away in cold storage for years. You are only recently resleeved. Gain the Real World Naievity trait and a new morph " + RandomMorph(false,false,false,false);
            break;
			case (fall <=40):
            return "(" + fall + ") Your ego survives the Fall but is locked in simulspace for years before you are resleeved. Gain +20 Interfacing skill and a new morph " + RandomMorph(false,false,false,false);
            break;
			case (fall <=42):
            return "(" + fall + ") After escaping the Fall, you are forced into indentured service before you are resleeved. Gain +20 to one technical skill and a new morph " + RandomMorph(false, false, false, false, true); //TODO add synth-only flag.
            break;
			case (fall <=44):
            return "(" + fall + ") You do what you can to help, but you still lose almost everyone in your life. Gain 1 Moxie.";
            break;
			case (fall <=46):
            return "(" + fall + ") You heroically sacrifice yourself so that others can escape. +10 to one rep score and a new morph " + RandomMorph(false,false,false,false);
            break;
			case (fall <=48):
            return "(" + fall + ") You risk your life in a desperate holding action. Gain the Brave trait.";
            break;
			case (fall <=50):
            return "(" + fall + ") You are infected--but get better. Gain the Async focus in step 9."; //TODO force focus
            break;
			case (fall <=52):
            return "(" + fall + ") You learn the hard way how susceptible you are to exsurgent influence. Gain the Psi Vulnerability trait.";
            break;
			case (fall <=54):
            return "(" + fall + ") You encounter an exsurgent and are permanently changed by the experience. Gain the Asycn Adept focus in step 9."; //todo force focus
            break;
			case (fall <=56):
            return "(" + fall + ") The near extinction of your species hardens your resolve. +5 WIL.";
            break;
			case (fall <=58):
            return "(" + fall + ") You hide and survive an encounter with exsurgents where others die. Gain Psi Chameleon trait.";
            break;
			case (fall <=60):
            return "(" + fall + ") You end up in possession of a rare Earth artifact worth 1d10 x 10,000 credits. Choose what your artifact is.";
            break;
			case (fall <=62):
            return "(" + fall + ") You make a bad call that gets people killed. Now you question your gut feelings. -5 INT.";
            break;
			case (fall <=64):
            return "(" + fall + ") You were horrified at the idea of resleeving, but the alternative seemed worse--or so you thought. Gain the Morphing Disorder(level 3) trait and a new morph " + RandomMorph(false,false,false,false);
            break;
			case (fall <=66):
            return "(" + fall + ") A nanoviral infection leaves you permanently damaged. Gain the Neural Damage trait.";
            break;
			case (fall <=68):
            return "(" + fall + ") You have unfortunate memories of some...thing... eating your face off. Gain the Timid trait and a new morph " + RandomMorph(false,false,false,false);
            break;
			case (fall <=70):
            return "(" + fall + ")You witness unspeakable horrors during the Fall, standing idly by while others die. Gain the Combat Paralysis trait.";
            break;
			case (fall <=72):
            return "(" + fall + ") Several near-death experiences hone your reflexes. +5 REF.";
            break;
			case (fall <=74):
            return "(" + fall + ") Your relatives die, but you are left as the sole heir to the family's modest wealth that made it off-world. Gain 25,000 credits.";
            break;
			case (fall <=76):
            return "(" + fall + ") You will never get the image of headhunter drones at work out of your mind. Gain the Mental Disorder(PTSD) trait.";
            break;
			case (fall <=78):
            return "(" + fall + ") You exhibit natural leadership in a time of crisis. Gain +10 Intimidation or Persuasion skill.";
            break;
			case (fall <=80):
            return "(" + fall + ") The only way you can cope with the loss of your former life is through drugs. Gain the Drug Fiend trait.";
            break;
			case (fall <=82):
            return "(" + fall + ") You cope with the horrors you experience in the midst of evacuation the only way you could - by postponing the trauma until you are safe. Gain the Trauma Tolerance(level 1) trait.";
            break;
			case (fall <=84):
            return "(" + fall + ") Your willingness to profit from others' misery gains you respect in some circles. Gain 10 g-red and -5 to 1 other rep score.";
            break;
			case (fall <=86):
            return "(" + fall + ") You experience things during the Fall that would leave others a shattered mess. Gain the Hardening trait.";
            break;
			case (fall <=88):
            return "(" + fall + ") You lose everything - and nearly lose your mind as well. It will never recover its former strength. Gain the Frail Sanity trait.";
            break;
			case (fall <=90):
            return "(" + fall + ") Not only do you die during the Fall, your backups are lost as well. You live on as a beta fork of your original self. Gain the Beta trait and a new morph " + RandomMorph(false,false,false,false);
            break;
			case (fall <=92):
            return "(" + fall + ") You lose a fortune during the Fall. -10,000 credits.";
            break;
			case (fall <=94):
            return "(" + fall + ") You die during the Fall, but that doesn't stop you from going to die again, and then again, and then again some more. Gain the Phoenix(Level 1) trait and a new morph " + RandomMorph(false, false, false, false);
            break;
			case (fall <=96):
            return "(" + fall + ") After committing a crime, you are sentenced to indentured service, but the Fall lets you skip out. Gain the Deferred Indenture(Level 2) trait.";
            break;
			case (fall <=98):
            return "(" + fall + ") You rack up an impressive kill score fighting TITAN machines. Gain the Tacnet Sniper trait.";
            break;
			default:
            return "(" + fall + ") Your willingness to make lives a priority over material things earns you respect. Gain 10 @-rep.";
            break;
	}
}

function PostFallPath() {
	
	var pointSplit = RollD10();
	var factionPoint = 0;
	var focusPoints = 0;
	var results = "";
	
	switch(true)
	{
		case (pointSplit <= 2):
			results += "Faction Paragon (3PP Faction, 1PP Focus)";
			factionPoint = 3;
			focusPoints = 1;
		break;
		case (pointSplit <= 5):
			results += "Equally Balanced (3PP Faction, 3PP Focus)";
			factionPoint = 3;
			focusPoints = 3;
		break;
		case (pointSplit <= 7):
			results += "Defined by your actions (1PP Faction, 3PP Focus)";
			factionPoint = 1;
			focusPoints = 3;
		break;
		default:
			results += "You get the job done (1PP Faction, 5PP Focus)";
			factionPoint = 1;
			focusPoints = 5;
		break;
	}
	packagePoints += (factionPoint + focusPoints);
	results += "<br />";
	
	var focusCheck = RollD10();
	if (focusCheck <= 6)
	{
		results += "Focus: " + RollStep6Tables();
	}
	else
	{
		results += "New focus path is "+ RollNewPathTable() + " and new focus is " + RollStep6Tables();
	}
	results += "<br />";
	
	var factionCheck = RollD10();
	if (factionCheck <= 6)
	{
		//roll on faction table determined earlier.
		results += "Same faction as before. ";
	}
	else
	{
		results += ChangeFactions();
	}
	results += "<br /> Faction roll: ";
	
	results += RollFaction();
	return results;
}

var Autonomist9 = ["Anarchist", "Argonaut", "Barsoomian", "Brinker", "Criminal", "Europan", "Extropian", "Ringer", "Scum", "Titanian"]; 
var Civilian9 = ["Belter",  "Bioconservative", "Criminal", "Hypercorp", "Lunar", "Orbital", "Reclaimer", "Sifter", "Skimmer", "Titanian"]; 
var Criminal9 = ["Anarchist", "Belter", "Brinker", "Criminal", "Exhuman", "Extropian", "Lunar", "Orbital", "Ringer", "Scum"]; 
var Elite9 = ["Bioconservative", "Brinker", "Exhuman", "Extropian", "Hypercorp", "Orbital", "Socialite", "Precautionist", "Ultimate", "Venusian"]; 
var Enclaver9 = ["Bioconservative", "Extropian", "Hypercorp", "Jovian", "Lunar", "Orbital", "Socialite", "Preservationist", "Reclaimer", "Venusian"]; 
var Indenture9 = ["Anarchist", "Barsoomian", "Hypercorp", "Lunar", "Scum", "Preservationist", "Reclaimer", "Sifter", "Skimmer", "Venusian"];
var Military9 = ["Bioconservative", "Brinker", "Criminal", "Hypercorp", "Jovian", "Lunar", "Orbital", "Reclaimer", "Precautionist", "Ultimate"];
var Scientist9 = ["Argonaut", "Europan", "Exhuman", "Hypercorp", "Nano-ecologist", "Precautionist", "Singularity Seeker", "Solarian", "Titanian", "Venusian"];
var Spacer9 = ["Belter", "Brinker", "Criminal", "Extropian", "Hypercorp", "Nano-ecologist", "Sifter", "Singularity Seeker", "Titanian", "Venusian"]; 
var Techie9 = ["Anarchist", "Argonaut", "Barsoomian", "Extropian",  "Hypercorp", "Nano-ecologist", "Sifter", "Singularity Seeker", "Titanian", "Venusian"]; 
var AGIandUplift = ["Anarchist", "Argnonaut	", "Brinker", "Criminal",  "Europan", "Hypercorp", "Mercurial: Infolife/Uplift", "Sapient", "Solarian", "Venusian"];

function RollFaction()
{
	var results = "";
	var factionResult = RollD10();
	results += "(" + factionResult + ") ";
	factionResult--; //again, display actual 1-10 roll, use 0-9 array lookup
	switch (factionTable)
	{
		case 9.4: //autonomist.
			results += Autonomist9[factionResult];
		break;
		case 9.5: //civilian
			results += Civilian9[factionResult];
		break;
		case 9.6: //criminal
			results += Criminal9[factionResult];
		break;
		case 9.7: //Elite
			results += Elite9[factionResult];
		break;
		case 9.8: //Enclaver
			results += Enclaver9[factionResult];
		break;
		case 9.9: //Indenture
			results += Indenture9[factionResult];
		break;
		case 9.10: //Military
			results += Military9[factionResult];
		break;
		case 9.11: //Scientist
			results += Scientist9[factionResult];
		break;
		case 9.12: //Spacer
			results += Spacer9[factionResult];
		break;
		case 9.13: //Techie
			results += Techie9[factionResult];
		break;
		case 9.14: //AGI or Uplift, where is this set?
			results += AGIandUplift[factionResult];
		break;
	}
	return results;
}

function ChangeFactions()
{
	var results = "";
	//roll a new faction table.
		var newFaction = RollD10();
		factionTable =  parseFloat("9." + (newFaction+ 3));
		results += "Changing faction group to ";
		switch (factionTable)
		{
			case 9.4:
			results += "Autonomist";
			break;
			case 9.5:
			results += "Civilian";
			break;
			case 9.6:
			results += "Criminal";
			break;
			case 9.7:
			results += "Elite";
			break;
			case 9.8:
			results += "Enclaver";
			break;
			case 9.9:
			results += "Indenture";
			break;
			case 9.10:
			results += "Military";
			break;
			case 9.11:
			results += "Scientist"
			break;
			case 9.12:
			results += "Spacer"
			break;
			case 9.13:
			results += "Techie"
			break;
		}
		return results;
}

function Extras() {
	var results = "";
	if (packagePoints == 10)
	{
		results += "You have 10 PP, no extras necessary.";
		return results;
	}
	
	results += "You have " + packagePoints + " PP, need 10. <br />";
	while (packagePoints < 10)
	{
		packagePoints++;
		var extraRoll = RollD10()
		if (extraRoll <= 4)
		{
			//roll an extra focus from 9.1
			results += "New 1PP Focus package: ";
			results += "New focus path is "+ RollNewPathTable() + " and new focus is " + RollStep6Tables();
		}
		else if (extraRoll <= 6)
		{
			//roll an extra faction from 9.2
			results += "New 1PP Faction Package:"
			results += ChangeFactions() + "/";
			results +=  RollFaction();
		}
		else
		{
			//roll a customization from 6.12
			results += "Adding 1PP Customization " + Specialize();
		}
		results += "<br />"
	}
	
	return results;
}

function PostFallEvent() {
	var postfall = RollD100();
	var results = "(" + postfall + ") ";
	switch (true)
	{
		case (postfall <= 3):
		results += "You are hired by a wealthy private party for some exclusive exoplanet missions. Gatecrashing roll: " + GateCrashing();
		break;
		case (postfall <= 4):
		results += "You reinvent yourself. +5 to one aptitude, -5 to another.";
		break;
		case (postfall <= 6):
		results += "Your employer/collective sends you on a gatecrashing op. Gatecrashing roll: " + GateCrashing();
		break;
		case (postfall <= 7):
		results += "You score an achievement that leaves you indelibly marked in your faction's consciousness. Gain the Untarnished Reputation trait.";
		break;
		case (postfall <= 8):
		results += "You create a major diplomatic incident. Gain the Black Mark (Level 3) trait.";
		break;
		case (postfall <= 9):
		results += "You fall victim to a terrorist attack or factional dispute. Gain a new morph " + RandomMorph(false, false, false, false, false);
		break;
		case (postfall <= 10):
		results += "The merging of an overdue fork goes poorly, and coincidental inaccessible backups leave you permanently changed. Gain the Botched Merge trait.";
		break;
		case (postfall <= 13):
		results += "You are recruited to aid on a scientific mission. Gatecrashing roll: " + GateCrashing();
		break;
		case (postfall <= 14):
		results += "In order to keep up with the stress of your responsibilities, you fall into bad habits. Gain the Addiction(Moderate) trait";
		break;
		case (postfall <= 15):
		results += "You do the right thing but piss off someone with power in the process. Gain 10 rep in a network of your choice, and the Enemy trait.";
		break;
		case (postfall <= 16):
		results += "You use the post-Fall chaos to establish a new identity. Gain a Fake Ego ID.";
		break;
		case (postfall <= 17):
		results += "After an unfortunate incident leads to lack (lost memories due to resleeving from an old backup), you decide security of mind is a worthy investment. Gain the Edited Memories trait and a year of backup insurance.";
		break;
		case (postfall <= 18):
		results += "After surviving the Fall and then only barely surviving a post-Fall clash, you decide that some self-defense training may be in order. Gain +20 to one Combat skill."
		break;
		case (postfall <= 19):
		results += "Through a strange set of circumstances, you end up with a rare Delphinium Six petal flower. (See Eclipse Phase core book page 322).";
		break;
		case (postfall <= 20):
		results += "You commit a crime, get caught, and suffer the punishment. Gain the Modified Behavior(Level 3) trait.";
		break;
		case (postfall <= 21):
		results += "You have died enough times that your mind really can't take it any more. Gain the Phobia Disorder(Thanatophobia) trait.";
		break;
		case (postfall <= 24):
		results += "You save up and buy yourself a spot on a gatecrashing op. Gatecrashing roll: " + GateCrashing();
		break;
		case (postfall <= 25):
		results += "An ownerless bot begins following you and never leaves your side. Gain a servitor, saucer, or gnat bot.";
		break;
		case (postfall <= 26):
		results += "An unknown party leaves you a portable QE comm unit with a high-capacity reservoir, telling you only to expect a call in the future. Talk to your GM about your contact.";
		break;
		case (postfall <= 27):
		results += "You travel extensively. Gain a new morph " +RandomMorph(false, false, false, false, false);
		break;
		case (postfall <= 28):
		results += "You've gotten really good at this resleeving thing. Gain the Adaptability(Level 1) trait.";
		break;
		case (postfall <= 29):
		results += "You narrowly avoid death in a disastrous accident. Gain the Danger Sense trait.";
		break;
		case (postfall <= 30):
		results += "You barely survive a murder attempt. +5 INT.";
		break;
		case (postfall <= 31):
		results += "A close-call with people out to get you puts you on the defensive. Gain the Informational Control trait.";
		break;
		case (postfall <= 32):
		results += "You've grown particular in your taste in morphs. Gain the Right At Home trait.";
		break;
		case (postfall <= 33):
		results += "You fall on hard times. -10.000 credits.";
		break;
		case (postfall <= 34):
		results += "You get caught in the cross-fire of a regional conflict. Gain a new morph " + RandomMorph();
		break;
		case (postfall <= 35):
		results += "Your hectic lifestyle has increased your perceptive skills. Gain the Situational Awareness trait";
		break;
		case (postfall <= 36):
		results += "A long string of personal failures has you questioning your own resolve. -5 WIL";
		break;
		case (postfall <= 37):
		results += "No matter how often your friends warn you, you are promiscuous about your online data. Gain the Data Footprint trait.";
		break;
		case (postfall <= 38):
		results += "Nothing ever seems to go your way - your cursed luck is legendary. Gain the Bad Luck trait";
		break;
		case (postfall <= 39):
		results += "You complete a major project of importance to your work/faction. +10 to one rep score";
		break;
		case (postfall <= 40):
		results += "A project of importance to your work/faction fails under your direction. -10 to one rep score";
		break;
		case (postfall <= 41):
		results += "You take up arms in a regional conflict. +10 to one Combat skill";
		break;
		case (postfall <= 42):
		results += "Your work requires you to change your morph. Gain a new morph " + RandomMorph(false, false, false, false, false); //This is supposed to be selective to your path but im not being selective.
		break;
		case (postfall <= 43):
		results += "You make an unpopular choice that burns many bridges. Gain the Blacklisted trait.";
		break;
		case (postfall <= 44):
		results += "A friend or relative opts for true death, but bequeaths you their estate. +25,000 credits.";
		break;
		case (postfall <= 45):
		results += "You are the unfortunate butt of a widespread online meme, but it works to your advantage. Gain the You're That Guy traits."
		break;
		case (postfall <= 46):
		results += "You are the unfortunate butt of a widespread online meme, and it continues to haunt you. Gain the Wait, That Was You? trait.";
		break;
		case (postfall <= 47):
		results += "As transhumanity re-organizes, you find a role in influencing others. +5 SAV";
		break;
		case (postfall <= 48):
		results += "You have difficulty coming to grips with regular resleeving. Gain the Identity Crisis trait";
		break;
		case (postfall <= 49):
		results += "One of your resleeves goes particularly poorly, and now it haunts you. Gain the Morphing Disorder(Level 2) trait.";
		break;
		case (postfall <= 50):
		results += "You work hard to establish a solid network. +20 to one Networking skill";
		break;
		case (postfall <= 51):
		results += "You take up a sport. +10 to Climbing, Fray, Free Fall, Freerunning, or Swimming";
		break;
		case (postfall <= 52):
		results += "You decide to experiment with your morph. Gain a random morph " + RandomMorph(false, false, false, false, false);
		break;
		case (postfall <= 53):
		results += "Practice makes perfect, and your hard work pays off. Increase one aptitude by +5";
		break;
		case (postfall <= 54):
		results += "You are the victim of an unfortunate crime. -10,000 credits.";
		break;
		case (postfall <= 55):
		results += "Someone steals your identity. Gain the Stolen Identity trait. ";
		break;
		case (postfall <= 56):
		results += "You play a prominent role in mediating a factional conflict. +20 Protocol skill.";
		break;
		case (postfall <= 57):
		results += "You spend a significant portion of your life in one habitat. Gain the Home Turf trait. ";
		break;
		case (postfall <= 58):
		results += "You take a bullet for someone you don't even know. Gain 1 Moxie and a new morph " + RandomMorph(false, false, false, false, false);
		break;
		case (postfall <= 59):
		results += "You piss off some powerful people and are made into an example. Gain the Black Mark(Level 1) trait.";
		break;
		case (postfall <= 60):
		results += "You make friends with a group of AGIs online. Gain the AGI Affinity trait.";
		break;
		case (postfall <= 61):
		results += "Due to a sudden financial crisis, you draw an emergency loan with unfavorable terms from an unforgiving loan shark. Gain the Debt(Level 1) trait. ";
		break;
		case (postfall <= 62):
		results += "You commit a serious crime, but get away--for now. Gain the On The Run trait. ";
		break;
		case (postfall <= 65):
		results += "You win the gatecrashing lottery and a free ticket to Pandora. Gatecrashing roll: " + GateCrashing();
		break;
		case (postfall <= 66):
		results += "You go into business. Gain the Entrepreneur(Level 1) trait.";
		break;
		case (postfall <= 67):
		results += "You become embroiled in a messy professional dispute. -5 to one rep score. ";
		break;
		case (postfall <= 68):
		results += "You lose a contractual dispute in Extropian space. Gain the Deferred Indenture(Level 1) trait. ";
		break;
		case (postfall <= 69):
		results += "You rack up some debts and are forced to downgrade your lifestyle. Gain a new morph " + RandomMorph(false, false, false, false, false); //supposed to be cheaper than your current morph by 10CP. Might limit to pods instead.
		break;
		case (postfall <= 70):
		results += "You decide you need some help. Gain the Established Fork trait.";
		break;
		case (postfall <= 71):
		results += "You run afoul of a criminal cartel agent. You walk away unscathed, but the matter is far from resolved. Gain the Enemy trait.";
		break;
		case (postfall <= 72):
		results += "You get stuck with a boring, repetitive job, but at least you get really good at it. Gain one specialization for free.";
		break;
		case (postfall <= 73):
		results += "Doing your part to aid transhumanity's regrowth, you have a kid. Gain the Dependent trait. ";
		break;
		case (postfall <= 74):
		results += "You have an unfortunately catastrophic sleeving accident, but the insurance paid well. Start play with 10 points of stress and a random derangement, but you may choose your starting morph";
		break;
		case (postfall <= 75):
		results += "You achieve something that the members of your faction will never forget. Gain the Gold Star trait.";
		break;
		case (postfall <= 76):
		results += "You score an impressive win in a public competition. +5 to one rep score";
		break;
		case (postfall <= 77):
		results += "You split off an alpha fork to handle an important situation, but it decides not to come back. Gain the Errant Fork trait.";
		break;
		case (postfall <= 78):
		results += "You take in an abandoned animal. Gain a smart dog, smart monkey, or smart rat.";
		break;
		case (postfall <= 79):
		results += "You are the victim of a crime, but the perpetrator is caught. Now you hold their indenture contract. Gain the Indenture Holder trait. ";
		break;
		case (postfall <= 80):
		results += "Everything is going great, but you still somehow manage to fuck up something major in your life. +1 Moxie.";
		break;
		case (postfall <= 81):
		results += "A severe personal failure inspires you to make some radical changes. Gain the Modified Behavior (Level 2) trait.";
		break;
		case (postfall <= 82):
		results += "You find your one true love. You don't feel like your full self when you are away from them. Gain the Intense Relationship trait.";
		break;
		case (postfall <= 83):
		results += "You team up with a partner to get the job done. Gain the Minion/Partner trait.";
		break;
		case (postfall <= 84):
		results += "Someone you respect shows their true colors, and they aren't pretty. +1 Moxie.";
		break;
		case (postfall <= 85):
		results += "Your exceptional nature is noticed. Gain the Patron trait.";
		break;
		case (postfall <= 86):
		results += "You get fired/kicked out. -10,000 credits or -10 rep";
		break;
		case (postfall <= 88):
		results += "A fork goes missing. It could be nothing, but it was in possession of some compromising information about yourself. Gain the Lost Fork trait.";
		break;
		case (postfall <= 89):
		results += "You fall for the smooth lies of a convincing member of another faction. You realize your error only after the damage is done. -10 rep from the rep network appropriate to your faction";
		break;
		case (postfall <= 90):
		results += "A trolling hacker ruins your life but leaves you with sporting goodbye offering. -10 rep in one network of your choice, but gain a kaos AI.";
		break;
		case (postfall <= 91):
		results += "You are forced to resleeve in less-than-favorable conditions and end up with a morph with issues. Gain a new morph " + RandomMorph(false, false, false, false, false) + " with the Aggressive GRM trait.";
		break;
		case (postfall <= 92):
		results += "ou fall in with a new crowd -one that will have your back. Gain the Allies trait.";
		break;
		case (postfall <= 93):
		results += "You are part of a group that discovers a derelict ship and makes a great salvaging score. +20,000 credits";
		break;
		case (postfall <= 94):
		results += "You join a cooperative project. Gain the Entrepreneur(Level 1) trait.";
		break;
		case (postfall <= 95):
		results += "You fight back against a perceived injustice, but are forced to flee the repercussions. Gain the On The Run trait.";
		break;
		case (postfall <= 96):
		results += "You drop everything to re-evaluate your priorities. Lose -30 to one skill, but gain 50 CP to spend on whatever you wish";
		break;
		case (postfall <= 97):
		results += "Unknown to you, someone takes an unfriendly interest in your affairs. Gain the Subverted Mind trait.";
		break;
		case (postfall <= 98):
		results += "You manage to get yourself killed three times in one week. At least you're getting used to resleeving. Gain a new morph " + RandomMorph(false, false, false, false, false) + " and the Pheonix(Level 2) trait.";
		break;
		case (postfall <= 99):
		results += "Someone leaves you in charge of their spacecraft. Gain the Spacecraft trait. ";
		break;
		default:
		results += "You are complicit in a faction suffering a major setback. Gain the Black Mark (Level 2) trait.";
		break;
	}
	return results;
}

function Firewall() {
	var results ="";
	var firewallroll = RollD100();
	results += "(" + firewallroll + ") ";
	switch (true)
	{
		case (firewallroll <= 25):
		results += "You are recruited by someone you know because of your skill sets. +10 to one skill.";
		break;
		case (firewallroll <= 48):
		results += "You accidentally stumble onto a Firewall op, and luckily for you they decide the best option is to recruit you. +1 Moxie.";
		break;
		case (firewallroll <= 50):
		results += "You work with/for someone who turns out to be an exhuman supporter. Once you get over the shock, Firewall recruits you. +10 Interest:Exhumans skill.";
		break;
		case (firewallroll <= 52):
		results += "Firewall recruits you as an informant, to help keep tabs on someone or something they are worried about. +20 Infosec skill.";
		break;
		case (firewallroll <= 54):
		results += "Your ego was jailed/lost on Earth/forknapped/in cold storage, but Firewall broke you out in return for your aid. +1 Moxie.";
		break;
		case (firewallroll <= 56):
		results += "You spot someone acting suspiciously and report them. They turn out to be a Firewall async. You are repaid with recruitment and training. Gain Async Familiarity trait.";
		break;
		case (firewallroll <= 58):
		results += "You are infected and secretly operate as a sleeper exsurgent for months or even years. Firewall restores you from an old backup. Gain a new morph " + RandomMorph(false, false, false, false, false) + " and the Edited Memories trait.";
		break;
		case (firewallroll <= 60):
		results += "You have an unexpected close encounter with the TQZ on Mars, the New Mumbai Containment Zone of Luna, or Iapetus. Gain a new morph " + RandomMorph(false, false, false, false, false);
		break;
		case (firewallroll <= 62):
		results += "An exhuman raid leaves you and others dead; Firewall helps sort out the mess. Gain a new morph " + RandomMorph(false, false, false, false, false);
		break;
		case (firewallroll <= 64):
		results += "You are one of the few survivors of an exsurgent outbreak on your habitat. Gain the Psi Defense trait.";
		break;
		case (firewallroll <= 66):
		results += "You find a relic. Bad things happen. Firewall cleans up the mess. -10 to one rep score.";
		break;
		case (firewallroll <= 68):
		results += "You were a member/supporter of one of the groups that evolved into Firewall from before the Fall. You took some time off, but now you're back. +10 i-rep";
		break;
		case (firewallroll <= 70):
		results += "You single-handedly foil an impending outbreak, but the local authorities blame you for the carnage. Firewall helps you escape. Gain the On The Run trait.";
		break;
		case (firewallroll <= 72):
		results += "A previously dormant TITAN nanoplague rampages through your habitat. Gain a new morph " + RandomMorph(false, false, false, false, false);
		break;
		case (firewallroll <= 74):
		results += "Your ship stops to investigate/help a derelict ship and is never heard from again. Gain a new morph " + RandomMorph(false, false, false, false, false);
		break;
		case (firewallroll <= 76):
		results += "You discover a lost cache on an isolated asteroid. Firewall actually lets you keep some of the find. +" + (5000 * RollD10()) + " credits";
		break;
		case (firewallroll <= 78):
		results += "You step into an unknown fray and are lucky enough to pick the right side. +10 i-rep";
		break;
		case (firewallroll <= 80):
		results += "You uncover a conspiracy within your faction and Firewall steps in to help you deal with it. +10 to one rep score";
		break;
		case (firewallroll <= 82):
		results += "You are recruited to help Firewall cover up a secret or outbreak. +10 i-rep, -10 to one other rep score.";
		break;
		case (firewallroll <=84):
		results += "You uncover a sleeper exsurgent cell the hard way. Gain the Phobia(Exsurgents) trait.";
		break;
		case (firewallroll <= 86):
		results += "You become aware of someone smuggling or dealing TITAN technology. Firewall steps in and deals with it, then recruits you. -5 g-rep.";
		break;
		case (firewallroll <= 88):
		results += "You were a member/supporter of one of the groups that evolved into Firewall from before the Fall. +10 i-rep.";
		break;
		case (firewallroll <= 90):
		results += "You are involved in a cover-up of a TITAN- or exsurgent-related secret during the Fall. Firewall finds you and brings you in to get the story. +10 i-rep.";
		break;
		case (firewallroll <= 92):
		results += "Someone you loved becomes infected. You keep it secret and protect them for a time, until everything goes bad. Firewall rescues you, then recruits you. +10 Interest(Exsurgents) skill.";
		break;
		case (firewallroll <= 94):
		results += "You are a bit too good at ferreting out certain secrets online. Firewall brings you in to the fold to keep your mouth shut. +10 Infosec skill.";
		break;
		case (firewallroll <= 96):
		results += "Someone you are close to is a Firewall proxy; they brought you in to help them out. +1 Moxie.";
		break;
		case (firewallroll <= 98):
		results += "Thanks to a particular skill you have, Firewall has consulted with you for years without revealing themselves. They decide to fill you in on the full story. Gain or increase a Firewall-relevant Knowledge skill (such as Interest: Exsurgents or Academics: Nanotechnology) by +30.";
		break;
		default:
		results += "A package you are hired to deliver turns out to be an alien artifact. When it causes problems, you go to a friend of a friend, who turns out to be a Firewall proxy. They solve the problem, but you fail to make the delivery. Gain the Enemy trait.";
		break;
        
	}
	return results;
}

function Gear() {
}

function RollD10() {
    return Math.floor((Math.random() * 10)) + 1 ;
}

function RollD100() {
    return (Math.floor(Math.random() * 100)) + 1;
}

function RandomMorph(nopod, nouplift, upliftonly, podorupliftonly, synthonly) {
    var type = RollD100();
    var subtype = RollD100();

    var name = "(" + type + "/" + subtype + ")";
	var name2 = "";
	
    switch (true)
    {
        case (type <= 50):
            //biomorph roll
			if (upliftonly || podorupliftonly || synthonly)
				return RandomMorph(nopod, nouplift, upliftonly, podorupliftonly, synthonly);
			
			name2 = "[Biomorph]";
            switch (true) {
                case subtype <= 3:
                    name += "Flat" + name2;
                    break;
                case subtype <= 13:
                    name += "Splicer" + name2;
                    break;
                case subtype <= 21:
                    name += "Exalt" + name2;
                    break;
                case subtype <= 26:
                    name += "Menton" + name2;
                    break;
                case subtype <= 34:
                    name += "Olympian" + name2;
                    break;
                case subtype <= 39:
                    name += "Sylph" + name2;
                    break;
                case subtype <= 46:
                    name += "Bouncer" + name2;
                    break;
                case subtype <= 49:
                    name += "Fury" + name2;
                    break;
                case subtype <= 50:
                    name += "Futura" + name2;
                    break;
                case subtype <= 53:
                    name += "Ghost" + name2;
                    break;
                case subtype <= 56:
                    name += "Hibernoid" + name2;
                    break;
                case subtype <= 59:
                    name += "Neotenic" + name2;
                    break;
                case subtype <= 62:
                    name += "Remade" + name2;
                    break;
                case subtype <= 69:
                    name += "Ruster" + name2;
                    break;
                case subtype <= 70:
                    name += "Lunar Flyer" + name2;
                    break;
                case subtype <= 72:
                    name += "Martian Alpiner" + name2;
                    break;
                case subtype <= 73:
                    name += "Salamander" + name2;
                    break;
                case subtype <= 74:
                    name += "Surya" + name2;
                    break;
                case subtype <= 75:
                    name += "Venusian Glider" + name2;
                    break;
                case subtype <= 77:
                    name += "Hazer" + name2;
                    break;
                case subtype <= 78:
                    name += "Hulder" + name2;
                    break;
                case subtype <= 79:
                    name += "Hyperbright" + name2;
                    break;
                case subtype <= 80:
                    name += "Ring Flyer" + name2;
                    break;
                case subtype <= 81:
                    name += "Selkie" + name2;
                    break;
                case subtype <= 82:
                    name += "Aquanaut" + name2;
                    break;
                case subtype <= 85:
                    name += "Crasher" + name2;
                    break;
                case subtype <= 86:
                    name += "Dvergr" + name2;
                    break;
                case subtype <= 87:
                    name += "Ariel" + name2;
                    break;
                case subtype <= 89:
                    name += "Bruiser" + name2;
                    break;
                case subtype <= 90:
                    name += "Cloud Skate" + name2;
                    break;
                case subtype <= 91:
                    name += "Faust" + name2;
                    break;
                case subtype <= 92:
                    name += "Freeman" + name2;
                    break;
                case subtype <= 93:
                    name += "Grey" + name2;
                    break;
                case subtype <= 95:
                    name += "Nomad" + name2;
                    break;
                case subtype <= 99:
                    name += "Observer" + name2;
                    break;
                default:
                    name += "Theseus" + name2;
                    break;
            }
            break;
        case (type <= 55):
            //uplift
			if (nouplift || synthonly)
				return RandomMorph(nopod, nouplift, upliftonly, podorupliftonly, synthonly);
			
			name2 = "[Uplift]";
            switch (true) {
                case (subtype <= 30):
                    name += "Neo-Avian" + name2;
                    break;
					case (subtype <= 50):
                    name += "Neo-Hominid" + name2;
                    break;
					case (subtype <= 70):
                    name += "Octomorph" + name2;
                    break;
					case (subtype <= 75):
                    name += "Neantherthal" + name2;
                    break;
					case (subtype <= 76):
                    name += "Neo-Beluga" + name2;
                    break;
					case (subtype <= 77):
                    name += "Neo-Dolphin" + name2;
                    break;
					case (subtype <= 92):
                    name += "Neo-Gorilla" + name2;
                    break;
					case (subtype <= 93):
                    name += "Neo-Orca" + name2;
                    break;
					case (subtype <= 98):
                    name += "Neo-Pig" + name2;
                    break;
					case (subtype <= 99):
                    name += "Neo-Porpoise" + name2;
                    break;
					default:
                    name += "Neo-Whale" + name2;
                    break;
            }     
            break;
        case (type <= 65):
            //pod
			if (nopod || upliftonly || synthonly)
				return RandomMorph(nopod, nouplift, upliftonly, podorupliftonly, synthonly);
			
			name2 = "[Pod]";
            switch (true) {
                case (subtype <= 15):
                    name += "Pleasure Pod" + name2;
                    break;
					case (subtype <= 30):
                    name += "Worker Pod" + name2;
                    break;
					case (subtype <= 33):
                    name += "Novacrab" + name2;
                    break;
					case (subtype <= 35):
                    name += "Digger" + name2;
                    break;
					case (subtype <= 38):
                    name += "Ripwing" + name2;
                    break;
					case (subtype <= 39):
                    name += "Scurrier" + name2;
                    break;
					case (subtype <= 40):
                    name += "Whiplash" + name2;
                    break;
					case (subtype <= 42):
                    name += "Chickcharnie" + name2;
                    break;
					case (subtype <= 44):
                    name += "Hypergibbon" + name2;
                    break;
					case (subtype <= 46):
                    name += "Shaper" + name2;
                    break;
					case (subtype < 53):
                    name += "Ayah" + name2;
                    break;
					case (subtype < 62):
                    name += "Basic Pod" + name2;
                    break;
					case (subtype < 67):
                    name += "Critter" + name2;
                    break;
					case (subtype < 70):
                    name += "Flying Squid" + name2;
                    break;
					case (subtype < 72):
                    name += "Jenkin" + name2;
                    break;
					case (subtype < 75):
                    name += "Samsa" + name2;
                    break;
					case (subtype < 83):
                    name += "Security Pod" + name2;
                    break;
					case (subtype < 86):
                    name += "Space Marine" + name2;
                    break;
					case (subtype < 95):
                    name += "Specialist Pod" + name2;
                    break;
					default:
                    name += "Vacuum Pod" + name2;
                    break;

            }
            break;
        case (type <= 95):
            //synthmorph
			if (upliftonly || podorupliftonly)
				return RandomMorph(nopod, nouplift, upliftonly, podorupliftonly, synthonly);
			
			name2 = "[Synthmoph]";
            switch (true) {
                case (subtype <= 20):
                    name += "Case" + name2;
                    break;
					case (subtype <= 35):
                    name += "Synth" + name2;
                    break;
					case (subtype <= 40):
                    name += "Arachnoid" + name2;
                    break;
					case (subtype <= 45):
                    name += "Dragonfly" + name2;
                    break;
					case (subtype <= 49):
                    name += "Flexbot" + name2;
                    break;
					case (subtype <= 50):
                    name += "Reaper" + name2;
                    break;
					case (subtype <= 54):
                    name += "Slitheroid" + name2;
                    break;
					case (subtype <= 58):
                    name += "Swarmnoid" + name2;
                    break;
					case (subtype <= 59):
                    name += "Q Morph" + name2;
                    break;
					case (subtype <= 61):
                    name += "Steel Morph" + name2;
                    break;
					case (subtype <= 62):
                    name += "Steel Morph(Masked)" + name2;
                    break;
					case (subtype <= 63):
                    name += "Steel Morph(Liquid Silver)" + name2;
                    break;
					case (subtype <= 64):
                    name += "Sundiver" + name2;
                    break;
					case (subtype <= 65):
                    name += "Cetus" + name2;
                    break;
					case (subtype <= 66):
                    name += "Courier" + name2;
                    break;
					case (subtype <= 67):
                    name += "Fenrir" + name2;
                    break;
					case (subtype <= 68):
                    name += "Savant" + name2;
                    break;
					case (subtype <= 69):
                    name += "Kite" + name2;
                    break;
					case (subtype <= 70):
                    name += "Spare" + name2;
                    break;
					case (subtype <= 72):
                    name += "Xu Fu" + name2;
                    break;
					case (subtype <= 74):
                    name += "Gargoyle" + name2;
                    break;
					case (subtype <= 75):
                    name += "Skulker" + name2;
                    break;
					case (subtype <= 77):
                    name += "Takko" + name2;
                    break;
					case (subtype <= 78):
                    name += "Biocore" + name2;
                    break;
					case (subtype <= 80):
                    name += "Blackbird" + name2;
                    break;
					case (subtype <= 81):
                    name += "Cloud Skimmer" + name2;
                    break;
					case (subtype <= 82):
                    name += "Daitya" + name2;
                    break;
					case (subtype <= 83):
                    name += "Fighting Kite" + name2;
                    break;
					case (subtype <= 85):
                    name += "Galatea" + name2;
                    break;
					case (subtype <= 86):
                    name += "Griefer" + name2;
                    break;
					case (subtype <= 88):
                    name += "Guard" + name2;
                    break;
					case (subtype <= 89):
                    name += "Guard Deluxe" + name2;
                    break;
					case (subtype <= 90):
                    name += "Mimic" + name2;
                    break;
					case (subtype <= 91):
                    name += "Nautiloid" + name2;
                    break;
					case (subtype <= 93):
                    name += "Opteryx" + name2;
                    break;
					case (subtype <= 95):
                    name += "Rover" + name2;
                    break;
					case (subtype <= 96):
                    name += "Space Fighter Rover" + name2;
                    break;
					case (subtype <= 97):
                    name += "Smart Swarm" + name2;
                    break;
					case (subtype <= 99):
                    name += "Sphere" + name2;
                    break;
					default:
                    name += "Synthtaur" + name2;
                    break;
            }
            break;
        default:
            //infomorph/eidolon
			if (upliftonly || podorupliftonly || synthonly)
				return RandomMorph(nopod, nouplift, upliftonly, podorupliftonly, synthonly);

			name2 = "[Infomorph]";
            switch (true) {
                case (subtype <= 50):
                    name += "Default Infomorph" + name2;
                    break;
                case (subtype <= 57):
                    name += "Agent Eidolon" + name2;
                    break;
                case (subtype <= 70):
                    name += "Digimorph" + name2;
                    break;
                case (subtype <= 74):
                    name += "Elite Eidolon" + name2;
                    break;
                case (subtype <= 81):
                    name += "Hot Shot Eidolon" + name2;
                    break;
                case (subtype <= 85):
                    name += "Sage Eidolon" + name2;
                    break;
                case (subtype <= 92):
                    name += "Scholar Eidolon" + name2;
                    break;
                case (subtype <= 93):
                    name += "Slave Eidolon" + name2;
                    break;
                default:
                    name += "Wirehead Eidolon" + name2;
                    break;
            }
            break;
    }
    return name;
}

function StoryEvent()
{
    /* storyEvent.add(new ChartEntry<PathEvent>(1,  2, 
                new PathEvent("After a long stretch of bad, you hit bottom. No way left to go but up.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(3,  4, 
                new PathEvent("You participate as a test subject in a research project. You suffer no ill effects Ã¢â‚¬Â¦ that you can tell.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(5,  6, 
                new PathEvent("A prominent journalist befriends you as a source and occasional confidante.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(7,  8, 
                new PathEvent("You hear from an unknown source that Oversight has taken an interest in your affairs.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(9,  10,
                new PathEvent("You have an unfortunate run-in with Jovian Republic troops, but manage to extricate yourself.", ActionType.noAction, "Post-Fall Only")));
        storyEvent.add(new ChartEntry<PathEvent>(11, 12,
                new PathEvent("After years, you finally get a chance to inflict revenge on someone. Do you take it or walk away?", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(13, 14,
                new PathEvent("You witness/survive a major disaster, such as a habitat failure, "
                        + "ship collision, terrorist attack, or a freak but deadly accident.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(15, 16,
                new PathEvent("Circumstances force you to move from one end of the solar system to the other.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(17, 18,
                new PathEvent("Your habitat goes through a regime change. Which side are you on?", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(19, 20,
                new PathEvent("You are falsely accused of a crime but then cleared.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(21, 22,
                new PathEvent("You develop a long-term rival. The relationship is complex and non-dangerous, "
                        + "but it does occasionally interfere or consume your attention.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(23, 24,
                new PathEvent("You develop a long-term life-partner relationship.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(25, 26,
                new PathEvent("You suffer through the failure of a major long-term relationship.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(27, 28,
                new PathEvent("You enter into a convenience-based contract-defined romantic relationship.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(29, 30,
                new PathEvent("You develop an ongoing polyamorous relationship with a group of friends.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(31, 32,
                new PathEvent("You are pursued by an irritating but (mostly) harmless suitor/stalker.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(33, 34,
                new PathEvent("You are recruited to secretly help some faction. Randomly determine that faction from the "
                        + "Factions table.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(35, 36,
                new PathEvent("You are re-united with a lover/relative/friend thought lost during the Fall.", ActionType.noAction, "Post-Fall Only")));
        storyEvent.add(new ChartEntry<PathEvent>(37, 38,
                new PathEvent("Political upheaval in your local habitat/polity throws your life into turmoil.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(39, 40,
                new PathEvent("You are the only survivor of a deadly accident on board a ship or small hab, "
                        + "which raises some suspicion Ã¢â‚¬Â¦", ActionType.noAction, "Post-Fall Only")));
        storyEvent.add(new ChartEntry<PathEvent>(41, 42,
                new PathEvent("Your life has been blissfully serene and untroubled. Your friends may secretly hate you.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(43, 44,
                new PathEvent("You find out that one or both of your parents weren't really your parents.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(45, 46,
                new PathEvent("You pursue a period of self-isolation and introspection.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(47, 48,
                new PathEvent("You catch an authority figure doing something illicit, but you don't have the means to prove it.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(49, 50,
                new PathEvent("You take a sabbatical with the Solarians, ringers, or other space-faring clade.", ActionType.noAction, "Post-Fall Only")));
        storyEvent.add(new ChartEntry<PathEvent>(51, 52,
                new PathEvent("You have an affair.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(53, 54,
                new PathEvent("You are privileged enough to meet a Factor.", ActionType.noAction, "Post-Fall Only")));
        storyEvent.add(new ChartEntry<PathEvent>(55, 56,
                new PathEvent("You discover an unknown and intriguing or devastating secret about your family's past.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(57, 58,
                new PathEvent("An unfortunate accident leaves you stuck in a healing vat for a couple of weeks.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(59, 60,
                new PathEvent("While traveling by spacecraft, a malfunction takes you months off course.", ActionType.noAction, "Post-Fall Only")));
        storyEvent.add(new ChartEntry<PathEvent>(61, 62,
                new PathEvent("You use someone to get ahead.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(63, 64,
                new PathEvent("Someone uses you to get ahead.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(65, 66,
                new PathEvent("You unexpectedly make a close friend with someone from a rival or even hostile faction.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(67, 68,
                new PathEvent("You have a falling out with a formerly close friend.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(69, 70,
                new PathEvent("You are forced into a thankless position of heavy responsibility.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(71, 72,
                new PathEvent("Facing unwanted responsibilities, you pack up and move on.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(73, 74,
                new PathEvent("You are persecuted for your nature or beliefs.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(75, 76,
                new PathEvent("You finalize a particularly good research paper, work of art commercial enterprise, "
                        + "or similar achievement.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(77, 78,
                new PathEvent("Someone close to you opts for a real, final death.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(79, 80,
                new PathEvent("You discover a new subculture to embed yourself in.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(81, 82,
                new PathEvent("You befriend a brinker with some interesting ideas and unbelievable stories. Well, almost unbelievable.", ActionType.noAction, "Post-Fall Only")));
        storyEvent.add(new ChartEntry<PathEvent>(83, 84,
                new PathEvent("You find repeat evidence that someone has you under close surveillanceÃ¢â‚¬â€but why?", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(85, 86,
                new PathEvent("You are fairly certain that your new friend is secretly a singularity seeker.", ActionType.noAction, "Post-Fall Only")));
        storyEvent.add(new ChartEntry<PathEvent>(87, 88,
                new PathEvent("You come across an interesting surveillance blind-spot in your local habitat.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(89, 90,
                new PathEvent("A string of disappearances in your habitat has everyone on edge.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(91, 92,
                new PathEvent("Someone you know has come across some disturbing information on a powerful entity, "
                        + "and they are considering blowing the whistle.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(93, 94,
                new PathEvent("You don't have what it takes, and your current job/prospect ends in a washout.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(95, 96,
                new PathEvent("Your inquisitive nature leads you to discover a secret that could get you into trouble.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(97, 98,
                new PathEvent("You receive a wake-up call that challenges your current priorities.", ActionType.noAction, "Any")));
        storyEvent.add(new ChartEntry<PathEvent>(99, 100,
                new PathEvent("Your current job/pursuits take you somewhere dangerous.", ActionType.noAction, "Any"))); */
}

function GateCrashing()
{
    /* gatecrashingEvent.add(new ChartEntry<PathEvent>(1,  20,
                new PathEvent("You go on 1d10 gatecrashing missions, with no major consequences. You do see some cool things, though.", ActionType.modifyStat, 1, "MOX")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(21, 48,
                new PathEvent("You serve on 1d10 missions and pick up some new skills.",
                        "Replace a 1 PP Focus, Faction, or Customization package you acquired in Step 10 with the Explorer package at 1 PP")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(49, 50,
                new PathEvent("You make a new home on Portal (p. 122, Gatecrashing) or some other exoplanet outpost.",
                        "Work with the GM to determine your exoplanet home")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(51, 52,
                new PathEvent("You go through a gate but never come through on the other side.", ActionType.newMorph, "Any", "Start game with 10 points of stress")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(53, 54,
                new PathEvent("You receive some focused training in gate operations.", "Gain the Infosec (Gate Hacking) specialization")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(55, 56,
                new PathEvent("You acquire an alien pet. You're not allowed to bring it back to the solar system, however.",
                        "Work with the gamemaster to determine the your alien pet's characteristics")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(57, 58,
                new PathEvent("You find an alien artifact, but they didn't let you keep it.", ActionType.modifyCredits, 20000)));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(59, 60,
                new PathEvent("You discover a new xenocritter and its unique predatory capabilities.", ActionType.newMorph, "Any")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(61, 62,
                new PathEvent("Your mission backers upgrade/downgrade your capabilities.", ActionType.newMorph, "Any")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(63, 64,
                new PathEvent("You participate in some eye-opening research.", ActionType.modifyAptitude, 5, "COG")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(65, 66,
                new PathEvent("You discover left-behind TITAN machines.", ActionType.newMorph, "Any")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(67, 68,
                new PathEvent("You go on a mission and never return. Your sponsors refuse to talk about it.", ActionType.newMorph, "Any")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(69, 70,
                new PathEvent("Your mission scores a major resource find.", ActionType.modifyCredits, 20000)));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(71, 72,
                new PathEvent("You receive some focused training in gate operations.", "Gain the Interfacing (Gate Operations) specialization")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(73, 74,
                new PathEvent("You join a semi-successful colonization effort for a year.", "Gain +20 to one Profession skill of your choice")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(75, 76,
                new PathEvent("You uncover evidence of a previously unknown but long-dead alien race.", "Gain +10 to one rep score of your choice")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(77, 78,
                new PathEvent("You put in several months of grueling work on a terraforming project.", "Gain +10 to one Academic, Profession, or Technical skill")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(79, 80,
                new PathEvent("You severely botch a rescue operation. Lives are lost and stacks are not recovered.", "Lose 10 rep from the network of your choice")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(81, 82,
                new PathEvent("You experience something while going through a gate that makes you never want to go through again.",
                        ActionType.addTrait, "Phobia Disorder (Pandora Gates)")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(83, 84,
                new PathEvent("You participate in a dangerous rescue operation.", "Gain +10 rep in the network of your choice")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(85, 86,
                new PathEvent("You receive some focused training in gate operations.", ActionType.addSkill, 20, "Academics", "Gate Operations")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(87, 88,
                new PathEvent("You come into possession of your very own blue box", ActionType.noAction, "")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(89, 90,
                new PathEvent("You survive a lengthy gatehopping adventure.", ActionType.modifyStat, 20, "x-rep")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(91, 92,
                new PathEvent("Your mission is sabotaged by an unknown party.", ActionType.newMorph, "Any")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(93, 94,
                new PathEvent("You step through a gate and arrive somewhere other than you expected. Your jaunt is adventurous, but you make it back safe.",
                        ActionType.addSkill, 10, "Profession", "Gatecrashing")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(95, 96,
                new PathEvent("You receive some focused training in gate operations.", "Gain the Programming (Gate Interface) specialization")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(97, 98,
                new PathEvent("You end up in the middle of an exoplanet property-claim dispute.", ActionType.newMorph, "Any")));
        gatecrashingEvent.add(new ChartEntry<PathEvent>(99, 100,
                new PathEvent("You participate in a rescue op that cashes in on a sizable recovery bond.", ActionType.modifyCredits, 10000))); */
}

function Specialize() //table 6.12
{
	var customResults = RollD10();
	var results = "("+ customResults + ") ";
	
	//The book says re-roll Async or Async Adept if the user isn't already Psi, but those packages give the Psi trait. I'm leaving them as is.
	switch (true)
	{
		case (customResults <= 4):
			return results + "Artist";
		break;
		case (customResults <= 8):
			return results + "Async";
		break;
		case (customResults <= 12):
			return results + "Async Adept";
		break;
		case (customResults <= 16):
			return results + "Athletics";
		break;
		case (customResults <= 20):
			return results + "Computer Training";
		break;
		case (customResults <= 24):
			return results + "Connected";
		break;
		case (customResults <= 28):
			return results + "Gearhead";
		break;
		case (customResults <= 32):
			return results + "Heavy Weapons";
		break;
		case (customResults <= 39):
			return results + "Jack of All Trades";
		break;
		case (customResults <= 46):
			return results + "Lucky";
		break;
		case (customResults <= 50):
			return results + "Martial Arts";
		break;
		case (customResults <= 54):
			return results + "Mentalist";
		break;
		case (customResults <= 61):
			return results + "Networker";
		break;
		case (customResults <= 65):
			return results + "Paramedic";
		break;
		case (customResults <= 69):
			return results + "Slacker";
		break;
		case (customResults <= 73):
			return results + "Sneaker";
		break;
		case (customResults <= 77):
			return results + "Social Butterfly";
		break;
		case (customResults <= 81):
			return results + "Spacer";
		break;
		case (customResults <= 85):
			return results + "Student";
		break;
		case (customResults <= 89):
			return results + "Survival Training";
		break;
		case (customResults <= 93):
			return results + "Tech Training";
		break;
		default:
			return results + "Weapon Training";
		break;
	}
}