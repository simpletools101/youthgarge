/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFunctions} from "firebase/functions";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSENGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASURMENT_IDMEASURMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const CLOUD_FUNCTIONS  = getFunctions(app)
export const AUTH = getAuth(app);
export const DB_FIRESTORE = getFirestore(app)


export const analytics = getAnalytics(app);
