
/*************************************************************************************************************
*  Common WordCloud
***************************************************************************************************************/
function drawWordCloud( cloudDiv ){



   // var tableName= Cname+"WORDCLOUD";
    var j=1;var i;

//var stopWords ="(trump|donaldtrump|realdonaldtrump|cruzcrew|feelthebern|sanders|voteTrump|clinton|cruz|tedcruz|bernie|berniesanders|makeamericagreatagain|trumptrain|donald)";
   var stopWords ="(data|miss|wsocon | rosemin |ROSEMIN)";

        getDataCloud( cloudDiv );



    setInterval(function () {

        getDataCloud( cloudDiv );
    }, 5000);


}




function updateText( new_text, stopWords, cloudDiv){
        var cloudDivID ="#"+cloudDiv;
            var width = $(cloudDivID).width();
           // var widthDid = $("news").width();
            var height = $(cloudDivID).height();

                var text={
                                  "width":width,
                                  "height": height,
                                  "padding": {"top":0, "bottom":0, "left":0, "right":0},

                                  "data": [
                                    {
                                      "name": "table",
                                      "values": [ new_text
                                          ],

                                      "transform": [
                                        {
                                          "type": "countpattern",
                                          "field": "data",
                                          "case": "upper",
                                          "pattern": "[\\w']{3,}",
                                          "stopwords": stopWords
                                        },
                                        {
                                          "type": "formula", "field": "angle",
                                          "expr": "[-45, 0, 45][~~(random() * 3)]"
                                        },
                                        {
                                          "type": "formula", "field": "weight",
                                          "expr": "if(datum.text=='VEGA', 600, 300)"
                                        },
                                        {
                                          "type": "wordcloud",
                                          "size": [800, 400],
                                          "text": {"field": "text"},
                                          "rotate": {"field": "angle"},
                                          "font": {"value": "Arial"},
                                          "fontSize": {"field": "count"},
                                          "fontWeight": {"field": "weight"},
                                          "fontScale": [9, 50]
                                        }
                                      ]
                                    }
                                  ],

                                  "scales": [
                                    {
                                      "name": "color",
                                      "type": "ordinal",
                                      "range":["#fc61e2","#7d3070","#511f49"]
                                    }
                                  ],

                                  "marks": [
                                    {
                                      "type": "text",
                                      "from": {"data": "table"},
                                      "properties": {
                                        "enter": {
                                          "x": {"field": "layout_x"},
                                          "y": {"field": "layout_y"},
                                          "angle": {"field": "layout_rotate"},
                                          "font": {"field": "layout_font"},
                                          "fontSize": {"field": "layout_fontSize"},
                                          "fontStyle": {"field": "layout_fontStyle"},
                                          "fontWeight": {"field": "layout_fontWeight"},
                                          "text": {"field": "text"},
                                          "align": {"value": "center"},
                                          "baseline": {"value": "alphabetic"},
                                          "fill": {"scale": "color", "field": "text"}
                                        },
                                        "update": {
                                          "fillOpacity": {"value": 1}
                                        },
                                        "hover": {
                                          "fillOpacity": {"value": 0.5}
                                        }
                                      }
                                    }
                                  ]

                     };


            return text;

}

function getDataCloud(cloudDiv){
     var cloudDivID="#"+cloudDiv;
        var newTestString=" ";
               $.ajax({

                               url:  "https://"+ dasIp + ":9446/analytics/search_count",
                                beforeSend: function (xhr) {
                                       xhr.setRequestHeader("Authorization", "Basic YWRtaW46YWRtaW4=");
                                 },
                                 method: "POST",

                                contentType: "application/json",
                                data:"{\"tableName\":\"PROCESSWSO2CONCLOUD\"}",
                                success: function (data) {
                                   // console.log(data);
                                    var N= data;
                                    //N= N-100;
                                   // console.log(N);

                                        $.ajax({

                                                          url:  "https://"+ dasIp + ":9446/analytics/search",
                                                           beforeSend: function (xhr) {
                                                                  xhr.setRequestHeader("Authorization", "Basic YWRtaW46YWRtaW4=");
                                                            },
                                                            method: "POST",

                                                           contentType: "application/json",
                                                           data:"{\"tableName\":\"PROCESSWSO2CONCLOUD\", \"query\":\"*:*\", \"start\": 0, \"count\":"+N+"}",
                                                           success: function (TextData) {
                                                                var n=TextData.length;
                                                           // console.log(TextData.length);
                                                           // console.log(TextData);
                                                                for(var i=0;i<n;i++){

                                                                    newTestString+=" "+TextData[i].values.processText;

                                                                }
                                                               // console.log(newTestString);

                                                                new_cloud =updateText(newTestString, stopWords,cloudDiv);
                                                                 var viewUpdateFunction = (function(chart) {
                                                               	        this.view = chart({el:cloudDivID}).update();
                                                                 }).bind(this);
                                                                 vg.parse.spec(new_cloud, viewUpdateFunction);


                                                           }

                                               });


                                    }





          });
}


