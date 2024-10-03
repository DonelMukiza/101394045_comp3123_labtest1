function lowerCaseWords(array) {
  return new Promise((resolve, reject) => {
    try {
      const filteredArray = array.filter(item => typeof item === 'string').map(word => word.toLowerCase());
      resolve(filteredArray);
    } catch (error) {
      reject(error);
    }
  });
}

// Test
lowerCaseWords(["Hello", 123, "WORLD", true, "JavaScript"])
  .then(result => console.log(result))  // Output: ["hello", "world", "javascript"]
  .catch(error => console.error(error));
