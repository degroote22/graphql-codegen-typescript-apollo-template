import * as index from './template.handlebars';
import * as reactApollo from './react-apollo.handlebars';
import * as type from './type.handlebars';
import * as schema from './schema.handlebars';
import * as resolver from './resolver.handlebars';
import * as documents from './documents.handlebars';
import * as selectionSet from './selection-set.handlebars';
import * as fragments from './fragments.handlebars';
import * as enumTemplate from './enum.handlebars';
import { EInputType, GeneratorConfig } from 'graphql-codegen-core';
import { getType } from './helpers/get-type';
import { getOptionals } from './helpers/get-optionals';
import { getFieldResolver } from './helpers/get-field-resolver';
import { getFieldResolverName } from './helpers/get-field-resolver-name';

export const config: GeneratorConfig = {
  inputType: EInputType.SINGLE_FILE,
  templates: {
    index,
    reactApollo,
    type,
    schema,
    resolver,
    documents,
    selectionSet,
    fragments,
    enum: enumTemplate
  },
  flattenTypes: true,
  primitives: {
    String: 'string',
    Int: 'number',
    Float: 'number',
    Boolean: 'boolean',
    ID: 'string'
  },
  customHelpers: {
    convertedType: getType,
    getFieldResolver,
    getFieldResolverName,
    getOptionals
  },
  outFile: 'types.ts'
};
