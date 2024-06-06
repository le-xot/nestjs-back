import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/app/graphql.ts'),
        outputAs: 'class',
        emitTypenameField: true,
      },
      context: ({ req, res }) => ({ req, res }),
    }),
  ],
})
export class GqlModule {}
