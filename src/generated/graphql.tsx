import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  adquisidorHello: Scalars['String'];
  adquisidor: Adquisidor;
  adquisidores: Array<Adquisidor>;
  bajaHello: Scalars['String'];
  bajas: Array<Baja>;
  baja: BajaR;
  departamentoHello: Scalars['String'];
  departamentos: Array<Departamento>;
  departamento: Departamento;
  depreciacionHello: Scalars['String'];
  depreciaciones: Array<Depreciacion>;
  depreciacion: DepreciacionR;
  empresaHello: Scalars['String'];
  empresas: Array<Empresa>;
  empresa: Empresa;
  grupoHello: Scalars['String'];
  grupos: Array<Grupo>;
  grupo: GrupoR;
  imagenHello: Scalars['String'];
  imagenes: Array<Imagen>;
  imagen: ImagenR;
  inventarioHello: Scalars['String'];
  inventarios: Array<Inventario>;
  inventario: InventarioR;
  itemHello: Scalars['String'];
  items: Array<Item>;
  item: ItemR;
  marcaHello: Scalars['String'];
  marcas: Array<Marca>;
  marca: MarcaR;
  monedaHello: Scalars['String'];
  monedas: Array<Moneda>;
  moneda: Moneda;
  qrHello: Scalars['String'];
  qrs: Array<Qr>;
  qr: QrR;
  responsableHello: Scalars['String'];
  responsable: Responsable;
  responsables: Array<Responsable>;
  rolHello: Scalars['String'];
  roles: Array<Rol>;
  rol: Rol;
  ubicacionHello: Scalars['String'];
  ubicaciones: Array<Ubicacion>;
  ubicacion: Ubicacion;
  usuarioHello: Scalars['String'];
  usuarios: Array<Usuario>;
  usuario: UsuarioR;
  usuarioYo: Yo;
};


export type QueryAdquisidorArgs = {
  id: Scalars['Int'];
};


export type QueryBajaArgs = {
  id: Scalars['Int'];
};


export type QueryDepartamentoArgs = {
  id: Scalars['Int'];
};


export type QueryDepreciacionesArgs = {
  options: DepreciacionPaginacion;
};


export type QueryDepreciacionArgs = {
  id: Scalars['Int'];
};


export type QueryEmpresaArgs = {
  id: Scalars['Int'];
};


export type QueryGrupoArgs = {
  id: Scalars['Int'];
};


export type QueryImagenArgs = {
  id: Scalars['Int'];
};


export type QueryInventarioArgs = {
  id: Scalars['Int'];
};


export type QueryItemArgs = {
  id: Scalars['Int'];
};


export type QueryMarcaArgs = {
  id: Scalars['Int'];
};


export type QueryMonedaArgs = {
  id: Scalars['Int'];
};


export type QueryQrArgs = {
  id: Scalars['Int'];
};


export type QueryResponsableArgs = {
  id: Scalars['Int'];
};


export type QueryRolArgs = {
  id: Scalars['Int'];
};


export type QueryUbicacionArgs = {
  id: Scalars['Int'];
};


export type QueryUsuarioArgs = {
  id: Scalars['Int'];
};

export type Adquisidor = {
  __typename?: 'Adquisidor';
  id: Scalars['Int'];
  nombre: Scalars['String'];
  codigo: Scalars['String'];
  eliminado: Scalars['Boolean'];
};

export type Baja = {
  __typename?: 'Baja';
  id: Scalars['Int'];
  fecha: Scalars['Int'];
  accion: Scalars['String'];
  eliminado: Scalars['Boolean'];
  adquisidorId: Scalars['Int'];
  responsableId: Scalars['Int'];
  monedaId: Scalars['Int'];
  inventarioId: Scalars['Int'];
};

export type BajaR = {
  __typename?: 'BajaR';
  id: Scalars['Int'];
  fecha: Scalars['Int'];
  accion: Scalars['String'];
  eliminado: Scalars['Boolean'];
  adquisidor: Adquisidor;
  responsable: Responsable;
  moneda: Moneda;
  inventario: InventarioR;
};

export type Responsable = {
  __typename?: 'Responsable';
  id: Scalars['Int'];
  nombre: Scalars['String'];
  apellidoP: Scalars['String'];
  apellidoM: Scalars['String'];
  codigo: Scalars['Int'];
  eliminado: Scalars['Boolean'];
};

export type Moneda = {
  __typename?: 'Moneda';
  id: Scalars['Int'];
  nombre: Scalars['String'];
  simbolo: Scalars['String'];
  codigo: Scalars['Int'];
  eliminado: Scalars['Boolean'];
};

export type InventarioR = {
  __typename?: 'InventarioR';
  id: Scalars['Int'];
  codigo: Scalars['Int'];
  fechaCompra: Scalars['Int'];
  fechaApertura: Scalars['Int'];
  cantidad: Scalars['Int'];
  dpa: Scalars['Float'];
  valor: Scalars['Float'];
  nroSerie: Scalars['String'];
  detalle: Scalars['String'];
  eliminado: Scalars['Boolean'];
  item: ItemR;
  departamento: Departamento;
  ubicacion: Ubicacion;
  empresa: Empresa;
  moneda: Moneda;
  responsable: Responsable;
};

export type ItemR = {
  __typename?: 'ItemR';
  id: Scalars['Int'];
  nombre: Scalars['String'];
  modelo: Scalars['String'];
  eliminado: Scalars['Boolean'];
  marca: MarcaR;
};

export type MarcaR = {
  __typename?: 'MarcaR';
  id: Scalars['Int'];
  nombre: Scalars['String'];
  eliminado: Scalars['Boolean'];
  grupo: GrupoR;
};

export type GrupoR = {
  __typename?: 'GrupoR';
  id: Scalars['Int'];
  nombre: Scalars['String'];
  codigo: Scalars['Int'];
  eliminado: Scalars['Boolean'];
  depreciacion: Depreciacion;
};

export type Depreciacion = {
  __typename?: 'Depreciacion';
  id: Scalars['Int'];
  tasa: Scalars['Float'];
  vidaUtil: Scalars['Int'];
  eliminado: Scalars['Boolean'];
};

export type Departamento = {
  __typename?: 'Departamento';
  id: Scalars['Int'];
  nombre: Scalars['String'];
  eliminado: Scalars['Boolean'];
};

export type Ubicacion = {
  __typename?: 'Ubicacion';
  id: Scalars['Int'];
  nombre: Scalars['String'];
  eliminado: Scalars['Boolean'];
};

export type Empresa = {
  __typename?: 'Empresa';
  id: Scalars['Int'];
  nombre: Scalars['String'];
  codigo: Scalars['Int'];
  eliminado: Scalars['Boolean'];
};

export type DepreciacionPaginacion = {
  limite: Scalars['Int'];
  cursor?: Maybe<Scalars['Int']>;
};

export type DepreciacionR = {
  __typename?: 'DepreciacionR';
  id: Scalars['Int'];
  tasa: Scalars['Float'];
  vidaUtil: Scalars['Int'];
  eliminado: Scalars['Boolean'];
};

export type Grupo = {
  __typename?: 'Grupo';
  id: Scalars['Int'];
  nombre: Scalars['String'];
  codigo: Scalars['Int'];
  eliminado: Scalars['Boolean'];
  depreciacionId: Scalars['Int'];
};

export type Imagen = {
  __typename?: 'Imagen';
  id: Scalars['Int'];
  descripcion: Scalars['String'];
  enlace: Scalars['String'];
  eliminado: Scalars['Boolean'];
  inventarioId: Scalars['Int'];
};

export type ImagenR = {
  __typename?: 'ImagenR';
  id: Scalars['Int'];
  descripcion: Scalars['String'];
  enlace: Scalars['String'];
  eliminado: Scalars['Boolean'];
  inventario: InventarioR;
};

export type Inventario = {
  __typename?: 'Inventario';
  id: Scalars['Int'];
  codigo: Scalars['Int'];
  fechaCompra: Scalars['Int'];
  fechaApertura: Scalars['Int'];
  cantidad: Scalars['Int'];
  dpa: Scalars['Float'];
  valor: Scalars['Float'];
  nroSerie: Scalars['String'];
  detalle: Scalars['String'];
  eliminado: Scalars['Boolean'];
  itemId: Scalars['Int'];
  departamentoId: Scalars['Int'];
  ubicacionId: Scalars['Int'];
  empresaId: Scalars['Int'];
  monedaId: Scalars['Int'];
  responsableId: Scalars['Int'];
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['Int'];
  nombre: Scalars['String'];
  modelo: Scalars['String'];
  eliminado: Scalars['Boolean'];
  marcaId: Scalars['Int'];
};

export type Marca = {
  __typename?: 'Marca';
  id: Scalars['Int'];
  nombre: Scalars['String'];
  eliminado: Scalars['Boolean'];
  grupoId: Scalars['Int'];
};

export type Qr = {
  __typename?: 'Qr';
  id: Scalars['Int'];
  enlace: Scalars['String'];
  eliminado: Scalars['Boolean'];
  inventarioId: Scalars['Int'];
};

export type QrR = {
  __typename?: 'QrR';
  id: Scalars['Int'];
  enlace: Scalars['String'];
  eliminado: Scalars['Boolean'];
  inventario: InventarioR;
};

export type Rol = {
  __typename?: 'Rol';
  id: Scalars['Int'];
  nombre: Scalars['String'];
  eliminado: Scalars['Boolean'];
};

export type Usuario = {
  __typename?: 'Usuario';
  id: Scalars['Int'];
  email: Scalars['String'];
  eliminado: Scalars['Boolean'];
  rolId: Scalars['Int'];
};

export type UsuarioR = {
  __typename?: 'UsuarioR';
  id: Scalars['Int'];
  email: Scalars['String'];
  eliminado: Scalars['Boolean'];
  rol: Rol;
};

export type Yo = {
  __typename?: 'Yo';
  email?: Maybe<Scalars['String']>;
  error?: Maybe<UsuarioRespuestaError>;
};

export type UsuarioRespuestaError = {
  __typename?: 'UsuarioRespuestaError';
  campo: Scalars['String'];
  mensaje: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  adquisidorCreate: Adquisidor;
  adquisidorUpdate: Scalars['Boolean'];
  adquisidorDelete: Scalars['Boolean'];
  bajaCreate: Baja;
  bajaUpdate: Scalars['Boolean'];
  bajaDelete: Scalars['Boolean'];
  departamentoCreate: Departamento;
  departamentoUpdate: Scalars['Boolean'];
  departamentoDelete: Scalars['Boolean'];
  depreciacionCreate: Depreciacion;
  depreciacionUpdate: Scalars['Boolean'];
  depreciacionDelete: Scalars['Boolean'];
  empresaCreate: Empresa;
  empresaUpdate: Scalars['Boolean'];
  empresaDelete: Scalars['Boolean'];
  grupoCreate: Grupo;
  grupoUpdate: Scalars['Boolean'];
  grupoDelete: Scalars['Boolean'];
  imagenCreate: Imagen;
  imagenUpdate: Scalars['Boolean'];
  imagenDelete: Scalars['Boolean'];
  inventarioCreate: Inventario;
  inventarioUpdate: Scalars['Boolean'];
  inventarioDelete: Scalars['Boolean'];
  itemCreate: Item;
  itemUpdate: Scalars['Boolean'];
  itemDelete: Scalars['Boolean'];
  marcaCreate: Marca;
  marcaUpdate: Scalars['Boolean'];
  marcaDelete: Scalars['Boolean'];
  monedaCreate: Moneda;
  monedaUpdate: Scalars['Boolean'];
  monedaDelete: Scalars['Boolean'];
  qrCreate: Qr;
  qrUpdate: Scalars['Boolean'];
  qrDelete: Scalars['Boolean'];
  responsableCreate: Responsable;
  responsableUpdate: Scalars['Boolean'];
  responsableDelete: Scalars['Boolean'];
  rolCreate: Rol;
  rolUpdate: Scalars['Boolean'];
  rolDelete: Scalars['Boolean'];
  ubicacionCreate: Ubicacion;
  ubicacionUpdate: Scalars['Boolean'];
  ubicacionDelete: Scalars['Boolean'];
  usuarioCreate: Usuario;
  usuarioUpdate: Scalars['Boolean'];
  usuarioDelete: Scalars['Boolean'];
  usuarioLogin: UsuarioRespuesta;
  usuarioRegistro: UsuarioRespuesta;
  usuarioRecuperarCuenta: UsuarioRespuesta;
  usuarioCambiarClave: Scalars['Boolean'];
};


export type MutationAdquisidorCreateArgs = {
  options: AdquisidorCreate;
};


export type MutationAdquisidorUpdateArgs = {
  options: AdquisidorUpdate;
  id: Scalars['Int'];
};


export type MutationAdquisidorDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationBajaCreateArgs = {
  options: BajaCreate;
};


export type MutationBajaUpdateArgs = {
  options: BajaUpdate;
  id: Scalars['Int'];
};


export type MutationBajaDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationDepartamentoCreateArgs = {
  options: DepartamentoCreate;
};


export type MutationDepartamentoUpdateArgs = {
  options: DepartamentoUpdate;
  id: Scalars['Int'];
};


export type MutationDepartamentoDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationDepreciacionCreateArgs = {
  options: DepreciacionCreate;
};


export type MutationDepreciacionUpdateArgs = {
  options: DepreciacionUpdate;
  id: Scalars['Int'];
};


export type MutationDepreciacionDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationEmpresaCreateArgs = {
  options: EmpresaCreate;
};


export type MutationEmpresaUpdateArgs = {
  options: EmpresaUpdate;
  id: Scalars['Int'];
};


export type MutationEmpresaDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationGrupoCreateArgs = {
  options: GrupoCreate;
};


export type MutationGrupoUpdateArgs = {
  options: GrupoUpdate;
  id: Scalars['Int'];
};


export type MutationGrupoDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationImagenCreateArgs = {
  options: ImagenCreate;
};


export type MutationImagenUpdateArgs = {
  options: ImagenUpdate;
  id: Scalars['Int'];
};


export type MutationImagenDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationInventarioCreateArgs = {
  options: InventarioCreate;
};


export type MutationInventarioUpdateArgs = {
  options: InventarioUpdate;
  id: Scalars['Int'];
};


export type MutationInventarioDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationItemCreateArgs = {
  options: ItemCreate;
};


export type MutationItemUpdateArgs = {
  options: ItemUpdate;
  id: Scalars['Int'];
};


export type MutationItemDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationMarcaCreateArgs = {
  options: MarcaCreate;
};


export type MutationMarcaUpdateArgs = {
  options: MarcaUpdate;
  id: Scalars['Int'];
};


export type MutationMarcaDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationMonedaCreateArgs = {
  options: MonedaCreate;
};


export type MutationMonedaUpdateArgs = {
  options: MonedaUpdate;
  id: Scalars['Int'];
};


export type MutationMonedaDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationQrCreateArgs = {
  options: QrCreate;
};


export type MutationQrUpdateArgs = {
  options: QrUpdate;
  id: Scalars['Int'];
};


export type MutationQrDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationResponsableCreateArgs = {
  options: ResponsableCreate;
};


export type MutationResponsableUpdateArgs = {
  options: ResponsableUpdate;
  id: Scalars['Int'];
};


export type MutationResponsableDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationRolCreateArgs = {
  options: RolCreate;
};


export type MutationRolUpdateArgs = {
  options: RolUpdate;
  id: Scalars['Int'];
};


export type MutationRolDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationUbicacionCreateArgs = {
  options: UbicacionCreate;
};


export type MutationUbicacionUpdateArgs = {
  options: UbicacionUpdate;
  id: Scalars['Int'];
};


export type MutationUbicacionDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationUsuarioCreateArgs = {
  options: UsuarioCreate;
};


export type MutationUsuarioUpdateArgs = {
  options: UsuarioUpdate;
  id: Scalars['Int'];
};


export type MutationUsuarioDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationUsuarioLoginArgs = {
  options: UsuarioLogin;
};


export type MutationUsuarioRegistroArgs = {
  options: UsuarioRegistro;
};


export type MutationUsuarioRecuperarCuentaArgs = {
  options: UsuarioRecuperar;
};


export type MutationUsuarioCambiarClaveArgs = {
  clave: Scalars['String'];
  token: Scalars['String'];
};

export type AdquisidorCreate = {
  nombre?: Maybe<Scalars['String']>;
  codigo?: Maybe<Scalars['Int']>;
};

export type AdquisidorUpdate = {
  nombre?: Maybe<Scalars['String']>;
  codigo?: Maybe<Scalars['Int']>;
};

export type BajaCreate = {
  fecha: Scalars['Int'];
  accion: Scalars['String'];
  adquisidorId: Scalars['Int'];
  responsableId: Scalars['Int'];
  monedaId: Scalars['Int'];
  inventarioId: Scalars['Int'];
};

export type BajaUpdate = {
  fecha?: Maybe<Scalars['Int']>;
  accion?: Maybe<Scalars['String']>;
  adquisidorId?: Maybe<Scalars['Int']>;
  responsableId?: Maybe<Scalars['Int']>;
  monedaId?: Maybe<Scalars['Int']>;
  inventarioId?: Maybe<Scalars['Int']>;
};

export type DepartamentoCreate = {
  nombre: Scalars['String'];
};

export type DepartamentoUpdate = {
  nombre?: Maybe<Scalars['String']>;
};

export type DepreciacionCreate = {
  tasa: Scalars['Float'];
  vidaUtil: Scalars['Int'];
};

export type DepreciacionUpdate = {
  tasa?: Maybe<Scalars['Float']>;
  vidaUtil?: Maybe<Scalars['Int']>;
};

export type EmpresaCreate = {
  nombre: Scalars['String'];
  codigo: Scalars['Int'];
};

export type EmpresaUpdate = {
  nombre?: Maybe<Scalars['String']>;
  codigo?: Maybe<Scalars['Int']>;
};

export type GrupoCreate = {
  nombre: Scalars['String'];
  codigo: Scalars['Int'];
  depreciacionId: Scalars['Int'];
};

export type GrupoUpdate = {
  nombre?: Maybe<Scalars['String']>;
  codigo?: Maybe<Scalars['Int']>;
  depreciacionId?: Maybe<Scalars['Int']>;
};

export type ImagenCreate = {
  descripcion: Scalars['String'];
  enlace: Scalars['String'];
  inventarioId: Scalars['Int'];
};

export type ImagenUpdate = {
  descripcion?: Maybe<Scalars['String']>;
  enlace?: Maybe<Scalars['String']>;
  inventarioId?: Maybe<Scalars['Int']>;
};

export type InventarioCreate = {
  codigo: Scalars['Int'];
  fechaCompra: Scalars['Int'];
  fechaApertura: Scalars['Int'];
  cantidad: Scalars['Int'];
  dpa: Scalars['Float'];
  valor: Scalars['Float'];
  nroSerie: Scalars['String'];
  detalle: Scalars['String'];
  itemId: Scalars['Int'];
  departamentoId: Scalars['Int'];
  ubicacionId: Scalars['Int'];
  empresaId: Scalars['Int'];
  monedaId: Scalars['Int'];
  responsableId: Scalars['Int'];
};

export type InventarioUpdate = {
  codigo?: Maybe<Scalars['Int']>;
  fechaCompra?: Maybe<Scalars['Int']>;
  fechaApertura?: Maybe<Scalars['Int']>;
  cantidad?: Maybe<Scalars['Int']>;
  dpa?: Maybe<Scalars['Float']>;
  valor?: Maybe<Scalars['Float']>;
  nroSerie?: Maybe<Scalars['String']>;
  detalle?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['Int']>;
  departamentoId?: Maybe<Scalars['Int']>;
  ubicacionId?: Maybe<Scalars['Int']>;
  empresaId?: Maybe<Scalars['Int']>;
  monedaId?: Maybe<Scalars['Int']>;
  responsableId?: Maybe<Scalars['Int']>;
};

export type ItemCreate = {
  nombre: Scalars['String'];
  modelo: Scalars['String'];
  marcaId: Scalars['Int'];
};

export type ItemUpdate = {
  nombre?: Maybe<Scalars['String']>;
  modelo?: Maybe<Scalars['String']>;
  marcaId?: Maybe<Scalars['Int']>;
};

export type MarcaCreate = {
  nombre: Scalars['String'];
  grupoId: Scalars['Int'];
};

export type MarcaUpdate = {
  nombre?: Maybe<Scalars['String']>;
  grupoId?: Maybe<Scalars['Int']>;
};

export type MonedaCreate = {
  nombre: Scalars['String'];
  simbolo: Scalars['String'];
  codigo: Scalars['Int'];
};

export type MonedaUpdate = {
  nombre?: Maybe<Scalars['String']>;
  simbolo?: Maybe<Scalars['String']>;
  codigo?: Maybe<Scalars['Int']>;
};

export type QrCreate = {
  enlace: Scalars['String'];
  inventarioId: Scalars['Int'];
};

export type QrUpdate = {
  enlace?: Maybe<Scalars['String']>;
  inventarioId?: Maybe<Scalars['Int']>;
};

export type ResponsableCreate = {
  nombre: Scalars['String'];
  apellidoP: Scalars['String'];
  apellidoM: Scalars['String'];
  codigo: Scalars['Int'];
};

export type ResponsableUpdate = {
  nombre?: Maybe<Scalars['String']>;
  apellidoP?: Maybe<Scalars['String']>;
  apellidoM?: Maybe<Scalars['String']>;
  codigo?: Maybe<Scalars['Int']>;
};

export type RolCreate = {
  nombre: Scalars['String'];
};

export type RolUpdate = {
  nombre?: Maybe<Scalars['String']>;
};

export type UbicacionCreate = {
  nombre: Scalars['String'];
};

export type UbicacionUpdate = {
  nombre?: Maybe<Scalars['String']>;
};

export type UsuarioCreate = {
  email: Scalars['String'];
  clave: Scalars['String'];
  rolId: Scalars['Int'];
};

export type UsuarioUpdate = {
  email?: Maybe<Scalars['String']>;
  clave?: Maybe<Scalars['String']>;
  rolId?: Maybe<Scalars['Int']>;
};

export type UsuarioRespuesta = {
  __typename?: 'UsuarioRespuesta';
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  errores?: Maybe<Array<UsuarioRespuestaError>>;
};

export type UsuarioLogin = {
  email: Scalars['String'];
  clave: Scalars['String'];
};

export type UsuarioRegistro = {
  email: Scalars['String'];
  clave: Scalars['String'];
};

export type UsuarioRecuperar = {
  email: Scalars['String'];
};

export type UsuarioLoginMutationVariables = Exact<{
  options: UsuarioLogin;
}>;


export type UsuarioLoginMutation = (
  { __typename?: 'Mutation' }
  & { usuarioLogin: (
    { __typename?: 'UsuarioRespuesta' }
    & Pick<UsuarioRespuesta, 'id' | 'email'>
    & { errores?: Maybe<Array<(
      { __typename?: 'UsuarioRespuestaError' }
      & Pick<UsuarioRespuestaError, 'campo' | 'mensaje'>
    )>> }
  ) }
);

export type UsuarioRegistroMutationVariables = Exact<{
  options: UsuarioRegistro;
}>;


export type UsuarioRegistroMutation = (
  { __typename?: 'Mutation' }
  & { usuarioRegistro: (
    { __typename?: 'UsuarioRespuesta' }
    & Pick<UsuarioRespuesta, 'id' | 'email'>
    & { errores?: Maybe<Array<(
      { __typename?: 'UsuarioRespuestaError' }
      & Pick<UsuarioRespuestaError, 'campo' | 'mensaje'>
    )>> }
  ) }
);

export type MonedasQueryVariables = Exact<{ [key: string]: never; }>;


export type MonedasQuery = (
  { __typename?: 'Query' }
  & { monedas: Array<(
    { __typename?: 'Moneda' }
    & Pick<Moneda, 'id' | 'nombre' | 'simbolo' | 'codigo' | 'eliminado'>
  )> }
);

export type UsuarioYoQueryVariables = Exact<{ [key: string]: never; }>;


export type UsuarioYoQuery = (
  { __typename?: 'Query' }
  & { usuarioYo: (
    { __typename?: 'Yo' }
    & Pick<Yo, 'email'>
    & { error?: Maybe<(
      { __typename?: 'UsuarioRespuestaError' }
      & Pick<UsuarioRespuestaError, 'campo' | 'mensaje'>
    )> }
  ) }
);


export const UsuarioLoginDocument = gql`
    mutation usuarioLogin($options: UsuarioLogin!) {
  usuarioLogin(options: $options) {
    id
    email
    errores {
      campo
      mensaje
    }
  }
}
    `;
export type UsuarioLoginMutationFn = Apollo.MutationFunction<UsuarioLoginMutation, UsuarioLoginMutationVariables>;

/**
 * __useUsuarioLoginMutation__
 *
 * To run a mutation, you first call `useUsuarioLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUsuarioLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [usuarioLoginMutation, { data, loading, error }] = useUsuarioLoginMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useUsuarioLoginMutation(baseOptions?: Apollo.MutationHookOptions<UsuarioLoginMutation, UsuarioLoginMutationVariables>) {
        return Apollo.useMutation<UsuarioLoginMutation, UsuarioLoginMutationVariables>(UsuarioLoginDocument, baseOptions);
      }
export type UsuarioLoginMutationHookResult = ReturnType<typeof useUsuarioLoginMutation>;
export type UsuarioLoginMutationResult = Apollo.MutationResult<UsuarioLoginMutation>;
export type UsuarioLoginMutationOptions = Apollo.BaseMutationOptions<UsuarioLoginMutation, UsuarioLoginMutationVariables>;
export const UsuarioRegistroDocument = gql`
    mutation usuarioRegistro($options: UsuarioRegistro!) {
  usuarioRegistro(options: $options) {
    id
    email
    errores {
      campo
      mensaje
    }
  }
}
    `;
export type UsuarioRegistroMutationFn = Apollo.MutationFunction<UsuarioRegistroMutation, UsuarioRegistroMutationVariables>;

/**
 * __useUsuarioRegistroMutation__
 *
 * To run a mutation, you first call `useUsuarioRegistroMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUsuarioRegistroMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [usuarioRegistroMutation, { data, loading, error }] = useUsuarioRegistroMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useUsuarioRegistroMutation(baseOptions?: Apollo.MutationHookOptions<UsuarioRegistroMutation, UsuarioRegistroMutationVariables>) {
        return Apollo.useMutation<UsuarioRegistroMutation, UsuarioRegistroMutationVariables>(UsuarioRegistroDocument, baseOptions);
      }
export type UsuarioRegistroMutationHookResult = ReturnType<typeof useUsuarioRegistroMutation>;
export type UsuarioRegistroMutationResult = Apollo.MutationResult<UsuarioRegistroMutation>;
export type UsuarioRegistroMutationOptions = Apollo.BaseMutationOptions<UsuarioRegistroMutation, UsuarioRegistroMutationVariables>;
export const MonedasDocument = gql`
    query monedas {
  monedas {
    id
    nombre
    simbolo
    codigo
    eliminado
  }
}
    `;

/**
 * __useMonedasQuery__
 *
 * To run a query within a React component, call `useMonedasQuery` and pass it any options that fit your needs.
 * When your component renders, `useMonedasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMonedasQuery({
 *   variables: {
 *   },
 * });
 */
export function useMonedasQuery(baseOptions?: Apollo.QueryHookOptions<MonedasQuery, MonedasQueryVariables>) {
        return Apollo.useQuery<MonedasQuery, MonedasQueryVariables>(MonedasDocument, baseOptions);
      }
export function useMonedasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MonedasQuery, MonedasQueryVariables>) {
          return Apollo.useLazyQuery<MonedasQuery, MonedasQueryVariables>(MonedasDocument, baseOptions);
        }
export type MonedasQueryHookResult = ReturnType<typeof useMonedasQuery>;
export type MonedasLazyQueryHookResult = ReturnType<typeof useMonedasLazyQuery>;
export type MonedasQueryResult = Apollo.QueryResult<MonedasQuery, MonedasQueryVariables>;
export const UsuarioYoDocument = gql`
    query usuarioYo {
  usuarioYo {
    email
    error {
      campo
      mensaje
    }
  }
}
    `;

/**
 * __useUsuarioYoQuery__
 *
 * To run a query within a React component, call `useUsuarioYoQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsuarioYoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsuarioYoQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsuarioYoQuery(baseOptions?: Apollo.QueryHookOptions<UsuarioYoQuery, UsuarioYoQueryVariables>) {
        return Apollo.useQuery<UsuarioYoQuery, UsuarioYoQueryVariables>(UsuarioYoDocument, baseOptions);
      }
export function useUsuarioYoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsuarioYoQuery, UsuarioYoQueryVariables>) {
          return Apollo.useLazyQuery<UsuarioYoQuery, UsuarioYoQueryVariables>(UsuarioYoDocument, baseOptions);
        }
export type UsuarioYoQueryHookResult = ReturnType<typeof useUsuarioYoQuery>;
export type UsuarioYoLazyQueryHookResult = ReturnType<typeof useUsuarioYoLazyQuery>;
export type UsuarioYoQueryResult = Apollo.QueryResult<UsuarioYoQuery, UsuarioYoQueryVariables>;