// Import all schemas
import client from './client'
import session from './session'
import resource from './resource'
import intakeForm from './intakeForm'

// Blog schemas (your existing ones)
import post from './post'
import author from './author'
import category from './category'

export const schemaTypes = [
  // Portal schemas
  client,
  session,
  resource,
  intakeForm,

  // Blog schemas
  post,
  author,
  category
]
