import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import caret from "../../assets/caret.png";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-textmate";
import "brace/mode/c_cpp";
import "brace/snippets/c_cpp";
import "brace/ext/language_tools";
import { connect } from "react-redux";
import { contest } from "../../store/actions";
import { Requests } from "../../utils/Index";

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

  const [values, setValues] = useState(vals);

  const languageIds = {
    Python: 71,
    C: 75,
    "C++": 76,
    Java: 62,
  };
  const [lang, setLang] = useState("C");
  const [isCustom, setIsCustom] = useState(false);
  const [customInput, setCustomInput] = useState("");
  const [customOutput, setCustomOutput] = useState("");
  const modes = {
    C: "c_cpp",
    "C++": "c_cpp",
    Java: "java",
    Python: "python",
  };

  useEffect(() => {
    const savedCode = JSON.parse(localStorage.getItem("pcsb-code"));
    if (savedCode) {
      setValues(savedCode);
    }
  }, []);

  function onChange(newValue) {
    const newvals = { ...values };
    newvals[lang] = newValue;
    setValues(newvals);
    localStorage.setItem("pcsb-code", JSON.stringify(newvals));
  }

  function handleSubmit(props) {}

  function handleRun(props) {
    const runData = {
      languageId: languageIds[lang],
      code: values[lang],
      stdin: customInput,
    };
    Requests.runCode(runData)
      .then((res) => {
        console.log(res.data);
        setCustomOutput(res.data);
      })
      .catch((error) => {});
  }

  function reset() {
    localStorage.setItem("pcsb-code", JSON.stringify(vals));
    setValues(vals);
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
        <button
          className="submit-btn text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={reset}
        >
          Reset
        </button>
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
          <button
            className="run-btn text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={handleRun}
          >
            <p>Run</p>
            <img src={caret} alt="caret" />
          </button>
          <button
            className="submit-btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            type="submit"
            onClick={handleSubmit}
          >
            <p>Submit</p>
          </button>
        </div>
      </div>
      {isCustom ? (
        <div className="p-4">
          <textarea
            className="w-full border-0 shadow p-4"
            value={customInput}
            onChange={(e) => {
              setCustomInput(e.target.value);
            }}
          />
        </div>
      ) : null}
      <div className="p-4">
        Output : 
        <div className="p-4"> <p><pre>{customOutput}</pre></p> </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated,
  };
}

function mapActionToProps(dispatch) {
  return {
    submitCode: (userSubmission) => dispatch(contest(userSubmission)),
    runCode: (userSubmission) => dispatch(contest(userSubmission)),
  };
}

export default connect(mapStateToProps, mapActionToProps)(Editor);
