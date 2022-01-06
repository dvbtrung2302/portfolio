import { IField } from "typings";

export const FIELD_LIST: IField[] = [
  { name: "name", placeholder: "Your name", type: "text" },
  { name: "email", placeholder: "Email address", type: "email" },
  { name: "subject", placeholder: "Subject", type: "text" },
  { name: "message", placeholder: "Message", type: "textarea", rows: 5 },
]