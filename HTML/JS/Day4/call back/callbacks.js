function fetchdata(callback) {
    console.log("fetching data >>>>>>>>");
    setTimeout(() => {
      const data = "sample data";
      callback(data);
    }, 2000);
}


function displaydata(data) {
    console.log("data Recived:", data);
}



fetchdata(displaydata)