import React, { useRef, useState } from "react";

function FileUpload() {
  // set up state to maintain the uploads
  const [media, setMedia] = useState([]);
  // set up a reference to a DOM node
  const fileEl = useRef(null);

  function ImageAdd() {
    // loop through the state array to figure out what to render
    const uploadedMedia = media.map((value, key) => {
      return <img key={key} src={URL.createObjectURL(value)} alt="" />;
    });
    return uploadedMedia;
  }

  function UploadContent(event) {
    event.preventDefault();
    const uploads = fileEl.current.files;
    const uploadItems = uploads;

    // create a new array and assign it to media don't mutate the old one
    const newArray = media.slice();
    newArray.push(uploadItems[0]);
    setMedia(newArray);
  }

  return (
    <React.Fragment>
      <form onChange={UploadContent} className="text-center p-3">
        <label
          className="btn btn-primary"
          type="button"
          value="Pick Files"
          style={{ color: "#000000" }}
        >
          <input className="visually-hidden" type="file" ref={fileEl} />
          Select Files
        </label>
      </form>

      <ImageAdd />
    </React.Fragment>
  );
}

export default FileUpload;
