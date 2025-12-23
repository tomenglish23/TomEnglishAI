import { PublicClientApplication } from '@azure/msal-browser';

export const msalConfig = {
  auth: {
    clientId: "c22f1f9f-2fea-4ae0-8712-de74de11582c",  // New one
    authority: "https://login.microsoftonline.com/2170cbe4-82bd-4d38-a575-f4812059e793",  // Same tenant
    redirectUri: window.location.origin
  }
};

export const msalInstance = new PublicClientApplication(msalConfig);