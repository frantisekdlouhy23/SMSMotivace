import { database } from './firebase/firebase-config';
import { ref, push } from 'firebase/database';

const handleSubmit = (formData) => {
  const usersRef = ref(database, 'users');
  push(usersRef, formData)
    .then(() => {
      console.log("Data uložená úspěšně!");
    })
    .catch((error) => {
      console.error("Chyba při ukládání dat:", error);
    });
};
