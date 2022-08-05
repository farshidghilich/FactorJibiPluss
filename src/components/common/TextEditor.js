import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TextEditor = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    return (
        <Editor
            editorState={editorState}
            // wrapperClassName="demo-wrapper"
            // editorClassName="demo-editor"
            toolbarClassName="black-editor"
            wrapperClassName="wrapper-text-editor"
            editorClassName="text-editor-black"
            onEditorStateChange={(value) => setEditorState(value)}
        />
    )
}

export default TextEditor;