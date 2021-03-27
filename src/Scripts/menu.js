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
            

            sessionStorage.setItem("algorithm", this.id)
            var topicName = questions[this.id][0].secTitle
            sessionStorage.setItem("topic", topicName)
            div_show()
        }

        $('#ADTMCSidebar').hide();
    });

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