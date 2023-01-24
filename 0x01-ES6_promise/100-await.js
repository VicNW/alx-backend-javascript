import { uploadPhoto, createUser } from './utils';

export async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return {
      photo,
      user,
    };
  } catch (e) {
    return {
      photo: null,
      user: null,
    };
  }
}
