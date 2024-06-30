import React, { useState } from 'react';
import axios from 'axios';
import { AppContext } from '../../connection_to_blockchain/Abiaddress';
import { useDropzone } from 'react-dropzone';
import { useContext } from 'react';
import CryptoJS from 'crypto-js';

function NestedUpload() {
  const { MyFinalweb3, MyFinalContract, MyCurrAccount } = useContext(AppContext);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState(null);
  const [error, setError] = useState(null);
  const [saltValue, setSaltValue] = useState('');

  const onDrop = async (acceptedFiles) => {
    const newFile = acceptedFiles[0];
    setFile(newFile);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*', 
  });

  const yourEncryptionFunction = async (file, salt) => {
    // Read the file content as a binary string
    const reader = new FileReader();
    const fileContent = await new Promise((resolve, reject) => {
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsBinaryString(file);
    });


    const encrypted = CryptoJS.AES.encrypt(fileContent, salt).toString();

    return encrypted;
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file.');
      return;
    }

    if (!saltValue) {
      setError('Please enter a salt value.');
      return;
    }

    setUploading(true);

    try {
      const encryptedString = await yourEncryptionFunction(file, saltValue);

      const formData = new FormData();
      formData.append('file', new Blob([encryptedString], { type: 'text/plain' }));

      const response = await axios.post(
        'https://api.pinata.cloud/pinning/pinFileToIPFS',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            pinata_api_key: 'd030d00a50cacda1bf16',
            

            pinata_secret_api_key: 'be207924ae528cab2232586b959dab8ca1afc41a860f077af369be9c265588a8',
            

          },
        }
      );
//       cbithack2
//       API Key: d030d00a50cacda1bf16
//  API Secret: be207924ae528cab2232586b959dab8ca1afc41a860f077af369be9c265588a8
//  JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiNGFkYjU5Mi1hMTQ5LTQyZjMtOTQ0Yi1jZjUzMzg0YTIwM2EiLCJlbWFpbCI6InNpZGRhcHVyYW1zYWltYW5lZXN3YXJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImQwMzBkMDBhNTBjYWNkYTFiZjE2Iiwic2NvcGVkS2V5U2VjcmV0IjoiYmUyMDc5MjRhZTUyOGNhYjIyMzI1ODZiOTU5ZGFiOGNhMWFmYzQxYTg2MGYwNzdhZjM2OWJlOWMyNjU1ODhhOCIsImlhdCI6MTcxNzgyODIxN30.vab43tq38w197_aWcNyZc5tyOzpWMnaaOR-Y0cBTsUs

      // s
      // e542066a59a3f89a8c77c4cea7832250c686b58466a6f71d02c8af15aa143347
      // d84df280f768e4b0f769
// cbithack1
      // API Key: f606be689209f6bf11c4
      // API Secret: ff7352fdbaa9a421884bebe0e40f0708e72f4bd2c0891c256c1f07591ad8e525
      // JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiNGFkYjU5Mi1hMTQ5LTQyZjMtOTQ0Yi1jZjUzMzg0YTIwM2EiLCJlbWFpbCI6InNpZGRhcHVyYW1zYWltYW5lZXN3YXJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImY2MDZiZTY4OTIwOWY2YmYxMWM0Iiwic2NvcGVkS2V5U2VjcmV0IjoiZmY3MzUyZmRiYWE5YTQyMTg4NGJlYmUwZTQwZjA3MDhlNzJmNGJkMmMwODkxYzI1NmMxZjA3NTkxYWQ4ZTUyNSIsImlhdCI6MTcxNjQ4ODMyNH0.9Mt3TujuWBwhBX9cErle8sRrS8vnIZMBe_hs_msLeoI
      setUploadResult(response.data);

      // Interaction with the blockchain
      try {
        const username = sessionStorage.getItem('verifieduseridsession');
        const currentDate = new Date();
        const formattedDateTime = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

        MyFinalweb3.eth.getAccounts().then(function (accounts) {
          const acc = accounts[0];
          return MyFinalContract.methods.addDataHash(username, response.data.IpfsHash, formattedDateTime, file.name)
            .send({ from: acc });
        }).then(async function (tx) {
          console.log(tx);
          console.log('REQUEST SENT SUCCESSFULLY');

          //start
          if ('speechSynthesis' in window){
            const utterance = new SpeechSynthesisUtterance();
            utterance.text = `Transaction successful. Medical report uploaded.`;
            speechSynthesis.speak(utterance);
            console.log("safnuwkbesf");
          }
          else{
            console.log("not there");
          }
          console.log("end");

        }).catch(function (tx) {
          console.log(tx);
        });
      } catch (error) {
        console.error('Error:', error);
      }

      setError(null);
    } catch (error) {
      setError('Error uploading file.');
      console.error('Error uploading file:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row mt-5 justify-content-center">
        <div className="col-md-6 mt-4">
          <div className="upload-container p-4 m-4 mx-auto">
            <div {...getRootProps()} className="dropzone" style={{ backgroundColor: '#F5F5F5', border: '2px dashed #CCCCCC', borderRadius: '8px' }}>
              <input {...getInputProps()} />
              <div className="dropzone-content">
                <p className="text-center mt-4">Drag and drop an image here</p>
                <p className='text-center'> or</p>
                <button className="btn btn-secondary mx-auto d-block m-4" onClick={() => document.querySelector('input').click()}>
                  Choose Image
                </button>
              </div>
            </div>
            {file && <div className="form-group mt-3">
              <label htmlFor="saltValue">Enter Key:</label>
              <input type="text" className="form-control" id="saltValue" value={saltValue} onChange={(e) => setSaltValue(e.target.value)} />
            </div>}
            {file && (
              <div className=" text-center mt-3">
                <h5>Selected Image:</h5>
                <p>{file.name}</p>
                <button className="btn btn-primary mt-3" onClick={handleUpload} disabled={uploading}>
                  {uploading ? 'Uploading...' : 'Upload'}
                </button>
              </div>
            )}
            {error && <div className="mt-3 alert alert-danger">{error}</div>}
            {uploadResult && (
              <div className="mt-3">
                <h3>Upload Successful!</h3>
                <p>IPFS Hash: {uploadResult.IpfsHash}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NestedUpload;
