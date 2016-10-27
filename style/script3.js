$(start);
	function start() {
		$("#draggable1").data('key', 1);
		$("#draggable2").data('key', 2);
		$("#draggable3").data('key', 3);
		$("#draggable4").data('key', 4);
		$("#droppable1").data('key', 1);
		$("#droppable2").data('key', 2);
		$("#droppable3").data('key', 3);
		$("#droppable4").data('key', 4);
		$("#draggable1").draggable({
			revert: true,
			containment: "#board"
		});
		$("#draggable2").draggable({
			revert: true,
			containment: "#board"
		});
		$("#draggable3").draggable({
			revert: true,
			containment: "#board"
		});
		$("#draggable4").draggable({
			revert: true,
			containment: "#board"
		});
		$("#droppable1").droppable({
			drop: handleDropEvent	
		});
		$("#droppable2").droppable({
			drop: handleDropEvent	
		});
		$("#droppable3").droppable({
			drop: handleDropEvent	
		});
		$("#droppable4").droppable({
			drop: handleDropEvent	
		});
	}
	//event id drop, ui is what is being dropped
	var count = 0;
	function changePic(x){
		if (x==1){
			$("#droppable1").attr("src","https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Red_triangle_with_thick_white_border.svg/1152px-Red_triangle_with_thick_white_border.svg.png")
			$("#draggable1").attr("style", "visibility: hidden ")
			count++;
		}
		if (x==2){
			$("#droppable2").attr("src", "http://www.pd4pic.com/images/computer-green-icon-right-arrow-cartoon-shapes.png")
			$("#draggable2").attr("style", "visibility: hidden ")
			count++;
		}
		if (x==3){
			$("#droppable3").attr("src", "http://worldartsme.com/images/pink-oval-clipart-1.jpg")
			$("#draggable3").attr("style", "visibility: hidden ")
			count++;
		}
		if (x==4){
			$("#droppable4").attr("src","http://www.iconsdb.com/icons/preview/blue/hexagon-xxl.png")
			$("#draggable4").attr("style", "visibility: hidden ")
			count++;
		}
		if (count == 4){
			alert("Congrats you won!");
		}	
	}

	function handleDropEvent(event, ui) { 
		var left = ui.draggable.data('key');
		var right = $(this).data('key');
		if(left != right){
			alert("Sorry! This is the wrong shape");
		}
		if (left == right){
			changePic(right);
		}
	}
	function restartGame(){
		$("#droppable1").attr("src","http://1.bp.blogspot.com/-ocwSf-heLMs/TZB6QCQ-ttI/AAAAAAAACEY/0Olh8PI1yuQ/s320/shape-triangle.gif");
		$("#draggable1").attr("style", "visibility: none ")
		$("#droppable2").attr("src","http://www.clker.com/cliparts/Y/q/r/q/x/p/right-arrow-white-with-green-border.svg");
		$("#draggable2").attr("style", "visibility: none ")
		$("#droppable3").attr("src","http://www.iloveshakespeare.com/images/pink_circle.png");
		$("#draggable3").attr("style", "visibility: none ")
		$("#droppable4").attr("src","https://img2.embroiderydesigns.com/StockDesign/Large/Internet_Stitch/isftsb01y.jpg");
		$("#draggable4").attr("style", "visibility: none ")
	}


	