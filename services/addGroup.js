//import {db} from '../config/db';
import Fire from "../config/newdb";

export const addGroup =  (group) => {
  db.ref('/Groups').push({
    Name: group
  })
}
