
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AttendanceEvent
 * 
 */
export type AttendanceEvent = $Result.DefaultSelection<Prisma.$AttendanceEventPayload>
/**
 * Model AttendanceEventOverride
 * 
 */
export type AttendanceEventOverride = $Result.DefaultSelection<Prisma.$AttendanceEventOverridePayload>
/**
 * Model AttendanceMonthLock
 * 
 */
export type AttendanceMonthLock = $Result.DefaultSelection<Prisma.$AttendanceMonthLockPayload>
/**
 * Model AttendanceAuditLog
 * 
 */
export type AttendanceAuditLog = $Result.DefaultSelection<Prisma.$AttendanceAuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AttendanceEventType: {
  FULL_LEAVE: 'FULL_LEAVE',
  HALF_LEAVE_AM: 'HALF_LEAVE_AM',
  HALF_LEAVE_PM: 'HALF_LEAVE_PM',
  WFH: 'WFH',
  VOLUNTARY_WORK: 'VOLUNTARY_WORK'
};

export type AttendanceEventType = (typeof AttendanceEventType)[keyof typeof AttendanceEventType]


export const AttendanceStatus: {
  ACTIVE: 'ACTIVE',
  CANCELLED: 'CANCELLED'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]


export const AttendanceOverrideAction: {
  CANCEL: 'CANCEL',
  MODIFY: 'MODIFY'
};

export type AttendanceOverrideAction = (typeof AttendanceOverrideAction)[keyof typeof AttendanceOverrideAction]

}

export type AttendanceEventType = $Enums.AttendanceEventType

export const AttendanceEventType: typeof $Enums.AttendanceEventType

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

export type AttendanceOverrideAction = $Enums.AttendanceOverrideAction

export const AttendanceOverrideAction: typeof $Enums.AttendanceOverrideAction

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AttendanceEvents
 * const attendanceEvents = await prisma.attendanceEvent.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AttendanceEvents
   * const attendanceEvents = await prisma.attendanceEvent.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.attendanceEvent`: Exposes CRUD operations for the **AttendanceEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttendanceEvents
    * const attendanceEvents = await prisma.attendanceEvent.findMany()
    * ```
    */
  get attendanceEvent(): Prisma.AttendanceEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendanceEventOverride`: Exposes CRUD operations for the **AttendanceEventOverride** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttendanceEventOverrides
    * const attendanceEventOverrides = await prisma.attendanceEventOverride.findMany()
    * ```
    */
  get attendanceEventOverride(): Prisma.AttendanceEventOverrideDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendanceMonthLock`: Exposes CRUD operations for the **AttendanceMonthLock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttendanceMonthLocks
    * const attendanceMonthLocks = await prisma.attendanceMonthLock.findMany()
    * ```
    */
  get attendanceMonthLock(): Prisma.AttendanceMonthLockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendanceAuditLog`: Exposes CRUD operations for the **AttendanceAuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttendanceAuditLogs
    * const attendanceAuditLogs = await prisma.attendanceAuditLog.findMany()
    * ```
    */
  get attendanceAuditLog(): Prisma.AttendanceAuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AttendanceEvent: 'AttendanceEvent',
    AttendanceEventOverride: 'AttendanceEventOverride',
    AttendanceMonthLock: 'AttendanceMonthLock',
    AttendanceAuditLog: 'AttendanceAuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "attendanceEvent" | "attendanceEventOverride" | "attendanceMonthLock" | "attendanceAuditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AttendanceEvent: {
        payload: Prisma.$AttendanceEventPayload<ExtArgs>
        fields: Prisma.AttendanceEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventPayload>
          }
          findFirst: {
            args: Prisma.AttendanceEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventPayload>
          }
          findMany: {
            args: Prisma.AttendanceEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventPayload>[]
          }
          create: {
            args: Prisma.AttendanceEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventPayload>
          }
          createMany: {
            args: Prisma.AttendanceEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventPayload>[]
          }
          delete: {
            args: Prisma.AttendanceEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventPayload>
          }
          update: {
            args: Prisma.AttendanceEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventPayload>
          }
          deleteMany: {
            args: Prisma.AttendanceEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventPayload>[]
          }
          upsert: {
            args: Prisma.AttendanceEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventPayload>
          }
          aggregate: {
            args: Prisma.AttendanceEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendanceEvent>
          }
          groupBy: {
            args: Prisma.AttendanceEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceEventCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceEventCountAggregateOutputType> | number
          }
        }
      }
      AttendanceEventOverride: {
        payload: Prisma.$AttendanceEventOverridePayload<ExtArgs>
        fields: Prisma.AttendanceEventOverrideFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceEventOverrideFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventOverridePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceEventOverrideFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventOverridePayload>
          }
          findFirst: {
            args: Prisma.AttendanceEventOverrideFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventOverridePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceEventOverrideFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventOverridePayload>
          }
          findMany: {
            args: Prisma.AttendanceEventOverrideFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventOverridePayload>[]
          }
          create: {
            args: Prisma.AttendanceEventOverrideCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventOverridePayload>
          }
          createMany: {
            args: Prisma.AttendanceEventOverrideCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceEventOverrideCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventOverridePayload>[]
          }
          delete: {
            args: Prisma.AttendanceEventOverrideDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventOverridePayload>
          }
          update: {
            args: Prisma.AttendanceEventOverrideUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventOverridePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceEventOverrideDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceEventOverrideUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceEventOverrideUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventOverridePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceEventOverrideUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceEventOverridePayload>
          }
          aggregate: {
            args: Prisma.AttendanceEventOverrideAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendanceEventOverride>
          }
          groupBy: {
            args: Prisma.AttendanceEventOverrideGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceEventOverrideGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceEventOverrideCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceEventOverrideCountAggregateOutputType> | number
          }
        }
      }
      AttendanceMonthLock: {
        payload: Prisma.$AttendanceMonthLockPayload<ExtArgs>
        fields: Prisma.AttendanceMonthLockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceMonthLockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceMonthLockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceMonthLockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceMonthLockPayload>
          }
          findFirst: {
            args: Prisma.AttendanceMonthLockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceMonthLockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceMonthLockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceMonthLockPayload>
          }
          findMany: {
            args: Prisma.AttendanceMonthLockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceMonthLockPayload>[]
          }
          create: {
            args: Prisma.AttendanceMonthLockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceMonthLockPayload>
          }
          createMany: {
            args: Prisma.AttendanceMonthLockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceMonthLockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceMonthLockPayload>[]
          }
          delete: {
            args: Prisma.AttendanceMonthLockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceMonthLockPayload>
          }
          update: {
            args: Prisma.AttendanceMonthLockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceMonthLockPayload>
          }
          deleteMany: {
            args: Prisma.AttendanceMonthLockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceMonthLockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceMonthLockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceMonthLockPayload>[]
          }
          upsert: {
            args: Prisma.AttendanceMonthLockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceMonthLockPayload>
          }
          aggregate: {
            args: Prisma.AttendanceMonthLockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendanceMonthLock>
          }
          groupBy: {
            args: Prisma.AttendanceMonthLockGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceMonthLockGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceMonthLockCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceMonthLockCountAggregateOutputType> | number
          }
        }
      }
      AttendanceAuditLog: {
        payload: Prisma.$AttendanceAuditLogPayload<ExtArgs>
        fields: Prisma.AttendanceAuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceAuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceAuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceAuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceAuditLogPayload>
          }
          findFirst: {
            args: Prisma.AttendanceAuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceAuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceAuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceAuditLogPayload>
          }
          findMany: {
            args: Prisma.AttendanceAuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceAuditLogPayload>[]
          }
          create: {
            args: Prisma.AttendanceAuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceAuditLogPayload>
          }
          createMany: {
            args: Prisma.AttendanceAuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceAuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceAuditLogPayload>[]
          }
          delete: {
            args: Prisma.AttendanceAuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceAuditLogPayload>
          }
          update: {
            args: Prisma.AttendanceAuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceAuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AttendanceAuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceAuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceAuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceAuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AttendanceAuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceAuditLogPayload>
          }
          aggregate: {
            args: Prisma.AttendanceAuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendanceAuditLog>
          }
          groupBy: {
            args: Prisma.AttendanceAuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceAuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceAuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceAuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    attendanceEvent?: AttendanceEventOmit
    attendanceEventOverride?: AttendanceEventOverrideOmit
    attendanceMonthLock?: AttendanceMonthLockOmit
    attendanceAuditLog?: AttendanceAuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AttendanceEventCountOutputType
   */

  export type AttendanceEventCountOutputType = {
    overridesOriginal: number
    overridesNew: number
  }

  export type AttendanceEventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    overridesOriginal?: boolean | AttendanceEventCountOutputTypeCountOverridesOriginalArgs
    overridesNew?: boolean | AttendanceEventCountOutputTypeCountOverridesNewArgs
  }

  // Custom InputTypes
  /**
   * AttendanceEventCountOutputType without action
   */
  export type AttendanceEventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEventCountOutputType
     */
    select?: AttendanceEventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttendanceEventCountOutputType without action
   */
  export type AttendanceEventCountOutputTypeCountOverridesOriginalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceEventOverrideWhereInput
  }

  /**
   * AttendanceEventCountOutputType without action
   */
  export type AttendanceEventCountOutputTypeCountOverridesNewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceEventOverrideWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AttendanceEvent
   */

  export type AggregateAttendanceEvent = {
    _count: AttendanceEventCountAggregateOutputType | null
    _min: AttendanceEventMinAggregateOutputType | null
    _max: AttendanceEventMaxAggregateOutputType | null
  }

  export type AttendanceEventMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    date: Date | null
    eventType: $Enums.AttendanceEventType | null
    status: $Enums.AttendanceStatus | null
    reason: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type AttendanceEventMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    date: Date | null
    eventType: $Enums.AttendanceEventType | null
    status: $Enums.AttendanceStatus | null
    reason: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type AttendanceEventCountAggregateOutputType = {
    id: number
    employeeId: number
    date: number
    eventType: number
    status: number
    reason: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type AttendanceEventMinAggregateInputType = {
    id?: true
    employeeId?: true
    date?: true
    eventType?: true
    status?: true
    reason?: true
    createdBy?: true
    createdAt?: true
  }

  export type AttendanceEventMaxAggregateInputType = {
    id?: true
    employeeId?: true
    date?: true
    eventType?: true
    status?: true
    reason?: true
    createdBy?: true
    createdAt?: true
  }

  export type AttendanceEventCountAggregateInputType = {
    id?: true
    employeeId?: true
    date?: true
    eventType?: true
    status?: true
    reason?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type AttendanceEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceEvent to aggregate.
     */
    where?: AttendanceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceEvents to fetch.
     */
    orderBy?: AttendanceEventOrderByWithRelationInput | AttendanceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttendanceEvents
    **/
    _count?: true | AttendanceEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceEventMaxAggregateInputType
  }

  export type GetAttendanceEventAggregateType<T extends AttendanceEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendanceEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendanceEvent[P]>
      : GetScalarType<T[P], AggregateAttendanceEvent[P]>
  }




  export type AttendanceEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceEventWhereInput
    orderBy?: AttendanceEventOrderByWithAggregationInput | AttendanceEventOrderByWithAggregationInput[]
    by: AttendanceEventScalarFieldEnum[] | AttendanceEventScalarFieldEnum
    having?: AttendanceEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceEventCountAggregateInputType | true
    _min?: AttendanceEventMinAggregateInputType
    _max?: AttendanceEventMaxAggregateInputType
  }

  export type AttendanceEventGroupByOutputType = {
    id: string
    employeeId: string
    date: Date
    eventType: $Enums.AttendanceEventType
    status: $Enums.AttendanceStatus
    reason: string | null
    createdBy: string
    createdAt: Date
    _count: AttendanceEventCountAggregateOutputType | null
    _min: AttendanceEventMinAggregateOutputType | null
    _max: AttendanceEventMaxAggregateOutputType | null
  }

  type GetAttendanceEventGroupByPayload<T extends AttendanceEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceEventGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceEventGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    date?: boolean
    eventType?: boolean
    status?: boolean
    reason?: boolean
    createdBy?: boolean
    createdAt?: boolean
    overridesOriginal?: boolean | AttendanceEvent$overridesOriginalArgs<ExtArgs>
    overridesNew?: boolean | AttendanceEvent$overridesNewArgs<ExtArgs>
    _count?: boolean | AttendanceEventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceEvent"]>

  export type AttendanceEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    date?: boolean
    eventType?: boolean
    status?: boolean
    reason?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["attendanceEvent"]>

  export type AttendanceEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    date?: boolean
    eventType?: boolean
    status?: boolean
    reason?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["attendanceEvent"]>

  export type AttendanceEventSelectScalar = {
    id?: boolean
    employeeId?: boolean
    date?: boolean
    eventType?: boolean
    status?: boolean
    reason?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type AttendanceEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "date" | "eventType" | "status" | "reason" | "createdBy" | "createdAt", ExtArgs["result"]["attendanceEvent"]>
  export type AttendanceEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    overridesOriginal?: boolean | AttendanceEvent$overridesOriginalArgs<ExtArgs>
    overridesNew?: boolean | AttendanceEvent$overridesNewArgs<ExtArgs>
    _count?: boolean | AttendanceEventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttendanceEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AttendanceEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AttendanceEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttendanceEvent"
    objects: {
      overridesOriginal: Prisma.$AttendanceEventOverridePayload<ExtArgs>[]
      overridesNew: Prisma.$AttendanceEventOverridePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      date: Date
      eventType: $Enums.AttendanceEventType
      status: $Enums.AttendanceStatus
      reason: string | null
      createdBy: string
      createdAt: Date
    }, ExtArgs["result"]["attendanceEvent"]>
    composites: {}
  }

  type AttendanceEventGetPayload<S extends boolean | null | undefined | AttendanceEventDefaultArgs> = $Result.GetResult<Prisma.$AttendanceEventPayload, S>

  type AttendanceEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceEventCountAggregateInputType | true
    }

  export interface AttendanceEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttendanceEvent'], meta: { name: 'AttendanceEvent' } }
    /**
     * Find zero or one AttendanceEvent that matches the filter.
     * @param {AttendanceEventFindUniqueArgs} args - Arguments to find a AttendanceEvent
     * @example
     * // Get one AttendanceEvent
     * const attendanceEvent = await prisma.attendanceEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceEventFindUniqueArgs>(args: SelectSubset<T, AttendanceEventFindUniqueArgs<ExtArgs>>): Prisma__AttendanceEventClient<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttendanceEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceEventFindUniqueOrThrowArgs} args - Arguments to find a AttendanceEvent
     * @example
     * // Get one AttendanceEvent
     * const attendanceEvent = await prisma.attendanceEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceEventClient<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventFindFirstArgs} args - Arguments to find a AttendanceEvent
     * @example
     * // Get one AttendanceEvent
     * const attendanceEvent = await prisma.attendanceEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceEventFindFirstArgs>(args?: SelectSubset<T, AttendanceEventFindFirstArgs<ExtArgs>>): Prisma__AttendanceEventClient<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventFindFirstOrThrowArgs} args - Arguments to find a AttendanceEvent
     * @example
     * // Get one AttendanceEvent
     * const attendanceEvent = await prisma.attendanceEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceEventClient<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttendanceEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceEvents
     * const attendanceEvents = await prisma.attendanceEvent.findMany()
     * 
     * // Get first 10 AttendanceEvents
     * const attendanceEvents = await prisma.attendanceEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceEventWithIdOnly = await prisma.attendanceEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceEventFindManyArgs>(args?: SelectSubset<T, AttendanceEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttendanceEvent.
     * @param {AttendanceEventCreateArgs} args - Arguments to create a AttendanceEvent.
     * @example
     * // Create one AttendanceEvent
     * const AttendanceEvent = await prisma.attendanceEvent.create({
     *   data: {
     *     // ... data to create a AttendanceEvent
     *   }
     * })
     * 
     */
    create<T extends AttendanceEventCreateArgs>(args: SelectSubset<T, AttendanceEventCreateArgs<ExtArgs>>): Prisma__AttendanceEventClient<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttendanceEvents.
     * @param {AttendanceEventCreateManyArgs} args - Arguments to create many AttendanceEvents.
     * @example
     * // Create many AttendanceEvents
     * const attendanceEvent = await prisma.attendanceEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceEventCreateManyArgs>(args?: SelectSubset<T, AttendanceEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttendanceEvents and returns the data saved in the database.
     * @param {AttendanceEventCreateManyAndReturnArgs} args - Arguments to create many AttendanceEvents.
     * @example
     * // Create many AttendanceEvents
     * const attendanceEvent = await prisma.attendanceEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttendanceEvents and only return the `id`
     * const attendanceEventWithIdOnly = await prisma.attendanceEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceEventCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttendanceEvent.
     * @param {AttendanceEventDeleteArgs} args - Arguments to delete one AttendanceEvent.
     * @example
     * // Delete one AttendanceEvent
     * const AttendanceEvent = await prisma.attendanceEvent.delete({
     *   where: {
     *     // ... filter to delete one AttendanceEvent
     *   }
     * })
     * 
     */
    delete<T extends AttendanceEventDeleteArgs>(args: SelectSubset<T, AttendanceEventDeleteArgs<ExtArgs>>): Prisma__AttendanceEventClient<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttendanceEvent.
     * @param {AttendanceEventUpdateArgs} args - Arguments to update one AttendanceEvent.
     * @example
     * // Update one AttendanceEvent
     * const attendanceEvent = await prisma.attendanceEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceEventUpdateArgs>(args: SelectSubset<T, AttendanceEventUpdateArgs<ExtArgs>>): Prisma__AttendanceEventClient<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttendanceEvents.
     * @param {AttendanceEventDeleteManyArgs} args - Arguments to filter AttendanceEvents to delete.
     * @example
     * // Delete a few AttendanceEvents
     * const { count } = await prisma.attendanceEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceEventDeleteManyArgs>(args?: SelectSubset<T, AttendanceEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceEvents
     * const attendanceEvent = await prisma.attendanceEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceEventUpdateManyArgs>(args: SelectSubset<T, AttendanceEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceEvents and returns the data updated in the database.
     * @param {AttendanceEventUpdateManyAndReturnArgs} args - Arguments to update many AttendanceEvents.
     * @example
     * // Update many AttendanceEvents
     * const attendanceEvent = await prisma.attendanceEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttendanceEvents and only return the `id`
     * const attendanceEventWithIdOnly = await prisma.attendanceEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceEventUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttendanceEvent.
     * @param {AttendanceEventUpsertArgs} args - Arguments to update or create a AttendanceEvent.
     * @example
     * // Update or create a AttendanceEvent
     * const attendanceEvent = await prisma.attendanceEvent.upsert({
     *   create: {
     *     // ... data to create a AttendanceEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceEvent we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceEventUpsertArgs>(args: SelectSubset<T, AttendanceEventUpsertArgs<ExtArgs>>): Prisma__AttendanceEventClient<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttendanceEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventCountArgs} args - Arguments to filter AttendanceEvents to count.
     * @example
     * // Count the number of AttendanceEvents
     * const count = await prisma.attendanceEvent.count({
     *   where: {
     *     // ... the filter for the AttendanceEvents we want to count
     *   }
     * })
    **/
    count<T extends AttendanceEventCountArgs>(
      args?: Subset<T, AttendanceEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttendanceEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceEventAggregateArgs>(args: Subset<T, AttendanceEventAggregateArgs>): Prisma.PrismaPromise<GetAttendanceEventAggregateType<T>>

    /**
     * Group by AttendanceEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceEventGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttendanceEvent model
   */
  readonly fields: AttendanceEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttendanceEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    overridesOriginal<T extends AttendanceEvent$overridesOriginalArgs<ExtArgs> = {}>(args?: Subset<T, AttendanceEvent$overridesOriginalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceEventOverridePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    overridesNew<T extends AttendanceEvent$overridesNewArgs<ExtArgs> = {}>(args?: Subset<T, AttendanceEvent$overridesNewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceEventOverridePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AttendanceEvent model
   */
  interface AttendanceEventFieldRefs {
    readonly id: FieldRef<"AttendanceEvent", 'String'>
    readonly employeeId: FieldRef<"AttendanceEvent", 'String'>
    readonly date: FieldRef<"AttendanceEvent", 'DateTime'>
    readonly eventType: FieldRef<"AttendanceEvent", 'AttendanceEventType'>
    readonly status: FieldRef<"AttendanceEvent", 'AttendanceStatus'>
    readonly reason: FieldRef<"AttendanceEvent", 'String'>
    readonly createdBy: FieldRef<"AttendanceEvent", 'String'>
    readonly createdAt: FieldRef<"AttendanceEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttendanceEvent findUnique
   */
  export type AttendanceEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceEvent to fetch.
     */
    where: AttendanceEventWhereUniqueInput
  }

  /**
   * AttendanceEvent findUniqueOrThrow
   */
  export type AttendanceEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceEvent to fetch.
     */
    where: AttendanceEventWhereUniqueInput
  }

  /**
   * AttendanceEvent findFirst
   */
  export type AttendanceEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceEvent to fetch.
     */
    where?: AttendanceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceEvents to fetch.
     */
    orderBy?: AttendanceEventOrderByWithRelationInput | AttendanceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceEvents.
     */
    cursor?: AttendanceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceEvents.
     */
    distinct?: AttendanceEventScalarFieldEnum | AttendanceEventScalarFieldEnum[]
  }

  /**
   * AttendanceEvent findFirstOrThrow
   */
  export type AttendanceEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceEvent to fetch.
     */
    where?: AttendanceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceEvents to fetch.
     */
    orderBy?: AttendanceEventOrderByWithRelationInput | AttendanceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceEvents.
     */
    cursor?: AttendanceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceEvents.
     */
    distinct?: AttendanceEventScalarFieldEnum | AttendanceEventScalarFieldEnum[]
  }

  /**
   * AttendanceEvent findMany
   */
  export type AttendanceEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceEvents to fetch.
     */
    where?: AttendanceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceEvents to fetch.
     */
    orderBy?: AttendanceEventOrderByWithRelationInput | AttendanceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttendanceEvents.
     */
    cursor?: AttendanceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceEvents.
     */
    skip?: number
    distinct?: AttendanceEventScalarFieldEnum | AttendanceEventScalarFieldEnum[]
  }

  /**
   * AttendanceEvent create
   */
  export type AttendanceEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventInclude<ExtArgs> | null
    /**
     * The data needed to create a AttendanceEvent.
     */
    data: XOR<AttendanceEventCreateInput, AttendanceEventUncheckedCreateInput>
  }

  /**
   * AttendanceEvent createMany
   */
  export type AttendanceEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceEvents.
     */
    data: AttendanceEventCreateManyInput | AttendanceEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceEvent createManyAndReturn
   */
  export type AttendanceEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * The data used to create many AttendanceEvents.
     */
    data: AttendanceEventCreateManyInput | AttendanceEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceEvent update
   */
  export type AttendanceEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventInclude<ExtArgs> | null
    /**
     * The data needed to update a AttendanceEvent.
     */
    data: XOR<AttendanceEventUpdateInput, AttendanceEventUncheckedUpdateInput>
    /**
     * Choose, which AttendanceEvent to update.
     */
    where: AttendanceEventWhereUniqueInput
  }

  /**
   * AttendanceEvent updateMany
   */
  export type AttendanceEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceEvents.
     */
    data: XOR<AttendanceEventUpdateManyMutationInput, AttendanceEventUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceEvents to update
     */
    where?: AttendanceEventWhereInput
    /**
     * Limit how many AttendanceEvents to update.
     */
    limit?: number
  }

  /**
   * AttendanceEvent updateManyAndReturn
   */
  export type AttendanceEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * The data used to update AttendanceEvents.
     */
    data: XOR<AttendanceEventUpdateManyMutationInput, AttendanceEventUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceEvents to update
     */
    where?: AttendanceEventWhereInput
    /**
     * Limit how many AttendanceEvents to update.
     */
    limit?: number
  }

  /**
   * AttendanceEvent upsert
   */
  export type AttendanceEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventInclude<ExtArgs> | null
    /**
     * The filter to search for the AttendanceEvent to update in case it exists.
     */
    where: AttendanceEventWhereUniqueInput
    /**
     * In case the AttendanceEvent found by the `where` argument doesn't exist, create a new AttendanceEvent with this data.
     */
    create: XOR<AttendanceEventCreateInput, AttendanceEventUncheckedCreateInput>
    /**
     * In case the AttendanceEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceEventUpdateInput, AttendanceEventUncheckedUpdateInput>
  }

  /**
   * AttendanceEvent delete
   */
  export type AttendanceEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventInclude<ExtArgs> | null
    /**
     * Filter which AttendanceEvent to delete.
     */
    where: AttendanceEventWhereUniqueInput
  }

  /**
   * AttendanceEvent deleteMany
   */
  export type AttendanceEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceEvents to delete
     */
    where?: AttendanceEventWhereInput
    /**
     * Limit how many AttendanceEvents to delete.
     */
    limit?: number
  }

  /**
   * AttendanceEvent.overridesOriginal
   */
  export type AttendanceEvent$overridesOriginalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEventOverride
     */
    select?: AttendanceEventOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEventOverride
     */
    omit?: AttendanceEventOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventOverrideInclude<ExtArgs> | null
    where?: AttendanceEventOverrideWhereInput
    orderBy?: AttendanceEventOverrideOrderByWithRelationInput | AttendanceEventOverrideOrderByWithRelationInput[]
    cursor?: AttendanceEventOverrideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceEventOverrideScalarFieldEnum | AttendanceEventOverrideScalarFieldEnum[]
  }

  /**
   * AttendanceEvent.overridesNew
   */
  export type AttendanceEvent$overridesNewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEventOverride
     */
    select?: AttendanceEventOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEventOverride
     */
    omit?: AttendanceEventOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventOverrideInclude<ExtArgs> | null
    where?: AttendanceEventOverrideWhereInput
    orderBy?: AttendanceEventOverrideOrderByWithRelationInput | AttendanceEventOverrideOrderByWithRelationInput[]
    cursor?: AttendanceEventOverrideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceEventOverrideScalarFieldEnum | AttendanceEventOverrideScalarFieldEnum[]
  }

  /**
   * AttendanceEvent without action
   */
  export type AttendanceEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventInclude<ExtArgs> | null
  }


  /**
   * Model AttendanceEventOverride
   */

  export type AggregateAttendanceEventOverride = {
    _count: AttendanceEventOverrideCountAggregateOutputType | null
    _min: AttendanceEventOverrideMinAggregateOutputType | null
    _max: AttendanceEventOverrideMaxAggregateOutputType | null
  }

  export type AttendanceEventOverrideMinAggregateOutputType = {
    id: string | null
    originalEventId: string | null
    action: $Enums.AttendanceOverrideAction | null
    newEventId: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type AttendanceEventOverrideMaxAggregateOutputType = {
    id: string | null
    originalEventId: string | null
    action: $Enums.AttendanceOverrideAction | null
    newEventId: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type AttendanceEventOverrideCountAggregateOutputType = {
    id: number
    originalEventId: number
    action: number
    newEventId: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type AttendanceEventOverrideMinAggregateInputType = {
    id?: true
    originalEventId?: true
    action?: true
    newEventId?: true
    createdBy?: true
    createdAt?: true
  }

  export type AttendanceEventOverrideMaxAggregateInputType = {
    id?: true
    originalEventId?: true
    action?: true
    newEventId?: true
    createdBy?: true
    createdAt?: true
  }

  export type AttendanceEventOverrideCountAggregateInputType = {
    id?: true
    originalEventId?: true
    action?: true
    newEventId?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type AttendanceEventOverrideAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceEventOverride to aggregate.
     */
    where?: AttendanceEventOverrideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceEventOverrides to fetch.
     */
    orderBy?: AttendanceEventOverrideOrderByWithRelationInput | AttendanceEventOverrideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceEventOverrideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceEventOverrides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceEventOverrides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttendanceEventOverrides
    **/
    _count?: true | AttendanceEventOverrideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceEventOverrideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceEventOverrideMaxAggregateInputType
  }

  export type GetAttendanceEventOverrideAggregateType<T extends AttendanceEventOverrideAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendanceEventOverride]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendanceEventOverride[P]>
      : GetScalarType<T[P], AggregateAttendanceEventOverride[P]>
  }




  export type AttendanceEventOverrideGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceEventOverrideWhereInput
    orderBy?: AttendanceEventOverrideOrderByWithAggregationInput | AttendanceEventOverrideOrderByWithAggregationInput[]
    by: AttendanceEventOverrideScalarFieldEnum[] | AttendanceEventOverrideScalarFieldEnum
    having?: AttendanceEventOverrideScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceEventOverrideCountAggregateInputType | true
    _min?: AttendanceEventOverrideMinAggregateInputType
    _max?: AttendanceEventOverrideMaxAggregateInputType
  }

  export type AttendanceEventOverrideGroupByOutputType = {
    id: string
    originalEventId: string
    action: $Enums.AttendanceOverrideAction
    newEventId: string | null
    createdBy: string
    createdAt: Date
    _count: AttendanceEventOverrideCountAggregateOutputType | null
    _min: AttendanceEventOverrideMinAggregateOutputType | null
    _max: AttendanceEventOverrideMaxAggregateOutputType | null
  }

  type GetAttendanceEventOverrideGroupByPayload<T extends AttendanceEventOverrideGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceEventOverrideGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceEventOverrideGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceEventOverrideGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceEventOverrideGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceEventOverrideSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalEventId?: boolean
    action?: boolean
    newEventId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    originalEvent?: boolean | AttendanceEventDefaultArgs<ExtArgs>
    newEvent?: boolean | AttendanceEventOverride$newEventArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceEventOverride"]>

  export type AttendanceEventOverrideSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalEventId?: boolean
    action?: boolean
    newEventId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    originalEvent?: boolean | AttendanceEventDefaultArgs<ExtArgs>
    newEvent?: boolean | AttendanceEventOverride$newEventArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceEventOverride"]>

  export type AttendanceEventOverrideSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalEventId?: boolean
    action?: boolean
    newEventId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    originalEvent?: boolean | AttendanceEventDefaultArgs<ExtArgs>
    newEvent?: boolean | AttendanceEventOverride$newEventArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceEventOverride"]>

  export type AttendanceEventOverrideSelectScalar = {
    id?: boolean
    originalEventId?: boolean
    action?: boolean
    newEventId?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type AttendanceEventOverrideOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "originalEventId" | "action" | "newEventId" | "createdBy" | "createdAt", ExtArgs["result"]["attendanceEventOverride"]>
  export type AttendanceEventOverrideInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalEvent?: boolean | AttendanceEventDefaultArgs<ExtArgs>
    newEvent?: boolean | AttendanceEventOverride$newEventArgs<ExtArgs>
  }
  export type AttendanceEventOverrideIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalEvent?: boolean | AttendanceEventDefaultArgs<ExtArgs>
    newEvent?: boolean | AttendanceEventOverride$newEventArgs<ExtArgs>
  }
  export type AttendanceEventOverrideIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalEvent?: boolean | AttendanceEventDefaultArgs<ExtArgs>
    newEvent?: boolean | AttendanceEventOverride$newEventArgs<ExtArgs>
  }

  export type $AttendanceEventOverridePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttendanceEventOverride"
    objects: {
      originalEvent: Prisma.$AttendanceEventPayload<ExtArgs>
      newEvent: Prisma.$AttendanceEventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      originalEventId: string
      action: $Enums.AttendanceOverrideAction
      newEventId: string | null
      createdBy: string
      createdAt: Date
    }, ExtArgs["result"]["attendanceEventOverride"]>
    composites: {}
  }

  type AttendanceEventOverrideGetPayload<S extends boolean | null | undefined | AttendanceEventOverrideDefaultArgs> = $Result.GetResult<Prisma.$AttendanceEventOverridePayload, S>

  type AttendanceEventOverrideCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceEventOverrideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceEventOverrideCountAggregateInputType | true
    }

  export interface AttendanceEventOverrideDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttendanceEventOverride'], meta: { name: 'AttendanceEventOverride' } }
    /**
     * Find zero or one AttendanceEventOverride that matches the filter.
     * @param {AttendanceEventOverrideFindUniqueArgs} args - Arguments to find a AttendanceEventOverride
     * @example
     * // Get one AttendanceEventOverride
     * const attendanceEventOverride = await prisma.attendanceEventOverride.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceEventOverrideFindUniqueArgs>(args: SelectSubset<T, AttendanceEventOverrideFindUniqueArgs<ExtArgs>>): Prisma__AttendanceEventOverrideClient<$Result.GetResult<Prisma.$AttendanceEventOverridePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttendanceEventOverride that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceEventOverrideFindUniqueOrThrowArgs} args - Arguments to find a AttendanceEventOverride
     * @example
     * // Get one AttendanceEventOverride
     * const attendanceEventOverride = await prisma.attendanceEventOverride.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceEventOverrideFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceEventOverrideFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceEventOverrideClient<$Result.GetResult<Prisma.$AttendanceEventOverridePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceEventOverride that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventOverrideFindFirstArgs} args - Arguments to find a AttendanceEventOverride
     * @example
     * // Get one AttendanceEventOverride
     * const attendanceEventOverride = await prisma.attendanceEventOverride.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceEventOverrideFindFirstArgs>(args?: SelectSubset<T, AttendanceEventOverrideFindFirstArgs<ExtArgs>>): Prisma__AttendanceEventOverrideClient<$Result.GetResult<Prisma.$AttendanceEventOverridePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceEventOverride that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventOverrideFindFirstOrThrowArgs} args - Arguments to find a AttendanceEventOverride
     * @example
     * // Get one AttendanceEventOverride
     * const attendanceEventOverride = await prisma.attendanceEventOverride.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceEventOverrideFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceEventOverrideFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceEventOverrideClient<$Result.GetResult<Prisma.$AttendanceEventOverridePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttendanceEventOverrides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventOverrideFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceEventOverrides
     * const attendanceEventOverrides = await prisma.attendanceEventOverride.findMany()
     * 
     * // Get first 10 AttendanceEventOverrides
     * const attendanceEventOverrides = await prisma.attendanceEventOverride.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceEventOverrideWithIdOnly = await prisma.attendanceEventOverride.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceEventOverrideFindManyArgs>(args?: SelectSubset<T, AttendanceEventOverrideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceEventOverridePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttendanceEventOverride.
     * @param {AttendanceEventOverrideCreateArgs} args - Arguments to create a AttendanceEventOverride.
     * @example
     * // Create one AttendanceEventOverride
     * const AttendanceEventOverride = await prisma.attendanceEventOverride.create({
     *   data: {
     *     // ... data to create a AttendanceEventOverride
     *   }
     * })
     * 
     */
    create<T extends AttendanceEventOverrideCreateArgs>(args: SelectSubset<T, AttendanceEventOverrideCreateArgs<ExtArgs>>): Prisma__AttendanceEventOverrideClient<$Result.GetResult<Prisma.$AttendanceEventOverridePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttendanceEventOverrides.
     * @param {AttendanceEventOverrideCreateManyArgs} args - Arguments to create many AttendanceEventOverrides.
     * @example
     * // Create many AttendanceEventOverrides
     * const attendanceEventOverride = await prisma.attendanceEventOverride.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceEventOverrideCreateManyArgs>(args?: SelectSubset<T, AttendanceEventOverrideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttendanceEventOverrides and returns the data saved in the database.
     * @param {AttendanceEventOverrideCreateManyAndReturnArgs} args - Arguments to create many AttendanceEventOverrides.
     * @example
     * // Create many AttendanceEventOverrides
     * const attendanceEventOverride = await prisma.attendanceEventOverride.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttendanceEventOverrides and only return the `id`
     * const attendanceEventOverrideWithIdOnly = await prisma.attendanceEventOverride.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceEventOverrideCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceEventOverrideCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceEventOverridePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttendanceEventOverride.
     * @param {AttendanceEventOverrideDeleteArgs} args - Arguments to delete one AttendanceEventOverride.
     * @example
     * // Delete one AttendanceEventOverride
     * const AttendanceEventOverride = await prisma.attendanceEventOverride.delete({
     *   where: {
     *     // ... filter to delete one AttendanceEventOverride
     *   }
     * })
     * 
     */
    delete<T extends AttendanceEventOverrideDeleteArgs>(args: SelectSubset<T, AttendanceEventOverrideDeleteArgs<ExtArgs>>): Prisma__AttendanceEventOverrideClient<$Result.GetResult<Prisma.$AttendanceEventOverridePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttendanceEventOverride.
     * @param {AttendanceEventOverrideUpdateArgs} args - Arguments to update one AttendanceEventOverride.
     * @example
     * // Update one AttendanceEventOverride
     * const attendanceEventOverride = await prisma.attendanceEventOverride.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceEventOverrideUpdateArgs>(args: SelectSubset<T, AttendanceEventOverrideUpdateArgs<ExtArgs>>): Prisma__AttendanceEventOverrideClient<$Result.GetResult<Prisma.$AttendanceEventOverridePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttendanceEventOverrides.
     * @param {AttendanceEventOverrideDeleteManyArgs} args - Arguments to filter AttendanceEventOverrides to delete.
     * @example
     * // Delete a few AttendanceEventOverrides
     * const { count } = await prisma.attendanceEventOverride.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceEventOverrideDeleteManyArgs>(args?: SelectSubset<T, AttendanceEventOverrideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceEventOverrides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventOverrideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceEventOverrides
     * const attendanceEventOverride = await prisma.attendanceEventOverride.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceEventOverrideUpdateManyArgs>(args: SelectSubset<T, AttendanceEventOverrideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceEventOverrides and returns the data updated in the database.
     * @param {AttendanceEventOverrideUpdateManyAndReturnArgs} args - Arguments to update many AttendanceEventOverrides.
     * @example
     * // Update many AttendanceEventOverrides
     * const attendanceEventOverride = await prisma.attendanceEventOverride.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttendanceEventOverrides and only return the `id`
     * const attendanceEventOverrideWithIdOnly = await prisma.attendanceEventOverride.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceEventOverrideUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceEventOverrideUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceEventOverridePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttendanceEventOverride.
     * @param {AttendanceEventOverrideUpsertArgs} args - Arguments to update or create a AttendanceEventOverride.
     * @example
     * // Update or create a AttendanceEventOverride
     * const attendanceEventOverride = await prisma.attendanceEventOverride.upsert({
     *   create: {
     *     // ... data to create a AttendanceEventOverride
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceEventOverride we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceEventOverrideUpsertArgs>(args: SelectSubset<T, AttendanceEventOverrideUpsertArgs<ExtArgs>>): Prisma__AttendanceEventOverrideClient<$Result.GetResult<Prisma.$AttendanceEventOverridePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttendanceEventOverrides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventOverrideCountArgs} args - Arguments to filter AttendanceEventOverrides to count.
     * @example
     * // Count the number of AttendanceEventOverrides
     * const count = await prisma.attendanceEventOverride.count({
     *   where: {
     *     // ... the filter for the AttendanceEventOverrides we want to count
     *   }
     * })
    **/
    count<T extends AttendanceEventOverrideCountArgs>(
      args?: Subset<T, AttendanceEventOverrideCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceEventOverrideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttendanceEventOverride.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventOverrideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceEventOverrideAggregateArgs>(args: Subset<T, AttendanceEventOverrideAggregateArgs>): Prisma.PrismaPromise<GetAttendanceEventOverrideAggregateType<T>>

    /**
     * Group by AttendanceEventOverride.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceEventOverrideGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceEventOverrideGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceEventOverrideGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceEventOverrideGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceEventOverrideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceEventOverrideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttendanceEventOverride model
   */
  readonly fields: AttendanceEventOverrideFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttendanceEventOverride.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceEventOverrideClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    originalEvent<T extends AttendanceEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttendanceEventDefaultArgs<ExtArgs>>): Prisma__AttendanceEventClient<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    newEvent<T extends AttendanceEventOverride$newEventArgs<ExtArgs> = {}>(args?: Subset<T, AttendanceEventOverride$newEventArgs<ExtArgs>>): Prisma__AttendanceEventClient<$Result.GetResult<Prisma.$AttendanceEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AttendanceEventOverride model
   */
  interface AttendanceEventOverrideFieldRefs {
    readonly id: FieldRef<"AttendanceEventOverride", 'String'>
    readonly originalEventId: FieldRef<"AttendanceEventOverride", 'String'>
    readonly action: FieldRef<"AttendanceEventOverride", 'AttendanceOverrideAction'>
    readonly newEventId: FieldRef<"AttendanceEventOverride", 'String'>
    readonly createdBy: FieldRef<"AttendanceEventOverride", 'String'>
    readonly createdAt: FieldRef<"AttendanceEventOverride", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttendanceEventOverride findUnique
   */
  export type AttendanceEventOverrideFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEventOverride
     */
    select?: AttendanceEventOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEventOverride
     */
    omit?: AttendanceEventOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventOverrideInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceEventOverride to fetch.
     */
    where: AttendanceEventOverrideWhereUniqueInput
  }

  /**
   * AttendanceEventOverride findUniqueOrThrow
   */
  export type AttendanceEventOverrideFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEventOverride
     */
    select?: AttendanceEventOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEventOverride
     */
    omit?: AttendanceEventOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventOverrideInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceEventOverride to fetch.
     */
    where: AttendanceEventOverrideWhereUniqueInput
  }

  /**
   * AttendanceEventOverride findFirst
   */
  export type AttendanceEventOverrideFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEventOverride
     */
    select?: AttendanceEventOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEventOverride
     */
    omit?: AttendanceEventOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventOverrideInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceEventOverride to fetch.
     */
    where?: AttendanceEventOverrideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceEventOverrides to fetch.
     */
    orderBy?: AttendanceEventOverrideOrderByWithRelationInput | AttendanceEventOverrideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceEventOverrides.
     */
    cursor?: AttendanceEventOverrideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceEventOverrides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceEventOverrides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceEventOverrides.
     */
    distinct?: AttendanceEventOverrideScalarFieldEnum | AttendanceEventOverrideScalarFieldEnum[]
  }

  /**
   * AttendanceEventOverride findFirstOrThrow
   */
  export type AttendanceEventOverrideFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEventOverride
     */
    select?: AttendanceEventOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEventOverride
     */
    omit?: AttendanceEventOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventOverrideInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceEventOverride to fetch.
     */
    where?: AttendanceEventOverrideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceEventOverrides to fetch.
     */
    orderBy?: AttendanceEventOverrideOrderByWithRelationInput | AttendanceEventOverrideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceEventOverrides.
     */
    cursor?: AttendanceEventOverrideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceEventOverrides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceEventOverrides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceEventOverrides.
     */
    distinct?: AttendanceEventOverrideScalarFieldEnum | AttendanceEventOverrideScalarFieldEnum[]
  }

  /**
   * AttendanceEventOverride findMany
   */
  export type AttendanceEventOverrideFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEventOverride
     */
    select?: AttendanceEventOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEventOverride
     */
    omit?: AttendanceEventOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventOverrideInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceEventOverrides to fetch.
     */
    where?: AttendanceEventOverrideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceEventOverrides to fetch.
     */
    orderBy?: AttendanceEventOverrideOrderByWithRelationInput | AttendanceEventOverrideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttendanceEventOverrides.
     */
    cursor?: AttendanceEventOverrideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceEventOverrides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceEventOverrides.
     */
    skip?: number
    distinct?: AttendanceEventOverrideScalarFieldEnum | AttendanceEventOverrideScalarFieldEnum[]
  }

  /**
   * AttendanceEventOverride create
   */
  export type AttendanceEventOverrideCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEventOverride
     */
    select?: AttendanceEventOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEventOverride
     */
    omit?: AttendanceEventOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventOverrideInclude<ExtArgs> | null
    /**
     * The data needed to create a AttendanceEventOverride.
     */
    data: XOR<AttendanceEventOverrideCreateInput, AttendanceEventOverrideUncheckedCreateInput>
  }

  /**
   * AttendanceEventOverride createMany
   */
  export type AttendanceEventOverrideCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceEventOverrides.
     */
    data: AttendanceEventOverrideCreateManyInput | AttendanceEventOverrideCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceEventOverride createManyAndReturn
   */
  export type AttendanceEventOverrideCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEventOverride
     */
    select?: AttendanceEventOverrideSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEventOverride
     */
    omit?: AttendanceEventOverrideOmit<ExtArgs> | null
    /**
     * The data used to create many AttendanceEventOverrides.
     */
    data: AttendanceEventOverrideCreateManyInput | AttendanceEventOverrideCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventOverrideIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttendanceEventOverride update
   */
  export type AttendanceEventOverrideUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEventOverride
     */
    select?: AttendanceEventOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEventOverride
     */
    omit?: AttendanceEventOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventOverrideInclude<ExtArgs> | null
    /**
     * The data needed to update a AttendanceEventOverride.
     */
    data: XOR<AttendanceEventOverrideUpdateInput, AttendanceEventOverrideUncheckedUpdateInput>
    /**
     * Choose, which AttendanceEventOverride to update.
     */
    where: AttendanceEventOverrideWhereUniqueInput
  }

  /**
   * AttendanceEventOverride updateMany
   */
  export type AttendanceEventOverrideUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceEventOverrides.
     */
    data: XOR<AttendanceEventOverrideUpdateManyMutationInput, AttendanceEventOverrideUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceEventOverrides to update
     */
    where?: AttendanceEventOverrideWhereInput
    /**
     * Limit how many AttendanceEventOverrides to update.
     */
    limit?: number
  }

  /**
   * AttendanceEventOverride updateManyAndReturn
   */
  export type AttendanceEventOverrideUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEventOverride
     */
    select?: AttendanceEventOverrideSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEventOverride
     */
    omit?: AttendanceEventOverrideOmit<ExtArgs> | null
    /**
     * The data used to update AttendanceEventOverrides.
     */
    data: XOR<AttendanceEventOverrideUpdateManyMutationInput, AttendanceEventOverrideUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceEventOverrides to update
     */
    where?: AttendanceEventOverrideWhereInput
    /**
     * Limit how many AttendanceEventOverrides to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventOverrideIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttendanceEventOverride upsert
   */
  export type AttendanceEventOverrideUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEventOverride
     */
    select?: AttendanceEventOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEventOverride
     */
    omit?: AttendanceEventOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventOverrideInclude<ExtArgs> | null
    /**
     * The filter to search for the AttendanceEventOverride to update in case it exists.
     */
    where: AttendanceEventOverrideWhereUniqueInput
    /**
     * In case the AttendanceEventOverride found by the `where` argument doesn't exist, create a new AttendanceEventOverride with this data.
     */
    create: XOR<AttendanceEventOverrideCreateInput, AttendanceEventOverrideUncheckedCreateInput>
    /**
     * In case the AttendanceEventOverride was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceEventOverrideUpdateInput, AttendanceEventOverrideUncheckedUpdateInput>
  }

  /**
   * AttendanceEventOverride delete
   */
  export type AttendanceEventOverrideDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEventOverride
     */
    select?: AttendanceEventOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEventOverride
     */
    omit?: AttendanceEventOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventOverrideInclude<ExtArgs> | null
    /**
     * Filter which AttendanceEventOverride to delete.
     */
    where: AttendanceEventOverrideWhereUniqueInput
  }

  /**
   * AttendanceEventOverride deleteMany
   */
  export type AttendanceEventOverrideDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceEventOverrides to delete
     */
    where?: AttendanceEventOverrideWhereInput
    /**
     * Limit how many AttendanceEventOverrides to delete.
     */
    limit?: number
  }

  /**
   * AttendanceEventOverride.newEvent
   */
  export type AttendanceEventOverride$newEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEvent
     */
    select?: AttendanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEvent
     */
    omit?: AttendanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventInclude<ExtArgs> | null
    where?: AttendanceEventWhereInput
  }

  /**
   * AttendanceEventOverride without action
   */
  export type AttendanceEventOverrideDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceEventOverride
     */
    select?: AttendanceEventOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceEventOverride
     */
    omit?: AttendanceEventOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceEventOverrideInclude<ExtArgs> | null
  }


  /**
   * Model AttendanceMonthLock
   */

  export type AggregateAttendanceMonthLock = {
    _count: AttendanceMonthLockCountAggregateOutputType | null
    _min: AttendanceMonthLockMinAggregateOutputType | null
    _max: AttendanceMonthLockMaxAggregateOutputType | null
  }

  export type AttendanceMonthLockMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    month: string | null
    lockedBy: string | null
    lockedAt: Date | null
  }

  export type AttendanceMonthLockMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    month: string | null
    lockedBy: string | null
    lockedAt: Date | null
  }

  export type AttendanceMonthLockCountAggregateOutputType = {
    id: number
    employeeId: number
    month: number
    lockedBy: number
    lockedAt: number
    _all: number
  }


  export type AttendanceMonthLockMinAggregateInputType = {
    id?: true
    employeeId?: true
    month?: true
    lockedBy?: true
    lockedAt?: true
  }

  export type AttendanceMonthLockMaxAggregateInputType = {
    id?: true
    employeeId?: true
    month?: true
    lockedBy?: true
    lockedAt?: true
  }

  export type AttendanceMonthLockCountAggregateInputType = {
    id?: true
    employeeId?: true
    month?: true
    lockedBy?: true
    lockedAt?: true
    _all?: true
  }

  export type AttendanceMonthLockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceMonthLock to aggregate.
     */
    where?: AttendanceMonthLockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceMonthLocks to fetch.
     */
    orderBy?: AttendanceMonthLockOrderByWithRelationInput | AttendanceMonthLockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceMonthLockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceMonthLocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceMonthLocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttendanceMonthLocks
    **/
    _count?: true | AttendanceMonthLockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMonthLockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMonthLockMaxAggregateInputType
  }

  export type GetAttendanceMonthLockAggregateType<T extends AttendanceMonthLockAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendanceMonthLock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendanceMonthLock[P]>
      : GetScalarType<T[P], AggregateAttendanceMonthLock[P]>
  }




  export type AttendanceMonthLockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceMonthLockWhereInput
    orderBy?: AttendanceMonthLockOrderByWithAggregationInput | AttendanceMonthLockOrderByWithAggregationInput[]
    by: AttendanceMonthLockScalarFieldEnum[] | AttendanceMonthLockScalarFieldEnum
    having?: AttendanceMonthLockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceMonthLockCountAggregateInputType | true
    _min?: AttendanceMonthLockMinAggregateInputType
    _max?: AttendanceMonthLockMaxAggregateInputType
  }

  export type AttendanceMonthLockGroupByOutputType = {
    id: string
    employeeId: string
    month: string
    lockedBy: string
    lockedAt: Date
    _count: AttendanceMonthLockCountAggregateOutputType | null
    _min: AttendanceMonthLockMinAggregateOutputType | null
    _max: AttendanceMonthLockMaxAggregateOutputType | null
  }

  type GetAttendanceMonthLockGroupByPayload<T extends AttendanceMonthLockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceMonthLockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceMonthLockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceMonthLockGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceMonthLockGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceMonthLockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    month?: boolean
    lockedBy?: boolean
    lockedAt?: boolean
  }, ExtArgs["result"]["attendanceMonthLock"]>

  export type AttendanceMonthLockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    month?: boolean
    lockedBy?: boolean
    lockedAt?: boolean
  }, ExtArgs["result"]["attendanceMonthLock"]>

  export type AttendanceMonthLockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    month?: boolean
    lockedBy?: boolean
    lockedAt?: boolean
  }, ExtArgs["result"]["attendanceMonthLock"]>

  export type AttendanceMonthLockSelectScalar = {
    id?: boolean
    employeeId?: boolean
    month?: boolean
    lockedBy?: boolean
    lockedAt?: boolean
  }

  export type AttendanceMonthLockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "month" | "lockedBy" | "lockedAt", ExtArgs["result"]["attendanceMonthLock"]>

  export type $AttendanceMonthLockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttendanceMonthLock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      month: string
      lockedBy: string
      lockedAt: Date
    }, ExtArgs["result"]["attendanceMonthLock"]>
    composites: {}
  }

  type AttendanceMonthLockGetPayload<S extends boolean | null | undefined | AttendanceMonthLockDefaultArgs> = $Result.GetResult<Prisma.$AttendanceMonthLockPayload, S>

  type AttendanceMonthLockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceMonthLockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceMonthLockCountAggregateInputType | true
    }

  export interface AttendanceMonthLockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttendanceMonthLock'], meta: { name: 'AttendanceMonthLock' } }
    /**
     * Find zero or one AttendanceMonthLock that matches the filter.
     * @param {AttendanceMonthLockFindUniqueArgs} args - Arguments to find a AttendanceMonthLock
     * @example
     * // Get one AttendanceMonthLock
     * const attendanceMonthLock = await prisma.attendanceMonthLock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceMonthLockFindUniqueArgs>(args: SelectSubset<T, AttendanceMonthLockFindUniqueArgs<ExtArgs>>): Prisma__AttendanceMonthLockClient<$Result.GetResult<Prisma.$AttendanceMonthLockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttendanceMonthLock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceMonthLockFindUniqueOrThrowArgs} args - Arguments to find a AttendanceMonthLock
     * @example
     * // Get one AttendanceMonthLock
     * const attendanceMonthLock = await prisma.attendanceMonthLock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceMonthLockFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceMonthLockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceMonthLockClient<$Result.GetResult<Prisma.$AttendanceMonthLockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceMonthLock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceMonthLockFindFirstArgs} args - Arguments to find a AttendanceMonthLock
     * @example
     * // Get one AttendanceMonthLock
     * const attendanceMonthLock = await prisma.attendanceMonthLock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceMonthLockFindFirstArgs>(args?: SelectSubset<T, AttendanceMonthLockFindFirstArgs<ExtArgs>>): Prisma__AttendanceMonthLockClient<$Result.GetResult<Prisma.$AttendanceMonthLockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceMonthLock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceMonthLockFindFirstOrThrowArgs} args - Arguments to find a AttendanceMonthLock
     * @example
     * // Get one AttendanceMonthLock
     * const attendanceMonthLock = await prisma.attendanceMonthLock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceMonthLockFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceMonthLockFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceMonthLockClient<$Result.GetResult<Prisma.$AttendanceMonthLockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttendanceMonthLocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceMonthLockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceMonthLocks
     * const attendanceMonthLocks = await prisma.attendanceMonthLock.findMany()
     * 
     * // Get first 10 AttendanceMonthLocks
     * const attendanceMonthLocks = await prisma.attendanceMonthLock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceMonthLockWithIdOnly = await prisma.attendanceMonthLock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceMonthLockFindManyArgs>(args?: SelectSubset<T, AttendanceMonthLockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceMonthLockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttendanceMonthLock.
     * @param {AttendanceMonthLockCreateArgs} args - Arguments to create a AttendanceMonthLock.
     * @example
     * // Create one AttendanceMonthLock
     * const AttendanceMonthLock = await prisma.attendanceMonthLock.create({
     *   data: {
     *     // ... data to create a AttendanceMonthLock
     *   }
     * })
     * 
     */
    create<T extends AttendanceMonthLockCreateArgs>(args: SelectSubset<T, AttendanceMonthLockCreateArgs<ExtArgs>>): Prisma__AttendanceMonthLockClient<$Result.GetResult<Prisma.$AttendanceMonthLockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttendanceMonthLocks.
     * @param {AttendanceMonthLockCreateManyArgs} args - Arguments to create many AttendanceMonthLocks.
     * @example
     * // Create many AttendanceMonthLocks
     * const attendanceMonthLock = await prisma.attendanceMonthLock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceMonthLockCreateManyArgs>(args?: SelectSubset<T, AttendanceMonthLockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttendanceMonthLocks and returns the data saved in the database.
     * @param {AttendanceMonthLockCreateManyAndReturnArgs} args - Arguments to create many AttendanceMonthLocks.
     * @example
     * // Create many AttendanceMonthLocks
     * const attendanceMonthLock = await prisma.attendanceMonthLock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttendanceMonthLocks and only return the `id`
     * const attendanceMonthLockWithIdOnly = await prisma.attendanceMonthLock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceMonthLockCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceMonthLockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceMonthLockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttendanceMonthLock.
     * @param {AttendanceMonthLockDeleteArgs} args - Arguments to delete one AttendanceMonthLock.
     * @example
     * // Delete one AttendanceMonthLock
     * const AttendanceMonthLock = await prisma.attendanceMonthLock.delete({
     *   where: {
     *     // ... filter to delete one AttendanceMonthLock
     *   }
     * })
     * 
     */
    delete<T extends AttendanceMonthLockDeleteArgs>(args: SelectSubset<T, AttendanceMonthLockDeleteArgs<ExtArgs>>): Prisma__AttendanceMonthLockClient<$Result.GetResult<Prisma.$AttendanceMonthLockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttendanceMonthLock.
     * @param {AttendanceMonthLockUpdateArgs} args - Arguments to update one AttendanceMonthLock.
     * @example
     * // Update one AttendanceMonthLock
     * const attendanceMonthLock = await prisma.attendanceMonthLock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceMonthLockUpdateArgs>(args: SelectSubset<T, AttendanceMonthLockUpdateArgs<ExtArgs>>): Prisma__AttendanceMonthLockClient<$Result.GetResult<Prisma.$AttendanceMonthLockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttendanceMonthLocks.
     * @param {AttendanceMonthLockDeleteManyArgs} args - Arguments to filter AttendanceMonthLocks to delete.
     * @example
     * // Delete a few AttendanceMonthLocks
     * const { count } = await prisma.attendanceMonthLock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceMonthLockDeleteManyArgs>(args?: SelectSubset<T, AttendanceMonthLockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceMonthLocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceMonthLockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceMonthLocks
     * const attendanceMonthLock = await prisma.attendanceMonthLock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceMonthLockUpdateManyArgs>(args: SelectSubset<T, AttendanceMonthLockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceMonthLocks and returns the data updated in the database.
     * @param {AttendanceMonthLockUpdateManyAndReturnArgs} args - Arguments to update many AttendanceMonthLocks.
     * @example
     * // Update many AttendanceMonthLocks
     * const attendanceMonthLock = await prisma.attendanceMonthLock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttendanceMonthLocks and only return the `id`
     * const attendanceMonthLockWithIdOnly = await prisma.attendanceMonthLock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceMonthLockUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceMonthLockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceMonthLockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttendanceMonthLock.
     * @param {AttendanceMonthLockUpsertArgs} args - Arguments to update or create a AttendanceMonthLock.
     * @example
     * // Update or create a AttendanceMonthLock
     * const attendanceMonthLock = await prisma.attendanceMonthLock.upsert({
     *   create: {
     *     // ... data to create a AttendanceMonthLock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceMonthLock we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceMonthLockUpsertArgs>(args: SelectSubset<T, AttendanceMonthLockUpsertArgs<ExtArgs>>): Prisma__AttendanceMonthLockClient<$Result.GetResult<Prisma.$AttendanceMonthLockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttendanceMonthLocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceMonthLockCountArgs} args - Arguments to filter AttendanceMonthLocks to count.
     * @example
     * // Count the number of AttendanceMonthLocks
     * const count = await prisma.attendanceMonthLock.count({
     *   where: {
     *     // ... the filter for the AttendanceMonthLocks we want to count
     *   }
     * })
    **/
    count<T extends AttendanceMonthLockCountArgs>(
      args?: Subset<T, AttendanceMonthLockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceMonthLockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttendanceMonthLock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceMonthLockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceMonthLockAggregateArgs>(args: Subset<T, AttendanceMonthLockAggregateArgs>): Prisma.PrismaPromise<GetAttendanceMonthLockAggregateType<T>>

    /**
     * Group by AttendanceMonthLock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceMonthLockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceMonthLockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceMonthLockGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceMonthLockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceMonthLockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceMonthLockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttendanceMonthLock model
   */
  readonly fields: AttendanceMonthLockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttendanceMonthLock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceMonthLockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AttendanceMonthLock model
   */
  interface AttendanceMonthLockFieldRefs {
    readonly id: FieldRef<"AttendanceMonthLock", 'String'>
    readonly employeeId: FieldRef<"AttendanceMonthLock", 'String'>
    readonly month: FieldRef<"AttendanceMonthLock", 'String'>
    readonly lockedBy: FieldRef<"AttendanceMonthLock", 'String'>
    readonly lockedAt: FieldRef<"AttendanceMonthLock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttendanceMonthLock findUnique
   */
  export type AttendanceMonthLockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceMonthLock
     */
    select?: AttendanceMonthLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceMonthLock
     */
    omit?: AttendanceMonthLockOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceMonthLock to fetch.
     */
    where: AttendanceMonthLockWhereUniqueInput
  }

  /**
   * AttendanceMonthLock findUniqueOrThrow
   */
  export type AttendanceMonthLockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceMonthLock
     */
    select?: AttendanceMonthLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceMonthLock
     */
    omit?: AttendanceMonthLockOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceMonthLock to fetch.
     */
    where: AttendanceMonthLockWhereUniqueInput
  }

  /**
   * AttendanceMonthLock findFirst
   */
  export type AttendanceMonthLockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceMonthLock
     */
    select?: AttendanceMonthLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceMonthLock
     */
    omit?: AttendanceMonthLockOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceMonthLock to fetch.
     */
    where?: AttendanceMonthLockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceMonthLocks to fetch.
     */
    orderBy?: AttendanceMonthLockOrderByWithRelationInput | AttendanceMonthLockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceMonthLocks.
     */
    cursor?: AttendanceMonthLockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceMonthLocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceMonthLocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceMonthLocks.
     */
    distinct?: AttendanceMonthLockScalarFieldEnum | AttendanceMonthLockScalarFieldEnum[]
  }

  /**
   * AttendanceMonthLock findFirstOrThrow
   */
  export type AttendanceMonthLockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceMonthLock
     */
    select?: AttendanceMonthLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceMonthLock
     */
    omit?: AttendanceMonthLockOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceMonthLock to fetch.
     */
    where?: AttendanceMonthLockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceMonthLocks to fetch.
     */
    orderBy?: AttendanceMonthLockOrderByWithRelationInput | AttendanceMonthLockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceMonthLocks.
     */
    cursor?: AttendanceMonthLockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceMonthLocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceMonthLocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceMonthLocks.
     */
    distinct?: AttendanceMonthLockScalarFieldEnum | AttendanceMonthLockScalarFieldEnum[]
  }

  /**
   * AttendanceMonthLock findMany
   */
  export type AttendanceMonthLockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceMonthLock
     */
    select?: AttendanceMonthLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceMonthLock
     */
    omit?: AttendanceMonthLockOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceMonthLocks to fetch.
     */
    where?: AttendanceMonthLockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceMonthLocks to fetch.
     */
    orderBy?: AttendanceMonthLockOrderByWithRelationInput | AttendanceMonthLockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttendanceMonthLocks.
     */
    cursor?: AttendanceMonthLockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceMonthLocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceMonthLocks.
     */
    skip?: number
    distinct?: AttendanceMonthLockScalarFieldEnum | AttendanceMonthLockScalarFieldEnum[]
  }

  /**
   * AttendanceMonthLock create
   */
  export type AttendanceMonthLockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceMonthLock
     */
    select?: AttendanceMonthLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceMonthLock
     */
    omit?: AttendanceMonthLockOmit<ExtArgs> | null
    /**
     * The data needed to create a AttendanceMonthLock.
     */
    data: XOR<AttendanceMonthLockCreateInput, AttendanceMonthLockUncheckedCreateInput>
  }

  /**
   * AttendanceMonthLock createMany
   */
  export type AttendanceMonthLockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceMonthLocks.
     */
    data: AttendanceMonthLockCreateManyInput | AttendanceMonthLockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceMonthLock createManyAndReturn
   */
  export type AttendanceMonthLockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceMonthLock
     */
    select?: AttendanceMonthLockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceMonthLock
     */
    omit?: AttendanceMonthLockOmit<ExtArgs> | null
    /**
     * The data used to create many AttendanceMonthLocks.
     */
    data: AttendanceMonthLockCreateManyInput | AttendanceMonthLockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceMonthLock update
   */
  export type AttendanceMonthLockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceMonthLock
     */
    select?: AttendanceMonthLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceMonthLock
     */
    omit?: AttendanceMonthLockOmit<ExtArgs> | null
    /**
     * The data needed to update a AttendanceMonthLock.
     */
    data: XOR<AttendanceMonthLockUpdateInput, AttendanceMonthLockUncheckedUpdateInput>
    /**
     * Choose, which AttendanceMonthLock to update.
     */
    where: AttendanceMonthLockWhereUniqueInput
  }

  /**
   * AttendanceMonthLock updateMany
   */
  export type AttendanceMonthLockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceMonthLocks.
     */
    data: XOR<AttendanceMonthLockUpdateManyMutationInput, AttendanceMonthLockUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceMonthLocks to update
     */
    where?: AttendanceMonthLockWhereInput
    /**
     * Limit how many AttendanceMonthLocks to update.
     */
    limit?: number
  }

  /**
   * AttendanceMonthLock updateManyAndReturn
   */
  export type AttendanceMonthLockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceMonthLock
     */
    select?: AttendanceMonthLockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceMonthLock
     */
    omit?: AttendanceMonthLockOmit<ExtArgs> | null
    /**
     * The data used to update AttendanceMonthLocks.
     */
    data: XOR<AttendanceMonthLockUpdateManyMutationInput, AttendanceMonthLockUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceMonthLocks to update
     */
    where?: AttendanceMonthLockWhereInput
    /**
     * Limit how many AttendanceMonthLocks to update.
     */
    limit?: number
  }

  /**
   * AttendanceMonthLock upsert
   */
  export type AttendanceMonthLockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceMonthLock
     */
    select?: AttendanceMonthLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceMonthLock
     */
    omit?: AttendanceMonthLockOmit<ExtArgs> | null
    /**
     * The filter to search for the AttendanceMonthLock to update in case it exists.
     */
    where: AttendanceMonthLockWhereUniqueInput
    /**
     * In case the AttendanceMonthLock found by the `where` argument doesn't exist, create a new AttendanceMonthLock with this data.
     */
    create: XOR<AttendanceMonthLockCreateInput, AttendanceMonthLockUncheckedCreateInput>
    /**
     * In case the AttendanceMonthLock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceMonthLockUpdateInput, AttendanceMonthLockUncheckedUpdateInput>
  }

  /**
   * AttendanceMonthLock delete
   */
  export type AttendanceMonthLockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceMonthLock
     */
    select?: AttendanceMonthLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceMonthLock
     */
    omit?: AttendanceMonthLockOmit<ExtArgs> | null
    /**
     * Filter which AttendanceMonthLock to delete.
     */
    where: AttendanceMonthLockWhereUniqueInput
  }

  /**
   * AttendanceMonthLock deleteMany
   */
  export type AttendanceMonthLockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceMonthLocks to delete
     */
    where?: AttendanceMonthLockWhereInput
    /**
     * Limit how many AttendanceMonthLocks to delete.
     */
    limit?: number
  }

  /**
   * AttendanceMonthLock without action
   */
  export type AttendanceMonthLockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceMonthLock
     */
    select?: AttendanceMonthLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceMonthLock
     */
    omit?: AttendanceMonthLockOmit<ExtArgs> | null
  }


  /**
   * Model AttendanceAuditLog
   */

  export type AggregateAttendanceAuditLog = {
    _count: AttendanceAuditLogCountAggregateOutputType | null
    _min: AttendanceAuditLogMinAggregateOutputType | null
    _max: AttendanceAuditLogMaxAggregateOutputType | null
  }

  export type AttendanceAuditLogMinAggregateOutputType = {
    id: string | null
    actorId: string | null
    action: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type AttendanceAuditLogMaxAggregateOutputType = {
    id: string | null
    actorId: string | null
    action: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type AttendanceAuditLogCountAggregateOutputType = {
    id: number
    actorId: number
    action: number
    entityId: number
    payload: number
    createdAt: number
    _all: number
  }


  export type AttendanceAuditLogMinAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    entityId?: true
    createdAt?: true
  }

  export type AttendanceAuditLogMaxAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    entityId?: true
    createdAt?: true
  }

  export type AttendanceAuditLogCountAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    entityId?: true
    payload?: true
    createdAt?: true
    _all?: true
  }

  export type AttendanceAuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceAuditLog to aggregate.
     */
    where?: AttendanceAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceAuditLogs to fetch.
     */
    orderBy?: AttendanceAuditLogOrderByWithRelationInput | AttendanceAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttendanceAuditLogs
    **/
    _count?: true | AttendanceAuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceAuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceAuditLogMaxAggregateInputType
  }

  export type GetAttendanceAuditLogAggregateType<T extends AttendanceAuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendanceAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendanceAuditLog[P]>
      : GetScalarType<T[P], AggregateAttendanceAuditLog[P]>
  }




  export type AttendanceAuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceAuditLogWhereInput
    orderBy?: AttendanceAuditLogOrderByWithAggregationInput | AttendanceAuditLogOrderByWithAggregationInput[]
    by: AttendanceAuditLogScalarFieldEnum[] | AttendanceAuditLogScalarFieldEnum
    having?: AttendanceAuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceAuditLogCountAggregateInputType | true
    _min?: AttendanceAuditLogMinAggregateInputType
    _max?: AttendanceAuditLogMaxAggregateInputType
  }

  export type AttendanceAuditLogGroupByOutputType = {
    id: string
    actorId: string
    action: string
    entityId: string
    payload: JsonValue
    createdAt: Date
    _count: AttendanceAuditLogCountAggregateOutputType | null
    _min: AttendanceAuditLogMinAggregateOutputType | null
    _max: AttendanceAuditLogMaxAggregateOutputType | null
  }

  type GetAttendanceAuditLogGroupByPayload<T extends AttendanceAuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceAuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceAuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceAuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceAuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceAuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    entityId?: boolean
    payload?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["attendanceAuditLog"]>

  export type AttendanceAuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    entityId?: boolean
    payload?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["attendanceAuditLog"]>

  export type AttendanceAuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    entityId?: boolean
    payload?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["attendanceAuditLog"]>

  export type AttendanceAuditLogSelectScalar = {
    id?: boolean
    actorId?: boolean
    action?: boolean
    entityId?: boolean
    payload?: boolean
    createdAt?: boolean
  }

  export type AttendanceAuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actorId" | "action" | "entityId" | "payload" | "createdAt", ExtArgs["result"]["attendanceAuditLog"]>

  export type $AttendanceAuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttendanceAuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actorId: string
      action: string
      entityId: string
      payload: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["attendanceAuditLog"]>
    composites: {}
  }

  type AttendanceAuditLogGetPayload<S extends boolean | null | undefined | AttendanceAuditLogDefaultArgs> = $Result.GetResult<Prisma.$AttendanceAuditLogPayload, S>

  type AttendanceAuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceAuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceAuditLogCountAggregateInputType | true
    }

  export interface AttendanceAuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttendanceAuditLog'], meta: { name: 'AttendanceAuditLog' } }
    /**
     * Find zero or one AttendanceAuditLog that matches the filter.
     * @param {AttendanceAuditLogFindUniqueArgs} args - Arguments to find a AttendanceAuditLog
     * @example
     * // Get one AttendanceAuditLog
     * const attendanceAuditLog = await prisma.attendanceAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceAuditLogFindUniqueArgs>(args: SelectSubset<T, AttendanceAuditLogFindUniqueArgs<ExtArgs>>): Prisma__AttendanceAuditLogClient<$Result.GetResult<Prisma.$AttendanceAuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttendanceAuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceAuditLogFindUniqueOrThrowArgs} args - Arguments to find a AttendanceAuditLog
     * @example
     * // Get one AttendanceAuditLog
     * const attendanceAuditLog = await prisma.attendanceAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceAuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceAuditLogClient<$Result.GetResult<Prisma.$AttendanceAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAuditLogFindFirstArgs} args - Arguments to find a AttendanceAuditLog
     * @example
     * // Get one AttendanceAuditLog
     * const attendanceAuditLog = await prisma.attendanceAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceAuditLogFindFirstArgs>(args?: SelectSubset<T, AttendanceAuditLogFindFirstArgs<ExtArgs>>): Prisma__AttendanceAuditLogClient<$Result.GetResult<Prisma.$AttendanceAuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAuditLogFindFirstOrThrowArgs} args - Arguments to find a AttendanceAuditLog
     * @example
     * // Get one AttendanceAuditLog
     * const attendanceAuditLog = await prisma.attendanceAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceAuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceAuditLogClient<$Result.GetResult<Prisma.$AttendanceAuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttendanceAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceAuditLogs
     * const attendanceAuditLogs = await prisma.attendanceAuditLog.findMany()
     * 
     * // Get first 10 AttendanceAuditLogs
     * const attendanceAuditLogs = await prisma.attendanceAuditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceAuditLogWithIdOnly = await prisma.attendanceAuditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceAuditLogFindManyArgs>(args?: SelectSubset<T, AttendanceAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttendanceAuditLog.
     * @param {AttendanceAuditLogCreateArgs} args - Arguments to create a AttendanceAuditLog.
     * @example
     * // Create one AttendanceAuditLog
     * const AttendanceAuditLog = await prisma.attendanceAuditLog.create({
     *   data: {
     *     // ... data to create a AttendanceAuditLog
     *   }
     * })
     * 
     */
    create<T extends AttendanceAuditLogCreateArgs>(args: SelectSubset<T, AttendanceAuditLogCreateArgs<ExtArgs>>): Prisma__AttendanceAuditLogClient<$Result.GetResult<Prisma.$AttendanceAuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttendanceAuditLogs.
     * @param {AttendanceAuditLogCreateManyArgs} args - Arguments to create many AttendanceAuditLogs.
     * @example
     * // Create many AttendanceAuditLogs
     * const attendanceAuditLog = await prisma.attendanceAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceAuditLogCreateManyArgs>(args?: SelectSubset<T, AttendanceAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttendanceAuditLogs and returns the data saved in the database.
     * @param {AttendanceAuditLogCreateManyAndReturnArgs} args - Arguments to create many AttendanceAuditLogs.
     * @example
     * // Create many AttendanceAuditLogs
     * const attendanceAuditLog = await prisma.attendanceAuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttendanceAuditLogs and only return the `id`
     * const attendanceAuditLogWithIdOnly = await prisma.attendanceAuditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceAuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceAuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttendanceAuditLog.
     * @param {AttendanceAuditLogDeleteArgs} args - Arguments to delete one AttendanceAuditLog.
     * @example
     * // Delete one AttendanceAuditLog
     * const AttendanceAuditLog = await prisma.attendanceAuditLog.delete({
     *   where: {
     *     // ... filter to delete one AttendanceAuditLog
     *   }
     * })
     * 
     */
    delete<T extends AttendanceAuditLogDeleteArgs>(args: SelectSubset<T, AttendanceAuditLogDeleteArgs<ExtArgs>>): Prisma__AttendanceAuditLogClient<$Result.GetResult<Prisma.$AttendanceAuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttendanceAuditLog.
     * @param {AttendanceAuditLogUpdateArgs} args - Arguments to update one AttendanceAuditLog.
     * @example
     * // Update one AttendanceAuditLog
     * const attendanceAuditLog = await prisma.attendanceAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceAuditLogUpdateArgs>(args: SelectSubset<T, AttendanceAuditLogUpdateArgs<ExtArgs>>): Prisma__AttendanceAuditLogClient<$Result.GetResult<Prisma.$AttendanceAuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttendanceAuditLogs.
     * @param {AttendanceAuditLogDeleteManyArgs} args - Arguments to filter AttendanceAuditLogs to delete.
     * @example
     * // Delete a few AttendanceAuditLogs
     * const { count } = await prisma.attendanceAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceAuditLogDeleteManyArgs>(args?: SelectSubset<T, AttendanceAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceAuditLogs
     * const attendanceAuditLog = await prisma.attendanceAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceAuditLogUpdateManyArgs>(args: SelectSubset<T, AttendanceAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceAuditLogs and returns the data updated in the database.
     * @param {AttendanceAuditLogUpdateManyAndReturnArgs} args - Arguments to update many AttendanceAuditLogs.
     * @example
     * // Update many AttendanceAuditLogs
     * const attendanceAuditLog = await prisma.attendanceAuditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttendanceAuditLogs and only return the `id`
     * const attendanceAuditLogWithIdOnly = await prisma.attendanceAuditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceAuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceAuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceAuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttendanceAuditLog.
     * @param {AttendanceAuditLogUpsertArgs} args - Arguments to update or create a AttendanceAuditLog.
     * @example
     * // Update or create a AttendanceAuditLog
     * const attendanceAuditLog = await prisma.attendanceAuditLog.upsert({
     *   create: {
     *     // ... data to create a AttendanceAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceAuditLogUpsertArgs>(args: SelectSubset<T, AttendanceAuditLogUpsertArgs<ExtArgs>>): Prisma__AttendanceAuditLogClient<$Result.GetResult<Prisma.$AttendanceAuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttendanceAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAuditLogCountArgs} args - Arguments to filter AttendanceAuditLogs to count.
     * @example
     * // Count the number of AttendanceAuditLogs
     * const count = await prisma.attendanceAuditLog.count({
     *   where: {
     *     // ... the filter for the AttendanceAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AttendanceAuditLogCountArgs>(
      args?: Subset<T, AttendanceAuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceAuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttendanceAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceAuditLogAggregateArgs>(args: Subset<T, AttendanceAuditLogAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAuditLogAggregateType<T>>

    /**
     * Group by AttendanceAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceAuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceAuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceAuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttendanceAuditLog model
   */
  readonly fields: AttendanceAuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttendanceAuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceAuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AttendanceAuditLog model
   */
  interface AttendanceAuditLogFieldRefs {
    readonly id: FieldRef<"AttendanceAuditLog", 'String'>
    readonly actorId: FieldRef<"AttendanceAuditLog", 'String'>
    readonly action: FieldRef<"AttendanceAuditLog", 'String'>
    readonly entityId: FieldRef<"AttendanceAuditLog", 'String'>
    readonly payload: FieldRef<"AttendanceAuditLog", 'Json'>
    readonly createdAt: FieldRef<"AttendanceAuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttendanceAuditLog findUnique
   */
  export type AttendanceAuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceAuditLog
     */
    select?: AttendanceAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceAuditLog
     */
    omit?: AttendanceAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceAuditLog to fetch.
     */
    where: AttendanceAuditLogWhereUniqueInput
  }

  /**
   * AttendanceAuditLog findUniqueOrThrow
   */
  export type AttendanceAuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceAuditLog
     */
    select?: AttendanceAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceAuditLog
     */
    omit?: AttendanceAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceAuditLog to fetch.
     */
    where: AttendanceAuditLogWhereUniqueInput
  }

  /**
   * AttendanceAuditLog findFirst
   */
  export type AttendanceAuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceAuditLog
     */
    select?: AttendanceAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceAuditLog
     */
    omit?: AttendanceAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceAuditLog to fetch.
     */
    where?: AttendanceAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceAuditLogs to fetch.
     */
    orderBy?: AttendanceAuditLogOrderByWithRelationInput | AttendanceAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceAuditLogs.
     */
    cursor?: AttendanceAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceAuditLogs.
     */
    distinct?: AttendanceAuditLogScalarFieldEnum | AttendanceAuditLogScalarFieldEnum[]
  }

  /**
   * AttendanceAuditLog findFirstOrThrow
   */
  export type AttendanceAuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceAuditLog
     */
    select?: AttendanceAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceAuditLog
     */
    omit?: AttendanceAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceAuditLog to fetch.
     */
    where?: AttendanceAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceAuditLogs to fetch.
     */
    orderBy?: AttendanceAuditLogOrderByWithRelationInput | AttendanceAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceAuditLogs.
     */
    cursor?: AttendanceAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceAuditLogs.
     */
    distinct?: AttendanceAuditLogScalarFieldEnum | AttendanceAuditLogScalarFieldEnum[]
  }

  /**
   * AttendanceAuditLog findMany
   */
  export type AttendanceAuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceAuditLog
     */
    select?: AttendanceAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceAuditLog
     */
    omit?: AttendanceAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceAuditLogs to fetch.
     */
    where?: AttendanceAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceAuditLogs to fetch.
     */
    orderBy?: AttendanceAuditLogOrderByWithRelationInput | AttendanceAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttendanceAuditLogs.
     */
    cursor?: AttendanceAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceAuditLogs.
     */
    skip?: number
    distinct?: AttendanceAuditLogScalarFieldEnum | AttendanceAuditLogScalarFieldEnum[]
  }

  /**
   * AttendanceAuditLog create
   */
  export type AttendanceAuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceAuditLog
     */
    select?: AttendanceAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceAuditLog
     */
    omit?: AttendanceAuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AttendanceAuditLog.
     */
    data: XOR<AttendanceAuditLogCreateInput, AttendanceAuditLogUncheckedCreateInput>
  }

  /**
   * AttendanceAuditLog createMany
   */
  export type AttendanceAuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceAuditLogs.
     */
    data: AttendanceAuditLogCreateManyInput | AttendanceAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceAuditLog createManyAndReturn
   */
  export type AttendanceAuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceAuditLog
     */
    select?: AttendanceAuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceAuditLog
     */
    omit?: AttendanceAuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AttendanceAuditLogs.
     */
    data: AttendanceAuditLogCreateManyInput | AttendanceAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceAuditLog update
   */
  export type AttendanceAuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceAuditLog
     */
    select?: AttendanceAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceAuditLog
     */
    omit?: AttendanceAuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AttendanceAuditLog.
     */
    data: XOR<AttendanceAuditLogUpdateInput, AttendanceAuditLogUncheckedUpdateInput>
    /**
     * Choose, which AttendanceAuditLog to update.
     */
    where: AttendanceAuditLogWhereUniqueInput
  }

  /**
   * AttendanceAuditLog updateMany
   */
  export type AttendanceAuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceAuditLogs.
     */
    data: XOR<AttendanceAuditLogUpdateManyMutationInput, AttendanceAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceAuditLogs to update
     */
    where?: AttendanceAuditLogWhereInput
    /**
     * Limit how many AttendanceAuditLogs to update.
     */
    limit?: number
  }

  /**
   * AttendanceAuditLog updateManyAndReturn
   */
  export type AttendanceAuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceAuditLog
     */
    select?: AttendanceAuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceAuditLog
     */
    omit?: AttendanceAuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AttendanceAuditLogs.
     */
    data: XOR<AttendanceAuditLogUpdateManyMutationInput, AttendanceAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceAuditLogs to update
     */
    where?: AttendanceAuditLogWhereInput
    /**
     * Limit how many AttendanceAuditLogs to update.
     */
    limit?: number
  }

  /**
   * AttendanceAuditLog upsert
   */
  export type AttendanceAuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceAuditLog
     */
    select?: AttendanceAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceAuditLog
     */
    omit?: AttendanceAuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AttendanceAuditLog to update in case it exists.
     */
    where: AttendanceAuditLogWhereUniqueInput
    /**
     * In case the AttendanceAuditLog found by the `where` argument doesn't exist, create a new AttendanceAuditLog with this data.
     */
    create: XOR<AttendanceAuditLogCreateInput, AttendanceAuditLogUncheckedCreateInput>
    /**
     * In case the AttendanceAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceAuditLogUpdateInput, AttendanceAuditLogUncheckedUpdateInput>
  }

  /**
   * AttendanceAuditLog delete
   */
  export type AttendanceAuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceAuditLog
     */
    select?: AttendanceAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceAuditLog
     */
    omit?: AttendanceAuditLogOmit<ExtArgs> | null
    /**
     * Filter which AttendanceAuditLog to delete.
     */
    where: AttendanceAuditLogWhereUniqueInput
  }

  /**
   * AttendanceAuditLog deleteMany
   */
  export type AttendanceAuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceAuditLogs to delete
     */
    where?: AttendanceAuditLogWhereInput
    /**
     * Limit how many AttendanceAuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AttendanceAuditLog without action
   */
  export type AttendanceAuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceAuditLog
     */
    select?: AttendanceAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceAuditLog
     */
    omit?: AttendanceAuditLogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AttendanceEventScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    date: 'date',
    eventType: 'eventType',
    status: 'status',
    reason: 'reason',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type AttendanceEventScalarFieldEnum = (typeof AttendanceEventScalarFieldEnum)[keyof typeof AttendanceEventScalarFieldEnum]


  export const AttendanceEventOverrideScalarFieldEnum: {
    id: 'id',
    originalEventId: 'originalEventId',
    action: 'action',
    newEventId: 'newEventId',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type AttendanceEventOverrideScalarFieldEnum = (typeof AttendanceEventOverrideScalarFieldEnum)[keyof typeof AttendanceEventOverrideScalarFieldEnum]


  export const AttendanceMonthLockScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    month: 'month',
    lockedBy: 'lockedBy',
    lockedAt: 'lockedAt'
  };

  export type AttendanceMonthLockScalarFieldEnum = (typeof AttendanceMonthLockScalarFieldEnum)[keyof typeof AttendanceMonthLockScalarFieldEnum]


  export const AttendanceAuditLogScalarFieldEnum: {
    id: 'id',
    actorId: 'actorId',
    action: 'action',
    entityId: 'entityId',
    payload: 'payload',
    createdAt: 'createdAt'
  };

  export type AttendanceAuditLogScalarFieldEnum = (typeof AttendanceAuditLogScalarFieldEnum)[keyof typeof AttendanceAuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AttendanceEventType'
   */
  export type EnumAttendanceEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceEventType'>
    


  /**
   * Reference to a field of type 'AttendanceEventType[]'
   */
  export type ListEnumAttendanceEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceEventType[]'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'AttendanceStatus[]'
   */
  export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>
    


  /**
   * Reference to a field of type 'AttendanceOverrideAction'
   */
  export type EnumAttendanceOverrideActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceOverrideAction'>
    


  /**
   * Reference to a field of type 'AttendanceOverrideAction[]'
   */
  export type ListEnumAttendanceOverrideActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceOverrideAction[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AttendanceEventWhereInput = {
    AND?: AttendanceEventWhereInput | AttendanceEventWhereInput[]
    OR?: AttendanceEventWhereInput[]
    NOT?: AttendanceEventWhereInput | AttendanceEventWhereInput[]
    id?: StringFilter<"AttendanceEvent"> | string
    employeeId?: StringFilter<"AttendanceEvent"> | string
    date?: DateTimeFilter<"AttendanceEvent"> | Date | string
    eventType?: EnumAttendanceEventTypeFilter<"AttendanceEvent"> | $Enums.AttendanceEventType
    status?: EnumAttendanceStatusFilter<"AttendanceEvent"> | $Enums.AttendanceStatus
    reason?: StringNullableFilter<"AttendanceEvent"> | string | null
    createdBy?: StringFilter<"AttendanceEvent"> | string
    createdAt?: DateTimeFilter<"AttendanceEvent"> | Date | string
    overridesOriginal?: AttendanceEventOverrideListRelationFilter
    overridesNew?: AttendanceEventOverrideListRelationFilter
  }

  export type AttendanceEventOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    eventType?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    overridesOriginal?: AttendanceEventOverrideOrderByRelationAggregateInput
    overridesNew?: AttendanceEventOverrideOrderByRelationAggregateInput
  }

  export type AttendanceEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceEventWhereInput | AttendanceEventWhereInput[]
    OR?: AttendanceEventWhereInput[]
    NOT?: AttendanceEventWhereInput | AttendanceEventWhereInput[]
    employeeId?: StringFilter<"AttendanceEvent"> | string
    date?: DateTimeFilter<"AttendanceEvent"> | Date | string
    eventType?: EnumAttendanceEventTypeFilter<"AttendanceEvent"> | $Enums.AttendanceEventType
    status?: EnumAttendanceStatusFilter<"AttendanceEvent"> | $Enums.AttendanceStatus
    reason?: StringNullableFilter<"AttendanceEvent"> | string | null
    createdBy?: StringFilter<"AttendanceEvent"> | string
    createdAt?: DateTimeFilter<"AttendanceEvent"> | Date | string
    overridesOriginal?: AttendanceEventOverrideListRelationFilter
    overridesNew?: AttendanceEventOverrideListRelationFilter
  }, "id">

  export type AttendanceEventOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    eventType?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: AttendanceEventCountOrderByAggregateInput
    _max?: AttendanceEventMaxOrderByAggregateInput
    _min?: AttendanceEventMinOrderByAggregateInput
  }

  export type AttendanceEventScalarWhereWithAggregatesInput = {
    AND?: AttendanceEventScalarWhereWithAggregatesInput | AttendanceEventScalarWhereWithAggregatesInput[]
    OR?: AttendanceEventScalarWhereWithAggregatesInput[]
    NOT?: AttendanceEventScalarWhereWithAggregatesInput | AttendanceEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AttendanceEvent"> | string
    employeeId?: StringWithAggregatesFilter<"AttendanceEvent"> | string
    date?: DateTimeWithAggregatesFilter<"AttendanceEvent"> | Date | string
    eventType?: EnumAttendanceEventTypeWithAggregatesFilter<"AttendanceEvent"> | $Enums.AttendanceEventType
    status?: EnumAttendanceStatusWithAggregatesFilter<"AttendanceEvent"> | $Enums.AttendanceStatus
    reason?: StringNullableWithAggregatesFilter<"AttendanceEvent"> | string | null
    createdBy?: StringWithAggregatesFilter<"AttendanceEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AttendanceEvent"> | Date | string
  }

  export type AttendanceEventOverrideWhereInput = {
    AND?: AttendanceEventOverrideWhereInput | AttendanceEventOverrideWhereInput[]
    OR?: AttendanceEventOverrideWhereInput[]
    NOT?: AttendanceEventOverrideWhereInput | AttendanceEventOverrideWhereInput[]
    id?: StringFilter<"AttendanceEventOverride"> | string
    originalEventId?: StringFilter<"AttendanceEventOverride"> | string
    action?: EnumAttendanceOverrideActionFilter<"AttendanceEventOverride"> | $Enums.AttendanceOverrideAction
    newEventId?: StringNullableFilter<"AttendanceEventOverride"> | string | null
    createdBy?: StringFilter<"AttendanceEventOverride"> | string
    createdAt?: DateTimeFilter<"AttendanceEventOverride"> | Date | string
    originalEvent?: XOR<AttendanceEventScalarRelationFilter, AttendanceEventWhereInput>
    newEvent?: XOR<AttendanceEventNullableScalarRelationFilter, AttendanceEventWhereInput> | null
  }

  export type AttendanceEventOverrideOrderByWithRelationInput = {
    id?: SortOrder
    originalEventId?: SortOrder
    action?: SortOrder
    newEventId?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    originalEvent?: AttendanceEventOrderByWithRelationInput
    newEvent?: AttendanceEventOrderByWithRelationInput
  }

  export type AttendanceEventOverrideWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceEventOverrideWhereInput | AttendanceEventOverrideWhereInput[]
    OR?: AttendanceEventOverrideWhereInput[]
    NOT?: AttendanceEventOverrideWhereInput | AttendanceEventOverrideWhereInput[]
    originalEventId?: StringFilter<"AttendanceEventOverride"> | string
    action?: EnumAttendanceOverrideActionFilter<"AttendanceEventOverride"> | $Enums.AttendanceOverrideAction
    newEventId?: StringNullableFilter<"AttendanceEventOverride"> | string | null
    createdBy?: StringFilter<"AttendanceEventOverride"> | string
    createdAt?: DateTimeFilter<"AttendanceEventOverride"> | Date | string
    originalEvent?: XOR<AttendanceEventScalarRelationFilter, AttendanceEventWhereInput>
    newEvent?: XOR<AttendanceEventNullableScalarRelationFilter, AttendanceEventWhereInput> | null
  }, "id">

  export type AttendanceEventOverrideOrderByWithAggregationInput = {
    id?: SortOrder
    originalEventId?: SortOrder
    action?: SortOrder
    newEventId?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: AttendanceEventOverrideCountOrderByAggregateInput
    _max?: AttendanceEventOverrideMaxOrderByAggregateInput
    _min?: AttendanceEventOverrideMinOrderByAggregateInput
  }

  export type AttendanceEventOverrideScalarWhereWithAggregatesInput = {
    AND?: AttendanceEventOverrideScalarWhereWithAggregatesInput | AttendanceEventOverrideScalarWhereWithAggregatesInput[]
    OR?: AttendanceEventOverrideScalarWhereWithAggregatesInput[]
    NOT?: AttendanceEventOverrideScalarWhereWithAggregatesInput | AttendanceEventOverrideScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AttendanceEventOverride"> | string
    originalEventId?: StringWithAggregatesFilter<"AttendanceEventOverride"> | string
    action?: EnumAttendanceOverrideActionWithAggregatesFilter<"AttendanceEventOverride"> | $Enums.AttendanceOverrideAction
    newEventId?: StringNullableWithAggregatesFilter<"AttendanceEventOverride"> | string | null
    createdBy?: StringWithAggregatesFilter<"AttendanceEventOverride"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AttendanceEventOverride"> | Date | string
  }

  export type AttendanceMonthLockWhereInput = {
    AND?: AttendanceMonthLockWhereInput | AttendanceMonthLockWhereInput[]
    OR?: AttendanceMonthLockWhereInput[]
    NOT?: AttendanceMonthLockWhereInput | AttendanceMonthLockWhereInput[]
    id?: StringFilter<"AttendanceMonthLock"> | string
    employeeId?: StringFilter<"AttendanceMonthLock"> | string
    month?: StringFilter<"AttendanceMonthLock"> | string
    lockedBy?: StringFilter<"AttendanceMonthLock"> | string
    lockedAt?: DateTimeFilter<"AttendanceMonthLock"> | Date | string
  }

  export type AttendanceMonthLockOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    month?: SortOrder
    lockedBy?: SortOrder
    lockedAt?: SortOrder
  }

  export type AttendanceMonthLockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeeId_month?: AttendanceMonthLockEmployeeIdMonthCompoundUniqueInput
    AND?: AttendanceMonthLockWhereInput | AttendanceMonthLockWhereInput[]
    OR?: AttendanceMonthLockWhereInput[]
    NOT?: AttendanceMonthLockWhereInput | AttendanceMonthLockWhereInput[]
    employeeId?: StringFilter<"AttendanceMonthLock"> | string
    month?: StringFilter<"AttendanceMonthLock"> | string
    lockedBy?: StringFilter<"AttendanceMonthLock"> | string
    lockedAt?: DateTimeFilter<"AttendanceMonthLock"> | Date | string
  }, "id" | "employeeId_month">

  export type AttendanceMonthLockOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    month?: SortOrder
    lockedBy?: SortOrder
    lockedAt?: SortOrder
    _count?: AttendanceMonthLockCountOrderByAggregateInput
    _max?: AttendanceMonthLockMaxOrderByAggregateInput
    _min?: AttendanceMonthLockMinOrderByAggregateInput
  }

  export type AttendanceMonthLockScalarWhereWithAggregatesInput = {
    AND?: AttendanceMonthLockScalarWhereWithAggregatesInput | AttendanceMonthLockScalarWhereWithAggregatesInput[]
    OR?: AttendanceMonthLockScalarWhereWithAggregatesInput[]
    NOT?: AttendanceMonthLockScalarWhereWithAggregatesInput | AttendanceMonthLockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AttendanceMonthLock"> | string
    employeeId?: StringWithAggregatesFilter<"AttendanceMonthLock"> | string
    month?: StringWithAggregatesFilter<"AttendanceMonthLock"> | string
    lockedBy?: StringWithAggregatesFilter<"AttendanceMonthLock"> | string
    lockedAt?: DateTimeWithAggregatesFilter<"AttendanceMonthLock"> | Date | string
  }

  export type AttendanceAuditLogWhereInput = {
    AND?: AttendanceAuditLogWhereInput | AttendanceAuditLogWhereInput[]
    OR?: AttendanceAuditLogWhereInput[]
    NOT?: AttendanceAuditLogWhereInput | AttendanceAuditLogWhereInput[]
    id?: StringFilter<"AttendanceAuditLog"> | string
    actorId?: StringFilter<"AttendanceAuditLog"> | string
    action?: StringFilter<"AttendanceAuditLog"> | string
    entityId?: StringFilter<"AttendanceAuditLog"> | string
    payload?: JsonFilter<"AttendanceAuditLog">
    createdAt?: DateTimeFilter<"AttendanceAuditLog"> | Date | string
  }

  export type AttendanceAuditLogOrderByWithRelationInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceAuditLogWhereInput | AttendanceAuditLogWhereInput[]
    OR?: AttendanceAuditLogWhereInput[]
    NOT?: AttendanceAuditLogWhereInput | AttendanceAuditLogWhereInput[]
    actorId?: StringFilter<"AttendanceAuditLog"> | string
    action?: StringFilter<"AttendanceAuditLog"> | string
    entityId?: StringFilter<"AttendanceAuditLog"> | string
    payload?: JsonFilter<"AttendanceAuditLog">
    createdAt?: DateTimeFilter<"AttendanceAuditLog"> | Date | string
  }, "id">

  export type AttendanceAuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
    _count?: AttendanceAuditLogCountOrderByAggregateInput
    _max?: AttendanceAuditLogMaxOrderByAggregateInput
    _min?: AttendanceAuditLogMinOrderByAggregateInput
  }

  export type AttendanceAuditLogScalarWhereWithAggregatesInput = {
    AND?: AttendanceAuditLogScalarWhereWithAggregatesInput | AttendanceAuditLogScalarWhereWithAggregatesInput[]
    OR?: AttendanceAuditLogScalarWhereWithAggregatesInput[]
    NOT?: AttendanceAuditLogScalarWhereWithAggregatesInput | AttendanceAuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AttendanceAuditLog"> | string
    actorId?: StringWithAggregatesFilter<"AttendanceAuditLog"> | string
    action?: StringWithAggregatesFilter<"AttendanceAuditLog"> | string
    entityId?: StringWithAggregatesFilter<"AttendanceAuditLog"> | string
    payload?: JsonWithAggregatesFilter<"AttendanceAuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AttendanceAuditLog"> | Date | string
  }

  export type AttendanceEventCreateInput = {
    id?: string
    employeeId: string
    date: Date | string
    eventType: $Enums.AttendanceEventType
    status?: $Enums.AttendanceStatus
    reason?: string | null
    createdBy: string
    createdAt?: Date | string
    overridesOriginal?: AttendanceEventOverrideCreateNestedManyWithoutOriginalEventInput
    overridesNew?: AttendanceEventOverrideCreateNestedManyWithoutNewEventInput
  }

  export type AttendanceEventUncheckedCreateInput = {
    id?: string
    employeeId: string
    date: Date | string
    eventType: $Enums.AttendanceEventType
    status?: $Enums.AttendanceStatus
    reason?: string | null
    createdBy: string
    createdAt?: Date | string
    overridesOriginal?: AttendanceEventOverrideUncheckedCreateNestedManyWithoutOriginalEventInput
    overridesNew?: AttendanceEventOverrideUncheckedCreateNestedManyWithoutNewEventInput
  }

  export type AttendanceEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumAttendanceEventTypeFieldUpdateOperationsInput | $Enums.AttendanceEventType
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overridesOriginal?: AttendanceEventOverrideUpdateManyWithoutOriginalEventNestedInput
    overridesNew?: AttendanceEventOverrideUpdateManyWithoutNewEventNestedInput
  }

  export type AttendanceEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumAttendanceEventTypeFieldUpdateOperationsInput | $Enums.AttendanceEventType
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overridesOriginal?: AttendanceEventOverrideUncheckedUpdateManyWithoutOriginalEventNestedInput
    overridesNew?: AttendanceEventOverrideUncheckedUpdateManyWithoutNewEventNestedInput
  }

  export type AttendanceEventCreateManyInput = {
    id?: string
    employeeId: string
    date: Date | string
    eventType: $Enums.AttendanceEventType
    status?: $Enums.AttendanceStatus
    reason?: string | null
    createdBy: string
    createdAt?: Date | string
  }

  export type AttendanceEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumAttendanceEventTypeFieldUpdateOperationsInput | $Enums.AttendanceEventType
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumAttendanceEventTypeFieldUpdateOperationsInput | $Enums.AttendanceEventType
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceEventOverrideCreateInput = {
    id?: string
    action: $Enums.AttendanceOverrideAction
    createdBy: string
    createdAt?: Date | string
    originalEvent: AttendanceEventCreateNestedOneWithoutOverridesOriginalInput
    newEvent?: AttendanceEventCreateNestedOneWithoutOverridesNewInput
  }

  export type AttendanceEventOverrideUncheckedCreateInput = {
    id?: string
    originalEventId: string
    action: $Enums.AttendanceOverrideAction
    newEventId?: string | null
    createdBy: string
    createdAt?: Date | string
  }

  export type AttendanceEventOverrideUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAttendanceOverrideActionFieldUpdateOperationsInput | $Enums.AttendanceOverrideAction
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalEvent?: AttendanceEventUpdateOneRequiredWithoutOverridesOriginalNestedInput
    newEvent?: AttendanceEventUpdateOneWithoutOverridesNewNestedInput
  }

  export type AttendanceEventOverrideUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalEventId?: StringFieldUpdateOperationsInput | string
    action?: EnumAttendanceOverrideActionFieldUpdateOperationsInput | $Enums.AttendanceOverrideAction
    newEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceEventOverrideCreateManyInput = {
    id?: string
    originalEventId: string
    action: $Enums.AttendanceOverrideAction
    newEventId?: string | null
    createdBy: string
    createdAt?: Date | string
  }

  export type AttendanceEventOverrideUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAttendanceOverrideActionFieldUpdateOperationsInput | $Enums.AttendanceOverrideAction
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceEventOverrideUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalEventId?: StringFieldUpdateOperationsInput | string
    action?: EnumAttendanceOverrideActionFieldUpdateOperationsInput | $Enums.AttendanceOverrideAction
    newEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceMonthLockCreateInput = {
    id?: string
    employeeId: string
    month: string
    lockedBy: string
    lockedAt?: Date | string
  }

  export type AttendanceMonthLockUncheckedCreateInput = {
    id?: string
    employeeId: string
    month: string
    lockedBy: string
    lockedAt?: Date | string
  }

  export type AttendanceMonthLockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    lockedBy?: StringFieldUpdateOperationsInput | string
    lockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceMonthLockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    lockedBy?: StringFieldUpdateOperationsInput | string
    lockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceMonthLockCreateManyInput = {
    id?: string
    employeeId: string
    month: string
    lockedBy: string
    lockedAt?: Date | string
  }

  export type AttendanceMonthLockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    lockedBy?: StringFieldUpdateOperationsInput | string
    lockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceMonthLockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    month?: StringFieldUpdateOperationsInput | string
    lockedBy?: StringFieldUpdateOperationsInput | string
    lockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceAuditLogCreateInput = {
    id?: string
    actorId: string
    action: string
    entityId: string
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AttendanceAuditLogUncheckedCreateInput = {
    id?: string
    actorId: string
    action: string
    entityId: string
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AttendanceAuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceAuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceAuditLogCreateManyInput = {
    id?: string
    actorId: string
    action: string
    entityId: string
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AttendanceAuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceAuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumAttendanceEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceEventType | EnumAttendanceEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceEventType[] | ListEnumAttendanceEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceEventType[] | ListEnumAttendanceEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceEventTypeFilter<$PrismaModel> | $Enums.AttendanceEventType
  }

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AttendanceEventOverrideListRelationFilter = {
    every?: AttendanceEventOverrideWhereInput
    some?: AttendanceEventOverrideWhereInput
    none?: AttendanceEventOverrideWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AttendanceEventOverrideOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceEventCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    eventType?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceEventMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    eventType?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceEventMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    eventType?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumAttendanceEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceEventType | EnumAttendanceEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceEventType[] | ListEnumAttendanceEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceEventType[] | ListEnumAttendanceEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceEventTypeFilter<$PrismaModel>
    _max?: NestedEnumAttendanceEventTypeFilter<$PrismaModel>
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumAttendanceOverrideActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceOverrideAction | EnumAttendanceOverrideActionFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceOverrideAction[] | ListEnumAttendanceOverrideActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceOverrideAction[] | ListEnumAttendanceOverrideActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceOverrideActionFilter<$PrismaModel> | $Enums.AttendanceOverrideAction
  }

  export type AttendanceEventScalarRelationFilter = {
    is?: AttendanceEventWhereInput
    isNot?: AttendanceEventWhereInput
  }

  export type AttendanceEventNullableScalarRelationFilter = {
    is?: AttendanceEventWhereInput | null
    isNot?: AttendanceEventWhereInput | null
  }

  export type AttendanceEventOverrideCountOrderByAggregateInput = {
    id?: SortOrder
    originalEventId?: SortOrder
    action?: SortOrder
    newEventId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceEventOverrideMaxOrderByAggregateInput = {
    id?: SortOrder
    originalEventId?: SortOrder
    action?: SortOrder
    newEventId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceEventOverrideMinOrderByAggregateInput = {
    id?: SortOrder
    originalEventId?: SortOrder
    action?: SortOrder
    newEventId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAttendanceOverrideActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceOverrideAction | EnumAttendanceOverrideActionFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceOverrideAction[] | ListEnumAttendanceOverrideActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceOverrideAction[] | ListEnumAttendanceOverrideActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceOverrideActionWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceOverrideAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceOverrideActionFilter<$PrismaModel>
    _max?: NestedEnumAttendanceOverrideActionFilter<$PrismaModel>
  }

  export type AttendanceMonthLockEmployeeIdMonthCompoundUniqueInput = {
    employeeId: string
    month: string
  }

  export type AttendanceMonthLockCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    month?: SortOrder
    lockedBy?: SortOrder
    lockedAt?: SortOrder
  }

  export type AttendanceMonthLockMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    month?: SortOrder
    lockedBy?: SortOrder
    lockedAt?: SortOrder
  }

  export type AttendanceMonthLockMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    month?: SortOrder
    lockedBy?: SortOrder
    lockedAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AttendanceAuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceAuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceAuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type AttendanceEventOverrideCreateNestedManyWithoutOriginalEventInput = {
    create?: XOR<AttendanceEventOverrideCreateWithoutOriginalEventInput, AttendanceEventOverrideUncheckedCreateWithoutOriginalEventInput> | AttendanceEventOverrideCreateWithoutOriginalEventInput[] | AttendanceEventOverrideUncheckedCreateWithoutOriginalEventInput[]
    connectOrCreate?: AttendanceEventOverrideCreateOrConnectWithoutOriginalEventInput | AttendanceEventOverrideCreateOrConnectWithoutOriginalEventInput[]
    createMany?: AttendanceEventOverrideCreateManyOriginalEventInputEnvelope
    connect?: AttendanceEventOverrideWhereUniqueInput | AttendanceEventOverrideWhereUniqueInput[]
  }

  export type AttendanceEventOverrideCreateNestedManyWithoutNewEventInput = {
    create?: XOR<AttendanceEventOverrideCreateWithoutNewEventInput, AttendanceEventOverrideUncheckedCreateWithoutNewEventInput> | AttendanceEventOverrideCreateWithoutNewEventInput[] | AttendanceEventOverrideUncheckedCreateWithoutNewEventInput[]
    connectOrCreate?: AttendanceEventOverrideCreateOrConnectWithoutNewEventInput | AttendanceEventOverrideCreateOrConnectWithoutNewEventInput[]
    createMany?: AttendanceEventOverrideCreateManyNewEventInputEnvelope
    connect?: AttendanceEventOverrideWhereUniqueInput | AttendanceEventOverrideWhereUniqueInput[]
  }

  export type AttendanceEventOverrideUncheckedCreateNestedManyWithoutOriginalEventInput = {
    create?: XOR<AttendanceEventOverrideCreateWithoutOriginalEventInput, AttendanceEventOverrideUncheckedCreateWithoutOriginalEventInput> | AttendanceEventOverrideCreateWithoutOriginalEventInput[] | AttendanceEventOverrideUncheckedCreateWithoutOriginalEventInput[]
    connectOrCreate?: AttendanceEventOverrideCreateOrConnectWithoutOriginalEventInput | AttendanceEventOverrideCreateOrConnectWithoutOriginalEventInput[]
    createMany?: AttendanceEventOverrideCreateManyOriginalEventInputEnvelope
    connect?: AttendanceEventOverrideWhereUniqueInput | AttendanceEventOverrideWhereUniqueInput[]
  }

  export type AttendanceEventOverrideUncheckedCreateNestedManyWithoutNewEventInput = {
    create?: XOR<AttendanceEventOverrideCreateWithoutNewEventInput, AttendanceEventOverrideUncheckedCreateWithoutNewEventInput> | AttendanceEventOverrideCreateWithoutNewEventInput[] | AttendanceEventOverrideUncheckedCreateWithoutNewEventInput[]
    connectOrCreate?: AttendanceEventOverrideCreateOrConnectWithoutNewEventInput | AttendanceEventOverrideCreateOrConnectWithoutNewEventInput[]
    createMany?: AttendanceEventOverrideCreateManyNewEventInputEnvelope
    connect?: AttendanceEventOverrideWhereUniqueInput | AttendanceEventOverrideWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumAttendanceEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceEventType
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AttendanceEventOverrideUpdateManyWithoutOriginalEventNestedInput = {
    create?: XOR<AttendanceEventOverrideCreateWithoutOriginalEventInput, AttendanceEventOverrideUncheckedCreateWithoutOriginalEventInput> | AttendanceEventOverrideCreateWithoutOriginalEventInput[] | AttendanceEventOverrideUncheckedCreateWithoutOriginalEventInput[]
    connectOrCreate?: AttendanceEventOverrideCreateOrConnectWithoutOriginalEventInput | AttendanceEventOverrideCreateOrConnectWithoutOriginalEventInput[]
    upsert?: AttendanceEventOverrideUpsertWithWhereUniqueWithoutOriginalEventInput | AttendanceEventOverrideUpsertWithWhereUniqueWithoutOriginalEventInput[]
    createMany?: AttendanceEventOverrideCreateManyOriginalEventInputEnvelope
    set?: AttendanceEventOverrideWhereUniqueInput | AttendanceEventOverrideWhereUniqueInput[]
    disconnect?: AttendanceEventOverrideWhereUniqueInput | AttendanceEventOverrideWhereUniqueInput[]
    delete?: AttendanceEventOverrideWhereUniqueInput | AttendanceEventOverrideWhereUniqueInput[]
    connect?: AttendanceEventOverrideWhereUniqueInput | AttendanceEventOverrideWhereUniqueInput[]
    update?: AttendanceEventOverrideUpdateWithWhereUniqueWithoutOriginalEventInput | AttendanceEventOverrideUpdateWithWhereUniqueWithoutOriginalEventInput[]
    updateMany?: AttendanceEventOverrideUpdateManyWithWhereWithoutOriginalEventInput | AttendanceEventOverrideUpdateManyWithWhereWithoutOriginalEventInput[]
    deleteMany?: AttendanceEventOverrideScalarWhereInput | AttendanceEventOverrideScalarWhereInput[]
  }

  export type AttendanceEventOverrideUpdateManyWithoutNewEventNestedInput = {
    create?: XOR<AttendanceEventOverrideCreateWithoutNewEventInput, AttendanceEventOverrideUncheckedCreateWithoutNewEventInput> | AttendanceEventOverrideCreateWithoutNewEventInput[] | AttendanceEventOverrideUncheckedCreateWithoutNewEventInput[]
    connectOrCreate?: AttendanceEventOverrideCreateOrConnectWithoutNewEventInput | AttendanceEventOverrideCreateOrConnectWithoutNewEventInput[]
    upsert?: AttendanceEventOverrideUpsertWithWhereUniqueWithoutNewEventInput | AttendanceEventOverrideUpsertWithWhereUniqueWithoutNewEventInput[]
    createMany?: AttendanceEventOverrideCreateManyNewEventInputEnvelope
    set?: AttendanceEventOverrideWhereUniqueInput | AttendanceEventOverrideWhereUniqueInput[]
    disconnect?: AttendanceEventOverrideWhereUniqueInput | AttendanceEventOverrideWhereUniqueInput[]
    delete?: AttendanceEventOverrideWhereUniqueInput | AttendanceEventOverrideWhereUniqueInput[]
    connect?: AttendanceEventOverrideWhereUniqueInput | AttendanceEventOverrideWhereUniqueInput[]
    update?: AttendanceEventOverrideUpdateWithWhereUniqueWithoutNewEventInput | AttendanceEventOverrideUpdateWithWhereUniqueWithoutNewEventInput[]
    updateMany?: AttendanceEventOverrideUpdateManyWithWhereWithoutNewEventInput | AttendanceEventOverrideUpdateManyWithWhereWithoutNewEventInput[]
    deleteMany?: AttendanceEventOverrideScalarWhereInput | AttendanceEventOverrideScalarWhereInput[]
  }

  export type AttendanceEventOverrideUncheckedUpdateManyWithoutOriginalEventNestedInput = {
    create?: XOR<AttendanceEventOverrideCreateWithoutOriginalEventInput, AttendanceEventOverrideUncheckedCreateWithoutOriginalEventInput> | AttendanceEventOverrideCreateWithoutOriginalEventInput[] | AttendanceEventOverrideUncheckedCreateWithoutOriginalEventInput[]
    connectOrCreate?: AttendanceEventOverrideCreateOrConnectWithoutOriginalEventInput | AttendanceEventOverrideCreateOrConnectWithoutOriginalEventInput[]
    upsert?: AttendanceEventOverrideUpsertWithWhereUniqueWithoutOriginalEventInput | AttendanceEventOverrideUpsertWithWhereUniqueWithoutOriginalEventInput[]
    createMany?: AttendanceEventOverrideCreateManyOriginalEventInputEnvelope
    set?: AttendanceEventOverrideWhereUniqueInput | AttendanceEventOverrideWhereUniqueInput[]
    disconnect?: AttendanceEventOverrideWhereUniqueInput | AttendanceEventOverrideWhereUniqueInput[]
    delete?: AttendanceEventOverrideWhereUniqueInput | AttendanceEventOverrideWhereUniqueInput[]
    connect?: AttendanceEventOverrideWhereUniqueInput | AttendanceEventOverrideWhereUniqueInput[]
    update?: AttendanceEventOverrideUpdateWithWhereUniqueWithoutOriginalEventInput | AttendanceEventOverrideUpdateWithWhereUniqueWithoutOriginalEventInput[]
    updateMany?: AttendanceEventOverrideUpdateManyWithWhereWithoutOriginalEventInput | AttendanceEventOverrideUpdateManyWithWhereWithoutOriginalEventInput[]
    deleteMany?: AttendanceEventOverrideScalarWhereInput | AttendanceEventOverrideScalarWhereInput[]
  }

  export type AttendanceEventOverrideUncheckedUpdateManyWithoutNewEventNestedInput = {
    create?: XOR<AttendanceEventOverrideCreateWithoutNewEventInput, AttendanceEventOverrideUncheckedCreateWithoutNewEventInput> | AttendanceEventOverrideCreateWithoutNewEventInput[] | AttendanceEventOverrideUncheckedCreateWithoutNewEventInput[]
    connectOrCreate?: AttendanceEventOverrideCreateOrConnectWithoutNewEventInput | AttendanceEventOverrideCreateOrConnectWithoutNewEventInput[]
    upsert?: AttendanceEventOverrideUpsertWithWhereUniqueWithoutNewEventInput | AttendanceEventOverrideUpsertWithWhereUniqueWithoutNewEventInput[]
    createMany?: AttendanceEventOverrideCreateManyNewEventInputEnvelope
    set?: AttendanceEventOverrideWhereUniqueInput | AttendanceEventOverrideWhereUniqueInput[]
    disconnect?: AttendanceEventOverrideWhereUniqueInput | AttendanceEventOverrideWhereUniqueInput[]
    delete?: AttendanceEventOverrideWhereUniqueInput | AttendanceEventOverrideWhereUniqueInput[]
    connect?: AttendanceEventOverrideWhereUniqueInput | AttendanceEventOverrideWhereUniqueInput[]
    update?: AttendanceEventOverrideUpdateWithWhereUniqueWithoutNewEventInput | AttendanceEventOverrideUpdateWithWhereUniqueWithoutNewEventInput[]
    updateMany?: AttendanceEventOverrideUpdateManyWithWhereWithoutNewEventInput | AttendanceEventOverrideUpdateManyWithWhereWithoutNewEventInput[]
    deleteMany?: AttendanceEventOverrideScalarWhereInput | AttendanceEventOverrideScalarWhereInput[]
  }

  export type AttendanceEventCreateNestedOneWithoutOverridesOriginalInput = {
    create?: XOR<AttendanceEventCreateWithoutOverridesOriginalInput, AttendanceEventUncheckedCreateWithoutOverridesOriginalInput>
    connectOrCreate?: AttendanceEventCreateOrConnectWithoutOverridesOriginalInput
    connect?: AttendanceEventWhereUniqueInput
  }

  export type AttendanceEventCreateNestedOneWithoutOverridesNewInput = {
    create?: XOR<AttendanceEventCreateWithoutOverridesNewInput, AttendanceEventUncheckedCreateWithoutOverridesNewInput>
    connectOrCreate?: AttendanceEventCreateOrConnectWithoutOverridesNewInput
    connect?: AttendanceEventWhereUniqueInput
  }

  export type EnumAttendanceOverrideActionFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceOverrideAction
  }

  export type AttendanceEventUpdateOneRequiredWithoutOverridesOriginalNestedInput = {
    create?: XOR<AttendanceEventCreateWithoutOverridesOriginalInput, AttendanceEventUncheckedCreateWithoutOverridesOriginalInput>
    connectOrCreate?: AttendanceEventCreateOrConnectWithoutOverridesOriginalInput
    upsert?: AttendanceEventUpsertWithoutOverridesOriginalInput
    connect?: AttendanceEventWhereUniqueInput
    update?: XOR<XOR<AttendanceEventUpdateToOneWithWhereWithoutOverridesOriginalInput, AttendanceEventUpdateWithoutOverridesOriginalInput>, AttendanceEventUncheckedUpdateWithoutOverridesOriginalInput>
  }

  export type AttendanceEventUpdateOneWithoutOverridesNewNestedInput = {
    create?: XOR<AttendanceEventCreateWithoutOverridesNewInput, AttendanceEventUncheckedCreateWithoutOverridesNewInput>
    connectOrCreate?: AttendanceEventCreateOrConnectWithoutOverridesNewInput
    upsert?: AttendanceEventUpsertWithoutOverridesNewInput
    disconnect?: AttendanceEventWhereInput | boolean
    delete?: AttendanceEventWhereInput | boolean
    connect?: AttendanceEventWhereUniqueInput
    update?: XOR<XOR<AttendanceEventUpdateToOneWithWhereWithoutOverridesNewInput, AttendanceEventUpdateWithoutOverridesNewInput>, AttendanceEventUncheckedUpdateWithoutOverridesNewInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumAttendanceEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceEventType | EnumAttendanceEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceEventType[] | ListEnumAttendanceEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceEventType[] | ListEnumAttendanceEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceEventTypeFilter<$PrismaModel> | $Enums.AttendanceEventType
  }

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceEventType | EnumAttendanceEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceEventType[] | ListEnumAttendanceEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceEventType[] | ListEnumAttendanceEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceEventTypeFilter<$PrismaModel>
    _max?: NestedEnumAttendanceEventTypeFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAttendanceOverrideActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceOverrideAction | EnumAttendanceOverrideActionFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceOverrideAction[] | ListEnumAttendanceOverrideActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceOverrideAction[] | ListEnumAttendanceOverrideActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceOverrideActionFilter<$PrismaModel> | $Enums.AttendanceOverrideAction
  }

  export type NestedEnumAttendanceOverrideActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceOverrideAction | EnumAttendanceOverrideActionFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceOverrideAction[] | ListEnumAttendanceOverrideActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceOverrideAction[] | ListEnumAttendanceOverrideActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceOverrideActionWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceOverrideAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceOverrideActionFilter<$PrismaModel>
    _max?: NestedEnumAttendanceOverrideActionFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AttendanceEventOverrideCreateWithoutOriginalEventInput = {
    id?: string
    action: $Enums.AttendanceOverrideAction
    createdBy: string
    createdAt?: Date | string
    newEvent?: AttendanceEventCreateNestedOneWithoutOverridesNewInput
  }

  export type AttendanceEventOverrideUncheckedCreateWithoutOriginalEventInput = {
    id?: string
    action: $Enums.AttendanceOverrideAction
    newEventId?: string | null
    createdBy: string
    createdAt?: Date | string
  }

  export type AttendanceEventOverrideCreateOrConnectWithoutOriginalEventInput = {
    where: AttendanceEventOverrideWhereUniqueInput
    create: XOR<AttendanceEventOverrideCreateWithoutOriginalEventInput, AttendanceEventOverrideUncheckedCreateWithoutOriginalEventInput>
  }

  export type AttendanceEventOverrideCreateManyOriginalEventInputEnvelope = {
    data: AttendanceEventOverrideCreateManyOriginalEventInput | AttendanceEventOverrideCreateManyOriginalEventInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceEventOverrideCreateWithoutNewEventInput = {
    id?: string
    action: $Enums.AttendanceOverrideAction
    createdBy: string
    createdAt?: Date | string
    originalEvent: AttendanceEventCreateNestedOneWithoutOverridesOriginalInput
  }

  export type AttendanceEventOverrideUncheckedCreateWithoutNewEventInput = {
    id?: string
    originalEventId: string
    action: $Enums.AttendanceOverrideAction
    createdBy: string
    createdAt?: Date | string
  }

  export type AttendanceEventOverrideCreateOrConnectWithoutNewEventInput = {
    where: AttendanceEventOverrideWhereUniqueInput
    create: XOR<AttendanceEventOverrideCreateWithoutNewEventInput, AttendanceEventOverrideUncheckedCreateWithoutNewEventInput>
  }

  export type AttendanceEventOverrideCreateManyNewEventInputEnvelope = {
    data: AttendanceEventOverrideCreateManyNewEventInput | AttendanceEventOverrideCreateManyNewEventInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceEventOverrideUpsertWithWhereUniqueWithoutOriginalEventInput = {
    where: AttendanceEventOverrideWhereUniqueInput
    update: XOR<AttendanceEventOverrideUpdateWithoutOriginalEventInput, AttendanceEventOverrideUncheckedUpdateWithoutOriginalEventInput>
    create: XOR<AttendanceEventOverrideCreateWithoutOriginalEventInput, AttendanceEventOverrideUncheckedCreateWithoutOriginalEventInput>
  }

  export type AttendanceEventOverrideUpdateWithWhereUniqueWithoutOriginalEventInput = {
    where: AttendanceEventOverrideWhereUniqueInput
    data: XOR<AttendanceEventOverrideUpdateWithoutOriginalEventInput, AttendanceEventOverrideUncheckedUpdateWithoutOriginalEventInput>
  }

  export type AttendanceEventOverrideUpdateManyWithWhereWithoutOriginalEventInput = {
    where: AttendanceEventOverrideScalarWhereInput
    data: XOR<AttendanceEventOverrideUpdateManyMutationInput, AttendanceEventOverrideUncheckedUpdateManyWithoutOriginalEventInput>
  }

  export type AttendanceEventOverrideScalarWhereInput = {
    AND?: AttendanceEventOverrideScalarWhereInput | AttendanceEventOverrideScalarWhereInput[]
    OR?: AttendanceEventOverrideScalarWhereInput[]
    NOT?: AttendanceEventOverrideScalarWhereInput | AttendanceEventOverrideScalarWhereInput[]
    id?: StringFilter<"AttendanceEventOverride"> | string
    originalEventId?: StringFilter<"AttendanceEventOverride"> | string
    action?: EnumAttendanceOverrideActionFilter<"AttendanceEventOverride"> | $Enums.AttendanceOverrideAction
    newEventId?: StringNullableFilter<"AttendanceEventOverride"> | string | null
    createdBy?: StringFilter<"AttendanceEventOverride"> | string
    createdAt?: DateTimeFilter<"AttendanceEventOverride"> | Date | string
  }

  export type AttendanceEventOverrideUpsertWithWhereUniqueWithoutNewEventInput = {
    where: AttendanceEventOverrideWhereUniqueInput
    update: XOR<AttendanceEventOverrideUpdateWithoutNewEventInput, AttendanceEventOverrideUncheckedUpdateWithoutNewEventInput>
    create: XOR<AttendanceEventOverrideCreateWithoutNewEventInput, AttendanceEventOverrideUncheckedCreateWithoutNewEventInput>
  }

  export type AttendanceEventOverrideUpdateWithWhereUniqueWithoutNewEventInput = {
    where: AttendanceEventOverrideWhereUniqueInput
    data: XOR<AttendanceEventOverrideUpdateWithoutNewEventInput, AttendanceEventOverrideUncheckedUpdateWithoutNewEventInput>
  }

  export type AttendanceEventOverrideUpdateManyWithWhereWithoutNewEventInput = {
    where: AttendanceEventOverrideScalarWhereInput
    data: XOR<AttendanceEventOverrideUpdateManyMutationInput, AttendanceEventOverrideUncheckedUpdateManyWithoutNewEventInput>
  }

  export type AttendanceEventCreateWithoutOverridesOriginalInput = {
    id?: string
    employeeId: string
    date: Date | string
    eventType: $Enums.AttendanceEventType
    status?: $Enums.AttendanceStatus
    reason?: string | null
    createdBy: string
    createdAt?: Date | string
    overridesNew?: AttendanceEventOverrideCreateNestedManyWithoutNewEventInput
  }

  export type AttendanceEventUncheckedCreateWithoutOverridesOriginalInput = {
    id?: string
    employeeId: string
    date: Date | string
    eventType: $Enums.AttendanceEventType
    status?: $Enums.AttendanceStatus
    reason?: string | null
    createdBy: string
    createdAt?: Date | string
    overridesNew?: AttendanceEventOverrideUncheckedCreateNestedManyWithoutNewEventInput
  }

  export type AttendanceEventCreateOrConnectWithoutOverridesOriginalInput = {
    where: AttendanceEventWhereUniqueInput
    create: XOR<AttendanceEventCreateWithoutOverridesOriginalInput, AttendanceEventUncheckedCreateWithoutOverridesOriginalInput>
  }

  export type AttendanceEventCreateWithoutOverridesNewInput = {
    id?: string
    employeeId: string
    date: Date | string
    eventType: $Enums.AttendanceEventType
    status?: $Enums.AttendanceStatus
    reason?: string | null
    createdBy: string
    createdAt?: Date | string
    overridesOriginal?: AttendanceEventOverrideCreateNestedManyWithoutOriginalEventInput
  }

  export type AttendanceEventUncheckedCreateWithoutOverridesNewInput = {
    id?: string
    employeeId: string
    date: Date | string
    eventType: $Enums.AttendanceEventType
    status?: $Enums.AttendanceStatus
    reason?: string | null
    createdBy: string
    createdAt?: Date | string
    overridesOriginal?: AttendanceEventOverrideUncheckedCreateNestedManyWithoutOriginalEventInput
  }

  export type AttendanceEventCreateOrConnectWithoutOverridesNewInput = {
    where: AttendanceEventWhereUniqueInput
    create: XOR<AttendanceEventCreateWithoutOverridesNewInput, AttendanceEventUncheckedCreateWithoutOverridesNewInput>
  }

  export type AttendanceEventUpsertWithoutOverridesOriginalInput = {
    update: XOR<AttendanceEventUpdateWithoutOverridesOriginalInput, AttendanceEventUncheckedUpdateWithoutOverridesOriginalInput>
    create: XOR<AttendanceEventCreateWithoutOverridesOriginalInput, AttendanceEventUncheckedCreateWithoutOverridesOriginalInput>
    where?: AttendanceEventWhereInput
  }

  export type AttendanceEventUpdateToOneWithWhereWithoutOverridesOriginalInput = {
    where?: AttendanceEventWhereInput
    data: XOR<AttendanceEventUpdateWithoutOverridesOriginalInput, AttendanceEventUncheckedUpdateWithoutOverridesOriginalInput>
  }

  export type AttendanceEventUpdateWithoutOverridesOriginalInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumAttendanceEventTypeFieldUpdateOperationsInput | $Enums.AttendanceEventType
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overridesNew?: AttendanceEventOverrideUpdateManyWithoutNewEventNestedInput
  }

  export type AttendanceEventUncheckedUpdateWithoutOverridesOriginalInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumAttendanceEventTypeFieldUpdateOperationsInput | $Enums.AttendanceEventType
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overridesNew?: AttendanceEventOverrideUncheckedUpdateManyWithoutNewEventNestedInput
  }

  export type AttendanceEventUpsertWithoutOverridesNewInput = {
    update: XOR<AttendanceEventUpdateWithoutOverridesNewInput, AttendanceEventUncheckedUpdateWithoutOverridesNewInput>
    create: XOR<AttendanceEventCreateWithoutOverridesNewInput, AttendanceEventUncheckedCreateWithoutOverridesNewInput>
    where?: AttendanceEventWhereInput
  }

  export type AttendanceEventUpdateToOneWithWhereWithoutOverridesNewInput = {
    where?: AttendanceEventWhereInput
    data: XOR<AttendanceEventUpdateWithoutOverridesNewInput, AttendanceEventUncheckedUpdateWithoutOverridesNewInput>
  }

  export type AttendanceEventUpdateWithoutOverridesNewInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumAttendanceEventTypeFieldUpdateOperationsInput | $Enums.AttendanceEventType
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overridesOriginal?: AttendanceEventOverrideUpdateManyWithoutOriginalEventNestedInput
  }

  export type AttendanceEventUncheckedUpdateWithoutOverridesNewInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumAttendanceEventTypeFieldUpdateOperationsInput | $Enums.AttendanceEventType
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overridesOriginal?: AttendanceEventOverrideUncheckedUpdateManyWithoutOriginalEventNestedInput
  }

  export type AttendanceEventOverrideCreateManyOriginalEventInput = {
    id?: string
    action: $Enums.AttendanceOverrideAction
    newEventId?: string | null
    createdBy: string
    createdAt?: Date | string
  }

  export type AttendanceEventOverrideCreateManyNewEventInput = {
    id?: string
    originalEventId: string
    action: $Enums.AttendanceOverrideAction
    createdBy: string
    createdAt?: Date | string
  }

  export type AttendanceEventOverrideUpdateWithoutOriginalEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAttendanceOverrideActionFieldUpdateOperationsInput | $Enums.AttendanceOverrideAction
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newEvent?: AttendanceEventUpdateOneWithoutOverridesNewNestedInput
  }

  export type AttendanceEventOverrideUncheckedUpdateWithoutOriginalEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAttendanceOverrideActionFieldUpdateOperationsInput | $Enums.AttendanceOverrideAction
    newEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceEventOverrideUncheckedUpdateManyWithoutOriginalEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAttendanceOverrideActionFieldUpdateOperationsInput | $Enums.AttendanceOverrideAction
    newEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceEventOverrideUpdateWithoutNewEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAttendanceOverrideActionFieldUpdateOperationsInput | $Enums.AttendanceOverrideAction
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalEvent?: AttendanceEventUpdateOneRequiredWithoutOverridesOriginalNestedInput
  }

  export type AttendanceEventOverrideUncheckedUpdateWithoutNewEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalEventId?: StringFieldUpdateOperationsInput | string
    action?: EnumAttendanceOverrideActionFieldUpdateOperationsInput | $Enums.AttendanceOverrideAction
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceEventOverrideUncheckedUpdateManyWithoutNewEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalEventId?: StringFieldUpdateOperationsInput | string
    action?: EnumAttendanceOverrideActionFieldUpdateOperationsInput | $Enums.AttendanceOverrideAction
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}