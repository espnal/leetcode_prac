class TimeLimitedCache {
    constructor() {
        this.cache = {}; // Object to store key-value pairs and expiration times
    }

    set(key, value, duration) {
        const currentTime = Date.now();
        
        // Check if the key exists and is not expired
        if (this.cache[key] && this.cache[key].expiresAt > currentTime) {
            // Update the value and reset the expiration time
            this.cache[key] = {
                value,
                expiresAt: currentTime + duration
            };
            return true;
        } else {
            // Create a new key-value pair with expiration time
            this.cache[key] = {
                value,
                expiresAt: currentTime + duration
            };
            return false;
        }
    }

    get(key) {
        const currentTime = Date.now();
        if (this.cache[key] && this.cache[key].expiresAt > currentTime) {
            return this.cache[key].value; // Return the value if the key is unexpired
        } else {
            return -1; // Key does not exist or has expired
        }
    }

    count() {
        const currentTime = Date.now();
        // Count the unexpired keys
        let count = 0;
        for (const key in this.cache) {
            if (this.cache[key].expiresAt > currentTime) {
                count++;
            }
        }
        return count;
    }
}
