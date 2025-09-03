import { FC } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer: FC = () => (
  <footer className="row-start-3 flex gap-2 flex-wrap items-center justify-center">
    <a
      className="flex items-center text-gray-500 hover:text-gray-700 transition-colors gap-2"
      href="https://alexdevero.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faLink} size="lg" />
    </a>
    <a
      className="flex items-center text-gray-500 hover:text-gray-700 transition-colors gap-2"
      href="https://alexdevero.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} size="lg" />
    </a>
    <a
      className="flex items-center text-gray-500 hover:text-gray-700 transition-colors gap-2"
      href="https://github.com/alexdevero"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faGithub} size="lg" />
    </a>
  </footer>
);
