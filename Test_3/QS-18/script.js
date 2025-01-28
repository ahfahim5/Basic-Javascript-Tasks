function dataApi1() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ message: "API 1" });
            }, 1000);
        });
    }
    function dataApi2() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ message: "API 2" });
            }, 1000);
        });
    }   
    function dataApi3() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ message: "API 3" });
            }, 1000);
        });
    }
    Promise.all([dataApi1(), dataApi2(), dataApi3()])
        .then((data) => {
            data.forEach((data, index) => {
                console.log(data.message);
            });
        })
        .catch((error) => {
            console.log(error);
        });