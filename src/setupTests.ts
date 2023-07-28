import { setupServer } from 'msw/node';
import handlers from './mocks/handlers';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
