import Spoiler from './components/spoiler/Spoiler';
import RangeInput from './components/input/RangeInput';
import LoginForm from './components/login/LoginForm';
import PasswordConfirm from './components/password/PasswordConfirm';
import Carousel from './components/carousel/Carousel';
import Dropzone from 'react-dropzone';
// import {useDropzone} from 'react-dropzone';
import { useState } from 'react';

function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h2>Upload an Image</h2>
      <button onClick={ () => setImage('')}>Clear</button>
      <Dropzone onDrop={handleDrop} accept="image/*" multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Drag 'n' drop an image here, or click to select one</p>
          </div>
        )}
      </Dropzone>
      {image && (
        <div className="uploaded-image">
          <h3>Uploaded Image:</h3>
          <img src={image} alt="Uploaded" />
        </div>
      )}
    </div>
  );
}

function App() {
  const images=["https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-1.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-2.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-3.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-4.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-5.jpg"]
  return (
    <div className="App">
      Задача 1
      <p>Задача 1 про Spoiler</p>
      <Spoiler
        header={<h1>+ Заголовок (при нажатии мышом прячем или отображаем какой-то контент)</h1>}
        open>
        Какой-то контент:
        <p>
          лорем іпсум тралівалі і тп.
        </p>  
      </Spoiler>

      {/* Задача 2 */}
      <p>Задача 2 про RangeInput</p>
      <RangeInput min={3} max={10}/>

      {/* Задача 3 */}
      <p>Задача 3 про LoginForm</p> 
      <LoginForm onLogin={console.log}/>

      {/* Задача 4 */}
      <p>Задача 4 про PasswordConfirm</p>
      <PasswordConfirm onConfirm={console.log}/>

      {/* Задача 5 */}
      <p>Задача 5 про Carousel</p>
      
      <Carousel images={images} 
      />

      <ImageUploader/>
    </div>
  );
}

export default App;
