import { idArg, makeSchema, nonNull, objectType, queryType } from 'nexus';
import { join } from 'path';

const CalendarDay = objectType({
  name: 'CalendarDay',
  definition(t) {
    t.id('id');
    t.int('dayOfMonth');
  },
});

const Calendar = objectType({
  name: 'Calendar',
  definition(t) {
    t.id('id');
    t.nonNull.list.field('days', {
      type: 'CalendarDay',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.user
          .findUnique({
            where: { id: parent.userId },
          })
          .calendar()
          .days();
      },
    });
  },
});

const User = objectType({
  name: 'User',
  definition(t) {
    t.id('id');
    t.string('firstName');
    t.field('calendar', {
      type: 'Calendar',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.user
          .findUnique({
            where: {
              id: parent.id,
            },
            rejectOnNotFound: true,
          })
          .calendar();
      },
    });
  },
});

const Query = queryType({
  definition(t) {
    t.field('user', {
      type: 'User',
      args: {
        id: nonNull(idArg()),
      },
      resolve(_root, args, ctx) {
        return ctx.prisma.user.findUnique({
          where: {
            id: args.id,
          },
        });
      },
    });
  },
});

export const schema = makeSchema({
  types: [Query, User, Calendar, CalendarDay],
  shouldGenerateArtifacts: process.env.NODE_ENV === 'development',
  outputs: {
    schema: join(process.cwd(), 'schema.graphql'),
    typegen: join(process.cwd(), 'nexus.ts'),
  },
  sourceTypes: {
    modules: [{ module: '.prisma/client', alias: 'prisma' }],
    debug: process.env.NODE_ENV === 'development',
  },
  contextType: {
    module: join(process.cwd(), 'src', 'context.ts'),
    export: 'Context',
  },
  nonNullDefaults: {
    input: true,
    output: false,
  },
});
