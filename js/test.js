	var fig_width = 60;
	var fig_height = 60;
	var login = d3.select("body div.canvas").append("svg");
						login.attr({
						"height": fig_height,
						"width": fig_width,
					});
				login
					.append("rect")
					.attr({
						"y": 10,
						"x": 10,
						"rx": 2,
						"height": 10,
						"width": 10,
						"fill": "steelblue",
						"opacity": 1
					})
					.on("click", function(){
login
					.append("rect")
					.attr({
						"y": 20,
						"x": 20,
						"rx": 2,
						"height": 10,
						"width": 10,
						"fill": "red",
						"opacity": 1
					});
					})
					;
	
