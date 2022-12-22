const bcrypt = require("bcryptjs")

function measureLag(iteration) {
  const start = new Date()
  setTimeout(() => {
    const lag = new Date() - start
    console.log(`Loop ${iteration} took\t${lag} ms`)
    measureLag(iteration + 1) // Recurse
  })
}

measureLag(1)

function hash() {
  const start = new Date()
  const hashRounds = 10 // The more hash rounds the longer hashing takes
  bcrypt.hash("hash me!", hashRounds, () => {
    console.log(`--------- Hashing took ${new Date() - start} ms`)
    setTimeout(hash)
  });
}

hash()