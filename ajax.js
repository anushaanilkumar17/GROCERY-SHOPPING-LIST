function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
    
        if (this.readyState==4 && this.status==200){
        var response = JSON.parse(this.responseText);
        var Glist = response.list;
        var output = "<itemlist>";
            
            for (var i=0; i < Glist.length; i++){
            output += "<tr><td>" + 
            Glist[i].serialnumber + "</td><td>" +
            Glist[i].items + "</td><td>" +
            Glist[i].quantity + "</td><td>" +
            Glist[i].unit + "</td><td>" +
            Glist[i].department + "</td><td>" +
            Glist[i].notes + "</tr></td>";
            }
            output += "</itemlist>";
            document.getElementById("demo").innerHTML = output;
         }
    };
    xhttp.open("GET", "list.json", true);
    xhttp.send();
}