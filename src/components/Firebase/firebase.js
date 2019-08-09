var firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: "https://shows-53767.firebaseio.com",
    projectId: process.env.projectId,
    storageBucket: "",
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
};

firebase.initializeApp(firebaseConfig);

const base = firebase;

export default base;
