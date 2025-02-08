const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Auth Sections
export async function IsLogin({ email, password }) {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.statusText}`);
    }

    const data = await response.json();
    // Handle successful login
    console.log("Login successful:", data);
    // You can save the token or user data here if needed
  } catch (error) {
    // Handle login failure
    console.error("Login error:", error.message);
  }
}

export async function IsRegister({ username, email, password }) {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      throw new Error(`Registration failed: ${response.statusText}`);
    }

    const data = await response.json();
    // Handle successful registration
    console.log("Registration successful:", data);
    // You can save user data or token here if needed
  } catch (error) {
    // Handle registration failure
    console.error("Registration error:", error.message);
  }
}
