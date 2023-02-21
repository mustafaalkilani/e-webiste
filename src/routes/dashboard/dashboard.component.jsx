import { useContext, useEffect } from 'react';
import { SignInContext } from '../../context/signin.context';
import { useNavigate } from 'react-router-dom';
import { uploadFormToFirestore, uploadImageAndGetDownloadUrl } from '../../utils/firestore.utils';

import './dashboard.styles.scss';

const DashBoardComp = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { homeTitle, homeImage, title, message, image, propImage, subTitle, subMessage} = event.target.elements;

        const fileOne = image.files[0];
        const fileTwo = propImage.files[0];
        const fileThree = homeImage.files[0]; 
        const imageUploadResponseUrl = await uploadImageAndGetDownloadUrl(fileOne);
        const imageTwoUploadResponseUrl = await uploadImageAndGetDownloadUrl(fileTwo);
        const imageThreeUploadResponseUrl = await uploadImageAndGetDownloadUrl(fileThree);
        await uploadFormToFirestore(homeTitle.value, imageThreeUploadResponseUrl, title.value, message.value, imageUploadResponseUrl, subTitle.value, subMessage.value, imageTwoUploadResponseUrl);
        title.value = '';
        message.value = '';
        image.value = '';
        propImage.value = '';
        subTitle.value = '';
        subMessage.value = '';
        homeTitle.value = '';
        homeImage.value = '';
    }
    return (
      <>
        <div className="dashboard-main-container">
          <h1 className="dashboard-heading">Upload to properties?</h1>
          <form onSubmit={handleSubmit}>
          <label htmlFor="property-title">Home Property title:</label>
            <input type="text" id="property-title" required name='homeTitle' />
            <label htmlFor="property-image">Choose photo for home page display:</label>
            <input type="file" name='homeImage' required accept="image/*"/>
            <label htmlFor="property-title">Property title:</label>
            <input type="text" id="property-title" required name='title' />
            <label htmlFor="property-explanation">Explanation of the property:</label>
            <textarea id="property-explanation" name='message' required/>
            <label htmlFor="property-image">Choose photo for home display:</label>
            <input type="file" id="property-image" name='image' required accept="image/*"/>
            <label htmlFor="property-title">Property sub title:</label>
            <input type="text" id="property-title" name='subTitle' />
            <label htmlFor="property-explanation">Explanation of the property:</label>
            <textarea id="property-explanation" name='subMessage'/>
            <label htmlFor="property-image">Choose photo for property page display:</label>
            <input type="file" name='propImage' accept="image/*"/>
            <button type="submit" className='upload-property'>Upload</button>
          </form>
        </div>
      </>
    );
  };

const DashBoard = () => {
    const {isSignedIn} = useContext(SignInContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSignedIn) {
            navigate('/');
        }
    }, [isSignedIn, navigate]);

    return (
        <div>
            {isSignedIn ? <DashBoardComp /> : null}
        </div>
    );
}

export default DashBoard;