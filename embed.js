function addNumbers() {
    
//reference embed code    
  var outputFull = "";
    
//start of used embed code for iframe
  var embedBase = document.getElementById('baseInput').value;
  var embedSource = document.getElementById('sourceInput').value;
  var embedMedium = document.getElementById('mediumInput').value;
  var embedID = document.getElementById('idInput').value;
  var embedCampaign = document.getElementById('campaignInput').value;
  var embedTerm = document.getElementById('termInput').value;
	
  //var embedAsin = "&asins=";
  //var embedProduct = document.getElementById('sourceInput').value;
  //var embedRest = "&linkId=fe49feb080e46c4692ce3e9d25b3a049&show_border=";
  //var embedBorder = "";
  //var embedRest2 = "&link_opens_in_new_window=false&price_color=";
  //var embedBackgroundColor = document.getElementById('BackgroundInput').value;
  //var input0 = Number(document.getElementById('trackingInput').value);
  //var input1 = Number(document.getElementById('sourceInput').value);
  //var input4 = document.getElementById('BackgroundInput').value;
    
//check box changes the value of the embedBorder    
  if (document.getElementById('borderInput').checked) {
   var embedBorder = "https://";
} else {
    var embedBorder = "";
        }
//utm source is populated   
  if (document.getElementById('sourceInput').value) {
   var sourcePre = "utm_source=";
} else {
   var sourcePre = "";
        }
//utm source is populated   
  if (document.getElementById('mediumInput').value) {
   var mediumPre = "&utm_medium=";
} else {
   var mediumPre = "";
        }
//utm id is populated   
  if (document.getElementById('idInput').value) {
   var idPre = "&utm_id=";
} else {
   var idPre = "";
        }
//utm campaign is populated   
  if (document.getElementById('campaignInput').value) {
   var campaignPre = "&utm_campaign=";
} else {
   var campaignPre = "";
        }
//utm term is populated   
  if (document.getElementById('termInput').value) {
   var termPre = "&utm_term=";
} else {
   var termPre = "";
        }

//join the parts of the url
  document.getElementById('output3').value = embedBorder + embedBase  + '/?' + sourcePre + embedSource + mediumPre + embedMedium + idPre + embedID + campaignPre + embedCampaign + termPre + embedTerm;

//create the variable for outputting the combined code
  var xmod = document.getElementById("output3").value;
  
}
