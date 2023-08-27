import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
  documentId,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import config from "../config/firebase.config";
import { pick } from "lodash";
import express, { Router, Request, Response } from "express";
const router: Router = express.Router();

const app = initializeApp(config.firebaseConfig);

const db = getFirestore(app);

const fileRef = collection(db, "files");

router.get("/", async (req: Request, res: Response) => {
  try {
    const querySnapshot = await getDocs(fileRef);
    const records = [];
    querySnapshot.forEach((doc) => {
      records.push({ id: doc.id, ...doc.data() });
    });
    return res.send({
      files: records,
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const q = query(fileRef, where(documentId(), "==", id));

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return res.send({ file: null });
    }
    const fileDetails = querySnapshot.docs[0].data();
    res.send({
      file: fileDetails,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
