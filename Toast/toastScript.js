const toastContainer = document.getElementById("toast-container");

function showToast({ // Default parameters
    title = "",
    message = "",
    type = "",
    duration = temporaryDelay + 1
}) {
    if (toastContainer) {
        let newToast = document.createElement("div");
    
        let icon = (type) => {
            switch (type) {
                case "success":
                    return "fa-circle-check";
                case "warning":
                    return "fa-triangle-exclamation";
                case "inform":
                    return "fa-circle-info";
            }
        }
    
        newToast.classList.add("toast", `toast-${type}`);
        newToast.style.animation = `slideIn_toLeft ease-in-out 0.3s, fadeOut linear 1s ${duration}s forwards`;
        
        newToast.innerHTML = `
                <div class="toast_icon">
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <div class="toast_content">
                    <h2 class="toast_title">${title}</h2>
                    <p class="toast_msg">${message}</p>
                </div>
                <i class="fa-solid fa-xmark toast_close"></i>
        `;

        toastContainer.appendChild(newToast);

        setTimeout(function() {
            toastContainer.removeChild(newToast);
        }, (1 + duration)*1000);
    }
}

let temporaryDelay = 3;

function showSuccessToast(msg="Player's color has been changed successfully.") {
    showToast({
        title: 'Success',
        message: msg,
        type: "success",
        duration: temporaryDelay
    })
}

function showWarningToast(msg="This color has been selected by another player, please choose another color.") {
    showToast({
        title: 'Warning',
        message: msg,
        type: "warning",
        duration: temporaryDelay
    })
}

function showInformToast(msg="There is currently 4 players in this lobby.") {
    showToast({
        title: 'Information',
        message: msg,
        type: "inform",
        duration: temporaryDelay
    })
}

function cycle() {
    setTimeout(showSuccessToast, (temporaryDelay - 2)*1000);
    setTimeout(showWarningToast, (temporaryDelay - 1)*1000);
    setTimeout(showInformToast, (temporaryDelay)*1000);
}

setInterval(cycle, (temporaryDelay)*900);

function toggleToastContColor() {
    toastContainer.classList.toggle("backgroundSalmon");
}

