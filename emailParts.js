function emailParts(processedContent) {
    let email = processedContent.toLowerCase();
    let name = email.substring(0, email.lastIndexOf("@"));
    let domain = email.substring(email.lastIndexOf("@") +1);
    let array = new Array(name, domain);
    return array;
  }



  console.log(emailParts("Username@peanut.com"));
