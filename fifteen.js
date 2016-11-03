window.onload = function(){
	
	// Declaration of Variables
	var slidingPuzzle = document.getElementById("puzzlearea");
	var tiles = slidingPuzzle.children;
	var targetbLeft = 0;
	var targetbTop = 0;
	var topAxis = 0;
	var leftAxis = 0;
	var eTop = 300;
	var eLeft = 300;
	var originalTop;
	var originalLeft;
	var shuffleTiles;
	var shuffles = [];
	var shuffleTimes = 1000;

	// Function enables the puzzle tiles to move
	function move_tiles(){
		originalTop = parseInt(this.style.top);
		originalLeft = parseInt(this.style.left);
		if (originalTop == eTop && originalLeft == (eLeft-100) || originalTop == eTop && originalLeft == (eLeft+100) || originalTop == (eTop-100) && originalLeft == eLeft || originalTop == (eTop+100) && originalLeft == eLeft){
			this.style.top = eTop + "px";
			this.style.left = eLeft + "px";
			eTop = originalTop;
			eLeft = originalLeft;
		}
	}
	// function which determines whether a tile can be moved
	function movable_tiles(){
		originalTop = parseInt(this.style.top);
		originalLeft = parseInt(this.style.left);originalLeft
		if (originalTop == eTop && originalLeft == (eLeft-100) || originalTop == eTop && originalLeft == (eLeft+100) || originalTop == (eTop-100) && originalLeft == eLeft || originalTop == (eTop+100) && originalLeft == eLeft){
			$(this).addClass('movablepiece');	
		}
		else{
			$(this).removeClass("movablepiece");
		}
	}

	
	// for loop which arranges the orginal list of numbers into a puzzle box format
	for(var i=0; i < tiles.length; i++){
		tiles[i].className = "puzzlepiece";
		tiles[i].style.top =  topAxis + "px";
		tiles[i].style.left = leftAxis + "px";
		tiles[i].style.backgroundPosition = targetbLeft + "px " + targetbTop + "px";
		tiles[i].onclick= move_tiles;
		tiles[i].onmouseover= movable_tiles;

		if(leftAxis < 300){
			leftAxis = leftAxis + 100;
			targetbLeft = targetbLeft - 100;
		}
		else{
			leftAxis = 0;
			targetbLeft = 0;
			topAxis = topAxis + 100;
			targetbTop = targetbTop - 100;
		}	
	}


	// function which Shuffles the puzzle pieces upon selection of case
	function Shuffle(){
		for(var c = 0; c < shuffleTimes; c++){
			var pick = Math.floor (Math.random () * 4);
			switch(pick){
				case 0:
					(get_tile_Style((eTop-100)+"px", eLeft+"px"))|| get_tile_Style((eTop+100)+"px", eLeft+"px");
					originalTop = parseInt(shuffleTiles.style.top);
 					originalLeft = parseInt(shuffleTiles.style.left);
 					shuffleTiles.style.top = eTop + "px";
 					shuffleTiles.style.left = eLeft + "px";
					eTop = originalTop;
 					eLeft = originalLeft;
 					break;
 				case 1:
 					(get_tile_Style(eTop+"px", (eLeft-100)+"px")) || get_tile_Style(eTop+"px", (eLeft + 100)+"px");
					originalTop = parseInt(shuffleTiles.style.top);
					originalLeft = parseInt(shuffleTiles.style.left);
					shuffleTiles.style.top = eTop + "px";
					shuffleTiles.style.left = eLeft + "px";
					eTop = originalTop;
					eLeft = originalLeft;
					break;
				case 2:
					get_tile_Style((eTop+100)+"px", eLeft+"px") || (get_tile_Style((eTop-100)+"px", eLeft+"px"));
					originalTop = parseInt(shuffleTiles.style.top);
					originalLeft = parseInt(shuffleTiles.style.left);
					shuffleTiles.style.top = eTop + "px";
					shuffleTiles.style.left = eLeft + "px";
					eTop = originalTop;
					eLeft = originalLeft;
					break;
				default:
					get_tile_Style(eTop+"px", (eLeft + 100)+"px") || (get_tile_Style(eTop+"px", (eLeft-100)+"px"));
					originalTop = parseInt(shuffleTiles.style.top);
					originalLeft = parseInt(shuffleTiles.style.left);
					shuffleTiles.style.top = eTop + "px";
					shuffleTiles.style.left = eLeft + "px";
					eTop = originalTop;
					eLeft = originalLeft;
					break;
			}
			}}


	function get_tile_Style(top, left){
		for(var i =0; i < tiles.length; i++){
			if(tiles[i].style.top==top && tiles[i].style.left==left){
				shuffleTiles = tiles[i];
				return shuffleTiles;		
			}
		}
	}
	
	document.getElementById("controls").onclick = Shuffle; 
}