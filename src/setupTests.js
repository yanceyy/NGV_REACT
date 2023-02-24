// eslint-disable-next-line import/no-unresolved
import { beforeAll, afterEach, afterAll } from '@jest/globals';
import { setupServer } from 'msw/node';
import handlers from './mocks/handlers';

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
