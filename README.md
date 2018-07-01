# TypeScript React Apollo template

**Extremely alpha, expect everything to change!**

This template generates TypeScript typings for both React-Apollo client.

Currently a fork of graphql-codegen-typescript-template. Soon that will not be the case.
In the future this template will be used together with graphql-codegen-typescript-template.

## How to use
Coming soon...

## Generator Config

This generator supports custom config and output behavior. Use to following flags/environment variables to modify your output as you wish:

### `printTime` (or `CODEGEN_REACT_APOLLO`, default value: `false`)

Generate types for the React Apollo client.

### `printTime` (or `CODEGEN_PRINT_TIME`, default value: `false`)

Setting this to true will cause the generator to add the time of the generated output on top of the file.

### `avoidOptionals` (or `CODEGEN_AVOID_OPTIONALS`, default value: `false`)

This will cause the generator to avoid using TypeScript optionals (`?`), so the following definition: `type A { myField: String }` will output `myField: string | null` instead of `myField?: string | null`.

### `enumsAsTypes` (or `CODEGEN_ENUMS_AS_TYPES`, default value: `false`)

Will generate the declared enums as TypeScript `type` instead of `enums`. This is useful if you can't use `.ts` extension.

### `immutableTypes` (or `CODEGEN_IMMUTABLE_TYPES`, defualt value: `false`)

This will cause the codegen to output `readonly` properties and `ReadonlyArray`.

### `resolvers` (or `CODEGEN_RESOLVERS`, default value: `true`)

This will cause the codegen to output types for resolvers.
