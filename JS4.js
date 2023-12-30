// Password Generator

function passwordGenerator(length) {
    const charset = "!@#$%^&*()_+~`|}{[]:;?><,./-=abcdefghijklmnopqrstuvwxyz123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0";
    let pswrd = "";
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor((Math.random() * charset.length));
      pswrd += charset[randomNumber];
    }
    return pswrd;
  }
  const passwordGenerated = passwordGenerator(12);
  console.log("Generated Password is ", passwordGenerated);