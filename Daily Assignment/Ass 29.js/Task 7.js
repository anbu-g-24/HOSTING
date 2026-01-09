function fakeApiCall() {
    return new Promise((resolve, reject) => {
        console.log("API call started...");

        setTimeout(() => {
            const success = true; // change to false to test error

            if (success) {
                resolve({
                    status: 200,
                    data: "User data received"
                });
            } else {
                reject({
                    status: 500,
                    message: "Server error"
                });
            }
        }, 2000);
    });
}

// Using the Promise
fakeApiCall()
    .then((response) => {
        console.log("Success:", response.data);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });
