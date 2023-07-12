import yargs from 'yargs';
import contactsServices from './contacts.js';

const { argv } = yargs(process.argv);

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
         const contacts = await contactsServices.listContacts();
         return console.log(contacts);
    case 'get':
         const contactById = await contactsServices.getContactById(id);
         return console.log(contactById);
    case 'add':
         const newContact = await contactsServices.addContact({name, email, phone});
         return console.log(newContact);      
    case 'remove':
         const removedContact = await contactsServices.removeContact(id);
         return console.log(removedContact);      
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);