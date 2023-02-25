const toastContainer = document.getElementById("toast-container");

function showToast({ // Default parameters
    title = "",
    message = "",
    type = "",
    duration = 3000
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

        setTimeout(() => {
            toastContainer.removeChild(newToast);
        }, (duration + 1) * 1000);

        // newToast.classList.add("offsetYUp");
        newToast.classList.add("backgroundSalmon");
    }
}

function showSuccessToast(msg="Player's color has been changed successfully.") {
    showToast({
        title: 'Success',
        message: msg,
        type: "success",
        duration: 3
    })
}

function showWarningToast(msg="This color has been selected by another player, please choose another color.") {
    showToast({
        title: 'Warning',
        message: msg,
        type: "warning",
        duration: 3
    })
}

function showInformToast(msg="There is currently 4 players in this lobby.") {
    showToast({
        title: 'Information',
        message: msg,
        type: "inform",
        duration: 3
    })
}

function cycle() {
    setTimeout(showSuccessToast, (3 - 2)*1000);
    setTimeout(showWarningToast, (3 - 1)*1000);
    setTimeout(showInformToast, (3)*1000);
}

setInterval(cycle, (3)*900);

function toggleToastContColor() {
    toastContainer.classList.toggle("backgroundSalmon");
}
