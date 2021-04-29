$(document).ready(function () {

    //vitals events
    $("#tempInput").focus(function () {
        var input = this;
        setTimeout(function() {
            input.setSelectionRange(0, 0);
        }, 0);
    });
    $("#bpInput").focus(function () {
        var input = this;
        setTimeout(function() {
            input.setSelectionRange(0, 0);
        }, 0);
    });
    $("#satInput").focus(function () {
        var input = this;
        setTimeout(function() {
            input.setSelectionRange(0, 0);
        }, 0);
    });

    $(document).on("click", "#vitalsBtn", function () {
        
        //var childs = Form.children;
        
        var vitalsArr = []
        var Form = document.getElementById('popupVitals');
        for (i = 0; i < Form.length; i++) {
            // var id = Form[i].getAttribute('id');
            var Name = Form[i].getAttribute('name');
            var Value = Form[i].value;
            vitalsArr.push(Name + ' : ' + Value)
            if(Form[i].name === "02 Sat"){
                Form[i].value = '%';
            }else if(Form[i].name === "Temp"){
                //Form[i].value = '&#176; F';
                document.getElementById(Form[i].id).value = String.fromCharCode(176) + " F"
            }else if(Form[i].name === "BP"){
                Form[i].value = '/';
            }else{
                Form[i].value = '';
            }
            //document.getElementById('popupVitals').reset();
        }
        updateVitals(vitalsArr)

        //sessionStorage.setItem("vitals", JSON.stringify(vitalsArr))
        $('#popupVitals').css("display", "none");
        $('#vitalsBtn').css("display", "none");
        getRedFlags(sessionStorage.getItem("algorithm"))

    });

    $(document).on("click", ".flagBtn", function () {

        var btnDisp = $(this).text();
        if (btnDisp === "Yes") {
            $('#provDisp').append('<div id="disp" class="w3-xxxlarge">Provider Now!</div>')
            $('.flagBtn').css("display", "none")
        } else {

            $('#flags').empty();
            $('#disp').empty();
            $('#redflags').css('display', 'none');
            $('#questions').css('display', 'block')
            sessionStorage.setItem("qstnNbr", "0")
            fillQuestion()

        }

    });

    $(document).on("click", ".qstnBtn", function () {


        var qstnNbr = sessionStorage.getItem("qstnNbr")
        var btnTxt = $(this).text()
        var treatArrx = []
        if ((btnTxt === "Next") || (btnTxt === "Back") ||(btnTxt === "Yes") || (btnTxt === "No") || (btnTxt === "Final")) {
            switch (btnTxt) {

                case 'Next':
                    var chkBxs = getChckBxs()
                    nxtYesNo(chkBxs)

                    break;

                case 'Back':
                    backButton()

                    break;

                case 'Yes':
                    var qNbr = questions[sessionStorage.getItem("algorithm")][qstnNbr].yes
                    var treatStatement = questions[sessionStorage.getItem("algorithm")][qstnNbr].treatment
                    treatArrx.push(treatStatement)
                    updateSymptoms(treatArrx)
                    updateQstn(qNbr)
                    break;

                case 'No':
                    var qNbr = questions[sessionStorage.getItem("algorithm")][qstnNbr].no
                    //updateSymptoms(questions[sessionStorage.getItem("algorithm")][qstnNbr].notreatment)
                    var treatStatement = questions[sessionStorage.getItem("algorithm")][qstnNbr].treatment
                    var symptomsArray = JSON.parse(sessionStorage.getItem("symptoms"))
                    if(symptomsArray != null){
                        if(symptomsArray.indexOf(treatStatement)){
                            symptomsArray = symptomsArray.flat()
                            sessionStorage.removeItem("symptoms",treatStatement)
                            removeSymptoms(symptomsArray, treatStatement)
                            sessionStorage.setItem("symptoms", JSON.stringify(symptomsArray))
                        }
                    }
                    updateQstn(qNbr)
                    break;

                case 'Final':
                    var chxBxs = getTrtBxs()
                    var disp = questions[sessionStorage.getItem("algorithm")][qstnNbr].treatment
                    sessionStorage.setItem("dispo", disp)
                    //sessionStorage.setItem("treatment", JSON.stringify(chkBxs))
                    updateQstn(100)
            }

            
            $('#qstn').empty();
            $('#symplist').empty();
            fillQuestion()

            if(btnTxt === "Back"){
                backfillChkbx()
                
            }

        } else {

            var secTxt = $(this).data("section")
            var qstnNbr = 0
            var topic = questions[secTxt][0].secTitle
            updateTopic(topic)
            updateAlgorithm(secTxt)

            $('#qstn').empty();
            $('#symplist').empty();
            $('#topic').empty();

            updateQstn(qstnNbr)
            //update the algorithm and set the other data aside
            //clean up question box
            getRedFlags(secTxt)

        }


    });

    $(document).on("click", ".contBtn", function () {

        $('#part').empty();
        $('#differential').css("display", "none");
        $('#final').css("display", "block")

        var algo = sessionStorage.getItem("algorithm")
        fillTrtmnt(algo)
        fillmNote(algo)
        fillDisp(algo)
    });

    $("#cpyAhlta").click(function () {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        var vitalArray = []
        var trtMnt = ""
        var trtx = ""
        //var vital = $("#vitalsnote").text();
        $("#vitalsnote").children('p').each(function () {
            vitalArray.push(this.innerText)
        });
        var element = $("#note").children().text();
        if($("#trtmnt").text()){
            trtMnt = '\n\n' + 'Treatment Protocol: ' + $("#trtmnt").text()
        }else{trtMnt = ""};
        if($("#treat").text()){
            trtx = '\n\n' + $("#treat").text()
        }else{trtx = ""};
        var disposition = '\n\n' + $("#disp").text();

        var text = vitalArray.toString().replace(/,/g, "\n") + '\n\n' + element.toString() + trtMnt.toString() + trtx.toString() + disposition.toString();

        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);

        //const winPDF = new BrowserWindow({ width: 800, height: 600 })
        //PDFWindow.addSupport(winPDF)
        //winPDF.loadURL("file://./assets/pdf/A5181.pdf");

    });

    $("#encounter").click(function () {

    //window.open("Images/A5181.pdf", '_blank')

    //var vital = $("#vitalsnote").text();
    //var vitalRes = vital.replace(":", ":   ");
    //var element = $("#note").children().text();

    });

    function getSymptomYes(){
        var Symptom;
        

    }

    function getChckBxs() {

        var qstnNbr = sessionStorage.getItem("qstnNbr")
        var sympArrx = [];
        const sec = sessionStorage.getItem("algorithm");
        var sympLngth = questions[sec][qstnNbr].symSum

        $('input[type="checkbox"]:checked').each(function (i, v) {
            //chkBoxArr.push($(v).val());
            sympArrx.push($(v).data('text'));
        });

        var filtered = sympArrx.filter(function (el) {
            return el != null;
        });

        if (filtered.length > 0) {
            ///////update symptoms state if symptoms
            if (!sessionStorage.getItem('symptoms', JSON.stringify(filtered))) {
                sessionStorage.setItem('symptoms', JSON.stringify(filtered))
            } else {
                updateSymptoms(filtered)
            }
        }

        return sympArrx
    }

    function getTrtBxs() {

        var qstnNbr = sessionStorage.getItem("qstnNbr")
        var trtArrx = [];
        const sec = sessionStorage.getItem("algorithm");
        var sympLngth = questions[sec][qstnNbr].symSum

        $('input[type="checkbox"]:checked').each(function (i, v) {
            //chkBoxArr.push($(v).val());
            trtArrx.push($(v).data('text'));
        });

        var filtered = trtArrx.filter(function (el) {
            return el != null;
          });

        if (filtered.length > 0) {
            ///////update symptoms state if symptoms
            if (!sessionStorage.getItem('treatment', JSON.stringify(filtered))) {
                sessionStorage.setItem('treatment', JSON.stringify(filtered))
            } else {
                updateTreatment(filtered)
            }
        }

        return filtered
    }

    function getRedFlags(algorithm) {

        var topic = sessionStorage.getItem("topic");
        document.getElementById('topic').style.display = "block";
        $('#topic').append(topic)

        document.getElementById('redflags').style.display = "block";
        $('.flagBtn').css('display', 'inline-block')
        var boxFlags = boxData[algorithm][0].flags
        //$('#redflags').append(boxFlags["flags"])
        for (i = 0; i < boxFlags.length; i++) {
            $('#flags').append('<li>' + boxFlags[i].text + '</li>')
        }
    }

    function getPartials(algorithm) {
        $('#questions').css("display", "none");
        document.getElementById('differential').style.display = "block";
        var boxPart = boxData[algorithm][0].partial
        //$('#redflags').append(boxFlags["flags"])
        for (i = 0; i < boxPart.length; i++) {
            $('#part').append('<li>' + boxPart[i].text + '</li>')
        }
    }

    function nxtYesNo(chkBx) {
        //get answer, figure out next question,
        var qstnNbr = sessionStorage.getItem("qstnNbr")
        //var sympArry = JSON.parse(sessionStorage.getItem("symptoms"))
        var symsumLngth = questions[sessionStorage.getItem("algorithm")][qstnNbr].symSum

        if (chkBx.length > symsumLngth) {
            //update question number
            qNbr = questions[sessionStorage.getItem("algorithm")][qstnNbr].yes
            updateQstn(qNbr)

        } else {
            //update q#
            qNbr = questions[sessionStorage.getItem("algorithm")][qstnNbr].no
            updateQstn(qNbr)
        }
    }

    function fillTrtmnt(algorithm) {
        var boxProt = boxData[algorithm][0].protocol
        $('#trtmnt').append(boxProt)
    }

    function fillmNote(algorithm) {
        var note = JSON.parse(sessionStorage.getItem("symptoms"))
        if(note){
            note = note.flat()
            note = note.filter( function( item, index, inputArray ) {
                   return inputArray.indexOf(item) == index;
            });
            note = note.map(function(x){ return x.toLowerCase()})
        }
        var treat = JSON.parse(sessionStorage.getItem("treatment"))
        var vitals = JSON.parse(sessionStorage.getItem("vitals"))
        var topic = [sessionStorage.getItem("topic").toLowerCase()]
        
        for (var i = 0; i < vitals.length; i++) {
            $("#vitalsnote").append('<p>' + vitals[i] + '</p>')
        }

        //for(var i=0;i<note.length; i++){
        if(note){
            if ((note.length>1)) {
                $("#note").append('<p>The patient presented with ' +  checkCase(topic) + ', ' + toSentence(checkCase(note), topic) + '.</p>')
            }else{
                $("#note").append('<p>The patient presented with ' +  checkCase(topic) + toSentence(checkCase(note), topic) + '.')
            }
        }else{
        
            $("#note").append('<p>The patient presented with ' +  checkCase(topic) + '.')
        }
        if((treat)) {
            $("#treat").append('<p>Treatment provided: ' + treatToSentence(treat) + '.</p>')
        }//else{
           // $("#treat").append('<p>Treatment provided: ' + treat + '.</p>')
        //}
        //}

    }

    function checkCase(str){

            var newSent = []
            
            for(var i=0; i<str.length; i++){

            const abbWrds = ["iud ","adtmc ", "adtmc", "medpros", "hepatitis b", "hepatitis c", "hiv ", " pha", "uds", " uti", "gi ", "upstf", "moi ", " rom", "pms", " ekg", "fh", " tbi", "aem", "foosh", " tm", "bmi", " iv", "pcc", "abcp", "ivf", "heent", " moi", " sob "]

            const found = new RegExp(abbWrds.join("|")).exec(str[i])

            if(found == null){
                
                newSent.push(str[i])
            }
            
            if((found) && (found[0] === "hepatitis b")){

                newSent.push(str[i].replace("hepatitis b, hepatitis c, or hiv", "Hepatitis B, Hepatitis C, or HIV"))

            }else if(found === "routine"){
                
                //return str
                newSent.push(str[i])

            }else if(found === "give"){
                
                //return str
                newSent.push(str[i])
            
            }else if(found === "giving"){

                //return str
                newSent.push(str[i])

            }else if(found !== null){

                newSent.push(str[i].replace(found.toString(), found.toString().toUpperCase()))
            }
            
        }
        return newSent
    }
    
    function removeSymptoms(arr, value) {
      var i = 0;
      while (i < arr.length) {
        if (arr[i] === value) {
          arr.splice(i, 1);
        } else {
          ++i;
        }
      }
      return arr;
    }

    function toSentence(arr, section) {
        let flag = false
        if(section[0].includes("vasectomy") || section[0].includes("traveling") || section[0].includes("station") || section[0].includes("weight") || section[0].includes("immunization") || section[0].includes("poisonous") || section[0].includes("glasses")){
            flag = true
        }

        if(section[0].includes("request") && arr.length<2 && flag==false){
            return ' for ' + arr
        }else if(section[0].includes("request") && arr.length>1 && flag==false){
            return ' for ' + arr.slice(0, -2).join(', ') +
            (arr.slice(0, -2).length ? ', ' : '') +
            arr.slice(-2).join(' and ');
        }else if (arr.length<2){
            return ' and ' + arr;
        }else{
            return arr.slice(0, -2).join(', ') +
            (arr.slice(0, -2).length ? ', ' : '') +
            arr.slice(-2).join(' and ');
        }
    }

    function treatToSentence(arr){
        if (arr.length==1){
            return arr
        }else if (arr.length<2){
            return ' and ' + arr;
        }else{
            return arr.slice(0, -2).join(', ') +
            (arr.slice(0, -2).length ? ', ' : '') +
            arr.slice(-2).join(' and ');
        }
    }

    function fillDisp(algorithm) {
        if (sessionStorage.getItem("dispo")) {
            $('#disp').html(sessionStorage.getItem("dispo"))
        } else {
            $('#disp').text("Follow Treatment Protocol")
        }
    }

    // function to fill the question form
    function fillQuestion() {
        ///////////////////////////////////////////////////////////
        //add logic to check for last before building next question
        ///////////////////////////////////////////////////////////

        var algo = sessionStorage.getItem("algorithm")
        var qstnNbr = sessionStorage.getItem("qstnNbr")
        //qstnNbr = qstnNbr
        var qstn = questions[algo][qstnNbr]

        if (parseInt(qstnNbr) === 100) {
            getPartials(algo)
        } else {
            if (qstn.screen) {
                if(qstn.treatment){$('#qstn').append('<span>' + qstn.treatment + '</span><br/><br/>')}
                $('#qstn').append('<div class="w3-container"><div>' + qstn.question + '</div></div>')
                for (var i = 0; i < qstn.screen.length; i++) {
                    $('#qstn').append('</div><button class="qstnBtn w3-button w3-round w3-yellow w3-margin w3-center" data-section="' + qstn.screen[i].sect + '">' + qstn.screen[i].text + '</button>')
                }
                $('#qstn').append('</div><button class="qstnBtn w3-button w3-round w3-blue w3-margin w3-center" data-section="' + qstn.treatment + '">Final</button><div class="divider"/><button class="qstnBtn w3-button w3-round w3-blue w3-center">Back</button>')

            } else {

                if (!qstn.question) {
                    console.log("no question")
                    console.log(qstn.treatment)
                    if (qstn.last) {
                        if(qstn.narrative.length > 0){

                            $('#qstn').append('<div class="container"><span>Select treatment provided:</span>')

                            for (var i = 0; i < qstn.narrative.length; i++) {

                                $('#qstn').append('<div class="container"><label>' + " " + qstn.narrative[i].text + '<input class="w3-check" type="checkBox" value="' + qstn.narrative[i].val + '" data-text="' + qstn.narrative[i].text + '"><span class="checkmark"></span></label></div>')
                            }
                        }
                        $('#qstn').append('<div class="w3-container"><div>' + qstn.treatment + '</div></div><div class="qstnBtn w3-button w3-round w3-blue w3-center">Final</div><div class="divider"/><button class="qstnBtn w3-button w3-round w3-blue w3-center">Back</button>')
                    } else {
                        $('#qstn').append('<div class="w3-container"><div>' + qstn.treatment + '</div></div><div class="qstnBtn w3-button w3-round w3-blue w3-center">Yes</div><div class="divider"/><div class="qstnBtn w3-button w3-round w3-blue">No</div>')
                    }
                } else {

                    if (qstn.symptoms.length > 0) {

                        if(qstn.callout.length > 0){
                        
                            for(var j = 0; j < qstn.callout.length; j++) {

                            $('#symplist').append('<div class="w3-panel w3-yellow w3-center">' + " " + qstn.callout[j].text + '</div>')
                            
                            }

                        }

                        $('#qstn').append('<div>' + qstn.question + '</div>')

                        for (var i = 0; i < qstn.symptoms.length; i++) {

                            $('#symplist').append('<div class="container"><label>' + " " + qstn.symptoms[i].sym + '<input class="w3-check" type="checkBox" value="' + qstn.symptoms[i].val + '" data-text="' + qstn.symptoms[i].sym + '"><span class="checkmark"></span></label></div>')
                        }
                        if(qstnNbr > 0){
                            $('#symplist').append('<div><button class="qstnBtn w3-button w3-round w3-blue w3-center">Next</button><div class="divider"/><button class="qstnBtn w3-button w3-round w3-blue w3-center">Back</button></div>')
                        }else{
                            $('#symplist').append('<div><button class="qstnBtn w3-button w3-round w3-blue w3-center">Next</button><div class="divider"/></div>')
                        }

                    } else {

                        $('#qstn').append('<div class="w3-container"><div>' + qstn.question + '</div></div><div class="qstnBtn w3-button w3-round w3-blue w3-center">Yes</div><div class="divider"/><div class="qstnBtn w3-button w3-round w3-blue">No</div>')

                    }

                }
            }
        }

    }

    function backButton(){
        //get previous question number
        let prevQs = []
        prevQs = sessionStorage.getItem('qArray').split(',')
        var nextQ = prevQs.slice(-2).reverse().pop()
        prevQs.pop()
        sessionStorage.setItem("qArray", prevQs)
        sessionStorage.setItem("qstnNbr", nextQ)
        //fillQuestion()
            


    }

    function backfillChkbx(){
                
        if(sessionStorage["symptoms"]){
            var checked = JSON.parse(sessionStorage.getItem('symptoms').split(','))
            $("#symplist input[type=checkBox]").each(function(){
                for(var i= checked.length -1; i>=0; i--){
                    if(checked[i] == this.getAttribute('data-text')){
                        $(this).prop("checked", true)
                        sessionStorage.removeItem("symptoms", this.getAttribute('data-text'))
                    }
                }
            });
        
        }
    }

    function updateAlgorithm(algorithm) {
        let prevData = sessionStorage.getItem("algorithm")
        sessionStorage.setItem("algorithm", algorithm)
        //document.getElementById('topic').style.display = "block";
        //$('#topic').text(topicTxt)

    }

    function updateTopic(topicTxt) {
        let prevData = sessionStorage.getItem("topic")
        sessionStorage.setItem("topic", topicTxt)
        document.getElementById('topic').style.display = "block";
        $('#topic').text(topicTxt)

    }

    function updateVitals(vitals) {
        let prevData = JSON.parse(sessionStorage.getItem("vitals"))
        if (prevData) {
            prevData.push(vitals)
            sessionStorage.setItem("vitals", JSON.stringify(prevData))
        } else {
            sessionStorage.setItem("vitals", JSON.stringify(vitals))
        }
    }

    function updateSymptoms(symptoms) {
        let prevData = JSON.parse(sessionStorage.getItem("symptoms"))

        if (!prevData) {
            sessionStorage.setItem("symptoms", JSON.stringify(symptoms))
        } else {
            prevData.push(symptoms)
            sessionStorage.setItem("symptoms", JSON.stringify(prevData))
        }
    }

    function updateTreatment(treatment) {
        let prevData = JSON.parse(sessionStorage.getItem("treatment"))

        if (!prevData) {
            sessionStorage.setItem("treatment", JSON.stringify(treatment))
        } else {
            prevData.push(treatment)
            sessionStorage.setItem("treatment", JSON.stringify(prevData))
        }
    }

    function updateQstn(qNbr) {
        let values = []
        
            if((sessionStorage['qArray'])){
                values.push(sessionStorage.getItem('qArray'))
            }else{
                values.push(sessionStorage.getItem('qstnNbr'))
            }
        
        values.push(qNbr);

        sessionStorage.setItem('qArray', (values));
        
        var qstnNbr = qNbr
        
        sessionStorage.removeItem("qstnNbr")
        sessionStorage.setItem("qstnNbr", qstnNbr)

        
    }

    function moveCursor(x){
        
        setTimeout(function() {
            x.setSelectionRange(0, 0);
        }, 0);
    }
    

});