interface User {
  username: string;
  password: string;
  role: string;
}

let users: User[] = [];

// Forms
const signupForm = document.getElementById("signupForm") as HTMLFormElement;
const loginForm = document.getElementById("loginForm") as HTMLFormElement;

// Toggle buttons
const showLoginBtn = document.getElementById("showLogin")!;
const showSignupBtn = document.getElementById("showSignup")!;

// Messages
const signupMsg = document.getElementById("signupMessage")!;
const loginMsg = document.getElementById("loginMessage")!;

showSignupBtn.onclick = () => {
  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
};

showLoginBtn.onclick = () => {
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
};

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username =
    (document.getElementById("su-username") as HTMLInputElement).value.trim();

  const password =
    (document.getElementById("su-password") as HTMLInputElement).value.trim();

  const roleElement =
    document.querySelector('input[name="role"]:checked') as HTMLInputElement;

  const role = roleElement?.value;

  const terms =
    (document.getElementById("terms") as HTMLInputElement).checked;

  if (!username) {
    signupMsg.textContent = "Username is required";
    signupMsg.style.color = "red";
    return;
  }

  if (!password) {
    signupMsg.textContent = "Password is required";
    signupMsg.style.color = "red";
    return;
  }

  if (!role) {
    signupMsg.textContent = "Please select a role";
    signupMsg.style.color = "red";
    return;
  }

  if (!terms) {
    signupMsg.textContent = "Accept terms first!";
    signupMsg.style.color = "red";
    return;
  }

  users.push({ username, password, role });

  signupMsg.textContent = "Signup Successful!";
  signupMsg.style.color = "green";

  signupForm.reset();

  // signupForm.classList.add("hidden");
  // loginForm.classList.remove("hidden");
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username =
    (document.getElementById("li-username") as HTMLInputElement).value.trim();

  const password =
    (document.getElementById("li-password") as HTMLInputElement).value.trim();


  if (!username) {
    loginMsg.textContent = "Username is required";
    loginMsg.style.color = "red";
    return;
  }

  if (!password) {
    loginMsg.textContent = "Password is required";
    loginMsg.style.color = "red";
    return;
  }

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    loginMsg.textContent = `Login Successful (${user.role})`;
    loginMsg.style.color = "green";
  } else {
    loginMsg.textContent = "Invalid Credentials";
    loginMsg.style.color = "red";
  }

  loginForm.reset();
});