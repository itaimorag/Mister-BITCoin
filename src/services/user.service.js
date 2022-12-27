import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'
export const userService = {
   getUser,
   signup,
   addMove
}
const STORAGE_KEY = 'loggedInUser'

function getUser(){
   const loggedInUser=storageService.load(STORAGE_KEY)
   if(!loggedInUser) return ''
    return loggedInUser
   
}

function signup(name){

   const user= {
      _id:utilService.makeId(),
      name,
      coins: 100,
      transactions: []
     }
     storageService.store(STORAGE_KEY,user)
     return user

}

function addMove(contact, amount){
   console.log(`contact = `, contact)
   console.log(`amount = `, amount)
const loggedInUser=storageService.load(STORAGE_KEY)
loggedInUser.transactions.unshift({
   _id:utilService.makeId(),
   toId: contact._id,
   to: contact.name,
   at: Date.now(), 
   amount,
  })
  loggedInUser.coins-=amount
  storageService.store(STORAGE_KEY,loggedInUser)
  return loggedInUser
}