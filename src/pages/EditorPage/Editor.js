import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import caret from "../../static/Assets/caret.png";
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
import { Requests } from "../../api/Index";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import CustomModal from "../../components/Modal/CustomModal";
import * as Scroll from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const Editor = (props) => {
  const userId = localStorage.getItem("userId");
  const { contestId } = useParams();
  const { questionId } = useParams();
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

  const languageIds = {
    Python: 71,
    C: 75,
    "C++": 76,
    Java: 62,
  };
  const [values, setValues] = useState(vals);
  const [lang, setLang] = useState("C++");
  const [isCustom, setIsCustom] = useState(false);
  const [customInput, setCustomInput] = useState("");
  const [defaultInput, setDefaultInput] = useState("");
  const [customOutput, setCustomOutput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const modes = {
    "C++": "c_cpp",
    C: "c_cpp",
    Java: "java",
    Python: "python",
  };

  function onChange(newValue) {
    const newvals = { ...values };
    newvals[questionId] = newValue;
    newvals[lang] = newValue;
    setValues(newvals);
    localStorage.setItem(questionId, JSON.stringify(newvals));
    localStorage.setItem("pcsb-code", JSON.stringify(newvals));
  }

  async function handleSubmit(props) {
    setIsOpen(true);
    const runData = {
      languageId: languageIds[lang],
      code: values[lang],
      userId: userId,
      questionId: questionId,
      contestId: contestId,
    };
    setIsLoading(true);
    Requests.submitCode(runData);
    setIsLoading(true);
    setTimeout(() => {
      navigate(`/${contestId}/submission/${userId}`);
    }, "2000");

    setIsLoading(false);
  }

  function handleRun(props) {
    const runData = {
      languageId: languageIds[lang],
      code: values[lang],
      stdin: customInput || defaultInput || "1",
    };
    setIsLoading(true);
    Requests.runCode(runData)
      .then((restoken) => {
        const interval1 = setInterval(() => {
          Requests.getRunDetails(restoken.data)
            .then((res) => {
              setCustomOutput(res.data.stdout);
              setError(res.data.compile_output);
              setDefaultInput(res.data.stdin);
              if (res.data.status.id > 2) {
                clearInterval(interval1);
                setIsLoading(false);
              }
            })
            .catch((error) => {
              setCustomOutput("some error occured please try later");
            });
        }, 3000);
      })
      .catch((error) => {
        setIsLoading(false);
        setCustomOutput("some error occured please try later");
      });
  }

  function reset() {
    localStorage.setItem("pcsb-code", JSON.stringify(vals));
    setValues(vals);
  }
  useEffect(() => {
    const savedCode = JSON.parse(localStorage.getItem(questionId));
    if (savedCode) {
      setValues(savedCode);
    }
  }, []);

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      >
        <CustomModal
          onClose={() => setIsOpen(false)}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </Modal>
      <div className="editor-header mb-4 ">
        <select
          className=" bg-none"
          name="languages"
          onChange={(e) => {
            setLang(e.target.value);
          }}
        >
          <option value="C++">C++</option>
          <option value="C">C</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
        </select>
        <svg
          height="20"
          width="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          className="select-caret bg-gradient-to-r from-slate-700 via-gray-800 to-gray-900"
        >
          <path
            className="bg-gradient-to-r from-slate-700 via-gray-800 to-gray-900"
            d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
          ></path>
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
        className="editor-main bg-black/40 text-sm"
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
          <a onClick={() => scroll.scrollTo(500)}>
            <button
              className={
                !isLoading
                  ? "run-btn text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  : "animate-pulse run-btn text-white bg-gradient-to-r from-green-700 via-green-800 to-green-900 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              }
              onClick={handleRun}
              disabled={isLoading}
            >
              {!isLoading ? <p>Run</p> : <p>Loading..</p>}
              <img src={caret} alt="caret" />
            </button>
          </a>
          <button
            className="submit-btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            type="submit"
            onClick={() => setIsOpen(true)}
          >
            <p>Submit</p>
          </button>
        </div>
      </div>

      {isCustom ? (
        <div className="p-4">
          <textarea
            className="w-full border-0 shadow p-4 text-black bg-gray-300"
            value={customInput}
            onChange={(e) => {
              setCustomInput(e.target.value);
            }}
          />
        </div>
      ) : null}

      <div className="p-4">
        Output :
        <div className="p-4">
          {isLoading ? (
            <div>
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="sm:h-[15vh] overflow-auto">
              <pre id="output">{customOutput ? customOutput : error}</pre>
            </div>
          )}
        </div>
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
