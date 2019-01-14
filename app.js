const user = { email: 'jdoe@gmail.com' }

try {
  //produce a reference error
  // myfunction();

  //produce a type error
  // null.myfunction();

  //produce URI error
  // decodeURI('%')

  if (!user.name) {
    // throw 'user has no name'
    throw new SyntaxError('user has no name')
  }
}
catch (err) {
  // console.log(err)
  // console.log(err.name)
  console.log(`Error: ${err.message}`)
  // console.log('instance of result:  ' + err instanceof TypeError)
  // console.log('instance of result:  ' + err instanceof ReferenceError)
}
finally {
  console.log('Finally runs regardless of the results')
}

console.log('Program continues...')
