// firebase/firestore funcs
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// uuid
import { v4 as uuidv4 } from 'uuid';


// store images in firebase
const storeUploadedImage = async (uploadedImage, userName, contactEmailAddress) => {
    return new Promise((resolve, reject) => {
        const storage = getStorage();

        const uploadedImageName = `${uuidv4()}-${uploadedImage.name}`;

        const storageRef = ref(storage, `listingsImages/${userName}-${contactEmailAddress}/${uploadedImageName}`);

        const uploadTask = uploadBytesResumable(storageRef, uploadedImage);

        uploadTask.on(
            'state_changed',
            null,
            reject,
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(resolve)
                    .catch(reject);
            }
        );
    })
}

export default storeUploadedImage