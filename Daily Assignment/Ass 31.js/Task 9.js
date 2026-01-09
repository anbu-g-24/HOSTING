async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Check HTTP error
    if (!response.ok) {
      throw new Error("HTTP Error: " + response.status);
    }

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}

fetchUsers();
