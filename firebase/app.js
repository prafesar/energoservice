import Firebase from 'firebase/app';

import config from '../frontend/firebase.config';

export default !Firebase.apps.length ? Firebase.initializeApp(config) : Firebase.app();
