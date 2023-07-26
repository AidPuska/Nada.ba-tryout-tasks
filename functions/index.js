/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { setGlobalOptions } = require("firebase-functions/v2");
const admin = require('firebase-admin')
admin.initializeApp()

setGlobalOptions({maxInstances: 10})

exports.api = onRequest((req, res) => {
  switch(req.method) {
    case "GET":
      res.send('GEt request')
    case "POST":
      res.send(req.body)
    case "DELETE":
      res.send('DELETE REQ')
    case 'PUT':
      res.send('Put request')
  }
})

/* exports.maptodo = onRequest((req, res) => {
  switch(req.method) {
    case "GET":
      res.send('GEt request')
    case "POST":
      res.send(req.body)
    case "DELETE":
      res.send('DELETE REQ')
    case 'PUT':
      res.send('Put request')
  }
}) */

exports.getAll = onRequest(async (req, res) => {
  let data = [];
  const collRef = await admin.firestore().collection("locations").get();
  
  collRef.forEach(doc => {
    data.push(doc.data())
  })
  res.send(data)
})

exports.getByName = onRequest(async (req, res) => {
  const {name} = req.body;
  let data = [];
  const collRef = await admin.firestore().collection("locations").where('name', '==', name).get();
  
  collRef.forEach(doc => {
    data.push(doc.data())
  })
  res.send(data)
})

exports.deleteByName = onRequest(async (req, res) => {
  const {name} = req.body;
  const collRef = await admin.firestore().collection("locations").where('name', '==', name).get();
  
  collRef.forEach(doc => {
    doc.ref.delete()
  })
  res.send("Document deleted")
})

exports.create = onRequest(async (req, res) => {
  const {name, lat, lng, tags} = req.body;
  const collRef = admin.firestore().collection("locations").add({
    name: name,
    lng: lng,
    lat: lat,
    tags: [...tags]
  })

  res.send('doc created')
})