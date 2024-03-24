import { FaGithubSquare, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="mt-12 w-max-[800px] border-t border-gray-500 text-center"
      id="company"
    >
      <p className="my-5 text-gray-500">
        All Right Reserverd <br /> sayedhossainsifat100@gmail.com
      </p>
      <div className="inline-flex text-gray-500 gap-4 text-3xl">
        <a href="https://github.com/codeCampWithSifat" target="_blank">
          <FaGithubSquare />
        </a>
        <a
          href="https://www.facebook.com/sayedhossain.sifat.7/"
          target="_blank"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default Footer;
