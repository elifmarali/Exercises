```ts
'use server';
import { revalidatePath } from 'next/cache';
export async function createPost(formData: FormData) {
  const title = formData.get('title'); const body = formData.get('body');
  console.log({ title, body });
  revalidatePath('/posts');
}
```