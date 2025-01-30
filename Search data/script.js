
const data = [
    { name: "Alice", age: 25, job: "Engineer" },
    { name: "Bob", age: 30, job: "Designer" },
    { name: "Charlie", age: 35, job: "Teacher" }
  ];
  
  localStorage.setItem("data", JSON.stringify(data));
  
  function searchData() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const resultDiv = document.getElementById("result");
    

    const storedData = JSON.parse(localStorage.getItem("data"));
    

    const result = storedData.filter(item => item.name.toLowerCase().includes(query));
  
    if (result.length > 0) {
      resultDiv.innerHTML = result.map(item => `<p>${item.name} - ${item.age} - ${item.job}</p>`).join('');
    } else {
      resultDiv.innerHTML = "No matches found";
    }
  }
  