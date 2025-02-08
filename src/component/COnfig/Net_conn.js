import cookieApiClient from "../Config/Axios"; // Ensure the path is correct
const BASE_URL = import.meta.env.VITE_API_BASE_URL; // Define BASE_URL

// Auth Sections
export async function IsLogin({ email, password }) {
  try {
    const response = await cookieApiClient.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });

    // Handle successful login
    console.log("Login successful:", response.data);
    // Save token or user data here if needed (e.g., localStorage.setItem('token', response.data.token))
  } catch (error) {
    // Handle login failure
    console.error(
      "Login failed:",
      error.response ? error.response.data : error.message
    );
  }
}

export async function IsRegister({ username, email, password }) {
  try {
    const response = await cookieApiClient.post(`${BASE_URL}/auth/register`, {
      username,
      email,
      password,
    });

    // Handle successful registration
    console.log("Registration successful:", response.data);
    // Save user data or token here if needed
  } catch (error) {
    // Handle registration failure
    console.error(
      "Registration failed:",
      error.response ? error.response.data : error.message
    );
  }
}
  