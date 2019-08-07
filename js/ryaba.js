const dataURL = "https://api.myjson.com/bins/jcmhn";
let text = "";
function handleButton() {
  $.getJSON(dataURL, function(data) {handleData(data)})
}

function handleData(data) {
	text = "";
  data.text.forEach(replaceVar);
  

}
function replaceVar(item) {
	
const var1 = $("input[name=var1]")[0].value;
const var2 = $("input[name=var2]")[0].value;
const var3 = $("input[name=var3]")[0].value;
const var4 = $("input[name=var4]")[0].value;
const var5 = $("input[name=var5]")[0].value;
const var6 = $("input[name=var6]")[0].value;
const speach = $("input[name=speach]")[0].value;
item = item.replace("{var1}", var1);
item = item.replace("{var2}", var2);
item = item.replace("{var3}", var3);
item = item.replace("{var4}", var4);
item = item.replace("{var5}", var5);
item = item.replace("{var6}", var6);
item = item.replace("{speach}", speach);
text = text + item + "<br>";
$("#result").html(text);	
}
function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
