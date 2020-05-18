export function verifyEmailCredentials(email){
  if (email.split('').includes('@') && email.split('').includes('.')){
    return true
  } else {
    window.alert("Please enter a valid email address.");
    return false
  }
}

