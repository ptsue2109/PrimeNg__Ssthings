// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
  const BASE_API = 'http://localhost:1800';
export const environment = {
  authApi: `${BASE_API}`,
  firebase: {
    projectId: 'angular-ssthings',
    appId: '1:764616363470:web:48374eb0e71a7df1f76f9f',
    databaseURL: 'https://angular-ssthings-default-rtdb.firebaseio.com',
    storageBucket: 'angular-ssthings.appspot.com',
    locationId: 'asia-northeast3',
    apiKey: 'AIzaSyAIWQ8yF7NuVtlwGsJ9onPIusr72DAdZLg',
    authDomain: 'angular-ssthings.firebaseapp.com',
    messagingSenderId: '764616363470',
    measurementId: 'G-44GC7HJLW7',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
