/********************************************************************
++ d3 big data community graph
********************************************************************/
function drawCommunityGraph(divId){
        var divID ="#"+divId;



       var graph = new Object();
       var map = new Object();
           var index = 0;

           var linkIndex = 0;
           var Nodes = [];
           var Edges = [];
           var dataN1=[];
           var dataE1=[];




         var width = $(divID).width();
         var height = $(divID).height() ;

//        d3.select("#d3graph").selectAll("svg").remove();
        var svg = d3.select(divID).append("svg:svg")
                .attr("width", width)
                .attr("height", height);



           // tool tip with the label
          var tip = d3.tip()
                   .attr('class', 'd3-tip')
                   .offset([-10, 0])
                   .html(function (d) {
                       return d.name + "";
                   })
           svg.call(tip);


          //  d3.select("the_SVG_ID").remove();
           // arrow head for the graph
           svg.append("defs").selectAll("marker")
                   .data(["suit", "licensing", "resolved"])
                   .enter().append("marker")
                   .attr("id", function (d) {
                       return d;
                   })
                   .attr("viewBox", "0 -5 10 10")
                   .attr("refX", 25)
                   .attr("refY", 0)
                   .attr("markerWidth", 6)
                   .attr("markerHeight", 6)
                   .attr("orient", "auto")
                   .append("path")
                   .attr("d", "M0,-5L10,0L0,5 L10,0 L0, -5")
                   .style("stroke", "#4679BD")
                   .style("opacity", "0.6");

            var tableNodes=[],tableEdges=[];

        //   var tableColor = ["#9b59b6","#f39c12","#1abc9c"];




          // var tableNodes = ["TRUMPNODETWEETTABLE","BERNIENODETWEETTABLE", "CLINTONNODETWEETTABLE"];
          // var tableEdges = ["TRUMPEDGETWEETTABLE","BERNIEEDGETWEETTABLE", "CLINTONEDGETWEETTABLE"];


                 var nodeUrl1 = "https://"+dasIp+":9446/analytics/tables/WSO2CONNODE",
                     edgeUrl1 = "https://"+dasIp+":9446/analytics/tables/WSO2CONEDGE" ;



     $.when(

/* Sending concurrent 6 ajax calls */
                   $.ajax({

                                url: nodeUrl1,
                                beforeSend: function (xhr) {
                                    xhr.setRequestHeader("Authorization", "Basic YWRtaW46YWRtaW4=");
                                },
                                method: "GET",
                                contentType: "application/json",
                                success:function(data){
                                 dataN1=data;
                                 console.log(dataN1);
                                }
                            }),


                     $.ajax({

                                url: edgeUrl1,
                                beforeSend: function (xhr) {
                                    xhr.setRequestHeader("Authorization", "Basic YWRtaW46YWRtaW4=");
                                },
                                method: "GET",
                                contentType: "application/json",
                                success:function(data){
                                    dataE1=data;
                                    console.log(dataE1);
                                }
                            })

       ).then(function(){



            loadNodeData2(Nodes,dataN1);
            loadEdgesData2(Edges,dataE1);
            renderNodesEdges(Nodes,Edges);



     });




    function loadNodeData2(Nodes,dataN1){
                 for (var i = 0; i < dataN1.length; i++) {//
                                   var d = dataN1[i].values;
                                   Nodes.push(d);


                               }


     }

     function loadEdgesData2(Edges,dataE1){
                         for (var i = 0; i < dataE1.length; i++) {  //
                                var d = dataE1[i].values;
                                Edges.push(d);

                            }


     }


function renderNodesEdges(dataset1,dataset2){
                dataset1.forEach(function (d) {
                   // alert(d.name);
                   map[d.name] = index;
                   d.degree = parseInt(d.degree)
                   index++;
               });

               graph.nodes = dataset1;
            //  tlinks = new Object();
               dataset2.forEach(function (d) {

                   /*
                    Data Format Edge
                    ================
                    source
                    target
                    value

                    Data Format Vertex
                    ================
                    name
                    group
                    degree - decide size of the vertex

                    */

                  var s = map[d.source];
                   var t = map[d.target];

                   if (typeof  s === "undefined" || typeof  t === "undefined") {
                      // console.log("unknown vertex " + d.source + "->" + d.target);
                       d.source = 1
                       d.target = 2;

                   } else {
                       d.source = map[d.source];
                       d.target = map[d.target];
                       d.value = parseInt(d.value)
                   }
               });

               graph.links = dataset2;
               console.log("both loaded 2");
               drapGraph(graph);



}



   function drapGraph(graph) {
    console.log("drapGraph");

             svg.selectAll(".link").remove();
             svg.selectAll(".gnode").remove();
                var radius =60;
             var  force = self.force = d3.layout.force()
                       .nodes(graph.nodes)
                       .links(graph.links)
                       .gravity(.05)
                       .distance(60)
                       .charge(-120)
                       .size([width, height])
                       .start();
                 // setTimeout(function(){force.stop();},500);

               //map radius  domain--> range
               var rScale = d3.scale.linear()
                       .domain([d3.min(graph.nodes, function (d) {
                           return (d.degree);
                       }), d3.max(graph.nodes, function (d) {
                           return (d.degree);
                       })])
                       .range([3, radius]);



               var link = svg.selectAll(".link")
                       .data(graph.links)
                       .enter().append("line")
                       .attr("class", "link")
                       .style("stroke-width", 2)
                       .style("stroke-length", function (d) {return (d.value * 10); });// 2 * Math.sqrt(d.value)



               var node = svg.selectAll(".gnode")
                       .data(graph.nodes)
                       .enter().append("g")
                       .attr("class", "gnode")
                       .on('mouseover', tip.show)
                       .on('mouseout', tip.hide)
                        .on( 'click', function(d){
                            var url = "https://twitter.com/"+d.name+"/profile_image?size=original";

                            // popUp(url);

                              } )
                       .call(force.drag);
/*
               var maxretweets = d3.max(graph.nodes, function (d) {
                   return Math.log(d.degree);
               });
               var minretweets = d3.min(graph.nodes, function (d) {
                   return Math.log(d.degree);
               });
               var maxContent = d3.max(graph.nodes, function (d) {
                   return d.degree;
               });
               var minvalue = d3.min(graph.links, function (d) {
                   return d.value;
               });
                var c10 = d3.scale.category10(); */

               var circle = node.append("circle")
                       .attr("r", function (d) {
                           return rScale(d.degree);
                       })
                       .style("fill", function (d) {
                           return d.color;


                       })
                        .style("stroke", "#000000")
                        .on('mouseover', tip.show)
                       .on('mouseout', tip.hide)

                       .call(force.drag);

                var image = node.append("image")
                                 .attr("class", "circle")
                                 .attr("r", function (d) {
                                                            return rScale(d.degree);
                                                        })
                                 .attr("xlink:href", function(d) {
                                        if(d.degree>1){
                                                 var url = "https://twitter.com/"+d.name+"/profile_image?size=original";
                                                     return url;
                                                } })
                              //  .attr("width", "24px")
                              //  .attr("height", "24px")
                                 .on('mouseover', tip.show)
                                 .on('mouseout', tip.hide)

                                 .call(force.drag);

               var label = node.append("text")
                       .style("font-family", "sans-serif")
                       .style("text-anchor", "middle")
                       .style("font-size", "8")
                       .style("stroke", "#8E8E93")
                       .text(function (d) {


                               return d.name;

                       });

var padding = 1;
function collide(alpha) {
  var quadtree = d3.geom.quadtree(graph.nodes);
  return function(d) {
    var rb = 2*radius + padding,
        nx1 = d.x - rb,
        nx2 = d.x + rb,
        ny1 = d.y - rb,
        ny2 = d.y + rb;
    quadtree.visit(function(quad, x1, y1, x2, y2) {
      if (quad.point && (quad.point !== d)) {
        var x = d.x - quad.point.x,
            y = d.y - quad.point.y,
            l = Math.sqrt(x * x + y * y);
          if (l < rb) {
          l = (l - rb) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          quad.point.x += x;
          quad.point.y += y;
        }
      }
      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    });
  };
}


       force.on("tick", function () {



                  circle.attr("cx", function (d) {
                                return d.x = Math.max(radius, Math.min(width - radius, d.x))
                            })
                           .attr("cy", function (d) {
                               return d.y = Math.max(radius, Math.min(height - radius, d.y));
                           });
                    circle.each(collide(0.5));
                   label.attr("x", function (d) {
                       return d.x;
                   })
                           .attr("y", function (d) {
                               return d.y;
                           });
                      image.attr("x", function (d) {
                                           return d.x;
                                       })
                                               .attr("y", function (d) {
                                                   return d.y;
                                               });
                    //  image.each(collide(0.5));

                    link.attr("x1", function (d) {
                                               return d.source.x;
                                               })
                                              .attr("y1", function (d) {
                                                  return d.source.y;
                                              })
                                              .attr("x2", function (d) {
                                                  return d.target.x;
                                              })
                                              .attr("y2", function (d) {
                                                  return d.target.y;
                                              });



               });

       }



}

