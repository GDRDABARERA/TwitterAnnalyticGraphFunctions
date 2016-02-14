
/********************************************************************************************************************************************************************************
* Bubble Graph
*********************************************************************************************************************************************************************************/

function drawBubbleGraph( Bubblediv ){


            var divID ="#"+ Bubblediv;

               var Nodes = [];

               var dataN=[];





             var width = $(divID).width();
             var height =$(divID).height() ;
            // console.log('width'+width , ' height'+ height);


                     var bubble = "https://"+dasIp+":9446/analytics/tables/BUBBLE";



         $.when(

    /* Sending concurrent 6 ajax calls */
                       $.ajax({

                                    url: bubble,
                                    beforeSend: function (xhr) {
                                        xhr.setRequestHeader("Authorization", "Basic YWRtaW46YWRtaW4=");
                                    },
                                    method: "GET",
                                    contentType: "application/json",
                                    success:function(data){
                                     dataN=data;
                                     console.log(dataN);
                                    }
                                })

           ).then(function(){



            drawBubble( dataN);


         });



      function drawBubble( dataN1){


       for (var i = 0; i < dataN1.length; i++) {//
                var d = dataN1[i].values;
                        Nodes.push(d);


         }



	var svg = d3.select(divID).append('svg')
					.attr('width', width)
					.attr('height', height);

	var bubble = d3.layout.pack()
				.size([width, height])
				.value(function(d) {return d.size;})
         // .sort(function(a, b) {
				// 	return -(a.value - b.value)
				// })
				.padding(3);

  // generate data with calculated layout values
  var nodes = bubble.nodes(processData(Nodes))
						.filter(function(d) { return !d.children; }); // filter out the outer bubble

  var node = svg.selectAll('circle')
			.data(nodes);

	node.append("title")
	    .text(function(d) { return d.name; });


        node.enter().append('circle')
			.attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
			.attr('r', function(d) { return d.r; })  //(d.size *2); })
			.attr('fill', function(d) { return d.color; });

          var label = node.enter().append("text")
                               .style("font-family", "sans-serif")
                               .style("text-anchor", "middle")
                               .style("font-size", "8")
                               .style("stroke", "#ffffff")
                               .text(function (d) {

                                   if(d.size>0)
                                       return d.name;

                               })
                               .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; });

var legendRectSize=20, legendSpacing=5;

	var legend = d3.select('svg')
        .selectAll("svg")
        .data(nodes)
        .enter()
        .append('g')
          .attr('class', 'legend')
          .attr('transform', function(d, i) {
            var height = legendRectSize;
            var x = 10;
            var y = i * height;
            return 'translate(' + x + ',' + y + ')';
        });

legend.append('rect')
    .attr('width', legendRectSize)
    .attr('height', legendRectSize)
    .style('fill', function(d) { return d.color; })
    .style('stroke',function(d) { return d.color; });

legend.append('text')
    .attr('x', legendRectSize + legendSpacing)
    .attr('y', legendRectSize - legendSpacing)
    .text(function(d) { return d.name; });




  function processData(data) {
    var obj = data;

    var newDataSet = [];

    for(var prop in obj) {
     console.log(prop);
     console.log({name: obj[prop].name, className:  obj[prop].color, size: obj[prop].degree});
      newDataSet.push({name: obj[prop].name, color:  obj[prop].color, size: obj[prop].degree});
    }
    return {children: newDataSet};
  }






}




}

