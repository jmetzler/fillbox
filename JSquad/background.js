
var elementId;
var fillInText;

function setTextNow(id, text) {
    elementId = id
    fillInText = text;
     if (elementId != null && fillInText != null) {
        if ($(elementId)) {
            $(elementId).focus();
            $(elementId).val(fillInText);
        }
    }
}

chrome.runtime.onMessage.addListener(function (msg, sender) {
      // First, validate the message's structure
    elementId = msg.id
    fillInText = msg.text;
     if (elementId != null && fillInText != null) {
        if ($(elementId)) {
            $(elementId).focus();
            $(elementId).val(fillInText);
        }
    }  
});

// chrome.webNavigation.onCompleted.addListener(function () {
//     if (elementId != null && fillInText != null) {
//         if ($(elementId)) {
//             $(elementId).focus();
//             $(elementId).val(fillInText);
//         }
//     }
// });



