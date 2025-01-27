function fetchData() {
  console.log("Fetching data...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Change to false to simulate rejection
      if (success) {
        resolve("Sample Data"); // Resolve with data
      } else {
        reject("Failed to fetch data");
      }
    }, 2000);
  });
}

// Using the fetchData function with a promise
fetchData()
  .then((data) => {
    console.log("Data Received:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
