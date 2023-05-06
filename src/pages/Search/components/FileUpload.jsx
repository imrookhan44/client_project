import React, { useState } from 'react';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
    };

    const handleDelete = () => {
        setSelectedFile(null);
    };

    return (
        <div
            style={{
                width: '230px',
                minWidth: '26%',
                height: '180px',
                border: 'none',
                position: 'relative',
                overflow: 'hidden',
                margin: "2%"
            }}
        >
            {!selectedFile && (
                <>
                    <img
                        src={require(`../../../images/plus.png`)}
                        alt="Choose file"
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                    <input
                        type="file"
                        style={{
                            opacity: 0,
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            cursor: 'pointer',
                        }}
                        onChange={handleFileChange}
                    />
                </>
            )}
            {selectedFile && (
                <>
                    <img
                        src={selectedFile}
                        alt="Selected file"
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '40px',
                        }}
                    >
                        <button
                            style={{
                                border: 'none',
                                background: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                marginRight: '10px',
                            }}
                            onClick={handleDelete}
                        >
                            Delete
                        </button>

                    </div>
                </>
            )}
        </div>
    );
};

export default FileUpload;
