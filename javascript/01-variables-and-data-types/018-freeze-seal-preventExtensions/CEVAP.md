## Farklar

| | preventExtensions | seal | freeze |
|-|-------------------|------|--------|
| Yeni property | ❌ | ❌ | ❌ |
| Silme | ✅ | ❌ | ❌ |
| Mevcut property değişiklik | ✅ | ✅ | ❌ |

`freeze` en katı; mevcut property’lerin value’ları da değiştirilemez (ama iç nested objeler mutasyona açık kalır — shallow).

**Deep freeze:** Recursive `Object.freeze` gerekir. Performans ve prototype zinciri ile oynanmamasına dikkat et.