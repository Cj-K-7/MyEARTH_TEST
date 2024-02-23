async function notification() {
  const permissionStatus = Notification.permission;

  switch (permissionStatus) {
    case "default":
      const requestPermission = await Notification.requestPermission();

      if (requestPermission === "granted") {
        showNotification("Hello, YOU EARTH!");
        break;
      } else {
        alert("You have denied notifications");
        return;
      }

    case "denied":
      alert("You have denied notifications");
      return;
  }
  showNotification("Hello, YOU EARTH!");
}

async function showNotification(title, options) {
  const registration = await navigator.serviceWorker.getRegistration();
  if ("showNotification" in registration) {
    registration.showNotification(title, options);
  } else {
    new Notification(title, options);
  }
}

notification();
