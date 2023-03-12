import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

import { googleMapsInput } from "@sanity/google-maps-input";


export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: '11j4bpx0',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), 
    googleMapsInput({
    apiKey: "AIzaSyAXVicIAv2GBB8ukAC6H70eZOLcxJkAlvQ"
  })],

  schema: {
    types: schemaTypes,
  },
})
