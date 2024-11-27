const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


const myPromise = new Promise((resolve, reject) => {
  
    resolve("Initial value");
});

const execute = async () => {
    try {
        const value = await myPromise;

        await delay(1000); 
        console.log("// get user from db");
        const user = {}; 

       
        await delay(1000); 
        console.log("// compare password hash");
        const isPasswordCorrect = true; 

      
        await delay(1000);
        console.log("// return login token");
        const loginToken = "token123"; 

        console.log("Login Token:", loginToken);
    } catch (error) {
        console.log(error);
    }

    console.log("This is the end of the script");
};

execute();