 var $ = require('jquery')
$(document).ready(function () {

    //Handle menu click
    $(".menuBtn").click(function () {

        sessionStorage.clear();

        tablinks = $(".tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        if (this.id == "home") {
            $(".column").css("visibility", "hidden");
            closeNav();
            for (i = 0; i < 2; i++) {
                $("#title" + [i]).empty();
                $("#tab" + [i]).empty();
            }

            $(".tabcontent").css("display", "none");
            tablinks = $(".tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
        } else {
            $('#qTd').empty();
            $('#secTitle').empty();
            $("#ahltaNt").empty();
            $("#trtmntNt").empty();
            $("#trtmnt").empty();
            $("#note").empty();
            $("#treat").empty();
            $("#disp").empty();
            $("#vitalsnote").empty();
            $("#trtment").css("display", "none");
            $("#final").css("display", "none");
            //$("#menu").css("display", "none");

            sessionStorage.setItem("algorithm", this.id)
            var topicName = questions[this.id][0].secTitle
            sessionStorage.setItem("topic", topicName)
            div_show()
        }

        $('#ADTMCSidebar').hide();
    });

    //$("#searchInput").toggle();

});

function w3_open() {
    document.getElementById("menu").style.display = "block";
    $('#popupVitals').css("display", "none");
    $('#qstn').empty();
    $('#topic').empty();
    $('#topic').css("display", "none");
    $('#flags').empty();
    $('#disp').empty();
    $('#redflags').css('display', 'none');
    $('#questions').css('display', 'none')
    $('#symplist').empty();
    $("#ahltaNt").empty();
    $("#trtmntNt").empty();
    $("#provDisp").empty();
    $("#part").empty();
    $("#differential").css('display', 'none')
    $("#final").css('display', 'none')
    $("#vitalsBtn").css('display', 'none')
    $("html, body").animate({ scrollTop: 0 }, "slow");
    
    if ( $("#searchInput").is(":visible") == true ) {
        $("#searchList").empty()
        document.getElementById('searchInput').value = ""
        $("#searchInput").hide();
    }
    var Form = document.getElementById('popupVitals');
    for (i = 0; i < Form.length; i++) {
        // var id = Form[i].getAttribute('id');
        var Name = Form[i].getAttribute('name');
        var frmID = Form[i].getAttribute('id');
        var Value = Form[i].value;
        if(Form[i].name === "02 Sat"){
            Form[i].value = '%';
            $('#' + frmID).css({'color':'black'})
        }else if(Form[i].name === "Temp"){
            //Form[i].value = '&#176; F';
            document.getElementById(Form[i].id).value = String.fromCharCode(176) + " F"
            $('#' + frmID).css({'color':'black'})
        }else if(Form[i].name === "BP"){
            Form[i].value = '/';
            $('#' + frmID).css({'color':'black'})
        }else{
            Form[i].value = '';
            $('#' + frmID).css({'color':'black'})
        }
    }
}
function w3_close() {
    //document.getElementById("ADTMCSidebar").style.display = "none";
    $('#popupVitals').css("display", "none");
    $('#qstn').empty();
    $('#topic').empty();
    $('#topic').css("display", "none");
    $('#flags').empty();
    $('#disp').empty();
    $('#redflags').css('display', 'none');
    $('#questions').css('display', 'none')
    $('#symplist').empty();
    $("#ahltaNt").empty();
    $("#trtmntNt").empty();
    $("#provDisp").empty();
    $("#part").empty();
    $("#differential").css('display', 'none')
    $("#vitalsBtn").css('display', 'none')
}
function navDropDown() {
    var x = document.getElementById("menuTopic");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

//Nav Algorithm Drodown --------------------------------------------------------

function divOpenClose(id) {
    var x = document.getElementById(id);

    var i = 1;
    while (document.getElementById('nav' + i)) {
        y = document.getElementById('nav' + i)
        if (x !== y) {
            y.className = y.className.replace(" w3-show", "");
        }

        i++
    }

    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

//Sidebar Nav open close --------------------------------------------------


//Function To Display Vitals
function div_show() {
    resetPage()
    document.getElementById('popupVitals').style.display = "block";
    document.getElementById('vitalsBtn').style.display = "block";

}
//Function to Hide Popup
function div_hide() {
    //document.getElementById('popupVitals').style.display = "none";
}

function resetPage() {
    $('#popupVitals').css("display", "block");
    $('#qstn').empty();
    $('#topic').empty();
    $('#topic').css("display", "none");
    $('#flags').empty();
    $('#disp').empty();
    $('#redflags').css('display', 'none');
    $('#questions').css('display', 'block')
    $('#symplist').empty();
    $("#ahltaNt").empty();
    $("#trtmntNt").empty();
    $("#provDisp").empty();
    $("#part").empty();
    $("#differential").css('display', 'none')

    //$("#trtment").css("visibility", "hidden");
    window.scroll(0, 0)
    //fillQstn(sessionStorage.getItem("algorithm"))


}

function searchToggle(){
    //var el = document.getElementById("searchInput")
    if ( $("#searchInput").is(":visible") == false ) {
        closeAllNav();
        $( "#searchInput" ).show();
        $("#searchInput").focus();
      } else if ( $("#searchInput").is(":visible") == true ) {
        $("#searchList").empty()
        document.getElementById('searchInput').value = ""
        $( "#searchInput" ).hide();
        
      }
}

function closeAllNav(){
    for(var i = 1; i<14; i++){
        //var theNav = 'nav'+i
        //divOpenClose(theNav)
        y = document.getElementById('nav' + i)
            y.className = y.className.replace(" w3-show", "");
        }
    }

function tempAlert(msg,duration){
 var el = document.createElement("div");
    el.setAttribute("style","position:fixed;top:50%;left:50%;background-color:yellow;padding:20px; border-radius: 15px;width:75%; transform: translate(-50%, -50%);text-align: center");
    el.innerHTML = msg;
    setTimeout(function(){
        el.parentNode.removeChild(el);
    },duration);
    document.body.appendChild(el);
}

function validateVital(inputName){
    
    switch(inputName.name){
    case 'Temp':
        var r = /[\d|,|.|e|E|\+]+/g;
        var s = inputName.value;
            if(r.test(s) && s.match(r)>100.3){
                $('#' + inputName.id).css({'color':'red'})
                tempAlert("Temperature above normal range, 97.8&#8457 to 100.4&#8457 (36.5&#8451 to 37.3&#8451); average 98.6&#8457", 3000)
        }else if(r.test(s) && s.match(r)<97.8){
                $('#' + inputName.id).css({'color':'red'})
                tempAlert("Temperature below normal range, 97.8&#8457 to 100.4&#8457 (36.5&#8451 to 37.3&#8451); average 98.6&#8457", 3000)
        }else{
            $('#' + inputName.id).css({'color':'black'})
        }
    break;
    
    case 'Pulse':
            if(inputName.value != '' && inputName.value > 100){
                $('#' + inputName.id).css({'color':'red'})
                tempAlert("Pulse above normal range, 60 to 100 beats per minute", 3000)
            }else if(inputName.value != '' && inputName.value < 60){
                $('#' + inputName.id).css({'color':'red'})
                tempAlert("Pulse below normal range, 60 to 100 beats per minute", 3000)
            }else{
                $('#' + inputName.id).css({'color':'black'})
            }
            
    break;
    
    case 'Respiration':
            if(inputName.value != '' && inputName.value > 18){
                $('#' + inputName.id).css({'color':'red'})
                tempAlert("Breathing rate above normal range, 12 to 18 breaths per minute", 3000)
            }else if(inputName.value != '' && inputName.value < 12){
                $('#' + inputName.id).css({'color':'red'})
                tempAlert("Breathing rate below normal range, 12 to 18 breaths per minute", 3000)
            }else{
                $('#' + inputName.id).css({'color':'black'})
            }
    break;
            
    case 'BP':
            var bp = inputName.value;
            var fraction = bp.split("/")
            var sys = fraction[0]
            var dia = fraction[1]
                if(sys >139){
                    $('#' + inputName.id).css({'color':'red'})
                    tempAlert("BP high, Normal BP Range 90/60 mm Hg to 120/80 mm Hg. (> 140/90 is undeployable.)", 3000)
                    }else if(dia > 89){
                    $('#' + inputName.id).css({'color':'red'})
                    tempAlert("BP elevated, Normal BP Range 90/60 mm Hg to 120/80 mm Hg. (> 140/90 is undeployable.)", 3000)
                    }else{
                        $('#' + inputName.id).css({'color':'black'})
                    }
    
    break;
    
    case '02 Sat':
        var regx = /\d+/;
        var s = inputName.value;
            
        if(inputName.value != '%' && s.match(regx)<95){
            $('#' + inputName.id).css({'color':'red'})
            tempAlert("O2 Sat below normal range from 95 to 100", 3000)
        }else if(inputName.value != '%' && s.match(regx)>100){
            $('#' + inputName.id).css({'color':'red'})
            tempAlert("O2 Sat out of normal range from 95 to 100", 3000)
        }else{
            $('#' + inputName.id).css({'color':'black'})
        }
    break;
            
    }
    
}