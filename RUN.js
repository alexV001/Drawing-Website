var jQueryScript = document.createElement('script');
jQueryScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);

setTimeout(function() {
var stat = true;
$(document).ready(function () {
	$("#menu").click(function () {
		if(stat) {
		
		} else {
		$("#menu").animate({width:300},500);
		$("#exit").show(500);
		$(".menu-hide1").show(1);
		$(".menu-hide-2").hide(1);
		$("#PREVIEW").show(500);
		setTimeout(function () {
		stat = true;		
		},500);
		}
	});	
});
$(document).ready(function () {
	$("#exit").click(function () {
		if(stat) {
		$("#menu").animate({width:30},500);
		$("#exit").hide(500);
		$(".menu-hide").hide(500);
		setTimeout(function () {
		stat = false;
		},500);
		} else {
		
		}
	});
	$("#next").click(function () {
		$(".menu-hide1").hide(500);
		$(".menu-hide-2").show(500);
		if(C.mode == 1) {
			$(".brush").show(500);
		} else if(C.mode == 2) {
			$(".line").show(500);
		} else if(C.mode == 3) {
			$(".square").show(500);
		} else if(C.mode == 5) {
			$(".fill").show(500);
		}
		document.getElementById("RED").value = rgb.r;
		document.getElementById("GREEN").value = rgb.g;
		document.getElementById("BLUE").value = rgb.b;
		document.getElementById("ALPHA").value = rgb.a;
	});
	$("#back").click(function () {
		$(".menu-hide-2").hide(500);
		$(".menu-hide1").show(500);
				for(i=1;i<9;i++){
			if(CC==i) {
				CC = i;
				document.getElementById("c"+i).style = ("background-color:" + C[i] +";color:" + C[i] + ";font-size:350%;");
			} else {
				document.getElementById("c" + i).style = "background-color:" + C[i] + ";color:" + C[i] + ";font-size:300%;";
			}
		}
		$(".op").hide(500);
	});
	$(".mode").click( function (event) {
		for(i=1;i<6;i++){
			if(event.target.id=="M" + i) {
				console.log("Mode selected:M"+i );
				PM = C.mode;
				C.mode = i;
				for(i=1;i<6;i++) {
					document.getElementById("M"+i).style = "background-color:rgb(116,93,93);border-color:rgb(116,93,93);font-size:150%;display:inline;";
				}
				document.getElementById("M" + C.mode).style = "background-color:rgb(116,93,93);border-color:rgb(116,93,93);font-size:175%;display:inline;";
			}
		}
		if(PM == C.mode) {
			
		} else {
			$(".op").hide(500);
			if(C.mode == 1) {
				$(".brush").show(500);
			} else if(C.mode == 2) {
				$(".line").show(500);
			} else if(C.mode == 3) {
				$(".square").show(500);
			} else if(C.mode == 5) {
				$(".fill").show(500);
			}
		}
	});
	$("#SCE").click(function (event) {
		if(this.checked) {
			console.log("Squared Cap End Enabled");
			SCE = "square";
		} else {
			console.log("Squared Cap End Enabled");
			SCE = "round";
		}
	});
	$("#SPI").click( function (event) {
		if(this.checked) {
			console.log("Line Spiral enabled");
			LineSpi = true;
		} else {
			console.log("Line Spiral disabled");
			LineSpi = false;
		}
	});
	$("#filled").click(function (event) {
		if(this.checked) {
			filled = true;
		} else {
			filled = false;
		}
	});
	$("#eraser").click(function (event) {
		if(this.checked) {
			console.log("checked");
			ERASER = true;
		} else {
			console.log("Not checked");
			ERASER = false;
		}
	});
	$(".color-preview").click(function (event) {
		console.log(event.target.id);
		for(i=1;i<9;i++){
			if(event.target.id=="c"+ i) {
				CC = i;
				document.getElementById("c"+i).style = ("background-color:" + C[i] +";color:" + C[i] + ";font-size:350%;");
			} else {
				document.getElementById("c" + i).style = "background-color:" + C[i] + ";color:" + C[i] + ";font-size:300%;";
			}
		}
		ctx2.clearRect(0,0,c2.width,c2.height);
	    ctx2.beginPath();
    	ctx2.moveTo(0,126);
    	ctx2.lineTo(251,126);
    	ctx2.strokeStyle = C[CC];
    	ctx2.lineWidth = C.size;
    	ctx2.lineCap = "round";
    	ctx2.stroke();
		D1 = C[CC];
		D1 = D1.replace("rgb(","");
		D1 = D1.replace(")","");
		D1 = D1.replace(/ /g,"");
		D1 = D1.split(",");
		rgb.r = D1[0];
		rgb.g = D1[1];
		rgb.b = D1[2];
		rgb.a = D1[3];
		console.log(rgb);
		document.getElementById("RED").value = rgb.r;
		document.getElementById("GREEN").value = rgb.g;
		document.getElementById("BLUE").value = rgb.b;
		document.getElementById("ALPHA").value = rgb.a;
	});
	$(".MO").change( function () {
		SMOX = document.getElementById("SMOX").valueAsNumber;
		SMOY = document.getElementById("SMOY").valueAsNumber;
		MOX = document.getElementById("MOX").valueAsNumber;
		MOY = document.getElementById("MOY").valueAsNumber;
		console.log("MO change");
	});
	$("#tol").change( function () {
		tolerance = this.valueAsNumber;
		console.log(tolerance);		
		document.getElementById("tolL").innerHTML = "Tolerence: " + tolerance;
	});
});
$(document).ready(function () {
	window.addEventListener("keypress",function (event) {
	});
	window.addEventListener('mousemove', function (event) {
		if(cursor) {
		document.getElementById("CURSOR").style = "width: " + C.size + "px;height:" + C.size + "px;border:1px solid #fff;border-radius: 50%;left:" + ((event.x-(C.size/2))+MOX) + "px;top:" + ((event.y-(C.size/2))+MOY) + "px;";
		}
	});
	window.addEventListener("touchmove", function (event) {
		console.log(event);
		document.getElementById("CURSOR").style = "width: " + C.size + "px;height:" + C.size + "px;border:1px soild #fff;border-radius: 50%;left:" + ((event.touches[0].clientX - (C.size/2))+MOX) + "px;top:" + ((event.touches[0].clientY-(C.size/2))+MOY) + "px;";
	});
});
}, 1000);
var c;
var ctx;
var DO = false;
var X = 0;
var Y = 0;
var GAME = {W:0,H:0};
var MOX = -8;
var MOY = -8;
var SMOX = -8;
var SMOY = -8;
var CC = 1;
var C = {1:"rgb(255 , 0 , 0 , 1)",2:"rgb(255 , 100 , 0 , 1)",3:"rgb(255 , 255 , 0 , 1)",4:"rgb(0 , 255 , 0 , 1)",5:"rgb( 0 , 0 , 255 , 1)",6:"rgb(100 , 0 , 100 , 1)",7:"rgb(0 , 0 , 0 , 1)",8:"rgb(255 , 255 , 255 , 1)",size:30,mode:1};
var LDATA = new Image();
var c2;
var ctx2;
var rgb = {r:255,g:0,b:0,a:1};
var D1 = "";
var ERASER = false;
var WR = new Image();
var D2 = "";
var PD;
var ColorData;
var PM = 1;
var SIM = new Image();
var DOWNLOAD;
var cursor = true;
var SCE = "round";
var tolerance = 5;
var filled = false;
var LineSpi = false;
var SAVE = {1:new Image(),2:new Image(),3:new Image(),4:new Image(),5:new Image(),6:new Image(),7:new Image(),8:new Image(),9:new Image(),10:new Image(),level:1};
window.onload = function () {
	c = document.getElementById("DrawArea");
	ctx = c.getContext("2d");
	GAME.W = window.innerWidth - 18;
	GAME.H = window.innerHeight - 18;
	c.width = GAME.W - 30;
	c.height = GAME.H;
	c2 = document.getElementById("PREVIEW");
	ctx2 = c2.getContext("2d");
	DOWNLOAD = document.getElementById("SAVE1");
	for(i=1;i<9;i++){
		document.getElementById("c" + i).style = "background-color:" + C[i] + ";color:" + C[i] + ";";
	}
	document.getElementById("c1").style = "background-color:red;color:red;font-size:350%;"
		ctx2.clearRect(0,0,c2.width,c2.height);
	    ctx2.beginPath();
    	ctx2.moveTo(0,126);
    	ctx2.lineTo(251,126);
    	ctx2.strokeStyle = C[CC];
    	ctx2.lineWidth = C.size;
    	ctx2.lineCap = "round";
    	ctx2.stroke();
document.getElementById("DrawArea").addEventListener("touchstart", function (event) {
	console.log(event);
	DO = true;
	X = event.touches[0].clientX + SMOX;
	Y = event.touches[0].clientY + SMOY;
	if(C.mode == 2) {
		LDATA.src = c.toDataURL();
		console.log("COPY");
	} else if(C.mode == 3) {
		LDATA.src = c.toDataURL();
		console.log("COPY");
	} else if(C.mode == 4) {
		ColorData = ctx.getImageData(event.touches[0].clientX + MOX,event.touches[0].clientY + MOY,1,1);
		console.log(ColorData);
		rgb.r = ColorData.data[0];
		rgb.g = ColorData.data[1];
		rgb.b = ColorData.data[2];
		rgb.a = ColorData.data[3]/255;
		console.log(rgb);
		ColorChange();
	} else if(C.mode == 5) {
		if(ERASER) {
			floodFill(c, event.touches[0].clientX + MOX, event.touches[0].clientY + MOY, [rgb.r,rgb.g,rgb.b,0]);
		} else {
			floodFill(c, event.touches[0].clientX + MOX, event.touches[0].clientY + MOY, [rgb.r,rgb.g,rgb.b,(rgb.a * 255)]);
		}
	}
});
document.getElementById("DrawArea").addEventListener("touchend", function (event) {
	DO = false;
	if(C.mode==4) {
		C.mode = PM;
		for(i=1;i<5;i++) {
					document.getElementById("M"+i).style = "background-color:rgb(116,93,93);border-color:rgb(116,93,93);font-size:150%;display:inline;";
				}
				document.getElementById("M" + C.mode).style = "background-color:rgb(116,93,93);border-color:rgb(116,93,93);font-size:200%;display:inline;";
	}
});
document.getElementById("DrawArea").addEventListener("touchmove", function (event) {
	if(DO) {
		if(C.mode == 1) {
			if(ERASER){
				ctx.globalCompositeOperation = "destination-out";
				ctx.beginPath();
				ctx.moveTo(X,Y);
				ctx.lineTo(event.touches[0].clientX + MOX,event.touches[0].clientY + MOY);
				ctx.strokeStyle = C[CC];
				ctx.lineWidth = C.size;
				ctx.lineCap = "round";
				ctx.stroke();
				X = event.touches[0].clientX + SMOX;
				Y = event.touches[0].clientY + SMOY;

			} else {
				ctx.globalCompositeOperation = "source-over";
				ctx.beginPath();
				ctx.moveTo(X,Y);
				ctx.lineTo(event.touches[0].clientX + MOX,event.touches[0].clientY + MOY);
				ctx.strokeStyle = C[CC];
				ctx.lineWidth = C.size;
				ctx.lineCap = "round";
				ctx.stroke();
				X = event.touches[0].clientX + SMOX;
				Y = event.touches[0].clientY + SMOY;
			}	
		} else if(C.mode == 2) {
			if(LineSpi) {
				if(ERASER) {
				ctx.globalCompositeOperation = "destination-out"
				ctx.strokeStyle = C[CC];
				ctx.beginPath();
				ctx.moveTo(X,Y);
				ctx.lineTo(event.touches[0].clientX + MOX,event.touches[0].clientY + MOY);
				ctx.lineWidth = C.size;
				ctx.lineCap = SCE;
				ctx.stroke();			
				} else {
				ctx.globalCompositeOperation = "source-over"
				ctx.strokeStyle = C[CC];
				ctx.beginPath();
				ctx.moveTo(X,Y);
				ctx.lineTo(event.touches[0].clientX + MOX,event.touches[0].clientY + MOY);
				ctx.lineWidth = C.size;
				ctx.lineCap = SCE;
				ctx.stroke();
				}
			} else {
				if(ERASER) {
				ctx.clearRect(0,0,c.width,c.height);
				ctx.drawImage(LDATA,0,0);
				ctx.globalCompositeOperation = "destination-out"
				ctx.strokeStyle = C[CC];
				ctx.beginPath();
				ctx.moveTo(X,Y);
				ctx.lineTo(event.touches[0].clientX + MOX,event.touches[0].clientY + MOY);
				ctx.lineWidth = C.size;
				ctx.lineCap = SCE;
				ctx.stroke();			
				ctx.globalCompositeOperation = "source-over";
				} else {
				ctx.globalCompositeOperation = "source-over"
				ctx.clearRect(0,0,c.width,c.height);
				ctx.drawImage(LDATA,0,0);
				ctx.strokeStyle = C[CC];
				ctx.beginPath();
				ctx.moveTo(X,Y);
				ctx.lineTo(event.touches[0].clientX + MOX,event.touches[0].clientY + MOY);
				ctx.lineWidth = C.size;
				ctx.lineCap = SCE;
				ctx.stroke();
				}
			}

		} else if(C.mode == 3) {
			if(ERASER) {
				ctx.clearRect(0,0,c.width,c.height);
				ctx.drawImage(LDATA,0,0);
				ctx.globalCompositeOperation = "destination-out";
				ctx.strokeStyle = C[CC];
				ctx.fillStyle = C[CC];
				ctx.beginPath();
				ctx.moveTo(X,Y);
				ctx.lineWidth = C.size;
				ctx.lineCap = "round";
				if(filled) {
					ctx.fillRect(X,Y,(event.touches[0].clientX + MOX) - X,(event.touches[0].clientY + MOY) - Y);
					ctx.stroke();
					ctx.globalCompositeOperation = "source-over";					
				} else {
					ctx.strokeRect(X,Y,(event.touches[0].clientX + MOX) - X,(event.touches[0].clientY + MOY) - Y);
					ctx.stroke();
					ctx.globalCompositeOperation = "source-over";
				}
			} else {
				ctx.globalCompositeOperation = "source-over";
				ctx.clearRect(0,0,c.width,c.height);
				ctx.drawImage(LDATA,0,0);
				ctx.strokeStyle = C[CC];
				ctx.fillStyle = C[CC];
				ctx.beginPath();
				ctx.moveTo(X,Y);
				ctx.lineWidth = C.size;
				ctx.lineCap = "round";
				if(filled) {
					ctx.fillRect(X,Y,(event.touches[0].clientX + MOX) - X,(event.touches[0].clientY + MOY) - Y);
					ctx.stroke();
					
				} else {
					ctx.strokeRect(X,Y,(event.touches[0].clientX + MOX) - X,(event.touches[0].clientY + MOY) - Y);
					ctx.stroke();
				}
			}
		} else if(C.mode == 4) {
			ColorData = ctx.getImageData(event.touches[0].clientX + MOX,event.touches[0].clientY + MOY,1,1);
			console.log(ColorData);
			rgb.r = ColorData.data[0];
			rgb.g = ColorData.data[1];
			rgb.b = ColorData.data[2];
			rgb.a = ColorData.data[3]/255;
			console.log(rgb);
			ColorChange();
		} else if(C.mode == 5) {
		
		}
	}

});
}
function MD() {
	DO = true;
	X = event.x + SMOX;
	Y = event.y + SMOY;
	if(C.mode == 2) {
	    LDATA.src = c.toDataURL();
		console.log("COPY")
	} else if(C.mode == 3) {
		LDATA.src = c.toDataURL();
		console.log("COPY");
	} else if(C.mode == 4){
		ColorData = ctx.getImageData(event.x + MOX,event.y + MOY,1,1);
		console.log(ColorData);
		rgb.r = ColorData.data[0];
		rgb.g = ColorData.data[1];
		rgb.b = ColorData.data[2];
		rgb.a = ColorData.data[3]/255;
		console.log(rgb);
		ColorChange();
	} else if(C.mode == 5) {
		if(ERASER) {
			floodFill(c, event.x + MOX, event.y + MOY, [rgb.r,rgb.g,rgb.b,0]);
		} else {
		floodFill(c, event.x + MOX, event.y + MOY, [rgb.r,rgb.g,rgb.b,(rgb.a * 255)]);
		}
	}
}
function MU() {
	DO = false;
	if(C.mode==4) {
		C.mode = PM;
		for(i=1;i<5;i++) {
					document.getElementById("M"+i).style = "background-color:rgb(116,93,93);border-color:rgb(116,93,93);font-size:150%;display:inline;";
				}
				document.getElementById("M" + C.mode).style = "background-color:rgb(116,93,93);border-color:rgb(116,93,93);font-size:200%;display:inline;";
	}
	for(i = 10;i>1; i-= 1) {
		SAVE[i].src = SAVE[i-1].src;
	}
	SAVE[1].src = c.toDataURL();
	SAVE.level = 1;
}
function MM() {
	if(DO) {
	    if(C.mode == 1) {
			if(ERASER){
				ctx.globalCompositeOperation = "destination-out";
				ctx.beginPath();
				ctx.moveTo(X,Y);
				ctx.lineTo(event.x + MOX,event.y + MOY);
				ctx.strokeStyle = C[CC];
				ctx.lineWidth = C.size;
				ctx.lineCap = "round";
				ctx.stroke();
				X = event.x + SMOY;
				Y = event.y + SMOX;

			} else {
				ctx.globalCompositeOperation = "source-over";
				ctx.beginPath();
				ctx.moveTo(X,Y);
				ctx.lineTo(event.x + MOX,event.y + MOY);
				ctx.strokeStyle = C[CC];
				ctx.lineWidth = C.size;
				ctx.lineCap = "round";
				ctx.stroke();
				X = event.x + SMOY;
				Y = event.y + SMOX;
			}					
	    } else if(C.mode == 2) {
			if(LineSpi) {
				if(ERASER) {
				ctx.globalCompositeOperation = "destination-out"
				ctx.strokeStyle = C[CC];
				ctx.beginPath();
				ctx.moveTo(X,Y);
				ctx.lineTo(event.x + MOX,event.y + MOY);
				ctx.lineWidth = C.size;
				ctx.lineCap = SCE;
				ctx.stroke();			
				} else {
				ctx.globalCompositeOperation = "source-over"
				ctx.strokeStyle = C[CC];
				ctx.beginPath();
				ctx.moveTo(X,Y);
				ctx.lineTo(event.x + MOX,event.y + MOY);
				ctx.lineWidth = C.size;
				ctx.lineCap = SCE;
				ctx.stroke();
				}
			} else {
				if(ERASER) {
				ctx.clearRect(0,0,c.width,c.height);
				ctx.drawImage(LDATA,0,0);
				ctx.globalCompositeOperation = "destination-out"
				ctx.strokeStyle = C[CC];
				ctx.beginPath();
				ctx.moveTo(X,Y);
				ctx.lineTo(event.x + MOX,event.y + MOY);
				ctx.lineWidth = C.size;
				ctx.lineCap = SCE;
				ctx.stroke();			
				ctx.globalCompositeOperation = "source-over";
				} else {
				ctx.globalCompositeOperation = "source-over"
				ctx.clearRect(0,0,c.width,c.height);
				ctx.drawImage(LDATA,0,0);
				ctx.strokeStyle = C[CC];
				ctx.beginPath();
				ctx.moveTo(X,Y);
				ctx.lineTo(event.x + MOX,event.y + MOY);
				ctx.lineWidth = C.size;
				ctx.lineCap = SCE;
				ctx.stroke();
				}
			}

	    } else if(C.mode == 3) {
			if(ERASER) {
				ctx.clearRect(0,0,c.width,c.height);
				ctx.drawImage(LDATA,0,0);
				ctx.globalCompositeOperation = "destination-out";
				ctx.strokeStyle = C[CC];
				ctx.fillStyle = C[CC];
				ctx.beginPath();
				ctx.moveTo(X,Y);
				ctx.lineWidth = C.size;
				ctx.lineCap = "round";
				if(filled) {
					ctx.fillRect(X,Y,((event.x + MOX)-X),((event.y + MOY)-Y));
					ctx.stroke();
					ctx.globalCompositeOperation = "source-over";					
				} else {
					ctx.strokeRect(X,Y,((event.x + MOX) - X),((event.y + MOY) - Y));
					ctx.stroke();
					ctx.globalCompositeOperation = "source-over";
				}
			} else {
				ctx.globalCompositeOperation = "source-over";
				ctx.clearRect(0,0,c.width,c.height);
				ctx.drawImage(LDATA,0,0);
				ctx.strokeStyle = C[CC];
				ctx.fillStyle = C[CC];
				ctx.beginPath();
				ctx.moveTo(X,Y);
				ctx.lineWidth = C.size;
				ctx.lineCap = "round";
				if(filled) {
					ctx.fillRect(X,Y,((event.x + MOX) - X),((event.y + MOY) - Y));
					ctx.stroke();
					
				} else {
					ctx.strokeRect(X,Y,((event.x + MOX) - X),((event.y + MOY) - Y));
					ctx.stroke();
				}
			}
		} else if(C.mode == 4){
			ColorData = ctx.getImageData(event.x + MOX,event.y + MOY,1,1);
			console.log(ColorData);
			rgb.r = ColorData.data[0];
			rgb.g = ColorData.data[1];
			rgb.b = ColorData.data[2];
			rgb.a = ColorData.data[3]/255;
			console.log(rgb);
			ColorChange();
		} else if(C.mode == 5) {
		
		}
	}
}
function ME() {
	document.body.style.cursor = "crosshair"
	document.getElementById("CURSOR").style = "display:;"
	cursor = true;

}
function ML() {
	document.body.style.cursor = "default";
	document.getElementById("CURSOR").style = "display:none;";
	cursor = false;
	DO = false;
}
window.addEventListener("resize", function () {
	D2 = ctx.globalCompositeOperation;
	WR.src = c.toDataURL();
	setTimeout(function () {
    console.log("window Resized");
    GAME.W = window.innerWidth - 18;
	GAME.H = window.innerHeight - 18;
	c.width = GAME.W - 30;
	c.height = GAME.H;
	ctx.globalCompositeOperation = "source-over";
	ctx.drawImage(WR,0,0);
	ctx.globalCompositeOperation = D2;
	},100);
});
window.addEventListener("keypress", function (event) {
	console.log(event);
	if(event.ctrlKey&&(event.key=="\x1A")) {
		console.log("Control Z");
		UNDO();
	} else if(event.ctrlKey&&(event.key=="\x19")) {
		console.log("Control Y");
		REDO();
	}
});
function SC() {
	C.size = document.getElementById("SIZE").valueAsNumber;
		ctx2.clearRect(0,0,c2.width,c2.height);
	    ctx2.beginPath();
    	ctx2.moveTo(0,126);
    	ctx2.lineTo(251,126);
    	ctx2.strokeStyle = C[CC];
    	ctx2.lineWidth = C.size;
    	ctx2.lineCap = "round";
    	ctx2.stroke();
		document.getElementById("sizeL").innerHTML = "Size: " + C.size;
}
function RC() {
	rgb.r = document.getElementById("RED").valueAsNumber;
	ColorChange();
}
function GC() {
	rgb.g = document.getElementById("GREEN").valueAsNumber;
	ColorChange();
}
function BC() {
	rgb.b = document.getElementById("BLUE").valueAsNumber;
	ColorChange();
}
function AC() {
	rgb.a = document.getElementById("ALPHA").valueAsNumber;
	ColorChange();
}
function ColorChange() {
	C[CC] = "rgb("+rgb.r+" , " + rgb.g + " , " + rgb.b + " , " + rgb.a + ")";
	document.getElementById("RED").value = rgb.r;
	document.getElementById("GREEN").value = rgb.g;
	document.getElementById("BLUE").value = rgb.b;
	document.getElementById("ALPHA").value = rgb.a;
	console.log(C[CC]);
	ctx2.clearRect(0,0,c2.width,c2.height);
	ctx2.beginPath();
    ctx2.moveTo(0,126);
    ctx2.lineTo(251,126);
    ctx2.strokeStyle = C[CC];
    ctx2.lineWidth = C.size;
    ctx2.lineCap = "round";
    ctx2.stroke();	
	for(i=1;i<9;i++){
			if(event.target.id=="c"+ i) {
				CC = i;
				document.getElementById("c"+i).style = ("background-color:" + C[i] +";color:" + C[i] + ";font-size:350%;display:none;");
			} else {
				document.getElementById("c" + i).style = "background-color:" + C[i] + ";color:" + C[i] + ";font-size:300%;display:none;";
			}
		}
		document.getElementById("redL").innerHTML = "Red Value: " + rgb.r;
		document.getElementById("greenL").innerHTML = "Green Value: " + rgb.g;
		document.getElementById("blueL").innerHTML = "Blue Value: " + rgb.b;
		document.getElementById("alphaL").innerHTML = "Alpha Value: " + rgb.a;
}
function SaveImg() {
	SIM.src = c.toDataURL();
	DOWNLOAD.href = SIM.src;
	DOWNLOAD.download = prompt("Drawing Name");
	if(DOWNLOAD.download == "null") {
		console.log("Action Canceled");
	} else {
		DOWNLOAD.click();		
	}
}
function floodFill(canvas, startX, startY, newColor) {
    let ctx = canvas.getContext('2d');
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imageData.data;
    let queue = [[startX, startY]];
    let width = imageData.width;
    let height = imageData.height;
    let startPixelPos = (startY * width + startX) * 4;
    let oldColor = [data[startPixelPos], data[startPixelPos + 1], data[startPixelPos + 2], data[startPixelPos + 3]];

    while (queue.length) {
        let [x, y] = queue.shift();
        let pixelPos = (y * width + x) * 4;

        if (x < 0 || y < 0 || x >= width || y >= height || !matchColor(pixelPos)) continue;

        colorPixel(pixelPos);
        queue.push([x - 1, y]);
        queue.push([x + 1, y]);
        queue.push([x, y - 1]);
        queue.push([x, y + 1]);
    }

    ctx.putImageData(imageData, 0, 0);

    function matchColor(pixelPos) {
        let r = data[pixelPos];
        let g = data[pixelPos + 1];
        let b = data[pixelPos + 2];
        let a = data[pixelPos + 3];

        let dr = r - oldColor[0];
        let dg = g - oldColor[1];
        let db = b - oldColor[2];
        let da = a - oldColor[3];

        return Math.sqrt(dr * dr + dg * dg + db * db + da * da) < tolerance;
    }

    function colorPixel(pixelPos) {
        data[pixelPos] = newColor[0];
        data[pixelPos + 1] = newColor[1];
        data[pixelPos + 2] = newColor[2];
        data[pixelPos + 3] = newColor.length === 4 ? newColor[3] : 255;
    }
}
function UNDO () {
	if(SAVE.level < 9) {
	ctx.clearRect(0,0,c.width,c.height);
	ctx.drawImage(SAVE[SAVE.level + 1],0,0);
	SAVE.level += 1;
	}
}
function REDO () {
	if(SAVE.level > 2){
		ctx.clearRect(0,0,c.width,c.height);
	ctx.drawImage(SAVE[SAVE.level - 1],0,0);
	SAVE.level -= 1;
	}
}