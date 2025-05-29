# nestjs-claims-based-authorization

A claim is a name-value pair that represents what the subject can do, not what the subject is. In claims-based authorization instead of checking for specific roles, we compare permissions.
Every user would have a set of permissions assigned. Likewise, each resource/endpoint would define what permissions are required to access them.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
