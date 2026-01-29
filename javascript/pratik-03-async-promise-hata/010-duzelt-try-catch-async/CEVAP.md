`get()` senkron; sadece `fetch` zincirini başlatır, Promise döndürmez. `throw` then içinde, sonraki tick’te; try/catch o anda yok.

Düzeltme: `get` async yap, `await fetch` + `await` zinciri, `throw` async içinde. Çağıranda `await get()` + try/catch veya `get().catch(...)`.