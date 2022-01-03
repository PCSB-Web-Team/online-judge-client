import React, { useState } from "react";
import AceEditor from "react-ace";
import caret from "../assets/caret.png";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-textmate";
import "brace/mode/c_cpp";
import "brace/snippets/c_cpp";
import "brace/ext/language_tools";

const Editor = () => {
  const vals = {
    C: `#include <stdio.h>

int main(){
  // Your code here
  return 0;
}`,
    "C++": `#include <bits/stdc++.h>
using namespace std;

int main(){
  // Your code here
  return 0;
}`,
    Java: `public class Main{
    public static void main(String[] args){
      // your code here
    }
}`,
    Python: `# Your code here`,
  };

  const [values, setValues] = useState(
    localStorage.getItem("values") !== null
      ? JSON.parse(localStorage.getItem("values"))
      : vals
  );

  const [lang, setLang] = useState("C");

  const [isCustom, setIsCustom] = useState(false);
  // console.log(localStorage.getItem("values"));

  const modes = {
    C: "c_cpp",
    "C++": "c_cpp",
    Java: "java",
    Python: "python",
  };

 

 

  function onChange(newValue) {
    const newvals = { ...values };
    newvals[lang] = newValue;
    setValues(newvals);
    localStorage.setItem("values", JSON.stringify(newvals));
  }

  return (
    <div className="editor">
      <div className="editor-header">
        <select
          name="languages"
          onChange={(e) => {
            setLang(e.target.value);
          }}
        >
          <option value="C">C</option>
          <option value="C++">C++</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
        </select>
        <svg
          height="20"
          width="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          className="select-caret"
        >
          <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
        </svg>
      </div>

      <AceEditor
        mode={modes[lang]}
        theme="monokai"
        width="100%"
        onChange={onChange}
        className="editor-main"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        value={values[lang]}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 4,
        }}
      />
      <div className="editor-run">
        <div
          className="custom-cases"
          onClick={() => setIsCustom((prev) => !prev)}
        >
          <p>Run Custom Test Cases</p>
          <img
            src={caret}
            alt="caret"
            className={isCustom ? "caret-reverse" : ""}
          />
        </div>
        <div className="run-submit">
          <div className="run-btn">
            <p>Run</p>
            <img src={caret} alt="caret" />
          </div>
          <div className="submit-btn">
            <p>Submit</p>
          </div>
        </div>
      </div>
      {isCustom ? (
        <div className="custom-input">
          <textarea name="custom-input" />
        </div>
      ) : null}
    </div>
  );
};

export default Editor;
