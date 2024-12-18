import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState, createRef } from "react";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";
const Edit = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = createRef();
  // console.log(params.get("url"));
  const addText = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        <div ref={memeRef} className="mt-5 mb-5">
          <img src={params.get("url")} width="300px" className="mb-1" />
          {Array(count)
            .fill(0)
            .map((e) => (
              <Text />
            ))}
        </div>
        <Button onClick={addText}>Add Text</Button>
        <Button
          variant="success"
          onClick={(e) => {
            exportComponentAsJPEG(memeRef);
          }}
        >
          save
        </Button>
      </div>
    </>
  );
};

export default Edit;

// ! Hum text ko dragagble banane ke liye ek library ka use kiya hai jiska name "react-draggable"
// ! Hum img ko jpg banane mein convert krne ke ek library ka use kiya hai jiska name "react-componet-export-jpg"
