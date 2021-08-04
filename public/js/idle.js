function idleLogout() {
  let t;
  window.onload = resetTimer;
  window.onmousemove = resetTimer;
  window.onmousedown = resetTimer; // catches touchscreen presses as well
  window.ontouchstart = resetTimer; // catches touchscreen swipes as well
  window.onclick = resetTimer; // catches touchpad clicks as well
  window.onkeydown = resetTimer;
  window.addEventListener("scroll", resetTimer, true);
  // this is the actual logout api call
  const logout = async () => {
    const response = await fetch("/api/user/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      alert("logged out due to inactivity");
    } else if (err) {
      console.log(err);
      alert("Failed to log out.");
    }
  };
  // timer set for 2 minutes of inactivity
  function resetTimer() {
    clearTimeout(t);
    t = setTimeout(logout, 900000); // time is 15 minutes in milliseconds
  }
}
idleLogout();
