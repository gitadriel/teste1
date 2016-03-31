
function ajaxInit() {
    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        ajax = new XMLHttpRequest();
        if (ajax.overrideMimeType) {
            ajax.overrideMimeType('text/xml');
        }
    }
    else if (window.ActiveXObject) { // IE
        try {
            ajax = new ActiveXObject("Msxml2.XMLHTTP");	
        }
        catch (e) {
            try {
                ajax = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {}
        }
    }
    return ajax;
}

function AcenderApagar(statusled)
{
url = "http://192.168.0.10:8090/" + statusled;
ajax = ajaxInit();
if(ajax) {
    ajax.open("POST", url, true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.send();
    
}
}



function verificaChecks() {

    var aChk = document.getElementsByName("ok"); 

    for (var i=0;i<aChk.length;i++){ 

        if (aChk[i].checked == true){ 

            // CheckBox Marcado... Faça alguma coisa... Ex:
url = "http://192.168.0.10:8090/LigarLed";
           ajax = ajaxInit();
if(ajax) {
    ajax.open("POST", url, true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.send();
    
}

        }  else {
            url = "http://192.168.0.10:8090/DesligarLed";
           ajax = ajaxInit();
if(ajax) {
    ajax.open("POST", url, true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.send();
    
}

            

        }

    }

}
