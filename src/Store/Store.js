import {configureStore} from '@reduxjs/toolkit';
import InternalSlice from './InternalSlice';
import ExternalSlice from './ExternalSlice';
export const store=configureStore({
    reducer:{
        internalData:InternalSlice,
        externalData:ExternalSlice
    }
})