const axios = require("axios");
const URL = "https://api.hatchways.io/assessment/students";

class Student_API {
    static async fetchData(){
        const response = await axios.get(URL);
        return response.data;
    }
}

export default Student_API;