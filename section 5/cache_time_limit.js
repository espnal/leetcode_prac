class TimeLimitedCache {
    constructor() {
      this.cache = {}; // Almacena los valores
      this.expiration = {}; // Almacena los tiempos de expiración
    }

    set(key, value, duration) {
    const currentTime = Date.now();
    const expiresAt = currentTime + duration;

      // Si el tiempo de expiración ya pasó, simplemente actualiza los valores
    if (this.expiration[key] && this.expiration[key] <= currentTime) {
        this.cache[key] = value;
        this.expiration[key] = expiresAt;
        return false;
}
  
      // Establece el valor y el tiempo de expiración
      this.cache[key] = value;
      this.expiration[key] = expiresAt;
      return true;
    }
  
    get(key) {
      const currentTime = Date.now();
      if (this.expiration[key] && this.expiration[key] > currentTime) {
        return this.cache[key]; // Devuelve el valor si la clave no ha expirado
      } else {
        // Elimina la clave y su tiempo de expiración
        delete this.cache[key];
        delete this.expiration[key];
        return -1;
      }
    }
  
    count() {
      const currentTime = Date.now();
      let count = 0;
      for (const key in this.expiration) {
        if (this.expiration[key] > currentTime) {
          count++;
        } else {
          // Si el tiempo de expiración pasó, elimina la clave y su tiempo de expiración
          delete this.cache[key];
          delete this.expiration[key];
        }
      }
      return count;
    }
  }
  
  // Ejemplo de uso:
  const cache = new TimeLimitedCache();
  cache.set(1, 'Value 1', 5000); // Expira en 5 segundos
  cache.set(2, 'Value 2', 10000); // Expira en 10 segundos
  console.log(cache.get(1)); // 'Value 1' (sin expirar)
  console.log(cache.count()); // 2 (dos claves sin expirar)
  