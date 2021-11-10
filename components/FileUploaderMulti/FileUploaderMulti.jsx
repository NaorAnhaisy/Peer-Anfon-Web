import { useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import styles from "./FileUploaderMulti.module.css";
import 'filepond/dist/filepond.min.css';

// import the plugins
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateSize,
    FilePondPluginFileValidateType
);

export default function FileUploaderMulti(props) {

    const [files, setFiles] = useState(props.startFiles ? props.startFiles : []);

    return (
        <div>
            <FilePond
                files={files}
                onupdatefiles={(fileItems) => {
                    let fileObjectsArray = fileItems.map(fileItem => fileItem.file);
                    setFiles(fileObjectsArray);
                }}
                allowMultiple={true}
                maxFiles={5}
                server={{
                    load: (source, load, error, progress, abort, headers) => {
                        let myRequest = new Request(source);
                        fetch(myRequest).then(function (response) {
                            response.blob().then(function (myBlob) {
                                load(myBlob);
                            });
                        });
                    }
                }}
                instantUpload={false}
                allowFileTypeValidation={true}
                maxFileSize='5MB'
                labelMaxFileSizeExceeded='גודל הקובץ חורג מהמקסימום.'
                labelMaxFileSize='גודל קובץ מותר הוא {filesize}'
                acceptedFileTypes={['image/png', 'image/jpg', 'image/jpeg', 'application/pdf']}
                labelFileTypeNotAllowed='קובץ זה אינו בין הפורמטים המורשים.'
                labelIdle='גרור לכאן קבצים או <span class="filepond-label-action">חפש בתיקייה</span>
                    <br/>
                    <span class="filepond-max-file-size-label">
                        ניתן לעלות עד 5 קבצים.
                        מקסימום גודל קובץ: 5MB. פורמט קבצים מורשים: jpg | png | jpeg | pdf
                    </span>'
            />
        </div>
    )
}