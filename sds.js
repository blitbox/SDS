var myPaper;

var sprinklers = [];


function init(paper)
{
	myPaper = paper;
}

function showCircle(paper, x, y)
{
	var circle = paper.circle(x, y, 30);
    var filler = { fill:"#14cc3e", cursor: 'pointer' };

    circle.attr(filler);
}

function showBorder(paper, x, y)
{
	var shape = paper.rect(x-70, y-70, 140, 140);
    var stroke = { stroke:"#99928A", fill:"#333333", cursor: 'pointer' };
    shape.attr(stroke);
}

function showSprinklers(paper)
{
 	sprinklers = new Array();
 	sprinklers[0] = 0;
 	
 	for (var i = 0;i<16;i++)
	{
		var sprinkler = new Object();
		
		var x = 100+(i%4)*150;
		var y = 220+(Math.floor(i/4))*150;

		//
		// visual components of a sprinkler object
		//
		
		sprinkler.border = paper.rect(x-70, y-70, 140, 140);
	    var stroke = { stroke:"#99928A", fill:"#333333", cursor: 'pointer' };
    	sprinkler.border.attr(stroke);
    
		sprinkler.circle = paper.circle(x, y, 30);
		var filler = { fill:"#14cc3e", cursor: 'pointer' };
		sprinkler.circle.attr(filler);

		sprinkler.idLabel = paper.text(x-64, y-52,i.toString()).attr({ fill:"#dbdbdb","font-size":22, "text-anchor":"start"});
		sprinkler.statusLabel = paper.text(x+64, y-52,"OK").attr({ "text-anchor":"end", fill:"#14cc3e","font-size":16});
		sprinkler.eventLabel = paper.text(x+64, y+52,"123 minutes").attr({ "text-anchor":"end", fill:"#cc8124","font-size":16});
		
		sprinklers[i] = sprinkler;
		
	}
}

function SetSprinklerHealth(sprinklerID, status)
{
	
}

function SetSprinklerOnOffState(sprinklerID, OnOffState)
{
	
}

function ShowMasterStatus(paper)
{
	var text = paper.text(32, 32, "System Status:").attr({ "text-anchor":"start", fill:"#dbdbdb", "font-size": 24, "font-family": "Arial, Helvetica, sans-serif" });
	var shape = paper.rect(200, 16, 128, 32);
    var filler = { fill:"#14cc3e", cursor: 'pointer', stroke:"#dbdbdb" };
	shape.attr(filler);
	var text = paper.text(264, 32, "OK").attr({ "text-anchor":"center", fill:"#dbdbdb", "font-size": 24, "font-family": "Arial, Helvetica, sans-serif" });
}

function ShowMasterSwitch(paper)
{
	var shape = paper.rect(500, 16, 96, 96);
    var filler = { fill:"#14cc3e", cursor: 'pointer', stroke:"#dbdbdb" };
	shape.attr(filler);
	var text = paper.text(548, 64, "Turn Off").attr({ "text-anchor":"center", fill:"#dbdbdb", "font-size": 24, "font-family": "Arial, Helvetica, sans-serif", cursor: 'pointer' });
}
// alert text? orange cc8124
// red  ff4300
// green 14cc3e
// white dbdbdb
//