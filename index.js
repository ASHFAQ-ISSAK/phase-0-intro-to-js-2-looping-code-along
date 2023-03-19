function writeCards(names, occasion) {
  const messages = [];

  for (const name of names) {
    const message = `Thank you, ${name}, for the wonderful ${occasion} gift!`;
    messages.push(message);
  }

  return messages;
}

function countDown(startingNumber) {
  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}
