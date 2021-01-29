/* eslint-disable no-template-curly-in-string */
import { SchemaOf, object, string } from "yup";

import { UsuarioLogin, UsuarioRegistro } from "../../generated/graphql";

export const usuarioLogin: SchemaOf<UsuarioLogin> = object({
  email: string()
    .email("El campo debe ser un email")
    .required("El campo es requerido"),
  clave: string().required("El campo es requerido"),
});

export const usuarioRegistro: SchemaOf<UsuarioRegistro> = object({
  email: string()
    .max(50, "Tamaño maximo ${max} caracteres")
    .email("El campo debe ser un email")
    .required("El campo es requerido"),
  clave: string()
    .max(50, "Tamaño maximo ${max} caracteres")
    .min(5, "Tamaño minimo ${min} caracteres")
    .required("El campo es requerido"),
});
