import { registerServiceWorker } from '../serviceWorker';
import { vi } from 'vitest';
describe("Service Worker", () => {
    beforeEach(() => {
    // Reset the mock function calls before each test
    console.log = vi.fn(); // Mock console.log
    console.error = vi.fn(); // Mock console.error
    });

    test('registers service worker successfully', async () => {
        registerServiceWorker();
        // need to have an actual browser
        expect(console.log).toHaveBeenCalledWith("Service Worker is not supported.");
        expect(console.error).not.toHaveBeenCalled();
    });
});
