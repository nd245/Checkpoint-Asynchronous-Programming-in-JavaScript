

//task2//
async function awaitCall() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  awaitCall();

  //Task 03//
  async function awaitCall() {
    try {
      const response = await fetch('https://api.example.com/data');
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('An error occurred while fetching the data: ', error.message);
    }
  }
  
  awaitCall();

  function asyncFunctionWithDelay(message, delay) {
    return async function() {
      await new Promise(resolve => setTimeout(resolve, delay));
      console.log(message);
    }
  }


  
  //task4
  async function concurrentRequests() {
    const urls = ['https://api.example.com/data1', 'https://api.example.com/data2'];
  
    try {
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const data = await Promise.all(responses.map(response => response.json()));
      console.log(data);
    } catch (error) {
      console.error('An error occurred while making the requests: ', error);
    }
  }
  
  concurrentRequests(); 
