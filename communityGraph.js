/********************************************************************
++ d3 big data community graph
********************************************************************/
function drawCommunityGraph(divId){
        var divID ="#"+divId;

            var graph = {
                "nodes": [
                    {"name": "Myriel", "group": 1},
                    {"name": "Napoleon", "group": 1},
                    {"name": "Mlle.Baptistine", "group": 1},
                    {"name": "Mme.Magloire", "group": 1},
                    {"name": "CountessdeLo", "group": 1},
                    {"name": "Geborand", "group": 1},
                    {"name": "Champtercier", "group": 1},
                    {"name": "Cravatte", "group": 1},
                    {"name": "Count", "group": 1},
                    {"name": "OldMan", "group": 1},
                    {"name": "Labarre", "group": 2},
                    {"name": "Valjean", "group": 2},
                    {"name": "Marguerite", "group": 3},
                    {"name": "Mme.deR", "group": 2},
                    {"name": "Isabeau", "group": 2},
                    {"name": "Gervais", "group": 2},
                    {"name": "Tholomyes", "group": 3},
                    {"name": "Listolier", "group": 3},
                    {"name": "Fameuil", "group": 3},
                    {"name": "Blacheville", "group": 3},
                    {"name": "Favourite", "group": 3},
                    {"name": "Dahlia", "group": 3},
                    {"name": "Zephine", "group": 3},
                    {"name": "Fantine", "group": 3},
                    {"name": "Mme.Thenardier", "group": 4},
                    {"name": "Thenardier", "group": 4},
                    {"name": "Cosette", "group": 5},
                    {"name": "Javert", "group": 4},
                    {"name": "Fauchelevent", "group": 0},
                    {"name": "Bamatabois", "group": 2},
                    {"name": "Perpetue", "group": 3},
                    {"name": "Simplice", "group": 2},
                    {"name": "Scaufflaire", "group": 2},
                    {"name": "Woman1", "group": 2},
                    {"name": "Judge", "group": 2},
                    {"name": "Champmathieu", "group": 2},
                    {"name": "Brevet", "group": 2},
                    {"name": "Chenildieu", "group": 2},
                    {"name": "Cochepaille", "group": 2},
                    {"name": "Pontmercy", "group": 4},
                    {"name": "Boulatruelle", "group": 6},
                    {"name": "Eponine", "group": 4},
                    {"name": "Anzelma", "group": 4},
                    {"name": "Woman2", "group": 5},
                    {"name": "MotherInnocent", "group": 0},
                    {"name": "Gribier", "group": 0},
                    {"name": "Jondrette", "group": 7},
                    {"name": "Mme.Burgon", "group": 7},
                    {"name": "Gavroche", "group": 8},
                    {"name": "Gillenormand", "group": 5},
                    {"name": "Magnon", "group": 5},
                    {"name": "Mlle.Gillenormand", "group": 5},
                    {"name": "Mme.Pontmercy", "group": 5},
                    {"name": "Mlle.Vaubois", "group": 5},
                    {"name": "Lt.Gillenormand", "group": 5},
                    {"name": "Marius", "group": 8},
                    {"name": "BaronessT", "group": 5},
                    {"name": "Mabeuf", "group": 8},
                    {"name": "Enjolras", "group": 8},
                    {"name": "Combeferre", "group": 8},
                    {"name": "Prouvaire", "group": 8},
                    {"name": "Feuilly", "group": 8},
                    {"name": "Courfeyrac", "group": 8},
                    {"name": "Bahorel", "group": 8},
                    {"name": "Bossuet", "group": 8},
                    {"name": "Joly", "group": 8},
                    {"name": "Grantaire", "group": 8},
                    {"name": "MotherPlutarch", "group": 9},
                    {"name": "Gueulemer", "group": 4},
                    {"name": "Babet", "group": 4},
                    {"name": "Claquesous", "group": 4},
                    {"name": "Montparnasse", "group": 4},
                    {"name": "Toussaint", "group": 5},
                    {"name": "Child1", "group": 10},
                    {"name": "Child2", "group": 10},
                    {"name": "Brujon", "group": 4},
                    {"name": "Mme.Hucheloup", "group": 8}
                ],
                "links": [
                    {"source": 1, "target": 0, "value": 1},
                    {"source": 2, "target": 0, "value": 8},
                    {"source": 3, "target": 0, "value": 10},
                    {"source": 3, "target": 2, "value": 6},
                    {"source": 4, "target": 0, "value": 1},
                    {"source": 5, "target": 0, "value": 1},
                    {"source": 6, "target": 0, "value": 1},
                    {"source": 7, "target": 0, "value": 1},
                    {"source": 8, "target": 0, "value": 2},
                    {"source": 9, "target": 0, "value": 1},
                    {"source": 11, "target": 10, "value": 1},
                    {"source": 11, "target": 3, "value": 3},
                    {"source": 11, "target": 2, "value": 3},
                    {"source": 11, "target": 0, "value": 5},
                    {"source": 12, "target": 11, "value": 1},
                    {"source": 13, "target": 11, "value": 1},
                    {"source": 14, "target": 11, "value": 1},
                    {"source": 15, "target": 11, "value": 1},
                    {"source": 17, "target": 16, "value": 4},
                    {"source": 18, "target": 16, "value": 4},
                    {"source": 18, "target": 17, "value": 4},
                    {"source": 19, "target": 16, "value": 4},
                    {"source": 19, "target": 17, "value": 4},
                    {"source": 19, "target": 18, "value": 4},
                    {"source": 20, "target": 16, "value": 3},
                    {"source": 20, "target": 17, "value": 3},
                    {"source": 20, "target": 18, "value": 3},
                    {"source": 20, "target": 19, "value": 4},
                    {"source": 21, "target": 16, "value": 3},
                    {"source": 21, "target": 17, "value": 3},
                    {"source": 21, "target": 18, "value": 3},
                    {"source": 21, "target": 19, "value": 3},
                    {"source": 21, "target": 20, "value": 5},
                    {"source": 22, "target": 16, "value": 3},
                    {"source": 22, "target": 17, "value": 3},
                    {"source": 22, "target": 18, "value": 3},
                    {"source": 22, "target": 19, "value": 3},
                    {"source": 22, "target": 20, "value": 4},
                    {"source": 22, "target": 21, "value": 4},
                    {"source": 23, "target": 16, "value": 3},
                    {"source": 23, "target": 17, "value": 3},
                    {"source": 23, "target": 18, "value": 3},
                    {"source": 23, "target": 19, "value": 3},
                    {"source": 23, "target": 20, "value": 4},
                    {"source": 23, "target": 21, "value": 4},
                    {"source": 23, "target": 22, "value": 4},
                    {"source": 23, "target": 12, "value": 2},
                    {"source": 23, "target": 11, "value": 9},
                    {"source": 24, "target": 23, "value": 2},
                    {"source": 24, "target": 11, "value": 7},
                    {"source": 25, "target": 24, "value": 13},
                    {"source": 25, "target": 23, "value": 1},
                    {"source": 25, "target": 11, "value": 12},
                    {"source": 26, "target": 24, "value": 4},
                    {"source": 26, "target": 11, "value": 31},
                    {"source": 26, "target": 16, "value": 1},
                    {"source": 26, "target": 25, "value": 1},
                    {"source": 27, "target": 11, "value": 17},
                    {"source": 27, "target": 23, "value": 5},
                    {"source": 27, "target": 25, "value": 5},
                    {"source": 27, "target": 24, "value": 1},
                    {"source": 27, "target": 26, "value": 1},
                    {"source": 28, "target": 11, "value": 8},
                    {"source": 28, "target": 27, "value": 1},
                    {"source": 29, "target": 23, "value": 1},
                    {"source": 29, "target": 27, "value": 1},
                    {"source": 29, "target": 11, "value": 2},
                    {"source": 30, "target": 23, "value": 1},
                    {"source": 31, "target": 30, "value": 2},
                    {"source": 31, "target": 11, "value": 3},
                    {"source": 31, "target": 23, "value": 2},
                    {"source": 31, "target": 27, "value": 1},
                    {"source": 32, "target": 11, "value": 1},
                    {"source": 33, "target": 11, "value": 2},
                    {"source": 33, "target": 27, "value": 1},
                    {"source": 34, "target": 11, "value": 3},
                    {"source": 34, "target": 29, "value": 2},
                    {"source": 35, "target": 11, "value": 3},
                    {"source": 35, "target": 34, "value": 3},
                    {"source": 35, "target": 29, "value": 2},
                    {"source": 36, "target": 34, "value": 2},
                    {"source": 36, "target": 35, "value": 2},
                    {"source": 36, "target": 11, "value": 2},
                    {"source": 36, "target": 29, "value": 1},
                    {"source": 37, "target": 34, "value": 2},
                    {"source": 37, "target": 35, "value": 2},
                    {"source": 37, "target": 36, "value": 2},
                    {"source": 37, "target": 11, "value": 2},
                    {"source": 37, "target": 29, "value": 1},
                    {"source": 38, "target": 34, "value": 2},
                    {"source": 38, "target": 35, "value": 2},
                    {"source": 38, "target": 36, "value": 2},
                    {"source": 38, "target": 37, "value": 2},
                    {"source": 38, "target": 11, "value": 2},
                    {"source": 38, "target": 29, "value": 1},
                    {"source": 39, "target": 25, "value": 1},
                    {"source": 40, "target": 25, "value": 1},
                    {"source": 41, "target": 24, "value": 2},
                    {"source": 41, "target": 25, "value": 3},
                    {"source": 42, "target": 41, "value": 2},
                    {"source": 42, "target": 25, "value": 2},
                    {"source": 42, "target": 24, "value": 1},
                    {"source": 43, "target": 11, "value": 3},
                    {"source": 43, "target": 26, "value": 1},
                    {"source": 43, "target": 27, "value": 1},
                    {"source": 44, "target": 28, "value": 3},
                    {"source": 44, "target": 11, "value": 1},
                    {"source": 45, "target": 28, "value": 2},
                    {"source": 47, "target": 46, "value": 1},
                    {"source": 48, "target": 47, "value": 2},
                    {"source": 48, "target": 25, "value": 1},
                    {"source": 48, "target": 27, "value": 1},
                    {"source": 48, "target": 11, "value": 1},
                    {"source": 49, "target": 26, "value": 3},
                    {"source": 49, "target": 11, "value": 2},
                    {"source": 50, "target": 49, "value": 1},
                    {"source": 50, "target": 24, "value": 1},
                    {"source": 51, "target": 49, "value": 9},
                    {"source": 51, "target": 26, "value": 2},
                    {"source": 51, "target": 11, "value": 2},
                    {"source": 52, "target": 51, "value": 1},
                    {"source": 52, "target": 39, "value": 1},
                    {"source": 53, "target": 51, "value": 1},
                    {"source": 54, "target": 51, "value": 2},
                    {"source": 54, "target": 49, "value": 1},
                    {"source": 54, "target": 26, "value": 1},
                    {"source": 55, "target": 51, "value": 6},
                    {"source": 55, "target": 49, "value": 12},
                    {"source": 55, "target": 39, "value": 1},
                    {"source": 55, "target": 54, "value": 1},
                    {"source": 55, "target": 26, "value": 21},
                    {"source": 55, "target": 11, "value": 19},
                    {"source": 55, "target": 16, "value": 1},
                    {"source": 55, "target": 25, "value": 2},
                    {"source": 55, "target": 41, "value": 5},
                    {"source": 55, "target": 48, "value": 4},
                    {"source": 56, "target": 49, "value": 1},
                    {"source": 56, "target": 55, "value": 1},
                    {"source": 57, "target": 55, "value": 1},
                    {"source": 57, "target": 41, "value": 1},
                    {"source": 57, "target": 48, "value": 1},
                    {"source": 58, "target": 55, "value": 7},
                    {"source": 58, "target": 48, "value": 7},
                    {"source": 58, "target": 27, "value": 6},
                    {"source": 58, "target": 57, "value": 1},
                    {"source": 58, "target": 11, "value": 4},
                    {"source": 59, "target": 58, "value": 15},
                    {"source": 59, "target": 55, "value": 5},
                    {"source": 59, "target": 48, "value": 6},
                    {"source": 59, "target": 57, "value": 2},
                    {"source": 60, "target": 48, "value": 1},
                    {"source": 60, "target": 58, "value": 4},
                    {"source": 60, "target": 59, "value": 2},
                    {"source": 61, "target": 48, "value": 2},
                    {"source": 61, "target": 58, "value": 6},
                    {"source": 61, "target": 60, "value": 2},
                    {"source": 61, "target": 59, "value": 5},
                    {"source": 61, "target": 57, "value": 1},
                    {"source": 61, "target": 55, "value": 1},
                    {"source": 62, "target": 55, "value": 9},
                    {"source": 62, "target": 58, "value": 17},
                    {"source": 62, "target": 59, "value": 13},
                    {"source": 62, "target": 48, "value": 7},
                    {"source": 62, "target": 57, "value": 2},
                    {"source": 62, "target": 41, "value": 1},
                    {"source": 62, "target": 61, "value": 6},
                    {"source": 62, "target": 60, "value": 3},
                    {"source": 63, "target": 59, "value": 5},
                    {"source": 63, "target": 48, "value": 5},
                    {"source": 63, "target": 62, "value": 6},
                    {"source": 63, "target": 57, "value": 2},
                    {"source": 63, "target": 58, "value": 4},
                    {"source": 63, "target": 61, "value": 3},
                    {"source": 63, "target": 60, "value": 2},
                    {"source": 63, "target": 55, "value": 1},
                    {"source": 64, "target": 55, "value": 5},
                    {"source": 64, "target": 62, "value": 12},
                    {"source": 64, "target": 48, "value": 5},
                    {"source": 64, "target": 63, "value": 4},
                    {"source": 64, "target": 58, "value": 10},
                    {"source": 64, "target": 61, "value": 6},
                    {"source": 64, "target": 60, "value": 2},
                    {"source": 64, "target": 59, "value": 9},
                    {"source": 64, "target": 57, "value": 1},
                    {"source": 64, "target": 11, "value": 1},
                    {"source": 65, "target": 63, "value": 5},
                    {"source": 65, "target": 64, "value": 7},
                    {"source": 65, "target": 48, "value": 3},
                    {"source": 65, "target": 62, "value": 5},
                    {"source": 65, "target": 58, "value": 5},
                    {"source": 65, "target": 61, "value": 5},
                    {"source": 65, "target": 60, "value": 2},
                    {"source": 65, "target": 59, "value": 5},
                    {"source": 65, "target": 57, "value": 1},
                    {"source": 65, "target": 55, "value": 2},
                    {"source": 66, "target": 64, "value": 3},
                    {"source": 66, "target": 58, "value": 3},
                    {"source": 66, "target": 59, "value": 1},
                    {"source": 66, "target": 62, "value": 2},
                    {"source": 66, "target": 65, "value": 2},
                    {"source": 66, "target": 48, "value": 1},
                    {"source": 66, "target": 63, "value": 1},
                    {"source": 66, "target": 61, "value": 1},
                    {"source": 66, "target": 60, "value": 1},
                    {"source": 67, "target": 57, "value": 3},
                    {"source": 68, "target": 25, "value": 5},
                    {"source": 68, "target": 11, "value": 1},
                    {"source": 68, "target": 24, "value": 1},
                    {"source": 68, "target": 27, "value": 1},
                    {"source": 68, "target": 48, "value": 1},
                    {"source": 68, "target": 41, "value": 1},
                    {"source": 69, "target": 25, "value": 6},
                    {"source": 69, "target": 68, "value": 6},
                    {"source": 69, "target": 11, "value": 1},
                    {"source": 69, "target": 24, "value": 1},
                    {"source": 69, "target": 27, "value": 2},
                    {"source": 69, "target": 48, "value": 1},
                    {"source": 69, "target": 41, "value": 1},
                    {"source": 70, "target": 25, "value": 4},
                    {"source": 70, "target": 69, "value": 4},
                    {"source": 70, "target": 68, "value": 4},
                    {"source": 70, "target": 11, "value": 1},
                    {"source": 70, "target": 24, "value": 1},
                    {"source": 70, "target": 27, "value": 1},
                    {"source": 70, "target": 41, "value": 1},
                    {"source": 70, "target": 58, "value": 1},
                    {"source": 71, "target": 27, "value": 1},
                    {"source": 71, "target": 69, "value": 2},
                    {"source": 71, "target": 68, "value": 2},
                    {"source": 71, "target": 70, "value": 2},
                    {"source": 71, "target": 11, "value": 1},
                    {"source": 71, "target": 48, "value": 1},
                    {"source": 71, "target": 41, "value": 1},
                    {"source": 71, "target": 25, "value": 1},
                    {"source": 72, "target": 26, "value": 2},
                    {"source": 72, "target": 27, "value": 1},
                    {"source": 72, "target": 11, "value": 1},
                    {"source": 73, "target": 48, "value": 2},
                    {"source": 74, "target": 48, "value": 2},
                    {"source": 74, "target": 73, "value": 3},
                    {"source": 75, "target": 69, "value": 3},
                    {"source": 75, "target": 68, "value": 3},
                    {"source": 75, "target": 25, "value": 3},
                    {"source": 75, "target": 48, "value": 1},
                    {"source": 75, "target": 41, "value": 1},
                    {"source": 75, "target": 70, "value": 1},
                    {"source": 75, "target": 71, "value": 1},
                    {"source": 76, "target": 64, "value": 1},
                    {"source": 76, "target": 65, "value": 1},
                    {"source": 76, "target": 66, "value": 1},
                    {"source": 76, "target": 63, "value": 1},
                    {"source": 76, "target": 62, "value": 1},
                    {"source": 76, "target": 48, "value": 1},
                    {"source": 76, "target": 58, "value": 1}
                ]
            };






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

