import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import getConfig from "next/config";


const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;

// Function that will be called to refresh authorization

