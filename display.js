$(function(){
    $('input:radio').change(function(){
        if($(this).val() == "prorated-recent-costs") {
            $("#recent-costs").show();
            $("#initial-costs").hide();
            $("#full").hide();
            $("#difference").hide();
            $("#prorated-costs-not").hide();
            $("#prorated-costs-new").hide();
            $("#prorated-initial-not").hide();
            $("#prorated-initial-new").hide();
            $("input[type=radio][name=prorated-initial]").prop('checked', false);
            $("input[type=radio][name=prorated-costs]").prop('checked', false);
        }
        else if($(this).val() == "prorated-initial-pricing"){
            $("#initial-costs").show();
            $("#recent-costs").hide();
            $("#full").hide();
            $("#difference").hide();
            $("#prorated-costs-not").hide();
            $("#prorated-costs-new").hide();
            $("#prorated-initial-not").hide();
            $("#prorated-initial-new").hide();
            $("input[type=radio][name=prorated-initial]").prop('checked', false);
            $("input[type=radio][name=prorated-costs]").prop('checked', false);
        } else if ($(this).val() == "full") {
            $("#initial-costs").hide();
            $("#recent-costs").hide();
            $("#full").show();
            $("#difference").hide();
            $("input[type=radio][name=prorated-initial]").prop('checked', false);
            $("input[type=radio][name=prorated-costs]").prop('checked', false);
        } else if($(this).val() == "difference") {
            $("#initial-costs").hide();
            $("#recent-costs").hide();
            $("#full").hide();
            $("#difference").show();
            $("input[type=radio][name=prorated-initial]").prop('checked', false);
            $("input[type=radio][name=prorated-costs]").prop('checked', false);
        } else if($(this).val() == "prorated-costs-new"){
            $("#prorated-costs-new").show();
            $("#prorated-costs-not").hide();
            $("#prorated-initial-not").hide();
            $("#prorated-initial-new").hide();
            $("#full").hide();
            $("#difference").hide();
            $("input[type=radio][name=prorated-initial]").prop('checked', false);
        } 
        else if($(this).val() == "prorated-costs-not"){
            $("#prorated-costs-not").show();
            $("#prorated-costs-new").hide();
            $("#prorated-initial-not").hide();
            $("#prorated-initial-new").hide();
            $("#full").hide();
            $("#difference").hide();
            $("input[type=radio][name=prorated-initial]").prop('checked', false);
        } else if($(this).val() == "prorated-initial-new"){
            $("#prorated-initial-new").show();
            $("#prorated-costs-not").hide();
            $("#prorated-costs-new").hide();
            $("#full").hide();
            $("#difference").hide();
            $("#prorated-initial-not").hide();
            $("input[type=radio][name=prorated-costs]").prop('checked', false);
        } else if($(this).val() == "prorated-initial-not"){
            $("#prorated-initial-not").show();
            $("#prorated-initial-new").hide();
            $("#prorated-costs-not").hide();
            $("#prorated-costs-new").hide();
            $("#full").hide();
            $("#difference").hide();
            $("input[type=radio][name=prorated-costs]").prop('checked', false);
        } 
        
    }); 
});
function upgrade1() {
    document.getElementById("res").value = (document.getElementById("P2-21").value - document.getElementById("P2-2").value).toFixed(2);
}
function upgradeProratedCostsNew() {
    document.getElementById("res2").value = (document.getElementById("P2-21a").value - document.getElementById("P1-Ra").value * document.getElementById("LF-1a").value / document.getElementById("TL-1a").value).toFixed(2);
    document.getElementById("R-1").value = document.getElementById("P2-21a").value.toString() + " - " + document.getElementById("P1-Ra").value.toString() + " * " + document.getElementById("LF-1a").value.toString() + " / " + document.getElementById("TL-1a").value.toString();
}
function upgradeProratedCostsNot() {
    document.getElementById("res3").value = (document.getElementById("P2b").value - document.getElementById("P1-Rb").value * document.getElementById("LF-1b").value / document.getElementById("TL-1b").value - document.getElementById("P2b").value * (document.getElementById("TL-2b").value - document.getElementById("LF-1b").value) / document.getElementById("TL-2b").value).toFixed(2);
    document.getElementById("R-2").value = document.getElementById("P2b").value.toString() + " - " + document.getElementById("P1-Rb").value.toString() + " * " + document.getElementById("LF-1b").value.toString() + " / " + document.getElementById("TL-1b").value.toString() + " - " + document.getElementById("P2b").value.toString() + " * " + "(" + document.getElementById("TL-2b").value.toString() + " - " + document.getElementById("LF-1b").value.toString() + ")" + " / " + document.getElementById("TL-2b").value.toString();
}
function upgradeProratedInitialNew() {
    document.getElementById("res4").value = (document.getElementById("P2c").value - document.getElementById("P1c").value * document.getElementById("LF-1c").value / document.getElementById("TL-1c").value).toFixed(2);
    document.getElementById("R-3").value = document.getElementById("P2c").value.toString() + " - " + document.getElementById("P1c").value.toString() + " * " + document.getElementById("LF-1c").value.toString() + " / " + document.getElementById("TL-1c").value.toString();
}
function upgradeProratedInitialNot() {
    document.getElementById("res5").value = (document.getElementById("P2d").value - document.getElementById("P1d").value * document.getElementById("LF-1d").value / document.getElementById("TL-1d").value - document.getElementById("P2d").value * (document.getElementById("TL-2d").value - document.getElementById("LF-1d").value) / document.getElementById("TL-2d").value).toFixed(2);
    document.getElementById("R-4").value = document.getElementById("P2d").value.toString() + " - " + document.getElementById("P1d").value.toString() + " * " + document.getElementById("LF-1d").value.toString() + " / " + document.getElementById("TL-1d").value.toString() + " - " + document.getElementById("P2d").value.toString() + " * " + " (" + document.getElementById("TL-2d").value.toString() + " - " + document.getElementById("LF-1d").value.toString() + ") " + " / " + document.getElementById("TL-2d").value.toString();
}
function getLifetime() {
     var startDate = new Date(document.getElementById("start-date").value);
     var endDate = new Date(document.getElementById("end-date").value);
     document.getElementById("remaining-lifetime").value = document.getElementById("total-lifetime").value - (endDate - startDate) / 86400000;
     
}