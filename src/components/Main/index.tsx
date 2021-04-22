import React, { useEffect } from "react";
import { octokit } from "../../apis/octokit";
import LoginMessage from "./components/LoginMessage";

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isLogin: boolean;
}

const MainContainer = ({ setOpenModal, isLogin }: Props) => {
  // const [contents, setContents] = useState(null);
  useEffect(() => {
    const getData = async () => {
      // const res = await octokit.request("GET /repos/{owner}/{repo}", {
      //   owner: "hyunjaesung",
      //   repo: "algorithm",
      //   // path: "",
      // });
      // // const res = await octokit.request(
      // //   "GET /repos/{owner}/{repo}/contents/{path}",
      // //   {
      // //     owner: "octocat",
      // //     repo: "hello-world",
      // //     path: "",
      // //   }
      // // );
      // const res = await octokit.request("GET /user/repos");
      // const res = await octokit.request(
      //   "PUT /repos/{owner}/{repo}/contents/{path}",
      //   {
      //     owner: "hyunjaesung",
      //     repo: "algorithm",
      //     path: "test",
      //     message: "testmessage",
      //     content: example,
      //   }
      // );
      // console.log(res);
    };
    getData();
  }, []);
  return (
    <div className='w-full h-full'>
      {isLogin ? (
        <div>hihihihi</div>
      ) : (
        <LoginMessage setOpenModal={setOpenModal} />
      )}
    </div>
  );
};

export default MainContainer;
