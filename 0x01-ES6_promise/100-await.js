import { uploadPhoto, createUser } from './utils';

export default const asyncUploadUser = async () => {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
};
