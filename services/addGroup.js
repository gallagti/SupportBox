//import { db } from '../config/db';
//import * as firebase from 'firebase';
import {db} from '../config/db';


//this.itemsRef = db.ref('/Groups')

export const addGroup =  (group) => {
  db.ref('/Groups').push({
    Name: group
  })
  /*
    db.ref('/Groups').push({
        Name: group
    });
    */
}
