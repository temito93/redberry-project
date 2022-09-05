import { useContext, useEffect, useRef, useState } from "react";
import { convert } from "../../../helper/size converter/converter";
import uploadImg from "../../../assets/images/mobile/uploadImg.svg";
import done from "../../../assets/images/done.svg";
import { FormDataContext } from "../../context/form-data";
import photoError from "../../../assets/images/photo_error.svg";
import "./dragDrop.scss";

const DragDropFile = (props) => {
  const { formData, file, setFile } = useContext(FormDataContext);

  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const wrapperRef = useRef(null);
  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];

    if (newFile) {
      setFile(newFile);
    }
  };

  return (
    <>
      {file ? (
        <div className="photo_preview">
          <img src={preview} alt="img" />
        </div>
      ) : (
        <div
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          ref={wrapperRef}
          className={`upload_img_wrapper drop-file-input ${props.class}`}
        >
          {formData.secondPage && !file && (
            <img
              className="error-img-desktop"
              src={photoError}
              alt="error-img"
            />
          )}
          <div className="img__title">ჩააგდე ან ატვირთე ლეპტოპის ფოტო</div>
          <div className="upload_img__container drop-file-input__label">
            <span className="upload_desktop_span">ატვირთე </span>
            {formData.secondPage && !file && (
              <img
                className="img-error-mobile"
                src={uploadImg}
                alt="error-img"
              />
            )}

            {!formData.secondPage && !file && (
              <img className="img-mobile" src={uploadImg} alt="error-img" />
            )}

            <span className="upload_mobile_span">ლეპტოპის ფოტოს ატვირთვა</span>
            {formData.secondPage && !file && (
              <img
                className="error-img-mobile"
                src={photoError}
                alt="error-img"
              />
            )}
          </div>
          <input
            onChange={onFileDrop}
            type="file"
            id="image_upload"
            accept="image/*"
          />
        </div>
      )}
      {file && (
        <div className="drop-file-preview">
          <div className="mobile_img_info_container">
            <img src={done} alt="img" />
            <div>
              <p className="file-preview-name">{file.name},</p>
              <p className="file-preview-size">
                {convert(file.size).toLowerCase()}
              </p>
            </div>
          </div>

          <div className="new-upload-btn">
            <span>თავიდან ატვირთე</span>
            <input
              onChange={onFileDrop}
              type="file"
              id="image_upload"
              accept="image/*"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DragDropFile;
