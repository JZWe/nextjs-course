export function checkEmail(email) {
  return email && email.includes('@');
}

export function checkName(name) {
  return name && name.trim() !== '';
}

export function checkMessage(message) {
  return message && message.trim() !== '';
}
