module.exports.handler = (event, ctx, done) => {

  // in this case - the ID lives on the event
  // console.log(JSON.stringify(event, null, 2));

  done(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: {
        id: 1, name: 'clean up', status: 'open'
      }
    })
  })
}
